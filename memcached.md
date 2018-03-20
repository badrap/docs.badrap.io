# Avoin Memcached-palvelu

## Ongelman kuvaus

Kuulitko jo? Pahikset rikkoivat jälleen (28.2.2018)  aiemman ennätyksensä palvelunestohyökkäysten tehokkuuden suhteen. Uuteen ennätykseen he pääsivät hyödyntämällä viattomien ihmisten avoimia Memcached-palveluita.

Jos haluat ymmärtää paremmin kuinka tämä tapahtuu, katso amplifikaatiohyökkäyksen kuvaus täältä:

https://github.com/badrap/testaaverkkosi.fi/blob/master/kategoriat.md#amplifikaatiohyökkäykset

Uutinen kyseenalaisesta ennätyksestä löytyy muun muassa täältä:

https://thehackernews.com/2018/03/biggest-ddos-attack-github.html

Amplifikaatiohyökkäykset ovat mahdollista, mikäli palvelu tarjoillaan UDP-protokollan välityksellä. Memcached:n kanssa on vielä toinenkin ongelma. Palvelu ei tue autentikointia, joten ulkopuolisilla on mahdollista käpelöidä siinä olevia tietoja. (Lähde: https://www.shadowserver.org/wiki/pmwiki.php/Services/Open-Memcached)

## Korjausehdotuksia

Linkkejä kaupallisen avun hankkimiseksi löytyy ohjeiden lopusta.

Estä ulkopuolisten pääsy palveluun palomuuraamalla portti 11211 umpeen. Mikäli et tarvitse palvelua, ota se pois käytöstä.

Hakusanoilla "how to disable memcache" löytyy hyvin ohjeita. Voit halutessasi liittää hakuehdoksi vielä laitteen, käyttöjärejstelmän tai Linux-distribuution nimen.
Jos kaipaat lisävinkkejä, voit käydä keskustelemassa Reddit-palstallamme:

https://www.reddit.com/r/testaaverkkosi/

Linkkejä kaupalliseen apuun löytyy osoitteesta:

https://plus.google.com/collection/wu6ZWE

## Tietolähde

Shadowserver tarjosi tiedon, Badrap Oy tarjosi vinkit.
