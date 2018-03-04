# Liian avoin nimipalvelu

## Ongelman kuvaus

    Onko verkkosi toiminut joskus huonosti? Vika ei aina ole välttämättä palveluntarjoajassa. Tässä osoitteessa on liian avoin DNS-palvelu. Pahikset etsivät näitä peittääkseen jälkensä ja vahvistaakseen palvelunestohyökkäyksiään. Samalla yleensä oma verkko tukkiintuu. Jos haluat ymmärtää paremmin kuinka tämä tapahtuu, katso amplifikaatiohyökkäyksen kuvaus täältä:

<https://github.com/badrap/testaaverkkosi.fi/blob/master/kategoriat.md#amplifikaatiohyökkäykset>

Liian avoin nimipalvelu tarkoittaa, että hyökkääjä voi esittää Internetistä käsin palvelimelle pienen kysymyksen ja palvelin antaa takaisin suuren vastauksen. Kun hyökkääjä väärentää lähdeosoitteensa ja lähettää massiivisen määrän kysymyksiä, toimii palvelu palvelunestohyökkäyksen vahvistimena. Kohteena on yleensä joku muu, mutta omakin verkkosi ja/tai palvelusi voivat hajota.

## Korjausehdotuksia

Jos haluat kaupallista apua, katso linkki ohjeiden lopusta.

Nyt aluksi pitäisi tunnistaa laite, missä palvelu on auki. Jos et jo tiedä sitä valmiiksi, voit katsoa täältä vinkkejä metsästyspuuhiin:

<https://github.com/badrap/testaaverkkosi.fi/blob/master/paikallista.md>

Nimipalvelu on päällä ilman hyvää syytä:

Omistatko laitteen, etkä tiedä miksi siinä on nimipalvelu päällä? Et todennäköisesti silloin tarvitse sitä. Katso tässä tapauksessa laitteesi ohjeista miten nimipalvelun saisi pois päältä. Etsi avainsanoja "DNS", "Domain Name Service" tai "Name Service". Voit myös etsiä laitteestasi palomuuriominaisuuden, jolla estät pääsyn laitteen palveluihin Internetistä käsin.

Nimipalveu on tarkoituksella päällä:

US-CERTin ohje tarjoaa esimerkkejä yleisimmistä nimipalveluohjelmistojen tiukemmista asetuksista. Salli rekursiiviset kyselyt vain omille laitteillesi.

<https://www.us-cert.gov/ncas/alerts/TA13-088A>

Jos kaipaat lisävinkkejä, voit käydä keskustelemassa Reddit-palstallamme:

<https://www.reddit.com/r/testaaverkkosi/>

Linkkejä kaupalliseen apuun löytyy osoitteesta:

<https://plus.google.com/collection/wu6ZWE>

## Tietolähde

Shadowserver - <https://dnsscan.shadowserver.org>