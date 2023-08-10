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
    username_field = driver.find_element(By.ID, 'username')
    password_field = driver.find_element(By.ID, 'password')

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

    username = "*"
    password = "*"

    driver = open_url_in_selenium("https://www.chess.com/login")
    login_to_site(driver, username, password)

    time.sleep(1)
    driver.get(url)
    time.sleep(4)
    driver.close()
    return "Received"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002) 


"""

systemd commands:

sudo nano /etc/systemd/system/analysis-unlocker-gunicorn.service

# start service
sudo systemctl start analysis-unlocker-gunicorn

# verify status
sudo systemctl status analysis-unlocker-gunicorn

# enable to start on boot
sudo systemctl enable analysis-unlocker-gunicorn

# view logs
sudo journalctl -u analysis-unlocker-gunicorn -f

# stop and restart service
sudo systemctl stop analysis-unlocker-gunicorn
sudo systemctl restart analysis-unlocker-gunicorn



"""