<h1>“J’arrive” System</h1>

With the Jarrive system the user makes his office into 'Smart Office', by controlling the Lighting and the air-conditioning through bluetooth technology.

The user installs on his smartphone the Jarrive application and connects the Jarrive system to the Lighting and the air-conditioning. Whenever he arrives to his office (get in the range of bluetooth) the Jarrive system opens the lights (by dimming effect) and after a while starts the air-conditioning. When the users decide to leave the opposite happens. The lights close (by dimming effect) and after a while the air-conditioning closes too.

The user has to just have his smartphone with the Jarrive application on him!


<h1>Hardware Requirements</h1>

1. Arduino UNO
2. Bluetooth module HM-10
3. 220V AC Relay 5V for Arduino
4. [Velleman K8064 DC Controlled Dimmer](http://www.velleman.eu/downloads/0/illustrated/illustrated_assembly_manual_k8064.pdf)
5. Jumper Cables
6. Power Supply for Arduino
7. Breadboard (optional)

<h1>Hardware Connection</h1>

Follow the steps below to connect the "J'arrive" system. Advice the picture for detailed information.

<h5>Bluetooth module HM-10 -> Arduino</h5>
1. Pin1(TX) -> Digital Pin2
2. Pin2(RX) -> Digital Pin3
3. Pin12(3.3V) -> 3.3V Pin
4. Pin13(GND) -> GND Pin


<h5>AC Relay -> Arduino</h5>
1. GND Pin(-) -> GND Pin
2. VCC Pin(+) -> 5V Pin
3. Signal Pin(S) -> Digital Pin8


<h5>Velleman K8064 DC Controlled Dimmer -> Arduino</h5>
1. Analog Input Pin(-) -> GND Pin
2. Analog Input Pin(+) -> Digital Pin9                          ***must be a PWM Pin


<h5>Final Connections</h5>
1. Power Supply -> Arduino Board                                ***recommended a 9V-12V 1A Power Supply
2. Clima -> Terminal Block (NO) of the AC Relay
3. Light -> Terminal Block (Load) of Velleman K8064
4. AC Power -> Terminal Block (AC Power) of Velleman K8064      ***HIGH VOLTAGE




![alt tag](https://github.com/ellak-monades-aristeias/Jarrive/blob/master/HarwareConnection.png)


<h1>Social Media</h1>

[See the system J'arrive working on an arduino](https://youtu.be/F1wHzmf45iw)
