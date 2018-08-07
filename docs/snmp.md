# Open SNMP service

## Problem description

SNMP is a veteran of Internet services from the 80's. This service should not be open to the Internet from your devices. If it is open, anyone could find out information about your devices at your IP address. And that's not even all of it!

The SNMP service is also handy for Internet bad guys when they make denial-of-service attacks. They can amplify their attacks using the SNMP service. If you have heard of denial-of-service attacks, this is one of the common services used to create those attacks.

When a bad guy uses your SNMP service to launch an attack towards someone else, the actual victim of the attack sees the attack coming from your IP address. SNMP is great for bad guys, and it can bring bad reputation to you if an attack happens.

## Suggestions for repair

First of all you need to identify the device which has the vulnerable service open. [Please read our instructions on locating vulnerable devices.](./locate.md)

When you have located the vulnerable device, we recommend disabling the service from it. Search for instructions from the Internet with the keywords `disable snmp` and your device brand and model, for instance: `disable snmp apple airport`

Sometimes you may be able to only find instructions on how to enable the SNMP service in your device. If this happens, just perform the exact opposite actions and disable the service - usually you can enable and disable the service from the same location in your device's administration interface.

If the SNMP service is on intentionally and you want to keep it that way, at least block access to it from the Internet at your firewall or home router.
