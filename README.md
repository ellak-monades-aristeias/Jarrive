<h1>Σύστημα “J’arrive”</h1>

Ίσως ένα από τα σημαντικότερα προβλήματα στις μέρες μας είναι η αυξημένη κατανάλωση ηλεκτρικής ενέργειας. Όχι μόνο ως οικονομικό κόστος, αλλά και σαν κόστος για το περιβάλλον μας. Η βασική ιδέα του συστήματος που περιγράφεται αναλυτικότερα παρακάτω, έρχεται για να μειώσει δραστικά την κατανάλωση ενέργειας στην καθημερινότητά μας στον εργασιακό χώρο. Το σύστημα “J’arrive” είναι ένα σύστημα που ενώνει την έξυπνη φορητή συσκευή του καθενός με την ενεργειακή κατανάλωση του χώρου στον οποίο εργάζεται, μέσω bluetooth. Όταν ο χρήστης προσέρχεται στον χώρο τότε ανοίγουν όλες οι ενεργοβόρες συσκευές (πχ. φωτισμός, κλιματισμός) και όταν φεύγει από τον χώρο οι συσκευές αυτές κλείνουν. Με αποτέλεσμα κάθε γραφείο να γίνεται πλέον «έξυπνο» και να μην χρειάζεται ο χρήστης να κλείνει – που πολλές φορές ξεχνάει – τις συσκευές.

Αναλυτικότερα, o χρήστης εγκαθιστά την απαραίτητη εφαρμογή στην έξυπνη φορητή συσκευή του (κινητό/tablet). Πραγματοποιεί σύζευξη με το σύστημα (ή τα συστήματα) που θέλει. Το αποτέλεσμα είναι κάθε φορά που πλησιάζει τον συγκεκριμένο χώρο να του δίνει σταδιακή αύξηση στον φωτισμό του χώρου (dimming) και αν παραμείνει για μικρό χρονικό διάστημα να ενεργοποιείται και ο κλιματισμός. Αντίστοιχα κατά την απομάκρυνση του χρήστη με την έξυπνη φορητή συσκευή από τον χώρο να γίνεται και σταδιακή μείωση του φωτισμού (dimming) και μετά από μικρό χρονικό διάστημα να κλείνει και ο κλιματισμός.

Ο χρήστης θα μπορεί να συνδεθεί σε πολλαπλά συστήματα “J’arrive”. Συνεπώς θα μπορεί να κινηθεί σε περισσότερους από ένα χώρους (πχ. σε ένα κτίριο). Παράλληλα το σύστημα “J’arrive” θα μπορεί να δεχθεί πολλαπλές συνδέσεις, με αποτέλεσμα αν περισσότεροι από ένας εργάζονται στον ίδιο χώρο, το σύστημα να το «καταλαβαίνει» και να μην κλείνει στην περίπτωση που είναι ακόμα κάποιος μέσα στον χώρο.

Το σύστημα J’arrive μπορεί να χρησιμοποιηθεί σχεδόν σε όλους τους τομείς της καθημερινότητας. Σε οποιοδήποτε χώρο ή γραφείο στον ιδιωτικό ή δημόσιο τομέα. Ακόμα και σε δημόσιους χώρους (για φωτισμό) ή και στο σπίτι του κάθε χρήστη. Οι εφαρμογές είναι απεριόριστες.


<h1>Hardware Requirements</h1>

1. Arduino UNO
2. Bluetooth module HM-10
3. 220V AC Relay 5V for Arduino
4. [Velleman K8064 DC Controlled Dimmer](http://www.velleman.eu/downloads/0/illustrated/illustrated_assembly_manual_k8064.pdf)
5. Jumper Cables
6. Breadboard (optional)

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


<h1>Media Files</h1>

[See the system J'arrive working on an arduino](https://youtu.be/F1wHzmf45iw)
