from flask import Flask, request, jsonify
from flask_cors import CORS

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

import time


app = Flask(__name__)
CORS(app)  

def open_url_in_selenium(url):
    service = Service('/usr/local/bin/chromedriver')
    service.start()
    options = webdriver.ChromeOptions()
    #options.add_argument('--no-sandbox')  
    #options.add_argument('--disable-dev-shm-usage')  
    #options.add_argument('--headless')
    #options.add_argument('--disable-gpu')
    #ptions.add_argument('--disable-extensions')
    #options.add_argument('--remote-debugging-port=9222')  
    options.binary_location = '/usr/bin/google-chrome' 
    driver = webdriver.Chrome(options=options)
    driver.get(url)

    return driver

def login_to_site(driver, username, password):
    time.sleep(1)
    try:
        username_field = driver.find_element(By.ID, 'username')
        password_field = driver.find_element(By.ID, 'password')
    except NoSuchElementException:
        print("Login elements not found!")
        return

    username_field.send_keys(username)
    password_field.send_keys(password)
    password_field.send_keys(Keys.RETURN)
    #time.sleep(5)  

@app.route('/', methods=['POST'])
def receive_url():
    #INJECTION FROM EXT
    data = request.get_json()
    url = data.get('url')
    #end of injection

    username = "B3N_K"
    password = "#Ben****"

    driver = open_url_in_selenium("https://www.chess.com/login")
    login_to_site(driver, username, password)

    time.sleep(1)
    driver.get(url)
    time.sleep(4)
    driver.close()
    return "Received"

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5002) 


"""
@app.route('/', methods=['POST'])
def receive_url():
    #INJECTION FROM EXT
    data = request.get_json()
    url = data.get('url')
    #end of injection
    username = "*"
    password = "*"
    driver = open_url_in_selenium("https://www.chess.com/login")
    login_to_site(driver, username, password)
    time.sleep(1)
    driver.get(url)
    time.sleep(3)
    driver.get("https://www.chess.com/")
    time.sleep(1)
    
    driver.close()
    return "Received"
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002) """
