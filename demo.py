from pathlib import Path

from custom_command import LinkCountingCommand
from openwpm.command_sequence import CommandSequence
from openwpm.commands.browser_commands import GetCommand
from openwpm.config import BrowserParams, ManagerParams
from openwpm.storage.sql_provider import SQLiteStorageProvider
from openwpm.task_manager import TaskManager

from explorer import explore, pour_queue, search

# The list of sites that we wish to crawl
NUM_BROWSERS = 5
sites = [
    "https://fingerprintjs.com/",
]
# Home pages
# sites=[
#     "https://fingerprintjs.com/",
#     'https://www.ebay.com/',
#     'https://www.target.com/',
#     'https://www.usbank.com/',
#     'https://www.booking.com/',
#     'https://www.tdameritrade.com/home.html',
#     'https://www.hsn.com/',
#     'https://www.agoda.com/',
#     'https://www.bhphotovideo.com/',
#     'https://www.coinbase.com/',
#     'https://www.neimanmarcus.com/',
#     'https://www.rockstargames.com/',
#     'https://www.checkout.com/',
#     'https://www.westernunion.com/',
#     'https://www.yahoo.com/'
# ]

# Internal (login) pages
# sites = [
#     "https://signin.ebay.com/ws/eBayISAPI.dll?SignIn",
#     "https://login.target.com/gsp/static/v1/login/",
#     "https://onlinebanking.usbank.com/Auth/Login?redirect=internet_banking_logon",
#     "https://account.booking.com/sign-in?",
#     "https://auth.tdameritrade.com/auth?response_type=code&client_id=MOBI%40AMER.OAUTHAP&redirect_uri=https%3A%2F%2Fsecure.tdameritrade.com%2FauthCafe",
#     "https://www.hsn.com/signin",
#     "https://www.agoda.com/en-gb/account/signin.html?",
#     "https://www.bhphotovideo.com/bnh/controller/home?O=inc-SearchBar.jsp&A=getpage&Q=Login.jsp&isLoginOnly=Y",
#     "https://www.coinbase.com/signin",
#     "https://www.neimanmarcus.com/",
#     "https://signin.rockstargames.com/signin/user-form?cid=rsg",
#     "https://hub.checkout.com/login",
#     "https://www.westernunion.com/us/en/web/user/login", 
#     "https://login.yahoo.com/"

# ]

# q = search(domains)
# sites = pour_queue(q, printing=False)
# print(domains)
# exit()


# Loads the default ManagerParams
# and NUM_BROWSERS copies of the default BrowserParams

manager_params = ManagerParams(num_browsers=NUM_BROWSERS)
browser_params = [BrowserParams(display_mode="headless") for _ in range(NUM_BROWSERS)]

# Update browser configuration (use this for per-browser settings)
for browser_param in browser_params:

    # Record HTTP Requests and Responses
    browser_param.http_instrument = True

    # Record cookie changes
    browser_param.cookie_instrument = True

    # Record Navigations
    browser_param.navigation_instrument = True

    # Record JS Web API calls
    browser_param.js_instrument = True

    # Record the callstack of all WebRequests made
    browser_param.callstack_instrument = True

    # Record DNS resolution
    # browser_param.dns_instrument = True

# Update TaskManager configuration (use this for crawl-wide settings)
manager_params.data_directory = Path("./datadir/")
manager_params.log_path = Path("./datadir/openwpm.log")

# memory_watchdog and process_watchdog are useful for large scale cloud crawls.
# Please refer to docs/Configuration.md#platform-configuration-options for more information
# manager_params.memory_watchdog = True
# manager_params.process_watchdog = True


# Commands time out by default after 60 seconds
with TaskManager(
    manager_params,
    browser_params,
    SQLiteStorageProvider(Path("./datadir/crawl-data.sqlite")),
    None,
) as manager:
    # Visits the sites
    for index, site in enumerate(sites):

        def callback(success: bool, val: str = site) -> None:
            print(
                f"CommandSequence for {val} ran {'successfully' if success else 'unsuccessfully'}"
            )

        # Parallelize sites over all number of browsers set above.
        command_sequence = CommandSequence(
            site,
            site_rank=index,
            callback=callback,
        )

        # Start by visiting the page
        command_sequence.append_command(GetCommand(url=site, sleep=3), timeout=60)
        # Have a look at custom_command.py to see how to implement your own command
        command_sequence.append_command(LinkCountingCommand())

        # Run commands across all browsers (simple parallelization)
        manager.execute_command_sequence(command_sequence)
