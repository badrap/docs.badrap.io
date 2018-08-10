# Avoin Memcached-palvelu

## Ongelman kuvaus

Kuulitko jo? Pahikset rikkoivat jälleen (28.2.2018) aiemman ennätyksensä palvelunestohyökkäysten tehokkuuden suhteen. Uuteen ennätykseen he pääsivät hyödyntämällä viattomien ihmisten avoimia Memcached-palveluita.

Uutinen kyseenalaisesta ennätyksestä löytyy muun muassa täältä: <https://thehackernews.com/2018/03/biggest-ddos-attack-github.html>

Amplifikaatiohyökkäykset ovat mahdollista, mikäli palvelu tarjoillaan UDP-protokollan välityksellä. Memcached:n kanssa on vielä toinenkin ongelma, nimittäin palvelu ei tue autentikointia joten ulkopuolisilla on mahdollista käpelöidä siinä olevia tietoja. (Lähde: <https://www.shadowserver.org/wiki/pmwiki.php/Services/Open-Memcached>)

Jos haluat ymmärtää paremmin kuinka tämän tyyppiset, ns. amplifikaatiohyökkäykset toimivat, lue lisää [täältä](../categories.md#amplifikaatiohyokkaykset).

## Korjausehdotuksia

Estä ulkopuolisten pääsy palveluun palomuuraamalla portti 11211 umpeen. Mikäli et tarvitse palvelua, ota se kokonaan pois käytöstä.

Hakusanoilla "how to disable memcache" löytyy hyvin ohjeita. Voit liittää hakuusi vielä laitteen, käyttöjärjestelmän tai Linux-distribuution nimen tarkentaaksesi osumatarkkuutta.

Olemme keränneet linkkejä kaupallista apua tarjoaviin yrityksiin, mikäli tarvit apua korjaukseen <https://plus.google.com/collection/wu6ZWE>.
