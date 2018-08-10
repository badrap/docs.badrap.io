# Open DNS service

## Problem description

Has your Internet connection sometimes been working badly? Your service provider is not always the source of the problem. It seems that your IP address has an open DNS service. Bad guys in the Internet search and abuse these services to cover their tracks and to amplify their denial-of-service attacks. When your DNS service is being abused, as a side effect your own Internet connection can become unusable.

An open DNS service means simply, that an attacker can send your device a small request message from the Internet, and your device will send back a large response message. If an attacker forges their source address and send a massive amount of small requests to your device, your device amplifies the attack by sending a massive amount of large responses to a third party (the actual victim of the attack). The victim is usually someone else than you, but as a result of the attack your own Internet connection usually breaks down.

If you want to understand better how these kinds of so-called amplification attacks work, please see [here](../categories.md#amplification-attacks).

## Suggestions for repair

First of all you need to identify the device which has the vulnerable service open. [Please read our instructions on locating vulnerable devices.](../locate.md)

### If your DNS service is on without your knowledge or a valid reason

Do you own a device but don't know why its DNS service is visible to the Internet? This most likely means you do not need the service to be open. See your device instructions on how to disable DNS from being accessible from the Internet. Look for keywords "DNS", "Domain Name Service" or "Name Service". You could also look for a firewall function in your device, that could be used to block access to the DNS service from the Internet.

### If your DNS service is on intentionally

See these instructions from US-CERT for examples on how to harden most common DNS services: <https://www.us-cert.gov/ncas/alerts/TA13-088A>.

You should allow recursive queries only for your own devices.
