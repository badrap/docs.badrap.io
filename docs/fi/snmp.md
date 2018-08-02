# Avoin SNMP-palvelu

## Ongelman kuvaus

SNMP, tuo Internet-palveluiden kasariveteraani. Tämän palvelun ei kannata olla näkyvillä Internetiin. Palvelun avulla nimittäin kuka tahansa voi kysellä tietoja IP-osoitteessasi olevista laitteista. Eikä siinä kaikki.

SNMP-palvelu on kätevä työkalu Internetin pahiksille. He kimmottavat ja vahvistavat hyökkäyksiään muita vastaan tämän palvelun avulla. Olet ehkä kuullut uutisissa joskus palvelunestohyökkäyksistä? Näillä niitä tehdään.

Uhrille homma näyttää siltä, että hyökkäys tulee tästä osoitteesta. Hyvä palvelu pahiksille, paha maine omistajalle. Ei jatkoon.

## Korjausehdotuksia

Ensiksi sinun tulisi tunnistaa laite, jossa palvelu on avoinna. [Lue ohjeet laitteen paikallistamiseksi.](./laitteen-paikallistaminen.md)

Kun olet paikallistanut laitteen, suosittelemme poistamaan palvelun välittömästi käytöstä. Etsi laitteeseesi tai käyttöjärjestelmään sopivat ohjeet kirjoittamalla hakukoneeseen "disable snmp" ja laitteeseen liittyvä tarkenne, esimerkiksi:

"disable snmp apple airport"

Saattaa olla että löydät vain ohjeita, joissa kerrotaan miten SNMP-palvelu laitetaan päälle. Onneksi tätäkin ohjeita voi soveltaa: etsi ohjeista miten palvelu kytketään päälle ja tee juuri päinvastainen toimenpide – palvelun voi myös sammuttaa samasta paikasta.

Jos tarvit lisäohjeita, voit käydä keskustelemassa Reddit-palstallamme https://www.reddit.com/r/testaaverkkosi/

Olemme keränneet linkkejä kaupallista apua tarjoaviin yrityksiin, mikäli tarvit apua korjaukseen https://plus.google.com/collection/wu6ZWE

## Tietolähde

Havainto: ShadowServer https://www.shadowserver.org/ – Ohjeet: Badrap Oy https://badrap.io/
