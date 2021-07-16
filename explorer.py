"""
TLD is used as a misnomer here.
What it's trying to refer to is things like, "https://www.ebay.com/" 
"""

import bs4
import requests
import re
import time

import threading
import queue



def expleore(domain, depth):
    if depth <= 0:
        return {domain}

    urls = set()

    page = requests.get(domain)
    soup = bs4.BeautifulSoup(page.content, 'html.parser')
    links = soup.find_all('a')

    queue_ = queue.Queue()

    for link in links:
        # spwan thread for this:
        pass




def explore(domain, depth, tld):
    """
    Provides a list of all urls as such:
        - provided url
        - all *relatively* linked urls below this, upto the given depth

    Args:
        - domain: The url from where to start the depth-wise search for urls
        - depth: Depth upto which to explore

    Returns:
        - result (set): A set of the urls as described 
    """
    sitename = tld.split('/')[2].split('.')[-2] # Get sitename from TLD, example: "https://www.ebay.com/" --> "ebay"

    # Stop and return the url
    if depth <=0:
        return {domain}
    
    # Request page, count urls, ask for their results (recurse)
    # elif depth >0:

    result = set()

    page = requests.get(domain)
    soup = bs4.BeautifulSoup(page.content, 'html.parser')
    links = soup.find_all('a')

    # Absolute-ise the relative links
    # with concurrent.futures.ThreadPoolExecutor() as executor:
    for link in links:



        try:
            
            href = link['href']
            sitename_presence = sitename in href.split('/')[2] # Checkk if sitename in  href url
            
            # Check if relative link
            if re.match(r'^/.+', href): # Starts with '/'
                href = href[1:]
                
                href = tld + href # Absolute-ise
                result_ = explore(href, depth-1, tld)
                result.update(result_)  

            
            elif sitename_presence:
                href = href
                result_ = explore(href, depth-1, tld)
                result.update(result_)  

        except:
            pass

    # Add current url
    result.update({domain})

    return result



que = queue.Queue()


def thread_work(domain, depth):

    filename = domain.split('/')[2]

    # with open(f"explorer/{filename}","w+") as f:
    #     for i in explore(domain, 2, domain):
    #         f.write(i)
    #         f.write('\n')
    #         # print(i)

    for i in explore(domain, depth, domain):
        que.put(i)
        # print(i)
    print(domain,"\t done")

def reset_queue():
    que.queue.clear()


def search(domains):
    start = time.time()
    thread_pool = []
    for domain in domains:
        t = threading.Thread(target=thread_work, args=(domain, 1))
        t.start()
        thread_pool.append(t)

    for t in thread_pool:
        t.join()

    print(time.time() - start)
    return que

def pour_queue(que_, printing = True):

    contents = []

    item = que_.get()
    while item:
        if printing:
            print(item)
    
        contents.append(item)
    
        try:
            item = que_.get(timeout=1)
        except:
            item = None

    return contents

# start = time.time()
# domain = "https://www.target.com/"

# domains=[
#     "https://fingerprintjs.com/",
#     'https://www.ebay.com/',
#     'https://www.target.com/',
#     'https://www.usbank.com/',
#     'https://www.booking.com/',
#     'https://www.tdameritrade.com/home.html',
#     'https://www.hsn.com/',
#     'https://www.agoda.com/en-gb/',
#     'https://www.bhphotovideo.com/',
#     'https://www.coinbase.com/',
#     'https://www.neimanmarcus.com/',
#     'https://www.rockstargames.com/',
#     'https://www.checkout.com/',
#     'https://www.westernunion.com/',
#     'https://www.yahoo.com/'
# ]




# q = search(domains)
# pour_queue(q)
