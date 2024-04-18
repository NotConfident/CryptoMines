web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"));

var url_string = window.location.href
var url = new URL(url_string);

var abi = [{"inputs":[{"internalType":"address","name":"_logic","type":"address"},{"internalType":"address","name":"admin_","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"admin_","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"implementation_","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]

var tokenID = url.searchParams.get("tokenId");
var project = url.searchParams.get("project");
var walletAddress = url.searchParams.get("wallet");

console.log("Token ID: ", tokenID);

var wallet;

(async () => {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    window.wallet = web3.utils.toChecksumAddress(accounts[0]);
    web3.eth.defaultAccount = wallet;
    // if(walletAddress == null) {
    //     window.location.assign(`http://13.250.199.131:8000/Marketplace.html?wallet=${wallet}&tokenID=${tokenID}&price=${price}`)
    //     // window.location.assign(`http://localhost:8000/Marketplace.html?wallet=${wallet}&tokenID=${tokenID}&price=${price}`)
    // }
    ethereum.on('accountsChanged', function (accounts) {
        window.location.assign(`http://13.250.199.131:8001/Marketplace.html?project=cm&tokenId=${tokenID}`)
        // window.location.assign(`http://localhost:8001/Marketplace.html?project=cm&tokenId=${tokenID}`)
    })
    checkTnC()
})();

var txHash;
async function buy() {
    var myContract = new web3.eth.Contract(abi,'0xe0dd2e782c406914971e12243023d61acd5e2958');
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    // console.log(accounts[0])
    // contract_func = myContract.methods.bid(tokenID, price);
    data = web3.eth.abi.encodeFunctionCall({
        name: 'buyNFT',
        type: 'function',
        inputs: [{
            type: 'uint256',
            name: '_tokenId'
        }]
    }, [tokenID]);

    ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
            from: wallet,
            to: '0xe0dd2e782c406914971e12243023d61acd5e2958',
            gas: '79999',
            data: data,
        }],
    })
    .then(data => txHash = data)
    .then(() => sendReceipt(txHash))
}

function sendReceipt(txHash) {
    $.ajax({
        type : 'POST',              
        url : `http://13.250.199.131:5000/documentation?address=${wallet}&txHash=${txHash}`,
        crossDomain: true,
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
        success: function (data) { 
            console.log('Documentation Successful.', data)
        },
        error: function (e) {         
            console.log(e);
        }
    })
    console.log(txHash);
}

function checkTnC() {
    $.ajax({
        type : 'GET',              
        url : `http://13.250.199.131:5000/checkTnc?wallet=${wallet}`,
        crossDomain: true,
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
        success: function (data) { 
            console.log('T&C is confirmed awhile ago. Enjoy the service :)')
            buy()
        },
        error: function (e) {         
            // console.log(e);
            if(confirm("Please Read. This is Important. Any attempts to bypass this popout to proceed with the service hosted here will be taken as the user has agreed to the statements listed below.\n\n" + 
                        "If you disagree with any of the statements below, close this webpage immediately and do not interact with it any longer in any form.\n\n" +
                        "There is a risk of a ban. We are not liable for any form of monetary losses via any means. \You MIGHT still be able to sell your workers via Smart Contracts still if you get banned."+
                        "\n\nThis service DOES NOT interact with any of CryptoMine's Server. It interacts with the Marketplace Smart Contracts directly." +
                        "\n\nYou will be redirected to our Disclaimer channel when you click cancel. Give it a read before coming back." + 
                        "\n\nBy proceeding, you will have agreed to proceed with the risks invovled, and is fully responsible for your own actions.")){
                agreeTnC()
            }
            else{
                window.location.assign("https://discord.com/channels/893340133204582440/893430277152604180");
            }
        }
    })
    console.log(txHash);
}

function ShowTnC(){
    alert("Please Read. This is Important. Any attempts to bypass this popout to proceed with the service hosted here will be taken as the user has agreed to the statements listed below.\n\n" + 
            "If you disagree with any of the statements below, close this webpage immediately and do not interact with it any longer in any form.\n\n" +
            "There is a risk of a ban. We are not liable for any form of monetary losses via any means. \You MIGHT still be able to sell your workers via Smart Contracts still if you get banned."+
            "\n\nThis service DOES NOT interact with any of CryptoMine's Server. It interacts with the Marketplace Smart Contracts directly." +
            "\n\nYou will be redirected to our Disclaimer channel when you click cancel. Give it a read before coming back." + 
            "\n\nBy proceeding, you will have agreed to proceed with the risks invovled, and is fully responsible for your own actions.")
                
            
    // else{
    //     window.location.assign("https://discord.com/channels/893340133204582440/893430277152604180");
    // }
}

function agreeTnC() {
    $.ajax({
        type : 'POST',              
        url : `http://13.250.199.131:5000/agreeTnC?wallet=${wallet}`,
        crossDomain: true,
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
        success: function (data) { 
            console.log('T&C Agreed. Enjoy the service :)')
        },
        error: function (e) {         
            console.log(e);
        }
    })
    console.log(txHash);
}

// setTimeout($(document).ready(function() {
//     console.log("Timed, 600ms Passed")
//     $.ajax({
//         type : 'GET',              
//         url : 'http://13.250.199.131:5000/readAddress?wallet=' + walletAddress,
//         crossDomain: true,
//         headers: {
//             "accept": "application/json",
//             "Access-Control-Allow-Origin":"*"
//         },
//         success: function (data, textStatus, xhr) { 
//             if(xhr.status == 200) {
//                 document.getElementById('status').innerHTML = "Address is whitelisted! <br> Thank you for your support 😊 <br><br> By continuing with this transaction, you agree to the terms of <a href='https://discord.com/channels/893340133204582440/893430277152604180'>#Disclaimer</a> and <a href='https://discord.com/channels/893340133204582440/894953208668106752'>#quickbuy-faq</a> Channel.";
//                 document.getElementById('howTo').innerHTML = "For more information on how to use this feature, head to <a href='https://discord.com/channels/893340133204582440/896961534822088715'>#how-to-quickbuy</a> Channel";
//                 if(tokenID != null && price != null) {
//                     buy()
//                 }
//             }
//         },
//         error: function (e) {         
//             // document.getElementById('status').innerHTML = "Address not whitelisted! <br> Contact PixieDixie#7914 via Discord if you would like to use this feature.";          
//             // console.log(e);
//             document.getElementById('status').innerHTML = "Address is whitelisted! <br> Thank you for your support 😊 <br><br> By continuing with this transaction, you agree to the terms of <a href='https://discord.com/channels/893340133204582440/893430277152604180'>#Disclaimer</a> and <a href='https://discord.com/channels/893340133204582440/894953208668106752'>#quickbuy-faq</a> Channel.";
//             document.getElementById('howTo').innerHTML = "For more information on how to use this feature, head to <a href='https://discord.com/channels/893340133204582440/896961534822088715'>#how-to-quickbuy</a> Channel";
//             if(tokenID != null && price != null) {
//                 buy()
//             }
//         }
//     });
// }),600)