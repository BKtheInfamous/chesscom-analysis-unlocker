from flask import Flask, request, jsonify
from flask_cors import CORS

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

import time
import logging
import os

#logging.basicConfig(filename='/home/user/logs.log', level=logging.INFO)

app = Flask(__name__)
CORS(app)  

def open_url_in_selenium(url):
    service = Service('/usr/local/bin/chromedriver')
    service.start()

    #chrome_log_path = os.path.join(os.path.dirname(__file__), 'chromelogs.log')
    #logging.basicConfig(filename=chrome_log_path, level=logging.INFO)

    options = webdriver.ChromeOptions()
    options.add_argument('--no-sandbox')  
    options.add_argument('--disable-dev-shm-usage')  
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--disable-extensions')
    options.add_argument('--remote-debugging-port=9222') 
    options.add_argument('--log-level=DEBUG')
    options.add_argument('--enable-logging')
    options.add_argument('--disable-software-rasterizer')
    options.binary_location = '/home/user/chrome-linux64/chrome'  

    #log_file_path = '/home/username/chrome_logs.log'
    #options.add_argument('--log-path=' + log_file_path)
    driver = webdriver.Chrome(options=options)

    logging.info('Chrome logs:')
    
    """try:
        driver.get(url)
    except Exception as e:
        logging.error(f'Exception occurred: {str(e)}')"""


    driver.get(url)

    #driver.quit()
    #service.stop()


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

    logging.info(f'Received POST request with URL: {url}')

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

sudo nano /etc/systemd/system/analysis-uptime-gunicorn.service

# start service
sudo systemctl start analysis-uptime-gunicorn

# verify status
sudo systemctl status analysis-uptime-gunicorn

# enable to start on boot
sudo systemctl enable analysis-uptime-gunicorn

# view logs
sudo journalctl -u analysis-unlocker-gunicorn -f

# stop and restart service
sudo systemctl stop analysis-uptime-gunicorn
sudo systemctl restart analysis-uptime-gunicorn

#NGINX NEW
sudo nano /etc/nginx/sites-available/analysis-uptime

#GUNICORN
sudo nano /etc/systemd/system/analysis-uptime-gunicorn.service

"""