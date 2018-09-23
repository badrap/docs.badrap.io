# MikroTik Router Hijacked and Stealing Your Information

## Problem description

Your network has very likely a MikroTik router that has been hacked and hijacked to perform malicious actions. In April 2018, a security vulnerability involving MikroTik routers was published. The vulnerability was patched by the device vendor and updated software was released to fix the issue. However, not every user heard about this vulnerability or updated their device software.

During summer 2018 MikroTik routers which were not updated were hacked and taken over by attackers. The attackers started to use the hacked devices to eavesdrop on users' traffic, to steal personal and financial data, and to perform computing tasks such as mining cryptocurrencies.

Security researchers investigated these hacks and identified patterns how these devices can be identified in the Internet. In August 2018, Netlab Security Research Team 360 made a global search for all publically visible hacked devices. You can read more about this research in [their blog post](http://blog.netlab.360.com/7500-mikrotik-routers-are-forwarding-owners-traffic-to-the-attackers-how-is-yours-en/). Their research data contains the IP addresses that these hacked devices were using between August 23-24, 2018. Your IP address was found in this dataset among the devices that send users' network traffic information to attackers.

If you have a MikroTik router and its IP address has not changed between Aug 23 and now, you are likely affected and your device is hacked. If you have a MikroTik router and its IP address has changed between Aug 23 and now, you might not be hacked. The only way to make sure is to reset the device to its factory configuration and to update the device software to the latest available version from MikroTik.

## Suggestions for repair

First of all you need to identify the device from your network. [Please read our instructions on locating vulnerable devices.](../locate.md) Since this vulnerability affects only MikroTik routers, it is very likely you can find this device very easily simply by looking for the correct vendor name.

After you find the correct device, we recommend you to reset it to its factory settings. If your device is compromised, it is usually too complex to try to clean the system without a full reset.

After you reset the device or reinstall the operating system, you should install all of the latest software updates to make sure your device will not be compromised in the same way again.

You can get the latest software update and instructions for updating on the [MikroTik website](https://mikrotik.com/download). From the device administration interface, you can upgrade the software by clicking on "Check For Updates" in QuickSet menu or from the System > Packages menu. Don't forget to reset the configuration settings after the upgrade, so that the malicious configuration is erased.
