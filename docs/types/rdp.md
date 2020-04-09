# Open RDP service

## Problem description

Our data source has detected in your network an open and unprotected RDP (Remote Desktop Protocol) desktop-sharing service, which anyone can access from the Internet.

RDP is a common protocol used to share your computer desktop with someone else. It is commonly used to allow family members to administer relatives' computers remotely, or to allow IT support to access and service your computer from somewhere else. 

While there is a valid use for RDP for remote administration, having your computer open for anyone from the Internet is likely not what you want. 

Often RDP is enabled on work computers when they are being used inside the office network. When you move the computer to a home network, as a result of a misconfiguration the RDP service may be left open, and visible to the whole Internet. 

Having the RDP service open may allow attackers to attempt to control your computer and observe what you are doing on your screen. This may allow unauthorized attackers to steal your passwords, confidential work or personal information, bank account details, anything you do on your computer. 

## Suggestions for repair

First of all you need to identify the computer which has the vulnerable service open. [Please read our instructions on locating vulnerable devices.](../locate.md)

When you have located the vulnerable computer, we recommend disabling the RDP service from it. Search for instructions from the Internet with the keywords `disable rdp` and include your operating system version to further refine the search results, e.g. `disable rdp windows 10`.

See [Disable Remote Desktop from Windows 10](https://www.lifewire.com/disable-windows-remote-desktop-153337) for step-by-step instructions for Windows PCs.

If the RDP service is on intentionally and you want to keep it that way, at least block access to the service from the Internet at your firewall or home router. If the service is needed for work, ask your IT support to configure the service in a secure way.
