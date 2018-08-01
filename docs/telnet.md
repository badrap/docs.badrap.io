# Open Telnet service

## Problem description

Telnet, that age-old Internet service, which should no longer even exist - let alone be open to everyone on the Internet! An open Telnet service tells you about three possible problems in your network:

1) If someone actually uses it for something, all of the Telnet traffic is transmitted unencrypted, which means that bad guys may be able to eavesdrop what is done over the Telnet connection. Bad guys who listen in are also able to hijack your device and use it for their own purposes. 

2) If it is a surprise to you that the Telnet service is on, your device also may have an easily guessable default password that bad guys can use (or have already used) to take control of your device. 

3) A device which has an open Telnet service very likely has many other security vulnerabilities. Modern, well-designed devices with security updates usually do not use Telnet anymore. 

## Suggestions for repair

First of all you need to identify the device which has the vulnerable service open. Please read our instructions on locating vulnerable devices here: https://staging.badrap.io/locate

When you have located the vulnerable device, we recommend disabling the Telnet service immediately. Search for instructions from the Internet with the keywords "disable telnet" and your device brand and model, for instance:

"disable telnet telewell tw-ea501"

After you disable the Telnet service, you should at least change the administrator password for your device, or consider resetting your device to factory defaults (and then disabling Telnet again if necessary) in order to protect your device from bad guys who have already potentially abused your device.

We have also collected some links to companies offering assistance in fixing these kinds of issues: https://plus.google.com/collection/wu6ZWE

## Data source

Observation: ShadowServer https://www.shadowserver.org/ – Instructions: Badrap https://badrap.io/
