# Frequently Asked Questions

## Why did you make this service?

We've worked a long time in information security. A really long time. We've
witnessed the benefits of exchanging security information, and the downsides
of blocking information flows. We know how hard it is for Internet users to
search for their own data from various services. We have friends and
family who roll their eyes about infosec news and wonder if they have vulnerable
devices in their own networks. We want to make exchanging security information
so easy and efficient, that both home users as well as enterprises can
search for their own data easily and find out if they are vulnerable.

## Is there any danger if I search for my own data in your service?

Absolutely not. Information about your personal network assets (e.g. IP 
addresses, email addresses) already exists out in the Internet. By searching 
for your own data through our service, you just search for your own assets 
from existing data sets published by security researchers. We could show the 
results for your assets as soon as you enter our site, but we decided to put 
the search functionality behind a button, so that we do not do anything 
without your explicit consent, and that we can separate users who are really 
interested in our service from random passers-by.

## Why is this a free service?

This is a pilot project, with one intention being to validate if people
are really interested in this kind of service. We've received some private
funding from [ScanABC](https://www.scanabc.com/) as well as some
public funding from [TEKES](https://www.businessfinland.fi). If
you like the service and think we're doing an important job, please use it
as much as you can and tell others about it. This helps us verify our ideas
and to prove that this kind of service is truly needed in today's world.

## Where do the security researchers' warnings come from?

We've started by requesting for data from a few extremely credible and
well-qualified sources which we know really well. These same sources
are used by many other organizations who are interested in security and
vulnerability observations. We are also constantly looking to add more
good-quality sources for vulnerability information. Our current partners
are:

- [Shadowserver](https://www.shadowserver.org/)
- [Fitsec](https://www.fitsec.com/)
- [T-Sec Radar](https://sicherheitstacho.eu/start/main)
- Telia
- [HaveIBeenPwned](https://haveibeenpwned.com)

## Are you monitoring me or my networks?

Short answer: no.

You can find a longer answer in our [privacy policy](./privacy.md).
We improve our service based on usage statistics, just like all other Internet
websites out there. Our difference is that we constantly try to think how we
could improve your privacy even more when using the service.

A quick demonstration about this. We use Google Analytics to collect statistics about
our visitors, just like other web sites. Statistics are important to us, so that
we can improve the service. Here's how you can prevent us from collecting your visitor
analytics.

You can block our analytics by using an adblocker extension in your web browser.
For instance, uBlock Origin is a good extension to use with Google Chrome. For
mobile devices you can use a privacy-oriented browser such as Ghostery or
Firefox Focus. Now that we told you this, please allow our site analytics in
the privacy tool of your choice and block everything else. :)

## If I create an account, will you send me spam?

No way. If you want, you can request automatic notifications on any new
information regarding your IP addresses or email addresses. If any new 
vulnerabilities appear, you will get a notification via email. We also 
may inform you about major updates to the service as well as new features 
that affect your use of the service substantially. You can always remove 
any registered assets from your notifications as well as deny all email 
notifications completely.

## What is the data breach monitoring service (or "Have I Been Pwned integration")?

We started off Badrap by allowing you to search for security information
relating to your important IP addresses. However, IP addresses are just one type 
of important network asset. We have added email addresses as another asset type 
that you can search for and get notified about. For this, we integrate with
security researcher Troy Hunt's data breach search engine Have I Been Pwned. 
It allows you to search for information relating to your email addresses among
publically available data breach datasets. These data breaches may include
in addition to your email addresses other personal data such as passwords, home 
address, telephone number, etc. In addition to IP addresses and email addresses, 
we may add also other asset types in the future - let us know if you have some 
good ideas!

## What is a data breach and what can it contain? 

A data breach usually contains personal data stolen or inadvertently made public
from a closed database. The most typical form of data breach happens when 
you register for a service, the service contains some kind of security
vulnerability or is otherwise inadequately protected, and your personal data 
is copied from the service database. Data breaches typically contain your
email addresses, any other personal data, passwords, and in really severe cases 
even things like credit card details or bank account information. You can read 
more about data breaches from our [instructions](types/databreach.md). 

## How does the Have I Been Pwned search feature work?

The Have I Been Pwned search feature works similarly to what we have been doing
with IP addresses. You register your email address into our service, so that we 
believe you have a right to search for available security information relating to 
it. You may register multiple email addresses, as long as you can verify that 
you have access to those addresses. We then help you search for security 
information relating to your email addresses from available good-quality 
sources. Initially we use security researcher Troy Hunt's widely publicized and 
credible data breach reporting service Have I Been Pwned to tell you about 
publically known security incidents relating to your email addresses, such 
as data breaches. 

The Have I Been Pwned search feature works slightly differently in the sense 
that when you enable the feature for your Badrap user account and register one 
or more email addresses as your assets, we have to submit your registered email 
addresses to the I Have Been Pwned search interface. That service does not log 
any searches or store your email addresses when searched. We explicitly ask for 
your consent and permission if you want to enable the Have I Been Pwned search 
functionality. As with any other services, if you do not trust Badrap or Have 
I Been Pwned to handle your email addresses properly, you can simply choose not 
to enable the Have I Been Pwned search feature.

## How do I register multiple email addresses? 

Your Badrap user account is initially tied to one primary email address, the one 
you provide when you create your account. When you register, we send you a 
verification link to that email address, and you use that link to verify that 
you own that address. After you have created an account, you may add other 
email addresses under your account. In the same way than upon initial registration, 
we will send a verification link to each email address that you want to register, 
and you must use that link to verify you have access to those additional addresses. 
After you register a new email address, it will show up under your user account
as another network asset - the same way that happens when you register multiple
IP addresses. 

## What happens if someone else tries to claim my email address?

You will always get a verification link if anyone tries to register your email
address to Badrap. If you have not registered that email address yourself, 
you can simply ignore the verification request. If you have registered the address
yourself or want to give someone else permission to register your emmail address
on your behalf, you may accept the request. You can also opt to remove your
address from Badrap completely by clicking on the "remove this email address"
link in the verification email. This will remove your email address from Badrap
completely, from yourself and any other user accounts that have registered it. 

## Finally

We hope we were able to answer your questions above!

You can always check the status of your current IP address with any web browser 
without creating an account. However, by registering you can also search for 
information regarding your email addresses and possibly other personal assets in
the future. By registering you can also get notifications regarding your registered 
assets, which means you will automatically receive any new security warnings by 
email. That way you can easily get up-to-date information on all of the different 
IP addresses that you use daily at home, at work, or at the coffee shop, as well 
as new security information relating to your email addresses. 

[Create an account »](https://badrap.io/register)
