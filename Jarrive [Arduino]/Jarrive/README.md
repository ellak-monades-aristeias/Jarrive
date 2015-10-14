<h1>How it works in the arduino</h1>

The Arduino starts and setup the bluetooth through the appropriate AT commands. The Arduino tries in the loop to send a question to the device. If there is no response then assumes that the device is absent so it closes the light and the air-conditioning system. If there is a certain answer to a specific question then the Arduino assumes that the device is present. So it starts the lighting (with dimming effect) and after a while it also turns on the air-conditioning system.

The Arduino code also has a watchdog timer in order to reset after a while (with no data response) the bluetooth.
