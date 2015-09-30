#include <SoftwareSerial.h>

// Set the serial for Bluetooth Communication
SoftwareSerial btSerial(2, 3); // RX = Digital Pin 3, TX = Digital Pin 4

// Set the digital pin for controling the 220V Relay
int relayPin = 8;
int dimmerPin = 9;

int relayData = 0;
int dimmerData = 0;

int delayValue = 0;
boolean delayFlag = false;


void setup()
{
  // Initialize serial:
  Serial.begin(9600);

  // Initialize the pin as outputs
  pinMode(relayPin, OUTPUT);
  pinMode(dimmerPin, OUTPUT);

  // Start each software serial port
  btSerial.begin(9600);

  // Setup the bluetooth module
  btSerial.print("AT\r\n");
  delay(500);
  btSerial.print("AT+NAMEJarrive\r\n");
  delay(500);
  btSerial.print("AT+PIN000000\r\n");
  delay(500);

  Serial.println("SETUP OK");
}

void loop()
{


  while (btSerial.available() > 0) {

    // look for the next valid integer in the incoming serial stream:
    relayData = btSerial.parseInt();
    // do it again:
    dimmerData = btSerial.parseInt();

    // Look for the end of line
    if (btSerial.read() == '\n')
    {
      // constrain the values to 0 - 255
      relayData = constrain(relayData, 0, 255);
      dimmerData =  constrain(dimmerData, 0, 255);

      delayFlag = true; // raise the flag to change the relay status
      delayValue = 0;

      analogWrite(dimmerPin, dimmerData); // Write the dimmer value

      // For debugging
      Serial.print(relayData);
      Serial.print(" - ");
      Serial.println(dimmerData);

    }

  }

  // If relay data changed start the delay sequence
  if ( delayFlag == true ) {
    delayValue = delayValue + 1;
    Serial.println(delayValue); // For debugging
  }

  // Write the values
  if ( delayValue == 1000 ) { //delay in tenths of seconds 1000 -> 10 sec
    if ( relayData == 255 ) {
      digitalWrite(relayPin, HIGH);
    }
    else    {
      digitalWrite(relayPin, LOW);
    }
    delayFlag = false;
  }

  delay(10);
  
  // Get all answers to Arduino Serial [for debugging]
  if (btSerial.available())
  {
    Serial.write(btSerial.read());
  }//if
  

  /*
    //Use this to be able to send AT Commands to the module through Serial Monitor
    if (Serial.available())
    {
      btSerial.write(Serial.read());
    }//if
  */
}




