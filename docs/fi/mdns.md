# Avoin MDNS-palvelu

## Ongelman kuvaus

Tökkiikö netti? Joskus vika ei olekaan palveluntarjoajassa. Pahikset saattavat käyttää tässä osoitteessa olevaa avointa MDNS-palvelua hyväkseen palvelunestohyökkäyksissä. Tällöin nettisi voi toimia todella hitaasti ja varsinainen hyökkäyksen kohde ei ollenkaan.

Jos haluat ymmärtää paremmin kuinka tämän tyyppiset, ns. amplifikaatiohyökkäykset toimivat, lue lisää [täältä](./kategoriat.md#amplifikaatiohyokkaykset).

## Korjausehdotuksia

Ensiksi sinun tulisi tunnistaa laite, jossa palvelu on avoinna. [Lue ohjeet laitteen paikallistamiseksi.](./laitteen-paikallistaminen.md)

Kun olet paikallistanut laitteen, suosittelemme poistamaan palvelun käytöstä. Jos kyseessä on kotitietokoneesi ja haluat pitää palvelun päällä, siirrä ainakin laitteet palomuurin taakse tai ota tietokoneesi oma palomuuri käyttöön.

Mikäli kyseessä oli laite, jota et voi piilottaa palomuurin taakse, poista palvelu kokonaan käytöstä. Etsi laitteeseesi sopivat ohjeet kirjoittamalla hakukoneeseen "disable mdns" ja laitteeseen liittyvä tarkenne, esimerkiksi kotireitittimen malli:

"disable mdns google wifi"

Jos tarvit lisäohjeita, voit käydä keskustelemassa Reddit-palstallamme [https://www.reddit.com/r/testaaverkkosi/]().

Olemme keränneet linkkejä kaupallista apua tarjoaviin yrityksiin, mikäli tarvit apua korjaukseen [https://plus.google.com/collection/wu6ZWE]().

## Tietolähde

Havainto: [ShadowServer](https://www.shadowserver.org/) – Ohjeet: [Badrap Oy](https://badrap.io/)
