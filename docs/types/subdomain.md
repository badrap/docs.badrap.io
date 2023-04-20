# Subdomain Takeover Risk

Your domain has a stale DNS entry (a "subdomain") pointing to a third-party provider, which may be open to abuse.

## Problem description

A CNAME entry in your DNS records points to a third-party address, which apparently is not used anymore. 

A potential attacker may be able to take over your subdomain by starting their own service inside the third-party service provider.

If the attacker succeeds, they can exploit the situation as follows:
 * Typical: the attacker uses your brand and domain to legitimize sharing of malicious content (malware, or material for scams).
 * Advanced: the attacker can exploit the services under your domain by bypassing the "same origin protection" used in modern browsers. In practice, the attacker injects their own code to the browser of a user using a service under your domain. The browser agrees to execute the code as it comes from the same domain where the attacked service resides.

More information about subdomain takeovers: 
 * https://0xpatrik.com/subdomain-takeover-basics/
 * https://developer.mozilla.org/en-US/docs/Web/Security/Subdomain_takeovers

## Verifying the issue

You can use DNS lookups to verify the issue. For example, you can use the "dig" command in a terminal in Linux or MacOS.

### Normal situation, before a subdomain takeover issue exists

Your subdomain CNAME record points to a third-party service provider. The provider has an A or AAAA record that points to a valid IP address.
```
$ dig mysubdomain.example.com
[extra text removed]
;; ANSWER SECTION:
mysubdomain.example.com.    281  IN  CNAME subdomain.example-cloudserviceprovider.com
subdomain.example-cloudserviceprovider.com    120  IN  A <IP address>
```

### Current, vulnerable situation

Your subdomain CNAME record points to a third-party service provider, but the actual service at the provider has been shut down. The provider has removed the A or AAAA record. The IP is available for a new user.
```
$ dig mysubdomain.example.com
[extra text removed]
;; ANSWER SECTION:
mysubdomain.example.com.    281  IN  CNAME subdomain.example-cloudserviceprovider.com
[extra text removed]
```

### After remediation

Once you have removed the stale subdomain from your DNS records, the rows in "ANSWER SECTION", including "CNAME", are completely missing from the output.
```
$ dig mysubdomain.example.com
[extra text removed]
;; QUESTION SECTION:
mysubdomain.example.com.    IN  A
[no ANSWER SECTION, extra text removed]
```

## Suggestions for repair

1. Double-check that the subdomain is not used anymore.
2. Remove the subdomain CNAME record from your DNS.
3. You can investigate how likely it is that attackers can launch their own service in the third-party address that your CNAME record points to. 
4. Whatever the result is, we recommend cleaning unused records from your DNS. In other words, investigation provides little added value.

## Protecting against future incidents

1. When you set up a new service, first create a virtual host or cloud service for it. After that, set up your DNS CNAME entry. 
2. When you decommission a service, first remove its DNS CNAME entry. After that, decommission the virtual host or cloud service. 
