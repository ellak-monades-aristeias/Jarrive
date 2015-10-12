'use strict';

var devMAC = "00:15:83:00:3C:E9";
var devUUID = "74278BDA-B644-4520-8F0C-720EAF059935";
var servUUID = "0000ffe0-0000-1000-8000-00805f9b34fb";
var charUUID = "0000ffe1-0000-1000-8000-00805f9b34fb";
var servUUID_short = "FFE0";
var charUUID_short = "FFE1";
var devRSSI = "";


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
            listItem.dataset.deviceId = device.id;  // TODO
            listItem.innerHTML = html;
            deviceList.appendChild(listItem);

  
    },
    connect: function (e) {
        var deviceId = e.target.dataset.deviceId,
            onConnect = function () {

                //ble.startNotification(deviceId, button.service, button.data, app.onButtonData, app.onError);
                // subscribing for incoming data
                //ble.startNotification(deviceId, accelerometer.service, accelerometer.data, app.onAccelerometerData, app.onError);
                // turn accelerometer on
                var myData = 0;
                devRSSI = 0 - devRSSI;
                if (devRSSI > 100) { myData = 48; }
                if (devRSSI > 90 && devRSSI <= 100) { myData = 49; }
                if (devRSSI > 80 && devRSSI <= 90) { myData = 50; }
                if (devRSSI > 70 && devRSSI <= 80) { myData = 51; }
                if (devRSSI <= 70) { myData = 52; }
                var configData = new Uint8Array(4);
                configData[0] = myData;
                configData[1] = 44;
                configData[2] = myData;
                configData[3] = 10;


                ble.write(deviceId, servUUID, charUUID, configData.buffer,function () { console.log("Send Data"); }, app.onError);
                disconnectButton.dataset.deviceId = deviceId;
                app.showDetailPage();
            };

        ble.connect(deviceId, onConnect, app.onError);
    },
    disconnect: function (event) {
        var deviceId = event.target.dataset.deviceId;
        ble.disconnect(deviceId, app.showMainPage, app.onError);
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