# Abandoned Server

A computer with an Internet-facing IP address at your organization seems to be running an old operating system,
which no longer receives security updates. The system may be vulnerable and should be decommissioned or upgraded.

## Problem description

Based on version details of services visible to the Internet, a server, workstation or laptop in your network is running
an out-of-date operating system. The operating system version has reached its end-of-life (EOL) phase, support for it has
ended, and security updates are no longer released for it. You should assume that the server already contains unpatched
vulnerabilities that an attacker can exploit, and continues to accumulate more vulnerabilities as time goes on.

## Verifying the issue

On Linux systems, the following commands can be used to check which operating system version and release the affected computer
is running.

Debian/Ubuntu and derivatives:

```#sh
$ lsb_release -a
Distributor ID: Ubuntu
Description:    Ubuntu 22.04.2 LTS
Release:        22.04
Codename:       jammy
```

RedHat/CentOS and derivatives:

```#sh
$ hostnamectl
...
Operating System: CentOS Linux 7 (Core)
```

On Windows systems, you can check the operating system release version with this command:

```#sh
C:\> systeminfo
...
OS Name: Microsoft Windows 10 Enterprise
OS Version: 10.0.19045 N/A Build 19045
```

The following links explain support timelines and EOL dates for the most common operating system releases.
For other operating systems and versions, you can find the information online easily by searching for "OS name"
(e.g. "OpenBSD") and "EOL" or "end-of-life".

* Debian: <https://wiki.debian.org/DebianReleases>
* Ubuntu: <https://wiki.ubuntu.com/Releases>
* CentOS: <https://en.wikipedia.org/wiki/CentOS#End-of-support_schedule>
* Red Hat Enterprise Linux: <https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux#Product_life_cycle>
* Windows Server: <https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions#Server_versions>

## Suggestions for repair

1. If the server or workstation is not actively used or needed anymore, decommission it.
2. If the server is still needed, replace it with a completely reinstalled server with a currently supported operating system.
3. If you cannot replace the server with a freshly installed one, upgrade the operating system in place to a currently supported version. Please note that in this case known vulnerabilities may already have been abused and the system may be compromised.  

## Further considerations

* Is the finding valid, and the operating system version is no longer supported?
* Is the computer a server, a workstation or a laptop?
* Does the computer contain information that should not end up in the wrong hands?
* Has the computer contained such information at some point in the past?
* If the computer is a server, is it actively used, or can it be decommissioned?

## Protecting against future incidents

1. Make sure that you use operating system versions that are actively supported.
2. Whenever a new operating system version is released, upgrade your systems before the old version reaches its end-of-life phase.
3. Make sure that you have named service owners who follow vulnerability reports and install updates whenever new vulnerabilities are announced.
4. Continue to identify and decommission old legacy servers which have reached their end-of-life and which are no longer needed.
