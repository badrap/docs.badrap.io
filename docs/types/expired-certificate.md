# Expired Certificate

A TLS certificate in your organization has expired recently or is about to expire. The certificate has not yet been renewed.

## Problem description

Publically available Certificate Transparency logs contain information on all TLS certificates that have been generated into use. 

According to the Certificate Transparency logs, a certificate assigned to a host in your organization has expired, and it has not
yet been renewed. When the certificate expires, services relying on TLS no longer work correctly and your server may not be 
reachable by its intended users. 

## Suggestions for repair

1. Check if the host and service with the TLS certificate is still in active use. If the server is no longer needed, decommission it.
2. If the service is in active use, find out who is responsible for renewing TLS certificates for your organization. 
3. Ask them to renew the TLS certificate and to install the new certificate in place.

## Protecting against future incidents

1. Monitor your TLS certificates actively for expiration. 
2. Renew your actively used certificates automatically, if possible. 
3. Make sure that you have named service owners who are responsible for maintaining the certificates for their systems. 
4. Decommission legacy servers when they are no longer needed.
