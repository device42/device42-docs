---
title: "Certificate Autodiscovery"
sidebar_position: 8
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

Device42 supports autodiscovery of SSL certificates for easy tracking within Device42.

:::info
This page is about creating a certificate discovery job. See [Certificates](/infrastructure-management/certificate-management.mdx) for information about managing discovered certificates.
:::

## Add SSL Certificate Discovery Job

Create a new certificate autodiscovery job by navigating to **Discovery > Certificates** and clicking on the **+ Add Certificate autodiscovery spec** button.

<ThemedImage
  alt="Certificate autodiscovery specs"
  sources={{
    light: useBaseUrl('/assets/images/certificate-management/certificate-discovery-list-light.png'),
    dark: useBaseUrl('/assets/images/certificate-management/certificate-discovery-list-dark.png'),
  }}
/>
<br/><br/>

When creating a certificate autodiscovery job, enter an IP address or range of IP addresses and the ports to scan for Device42 to import if found. If a certificate is found on an IP address already associated with a device in Device42, the certificate will also be associated with that device automatically.

<ThemedImage
  alt="Add new certificate autodiscovery job"
  sources={{
    light: useBaseUrl('/assets/images/certificate-management/add-discovery-job-top-light.png'),
    dark: useBaseUrl('/assets/images/certificate-management/add-discovery-job-top-dark.png'),
  }}
/>
<br/><br/>

You can schedule the certificate autodiscovery job at a specific time on selected days by clicking on the **+ Add another Autodiscovery Schedule** button to add a schedule.

<ThemedImage
  alt="Add new certificate autodiscovery job schedule"
  sources={{
    light: useBaseUrl('/assets/images/certificate-management/add-discovery-job-bottom-light.png'),
    dark: useBaseUrl('/assets/images/certificate-management/add-discovery-job-bottom-dark.png'),
  }}
/>

Newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, click **Run Now** next to the job.

### SSL Certificate Cipher Suite Discovery

Device42 can discovery SSL cipher suites as part of certificate autodiscovery. If you'd like to discover cipher suites, check the **Find cipher suites supported by the server** checkbox.

<ThemedImage
  alt="Cipher suites option"
  sources={{
    light: useBaseUrl('/assets/images/certificate-management/cipher-suites-option-light.png'),
    dark: useBaseUrl('/assets/images/certificate-management/cipher-suites-option-dark.png'),
  }}
  style={{ width: '80%' }}
/>

Choosing to discover cipher suites can result in a significant slowdown of SSL certificate discovery. If this is causing issues, or if you'd like to speed up your regular scheduled SSL certificate discovery job, uncheck **Find cipher suites supported by server**.

Navigate to the certificates list pages under **Applications > Certificates** to inspect the discovered certificates. 

### Multitenancy Warning

:::note
Certificate discovery can fail if [multitenancy](/administration/role-based-access-control/role-based-permissions-and-access.mdx) is enabled and the discovery job targets a VRF group whose subnet doesn't exist within Device42.
:::

If you encounter this behavior, create the subnet that you are discovering within Device42 or run a network discovery first, as recommended in [autodiscovery best practices](autodisc-best-practices.md).