# Expired Certificate

A TLS certificate issued to a host at your organization has expired. The certificate has not yet been renewed.

## Problem description

Publically available Certificate Transparency logs contain information on all TLS certificates that have been generated 
into use. According to those logs, a certificate assigned to a host in your organization has expired, and it has not yet been 
renewed. When a certificate expires, services relying on TLS on that host no longer work correctly, and those services may 
not be reachable by their intended users.

## Verifying the issue

You can use a public Certificate Transparency logs search engine such as crt.sh to check the status of your certificate. 
Replace the hostname in the query string with your hostname. 
* https://crt.sh/?q=host.example.com

## Suggestions for repair

1. Check if the host and service with the TLS certificate is still in active use. If the server is no longer needed, decommission it.
2. If the service is in active use, find out who is responsible for renewing TLS certificates for your organization. 
3. Ask them to renew the TLS certificate and to install the new certificate in place.

## Protecting against future incidents

1. Monitor your TLS certificates actively for expiration. 
2. Renew your actively used certificates automatically, if possible. 
3. Make sure that you have named service owners who are responsible for maintaining certificates on their systems. 
4. Decommission legacy servers when they are no longer needed.
