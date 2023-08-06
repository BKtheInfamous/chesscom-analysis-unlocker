from selenium import webdriver
import json
import time

time.sleep(3)

# Function to handle messages received from the extension
def on_message(message, sender, send_response):
    data = json.loads(message)
    id_to_return = data.get('idToReturn')
    url_to_return = data.get('urlToReturn')

    driver = webdriver.Chrome()
    driver.get(url_to_return)

# Connect to extension
chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option('detach', True)
chrome_options.add_argument("chrome-extension://ghpmobmlgmlldmpmcanmkciheneeljbl/")  # Replace with your extension ID
driver = webdriver.Chrome(chrome_options=chrome_options)

port = driver.execute_cdp_cmd('connect', {'name': 'pythonPort'})
port.on_message = on_message

# Selenium script here

# Don't forget to close the connection when done
time.sleep(10)
driver.close()
