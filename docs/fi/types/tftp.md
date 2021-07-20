# Avoin TFTP-palvelu

## Ongelman kuvaus

Onko verkkosi toiminut joskus huonosti? Vika ei aina ole välttämättä palveluntarjoajassa. Pahikset saattavat käyttää tässä IP-osoitteessa olevaa avointa TFTP-palvelua hyväkseen palvelunestohyökkäyksissä.

Jos haluat ymmärtää paremmin kuinka tämän tyyppiset, ns. amplifikaatiohyökkäykset toimivat, lue lisää [täältä](../categories.md#amplifikaatiohyokkaykset).

## Korjausehdotuksia

Ensiksi sinun tulisi tunnistaa laite, jossa palvelu on avoinna. [Lue ohjeet laitteen paikallistamiseksi.](../locate.md)

Kun olet paikallistanut laitteen, suosittelemme poistamaan palvelun välittömästi käytöstä. Etsi laitteeseesi tai käyttöjärjestelmään sopivat ohjeet kirjoittamalla hakukoneeseen `disable tftp` ja laitteeseen liittyvä tarkenne, esimerkiksi kotireitittimen malli: `disable tftp netgear nighthawk`
