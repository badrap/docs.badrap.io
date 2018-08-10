# Open SMB service

## Problem description

Our data source has detected in your network an open and unprotected SMB service, which anyone can access from the Internet.

SMB is a common Internet protocol used to share access to files and printers in home and office networks. In general these kinds of network shares should be limited to work only from the local network, not from the Internet. SMB connections are unencrypted by default, and over the years countless security vulnerabilities have been found in services using SMB.

An open SMB service can share the contents of your hard drives including your personal documents and images to the whole world. If your SMB service happens to also contain vulnerabilities, bad guys can use it to take control of your computer and use it to launch further attacks inside your network.

## Suggestions for repair

First of all you need to identify the device which has the vulnerable service open. [Please read our instructions on locating vulnerable devices.](../locate.md)

When you have located the vulnerable device, we recommend disabling the SMB service from it. Search for instructions from the Internet with the keywords `disable smb` and include your device or operating system version to further refine the search results.

If the SMB service is on intentionally and you want to keep it that way, at least block access to the service from the Internet at your firewall or home router.
