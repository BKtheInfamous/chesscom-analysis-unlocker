from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_experimental_option('detach', True)
driver = webdriver.Chrome(options=options)

driver.get("https://google.com/")

"""
# alternatively with auto-close...

import os

os.environ['PATH'] += r"/Users/bk/CS-misc/seleniumDrivers/C2/chromedriver"
driver = webdriver.Chrome()
driver.get("https://google.com/")

time.sleep(5)

"""