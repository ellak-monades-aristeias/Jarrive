'use strict';

var devMAC = "00:15:83:00:3C:E9";
var devUUID = "74278BDA-B644-4520-8F0C-720EAF059935";
var servUUID = "0000ffe0-0000-1000-8000-00805f9b34fb";
var charUUID = "0000ffe1-0000-1000-8000-00805f9b34fb";
var servUUID_short = "FFE0";
var charUUID_short = "FFE1";
var devRSSI = "";

// ASCII only
function bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
}

function errorMessage(msg) {
    console.log(msg);
}

var app = {
    initialize: function () {
        this.bindEvents();
        detailPage.hidden = true;
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        refreshButton.addEventListener('touchstart', this.refreshDeviceList, false);
        disconnectButton.addEventListener('touchstart', this.disconnect, false);
        deviceList.addEventListener('touchstart', this.connect, false); // assume not scrolling
    },
    onDeviceReady: function () {
        app.refreshDeviceList();
    },
    refreshDeviceList: function () {
        deviceList.innerHTML = ''; // empties the list
        // scan for all devices
        ble.scan([], 5, app.onDiscoverDevice, app.onError);
    },
    onDiscoverDevice: function (device) {

       
            var listItem = document.createElement('li'),
                html = '<b>' + device.name + '</b><br/>' +
                    'RSSI: ' + device.rssi + '&nbsp;|&nbsp;' +
                    device.id;
            devRSSI = device.rssi;
            devMAC = device.id;
            listItem.dataset.deviceId = device.id;  // TODO
            listItem.innerHTML = html;
            deviceList.appendChild(listItem);

  
    },
    connect: function (e) {
        var deviceId = e.target.dataset.deviceId,
            onConnect = function () {
                // subscribing for incoming data
                ble.startNotification(devMAC, servUUID, charUUID, app.onData,errorMessage("Notification Error"));
                app.showDetailPage();
            };

        ble.connect(devMAC, onConnect, errorMessage("Connection Error"));
    },
    onData: function (data) { // data received from Arduino
        console.log("Received: " + bytesToString(data) + "<br/>");
        if (bytesToString(data) == 48) {
            ble.write(devMAC, servUUID, charUUID, 0x31, function () { console.log("Send Data"); }, errorMessage("Data NOT Send"));
        }

    },
    disconnect: function (event) {
        var deviceId = event.target.dataset.deviceId;
        ble.disconnect(devMAC, app.showMainPage, errorMessage("Disconnect Error"));
    },
    showMainPage: function () {
        mainPage.hidden = false;
        detailPage.hidden = true;
    },
    showDetailPage: function () {
        mainPage.hidden = true;
        detailPage.hidden = false;
    },
    onError: function (reason) {
        alert("ERROR: " + reason);
    }
};