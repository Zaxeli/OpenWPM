""" This file aims to demonstrate how to write custom commands in OpenWPM

Steps to have a custom command run as part of a CommandSequence

1. Create a class that derives from BaseCommand
2. Implement the execute method
3. Append it to the CommandSequence
4. Execute the CommandSequence

"""
import logging
import time

from selenium.webdriver import Firefox
from selenium.webdriver.common.by import By

from openwpm.commands.types import BaseCommand
from openwpm.config import BrowserParams, ManagerParams
from openwpm.socket_interface import ClientSocket


class LinkCountingCommand(BaseCommand):
    """This command logs how many links it found on any given page"""

    def __init__(self) -> None:
        self.logger = logging.getLogger("openwpm")

    # While this is not strictly necessary, we use the repr of a command for logging
    # So not having a proper repr will make your logs a lot less useful
    def __repr__(self) -> str:
        return "LinkCountingCommand"

    # Have a look at openwpm.commands.types.BaseCommand.execute to see
    # an explanation of each parameter
    def execute(
        self,
        webdriver: Firefox,
        browser_params: BrowserParams,
        manager_params: ManagerParams,
        extension_socket: ClientSocket,
    ) -> None:
        current_url = webdriver.current_url
        
        webdriver.save_screenshot("datadir/screenshots/{}.png".format(time.time()+21312321))
        self.logger.info("SS at %d", time.time())
        
        # scripts = webdriver.find_elements(By.TAG_NAME, "script")
        # links = webdriver.find_elements(By.TAG_NAME, "a")
        # webdriver.find

        # self.logger.info(scripts['src'])

        # script_count = len(scripts)
        # link_count = len(links)
        
        # print("_---> lin", type(links[0].get_attribute('href')))
        # self.logger.info("There are %d links on %s", link_count, current_url)
        # self.logger.info("There are %d scripts on %s", script_count, current_url)
        


