# Exposed Service

A computer with an Internet-facing IP address at your organization has a database, remote administration or
a filesharing service exposed to the Internet. Attackers may try to abuse these exposed services to steal data or
to gain access to the server. The exposed service should be verified and isolated, if it does not need to be exposed
to the public.

## Problem description

Based on services visible to the Internet, a server, workstation or laptop in your network has a common database, remote 
administration or file sharing port open to the public. 

Databases, remote administration interfaces or file shares should not be visible directly to the Internet, unless 
there is a very specific need. Databases accidentally left open to the Internet are a common cause for severe data breaches.

Even if the system is carefully configured to require proper access control, any new vulnerabilities in the exposed services may
be abused by attackers before security updates are released and installed.

## Verifying the issue

You can check if Shodan.io has identified your exposed service with the following query. Replace the example IP address in the query 
string with your server IP. 
* https://www.shodan.io/search?query=127.0.0.1

## Suggestions for repair

1. Find out if the server is still being used. If it is not needed any more, decommission it.
2. If the server cannot be decommissioned, verify if its services really need to be publicly visible to the Internet.
3. Make sure that the exposed service is properly access-controlled, at a minimum with a non-default username and password.
4. If the services do not need to be visible to the Internet, block access with a firewall and/or configure the service to only accept connection attempts from within your own organization.
5. If remote connectivity is necessary, consider if the remote connection could be arranged securely. For instance, consider requiring a VPN.
6. Check from logs if the server has been accessed without authorization.

## Further considerations

* Does the server contain confidential information for you or your customers?
* Is the server properly access-controlled? 
* Have any passwords relating to the server been available anywhere (please note e.g. default passwords, or passwords that might have leaked to the public through application code accessing the server)?
* How are you ensuring that all available security updates for the server are regularly installed and maintained?
* How are you monitoring possible exploitation attempts against the server?
* If the server is running a database, can it be remotely accessed without encryption?

## Protecting against future incidents

1. When designing a new service, try to limit its exposure to a minimum. 
2. Allow access to the service only from a limited set of trusted IP addresses or networks.
3. Never expose a service with a default username or password to the public. Use a strong username and password for authentication. 
4. Allow access to the service only after some form of authentication and authorization (e.g. a VPN or single sign-on). Require users to use multi-factor authentication, if possible.
5. Make sure that you have named service owners who follow vulnerability reports and install updates whenever new vulnerabilities are announced.
6. Continue to identify exposed services automatically. Decommission any servers which are no longer needed.
