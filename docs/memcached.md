# Open memcached service

## Problem description

Have you read the news? Internet bad guys broke their previous record of denial-of-service attack effectiveness on Feb 28, 2018. This record-breaking attack was made by abusing the Memcached services of innocent third parties.

Here's one report of this rather questionable record attack: https://thehackernews.com/2018/03/biggest-ddos-attack-github.html

Amplification attacks abusing services that run on top of the UDP protocol are common. There is also another issue with Memcached, as it does not support authentication outsiders can tamper with the service data. (Source: https://www.shadowserver.org/wiki/pmwiki.php/Services/Open-Memcached)

If you want to understand better how these kinds of so-called amplification attacks work, please see [here](./categories.md#amplification-attacks).

## Suggestions for repair

Block access to the service from the Internet by blocking incoming UDP port 11211 at your firewall. If you do not need the Memcached service to be on, disable it.

You can find good instructions by searching for the keywords "how to disable memcached". To refine the results even further, add your device, operating system or name of Linux distribution to the search terms.

We have also collected some links to companies offering assistance in fixing these kinds of issues: https://plus.google.com/collection/wu6ZWE

## Data source

Observation: ShadowServer https://www.shadowserver.org/ – Instructions: Badrap https://badrap.io/
