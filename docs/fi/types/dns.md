# Liian avoin nimipalvelu

## Ongelman kuvaus

Onko verkkosi toiminut joskus huonosti? Vika ei aina ole välttämättä palveluntarjoajassa. Tässä osoitteessa on liian avoin DNS-palvelu. Pahikset etsivät näitä peittääkseen jälkensä ja vahvistaakseen palvelunestohyökkäyksiään. Samalla yleensä oma verkko tukkeutuu.

Liian avoin nimipalvelu tarkoittaa sitä, että hyökkääjä voi esittää Internetistä käsin palvelimelle pienen kysymyksen ja palvelin antaa takaisin suuren vastauksen. Kun hyökkääjä väärentää lähdeosoitteensa ja lähettää massiivisen määrän kysymyksiä, toimii palvelu palvelunestohyökkäyksen vahvistimena. Kohteena on yleensä joku muu, mutta omakin verkkosi ja/tai palvelusi voivat hajota.

Jos haluat ymmärtää paremmin kuinka tämän tyyppiset, ns. amplifikaatiohyökkäykset toimivat, lue lisää [täältä](../categories.md#amplifikaatiohyokkaykset).

## Korjausehdotuksia

Ensiksi sinun tulisi tunnistaa laite, jossa palvelu on avoinna. [Lue ohjeet laitteen paikallistamiseksi.](../locate.md)

### Nimipalvelu on päällä ilman hyvää syytä

Omistatko laitteen, etkä tiedä miksi siinä on nimipalvelu päällä? Et todennäköisesti silloin tarvitse sitä. Katso tässä tapauksessa laitteesi ohjeista miten nimipalvelun saisi pois päältä. Etsi avainsanoja "DNS", "Domain Name Service" tai "Name Service". Voit myös etsiä laitteestasi palomuuriominaisuuden, jolla estät pääsyn laitteen palveluihin Internetistä käsin.

### Nimipalvelu on tarkoituksella päällä

US-CERTin ohje osoitteessa <https://www.us-cert.gov/ncas/alerts/TA13-088A> tarjoaa esimerkkejä yleisimmistä nimipalveluohjelmistojen tiukemmista asetuksista. Salli rekursiiviset kyselyt vain omille laitteillesi.

Olemme keränneet linkkejä kaupallista apua tarjoaviin yrityksiin, mikäli tarvit apua korjaukseen <https://plus.google.com/collection/wu6ZWE>.
