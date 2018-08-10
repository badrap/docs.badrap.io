# Avoin SMB-tiedostojakopalvelu

## Ongelman kuvaus

Olemme havainneet verkossasi salaamattoman SMB-palvelun, johon kuka tahansa voi ottaa yhteyttä Internetistä.

SMB on protokolla, jota käytetään esimerkiksi tiedostojen ja tulostimien jakamiseen verkossa. Yleisesti ottaen tällaiset verkkojaot on parasta rajoittaa ainoastaan kotisi tai työpaikkasi sisäverkkoon. SMB-yhteydet ovat nimittäin oletusarvoisesti salaamattomia. Lisäksi kyseisen protokollan toteutuksissa on havaittu vuosien saatossa lukuisia tietoturvaongelmia.

Liian avoin SMB-palvelu voi jakaa kovalevysi sisältöä, kuvia ja dokumentteja koko maailmalle. Jos palvelu vielä sattuu olemaan haavoittuvainen, tarjoaa se pahantekijöille mahdollisuuden ottaa koko tietokone haltuun.

## Korjausehdotuksia

Ensiksi sinun tulisi tunnistaa laite, jossa palvelu on avoinna. [Lue ohjeet laitteen paikallistamiseksi.](../locate.md)

Kun olet paikallistanut laitteen, suosittelemme poistamaan palvelun käytöstä. Jos kyseessä on kotitietokoneesi ja haluat pitää palvelun päällä, siirrä ainakin laitteet palomuurin taakse tai ota tietokoneesi oma palomuuri käyttöön. Rajoita siis palvelu näkymään ainoastaan paikalliseen verkkoosi.

Hakusanoilla `disable smb` löydät käyttöjärjestelmääsi ja laitteeseesi liittyvät SMB-palvelun poisto-ohjeet.

Olemme keränneet linkkejä kaupallista apua tarjoaviin yrityksiin, mikäli tarvit apua korjaukseen <https://plus.google.com/collection/wu6ZWE>.
