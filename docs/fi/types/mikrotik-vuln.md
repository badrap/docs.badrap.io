# Mikrotik-reitittimessä haavoittuvuus

## Ongelman kuvaus

IP-osoitteessasi on hyvin todennäköisesti Mikrotikin reititin, jossa on vakava tietoturvahaavoittuvuus jota voiudaan käyttää helposti hyväksi verkkoliikenteesi salakuunteluun ja henkilökohtaisten tietojesi varastamiseen. Huhtikuussa 2018 julkaistiin tietoturvahaavoittuvuus Mikrotikin reitittimissä. Laitevalmistaja korjasi haavoittuvuuden ja julkaisi päivitetyn ohjelmistoversion ongelman korjaamiseksi. Kaikki käyttäjät eivät kuitenkaan ole kuulleet haavoittuvuudesta ja päivittäneet reitittimensä ohjelmistoa uuteen versioon. 

Kesän 2018 aikana päivittämättömiin Mikrotikin reitittimiin hyökättiin laajalti, ja hyökkääjät ottivat laitteita haltuunsa haavoittuvuutta hyväksikäyttämällä. Pahantekijät alkoivat käyttää joitakin laitteita omiin tarkoituksiinsa, kuten kuuntelemaan käyttäjien verkkoliikennettä, anastamaan henkilötietoja ja pankkitietoja, tai käyttämään laitteiden laskentatehoa esimerkiksi kryptovaluuttojen generoimiseen. 

Tietoturvatutkijat analysoivat näitä tapauksia ja tunnistivat merkkejä, joilla haavoittuvat tai jo hakkeroidut laitteet voi havaita verkon välityksellä. Elokuussa 2018 Netlab Security Research Team 360 -tutkijaryhmä etsi maailmalta avoimesti näkyviä haavoittuvia ja hakkeroituja laitteita. He julkaisivat tutkimuksestaan [tämän blogikirjoituksen](http://blog.netlab.360.com/7500-mikrotik-routers-are-forwarding-owners-traffic-to-the-attackers-how-is-yours-en/). Heidän tutkimusdatansa sisältää IP-osoitteet, joissa oli havaittavissa haavoittuvia laitteita aikavälillä 23.-24.8.2018. Sinun seuraamasi IP-osoite löytyi tästä tutkimusdatasta niiden laitteiden joukosta, joissa on kyseinen tietoturvahaavoittuvuus, mutta joiden ei ole vielä havaittu joutuneen hakkerien hallintaan.

Jos sinulla on Mikrotik-reititin ja sen IP-osoite ei ole vaihtunut 23.8.2018 jälkeen, laitteessasi on todennäköisesti kyseinen tietoturvahaavoittuvuus ja sillä voidaan varastaa tietojasi tulevaisuudessa (tai se on jo otettu hyökkääjän hallintaan tällä välin). Jos sinulla on Mikrotikin reititin mutta sen IP-osoite on vaihtunut 23.8.2018 jälkeen, voi olla että laitteesi on turvassa. Ainoa varma tapa varmistaa että laitteesi on turvassa on resetoida se tehdasasetuksille ja päivittää laitteen ohjelmisto uusimpaan Mikrotikiltä saatavilla olevaan versioon.

## Korjausehdotuksia

Ensinnäkin sinun tulisi etsiä haavoittunut laite verkostasi. [Katso ohjeet laitteen löytämiseksi ja tunnistamiseksi.](../locate.md) Koska tämä haavoittuvuus koskee vain Mikrotikin valmistamia laitteita, todennäköisesti löydät laitteen helposti vain etsimällä valmistajan nimeä. 

Kun olet löytänyt laitteen verkostasi, suosittelemme että resetoit sen tehdasasetuksille. Jos laitteesi on jo anastettu hyökkääjän hallintaan, sen puhdistaminen on yleensä liian työlästä ilman että koko laite resetoidaan. 

Kun olet resetoinut laitteen, sinun kannattaa asentaa uusin saatavilla oleva ohjelmistoversio [Mikrotikin www-sivuilta](https://mikrotik.com/download), tai laitteen hallintaliittymän automaattisen päivitysominaisuuden kautta: "Check For Updates" hallintaliittymän QuickSet-valikosta tai System > Packages -valikosta. Muista resetoida laitteen asetukset ennen tai jälkeen päivityksen, jotta mahdollisen hyökkääjän tekemät asetusmuutokset poistuvat käytöstä.
