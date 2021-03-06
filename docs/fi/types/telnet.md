# Avoin Telnet-palvelu

## Ongelman kuvaus

Telnet - tuo ikivanha Internet-palvelu, jota ei soisi enää näkyvän - varsinkaan avoinna Internetiin! Avonainen Telnet-palvelu kertoo kolmesta mahdollisesta ongelmasta:

1.  Jos joku oikeasti käyttää palvelua, kaikki liikenne liikkuu salaamattomana Internetissä. Pahikset voivat nähdä kaiken mitä Telnet-yhteydellä teet. Pahikset voivat myös kaapata palvelun ja sitä tarjoavan laitteen itselleen.

2.  Jos Telnet-palvelun päälläolo on yllätys, siinä saattaa myös olla helposti arvattava oletussalasana käytössä.

3.  Laitteessa, jossa Telnet on auki on todennäköisesti monta muutakin tietoturvaongelmaa.

## Korjausehdotuksia

Ensiksi sinun tulisi tunnistaa laite, jossa palvelu on avoinna. [Lue ohjeet laitteen paikallistamiseksi.](../locate.md)

Kun olet paikallistanut laitteen, suosittelemme poistamaan palvelun välittömästi käytöstä. Etsi laitteeseesi tai käyttöjärjestelmään sopivat ohjeet kirjoittamalla hakukoneeseen `disable telnet` ja laitteeseen liittyvä tarkenne, esimerkiksi kotireitittimen malli: `disable telnet telewell tw-ea501`
