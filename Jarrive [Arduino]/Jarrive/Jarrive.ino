#include <SoftwareSerial.h>

// Set the serial for Bluetooth Communication
SoftwareSerial btSerial(2, 3); // RX = Digital Pin 3, TX = Digital Pin 4

// Set the digital pin for controling the 220V Relay
int relayPin = 8;
int dimmerPin = 9;
boolean dataFlag = false;
int dimmerData = 0;
boolean incrFlag = true;
int WDT = 50;

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
  //btSerial.print("AT\r\n");
  //delay(200);
  btSerial.print("AT+PWRM1\r\n");
  delay(200);
  btSerial.print("AT+NAMEJarrive\r\n");
  delay(200);
  //btSerial.print("AT+PIN000000\r\n");
  //delay(200);

//AT+RESET

  Serial.println("SETUP OK");
}

void loop()
{
  
  //Set a watchdog timer for the bluetooth
  if (WDT < 0) {
    btSerial.print("AT+RESET\r\n");
    delay(400);
    WDT = 50;
  }
  
  Serial.println("loop IN");

  if (dataFlag == false) {
    //write to the bluetooth device to get an answer
    btSerial.print(0x30);
    Serial.println("Write data");
    delay(100);

    if (btSerial.available()) {
      //got a response from the device
      byte btData = btSerial.read();
      Serial.println(btData);
      WDT = 50;

      //if all ok raise the flag
      if (btData == 227) {
        dataFlag = true;
        incrFlag = true;
        Serial.println("Flag Raised");
      }
      else {
        Serial.println("No Data1");
        dataFlag = false;
        incrFlag = false;
      }
    } //if
      else {
        Serial.println("No Data2");
        dataFlag = true;
        incrFlag = false;
        WDT = WDT -1; //Decrease the watchdog timer
      }
  }// if


  if (dataFlag) {
 Serial.println(dimmerData);
    while (dimmerData >= 0 && dimmerData <= 255) {
      Serial.println(dimmerData);
      analogWrite(dimmerPin, dimmerData); // Write the dimmer value
      delay(100);
      if (incrFlag) {
        dimmerData = dimmerData + 1;
      }
      else {
        dimmerData = dimmerData - 1;
      }//if
     
    }//while

    if (dimmerData >= 255) {
      delay(1000);
      digitalWrite(relayPin, HIGH);
      //incrFlag = false;
      dimmerData = 255;
      dataFlag = false;
      Serial.println("DigiHigh");
    }
    if (dimmerData <= 0) {
      delay(1000);
      digitalWrite(relayPin, LOW);
      //incrFlag = true;
      dimmerData = 0;
      dataFlag = false;
      Serial.println("DigiLow");
    }//if
  }//if

  
delay(100);
} //loop








