---
title: "Certificate Autodiscovery"
sidebar_position: 8
---

# Add SSL Certificate Discovery Job

Device42 supports autodiscovery of SSL certificates for easy tracking within Device42.

You can set up a new certificate discovery job by going to _Discovery → Certificates_, and then clicking _"Add Certificate Autodiscovery Spec"_. You can specify a range of addresses and one or more ports to check for the certificates. You can also set a schedule at this time to keep the discovery jobs running.

SSL Certificate Discovery Configuration ![add SSL cert discovery job](/assets/images/add_ssl_cert_autodiscovery.png)

If a certificate is found on an IP address already associated with a device in Device42, the certificate will also be associated with that device automatically. Certificates that are discovered will then be available under Software>Certificates and each device with a particular certificate will be listed in that Certificate's detail page, or in Certificate Instances.

# SSL Certificate Cipher Suite Discovery

Device42 can discovery SSL cipher suites as part of certificate autodiscovery. If you'd like to discover cipher suites, simply check the 'Find cipher suites supported by the server" checkbox:

![discovery ssl cipher suites](/assets/images/cipher_suite_discovery_SSL_certificates.png)

Choosing **"discover cipher suites" can result in a significant slowdown of SSL certificate discovery**. If this is causing issues, or if you'd simply like to speed up your regular scheduled SSL Certificate discovery job, simply disable \[uncheck\] "Find cipher suites supported by server".

## Certificate Discovery with Multi-tenancy Enabled - Warning

**Note that certificate discovery can fail if [MultiTenancy](/multitenancy-overview/) is enabled** and the discovery job targets a VRF group whose subnet doesn't exist within Device42. If you encounter this behavior, simply create the subnet that you are discovering within Device42 (or run a network discovery first, as recommended by the [best practices guide](/auto-discovery/autodisc-best-practices/)).

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
