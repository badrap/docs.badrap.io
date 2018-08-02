# Avoin TFTP-palvelu

## Ongelman kuvaus

Onko verkkosi toiminut joskus huonosti? Vika ei aina ole välttämättä palveluntarjoajassa. Pahikset saattavat käyttää tässä IP-osoitteessa olevaa avointa TFTP-palvelua hyväkseen palvelunestohyökkäyksissä.

Jos haluat ymmärtää paremmin kuinka tämän tyyppiset, ns. amplifikaatiohyökkäykset toimivat, lue lisää [täältä](./kategoriat.md#amplifikaatiohyokkaykset).

## Korjausehdotuksia

Ensiksi sinun tulisi tunnistaa laite, jossa palvelu on avoinna. [Lue ohjeet laitteen paikallistamiseksi.](./laitteen-paikallistaminen.md)

Kun olet paikallistanut laitteen, suosittelemme poistamaan palvelun välittömästi käytöstä. Etsi laitteeseesi tai käyttöjärjestelmään sopivat ohjeet kirjoittamalla hakukoneeseen "disable tftp" ja laitteeseen liittyvä tarkenne, esimerkiksi kotireitittimen malli:

"disable tftp netgear nighthawk"

Jos tarvit lisäohjeita, voit käydä keskustelemassa Reddit-palstallamme [https://www.reddit.com/r/testaaverkkosi/]().

Olemme keränneet linkkejä kaupallista apua tarjoaviin yrityksiin, mikäli tarvit apua korjaukseen [https://plus.google.com/collection/wu6ZWE]().

## Tietolähde

Havainto: ShadowServer https://www.shadowserver.org/ – Ohjeet: Badrap Oy https://badrap.io/
