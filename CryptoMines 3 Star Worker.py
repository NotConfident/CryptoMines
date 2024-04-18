from web3 import Web3
import requests
import time
from dotenv import load_dotenv
import os, sys, json

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
load_dotenv()

apiKey = os.getenv('APIKEY')
teleBotToken = os.getenv('BOTTOKEN')

bsc = "https://bsc-dataseed.binance.org/"
web3 = Web3(Web3.HTTPProvider(bsc))
url_eth = "https://api.bscscan.com/api"

print(web3.isConnected())
print("Block Number: ", web3.eth.blockNumber)

contract_address = web3.toChecksumAddress('0xe0dd2e782c406914971e12243023d61acd5e2958')
# API_ENDPOINT = url_eth+'?module=account&action=txlist&address='+contract_address+'&page=1&offset=10&sort=desc&apikey={apiKey}'

getBidAbi = 'https://api.bscscan.com/api?module=contract&action=getabi&address=' + contract_address + '&apikey={apiKey}'
bidAbi = requests.get(url = getBidAbi)
bidAbi = bidAbi.json()

# Initialise marketplace bid contract
bidContract = web3.eth.contract(address=contract_address, abi=bidAbi['result'])

def getNewTransactions():
    # try:
    time.sleep(3)
    getFrontPage = 'https://api.cryptomines.app/api/workers?level=3&page=1&limit=8&sort=eternal'
    headers = { "Referer": 'https://play.cryptomines.app/',
                "Content-Type":"application/json" }

    r = requests.get(getFrontPage, headers=headers)
    sendDiscord(r.json())

    # except:
    #     getNewTransactions()

def sendDiscord(response):
    print("Sending Discord...")
       
    oneStar = 914875126082850826
    twoStar = 914875737637531678
    threeStar = 914876004869218364
    fourStar = 914876068672962592
    fiveStar = 914876131562389596
    botToken = teleBotToken

    # Discord Message
    for i, d in enumerate(response['data']):
        # Get Price
        getETLPrice = 'https://api.gateio.ws/api/v4/spot/tickers?currency_pair=ETERNAL_USDT'
        headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}
        r = requests.get(getETLPrice, headers=headers)
        price = r.json()[0]['last']

        # print(d)
        rarity = d['nftData']['level']
        message = '⭐️⭐️⭐️ Worker\n\nMP: {} MP\n\nEternal: {} ETL\n\nCurrent Eternal Price (Gate.io): ${}\n\nEstimated USD: ${}\n\nToken ID: {}\n\nSeller Address: {}\n\nBuyer Address: {}'.format(d['nftData']['minePower'], d['eternal'], price, round(d['eternal'] * float(price), 2), d['tokenId'], d['sellerAddress'],d['buyerAddress'])
        # Specific Elements
        data =  json.dumps ( {  
                                "components": [{
                                "type": 1,
                                "components": [{
                                        "type": 2,
                                        "label": "BUY",
                                        "style": 5,
                                        "url": "http://13.250.199.131:8001/Marketplace.html?project=cm&tokenId={}".format(d['marketId'])
                                }]
                            }],
                            "embeds": [{
                                "title": "Incoming Money Printer 💸🍀",
                                "description": message,
                                "color": 0xE1DDDC if rarity == 1 else 0x7CD4FD if rarity == 2 else 0xFF675D if rarity == 3 else 0xCB55FF,
                                "thumbnail": { 
                                   "url": "https://cdn.cryptomines.app/videos/workers_s2/rank3/variant1/1.png"
                                }
                            }]
                        } )

        baseURL = "https://discordapp.com/api/channels/{}/messages".format(threeStar)
        headers = { "Authorization":"Bot {}".format(botToken),
            "Content-Type":"application/json", }
        response = requests.post(baseURL, headers=headers, data=data)
        print(str(rarity) + " Star", response)

while True:
    getNewTransactions()