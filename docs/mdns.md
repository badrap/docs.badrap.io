# Open MDNS service

## Problem description

Is your Internet working badly? Sometimes your service provider is not to blame. Bad guys can use your open MDNS service to launch a denial-of-service attack. As a result, your Internet connection can work really slowly or not at all, and the actual victim of the attack has things even worse.

If you want to understand better how these kinds of so-called amplification attacks work, please see [here](./categories.md#amplification-attacks).

## Suggestions for repair

First of all you need to identify the device which has the vulnerable service open. [Please read our instructions on locating vulnerable devices.](./locate.md)

When you have located the vulnerable device, we recommend disabling the MDNS service from it. Search for instructions from the Internet with the keywords "disable mdns" and your device brand and model, for instance:

"disable mdns google wifi"

If the MDNS service is on intentionally and you want to keep it that way, at least block access to the MDNS service from the Internet at your firewall or home router.

We have also collected some links to companies offering assistance in fixing these kinds of issues: https://plus.google.com/collection/wu6ZWE
