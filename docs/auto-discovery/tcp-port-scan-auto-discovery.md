---
title: "TCP Port Scan Autodiscovery"
sidebar_position: 31
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

TCP Port Scan autodiscovery helps speed up autodiscovery by pre-scanning a specified range of IP addresses. Device42 determines which machines exist, which ports the machines have open, and whether they are running *nix or Windows. 

When the scan is complete, Device42 will utilize the resulting TCP scan data to either create or update an autodiscovery job for the qualifying IPs.

## Using TCP Port Scan to Create New Autodiscovery Jobs

First, configure the TCP Port scan. The result of a TCP Port Scan is itself a new autodiscovery job.

Select **Discovery > TCP Port Scan** from the menu and then click **+ Add TCP Port Scan** from the TCP Port Scan list page.

- Provide the FQDN or IP addresses of the **Server(s)** range and specify which **Remote Collector** with Windows Discovery Service (WDS) you want to run the scan on. Optionally, add any servers to exclude from the scan. 

    <ThemedImage
    alt="TCP Port Scan form"
    sources={{
        light: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/add-tcp-port-scan-light.png'),
        dark: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/add-tcp-port-scan-dark.png'),
    }}
    />

- Under **Settings for auto-created Hypervisors/*nix/win AD Task**, provide the settings you want the *nix or Windows autodiscovery job to be created with. This will create the appropriate autodiscovery job for you with the provided naming template and specified settings, and will continue to maintain the list of servers based on the results of each TCP port scan run.

    <ThemedImage
    alt="Auto-create job settings"
    sources={{
        light: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/auto-create-settings-1-light.png'),
        dark: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/auto-create-settings-1-dark.png'),
    }}
    />

    <ThemedImage
    alt="Auto-create job settings"
    sources={{
        light: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/auto-create-settings-2-light.png'),
        dark: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/auto-create-settings-2-dark.png'),
    }}
    />

    <ThemedImage
    alt="Auto-create job settings"
    sources={{
        light: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/auto-create-settings-3-light.png'),
        dark: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/auto-create-settings-3-dark.png'),
    }}
    />

:::note
New secrets added to TCP port scans will not be added to their corresponding hypervisors, *nix, or win discovery jobs.
:::

## Run Now or Schedule

You can schedule TCP Port scans similarly to all other autodiscovery jobs.

Select **Add another Autodiscovery Schedule** when editing the job to create a run schedule for the job.

<ThemedImage
    alt="Schedule TCP scan"
    sources={{
    light: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/tcp-schedule-light.png'),
    dark: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/tcp-schedule-dark.png'),
    }}
/>

Go back to the TCP Port Scan list page and click **Run Now** to run the job right away.

<ThemedImage
    alt="Schedule TCP scan"
    sources={{
    light: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/tcp-run-now-light.png'),
    dark: useBaseUrl('/assets/images/tcp-port-scan-auto-discovery/tcp-run-now-dark.png'),
    }}
/>

Newly created jobs will not run on the first day they are created, to prevent an excessive number of jobs from running simultaneously. If you would like to run a job after its initial creation, click the **Run Now** button next to the job after creation.

:::note
Setting the schedule on a TCP Port Scan job schedules the TCP Port Scan Job itself, not the autodiscovery jobs that are created as a **result** of that TCP Port Scan.
:::
