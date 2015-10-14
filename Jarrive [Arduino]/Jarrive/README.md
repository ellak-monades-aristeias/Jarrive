<h1>How it works in the arduino</h1>

The arduino starts and setup the bluetooth through the appropriate AT commands. Tha arduino tries in the loop to send a quetion to the device. If there is no response then assumes that the device is adsent so it closes the light and the aircoditioning system. If there is an certain answer to a specific question then the arduino assumes that the device is present. So it starts the lighting (with dimming effect) and after a while it also turns on the aircoditioning system.

The arduino code also has a watchdog timer in order to reset after a while (with no data response) the bluetooth.
