function verarbeiten(modus) {
    // Auslesen des Textfeldes
    var text = document.getElementById(modus == 1 ? "klartext" : "verschluesselt").value;
    var ausgabe = "";
    // Ver- oder entschlüsseln des jeweiligen Textzeichens
    for (var i = 0; i < text.length; i++) {
        var z = text.charCodeAt(i);
        if ((z >= 65 && z <= 77) || (z >= 97 && z <= 109)) {
            // Alle Klein- und Grossbuchstaben zwischen A und M umwandeln (+13). Zum Beispiel: A => N, a => n, B => O, b=> o
            z += 13;
        } else if ((z >= 78 && z <= 90) || (z >= 110 && z <= 122)) {
            // Alle Klein- und Grossbuchstaben zwischen N und Z umwandeln (-13). Zum Beispiel: N => A, n => a, O => B, o=> b
            z -= 13;
        } else {
            // Alle anderen Zeichen werden nicht umgewandelt (Ziffern und Sonderzeichen).
        }
        ausgabe += String.fromCharCode(z);
    }
    // Ausgeben des verarbeiteten Textes in das entsprechende Textfeld
    document.getElementById(modus == 1 ? "verschluesselt" : "klartext").value = ausgabe;
}
