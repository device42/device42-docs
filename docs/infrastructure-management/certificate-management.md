---
title: "Certificates"
sidebar_position: 5
---

This module enables you to manage your SSL certificates in Device42.

### Viewing Certificates

When viewing a certificate that has been imported, you can now associate and see FQDN, multiple devices, IPs and different validity dates to your certificates. This allows you to have a wildcard certificate and easily see different FQDNs or subdomains associated with it.

### Certificate Autodiscovery

Device42 also supports autodiscovery of certificates.

![](/assets/images/WEB-775_1.png)

Select "Certificates" from the Discovery Menu.

![](/assets/images/WEB-775_2.png)

When creating a certificate Autodiscovery job, simply enter a range of IP addresses and ports to scan and Device42 will scan that range and import and certificates found. If a certificate is found on an IP address already associated with a device in Device42, the certificate will also be associated with that device automatically.

### Certificate List Page

The list page for certificates will show you all certificates discovered in Device42 with validity date information, as well as a graph showing you the days until the certificate expires making it possible to see this information with a quick glance.

![](/assets/images/WEB-775_3.png)

### Viewing Certificates

![](/assets/images/WEB-775_4_a.png)

![](/assets/images/WEB-775_4_b.png)

When viewing a certificate that has been imported, you can now associate and see FQDN, multiple devices, IPs and different validity dates to your certificates. This allows you to have a wildcard certificate and easily see different FQDNs or subdomains associated with it.

### Certificate Instances

In addition to seeing all certificates, you can now see certificate instances - allowing you to see device/ip address relationships for individual certificates. This can be filtered based on device building, service level and customer.

### Certificate Reports

Though you can have multiple valid-to dates associated with a single certificate, Device42 reports still know to alert you based on the oldest date stored for a given certificate.

This allows you to run reports to see which devices you still need their certificates updated, allowing you to see your update progressing — which can prove especially useful with very large deployments.
