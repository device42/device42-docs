---
title: "TCP Port Scan Autodiscovery"
sidebar_position: 31
---

## TCP Port Scan Autodiscovery

TCP Port Scan autodiscovery helps speed up autodiscovery by pre-scanning the specified range of IP Addresses. Device42 can determine what machines exist, what ports the machines have open, and whether they are running *nix or Windows. When the scan is complete, Device42 will utilize the resultant TCP Scan data to either create or update an autodiscovery job for the qualifying IPs.

Select **Discovery > TCP Port Scan** from the menu and then click **Add TCP Port Scan** from the TCP Port Scan list page.

* * *

![](/assets/images/WEB-762_TCP-add-new-1.png)

![](/assets/images/WEB-762_TCP-add-new-2.png)

![](/assets/images/WEB-762_TCP-add-new-3.png)

## Using TCP Port Scan to Create New Autodiscovery Jobs

The result of a TCP Port Scan is itself a new autodiscovery job.

While creating a new TCP Port Scan, you can provide the servers range in any supported format and specify which Remote Collector with Windows Discovery Service (WDS) you want to run the scan on. In addition, you can provide all the settings you want the *nix or Windows autodiscovery job to be created with. This will create the appropriate autodiscovery job for you with the provided naming template and specified settings, and will continue to maintain the list of servers based on the results of each TCP port scan run.

![](/assets/images/WEB-762_TCP-view-1.png)

![](/assets/images/WEB-762_TCP-view-2.png)

![](/assets/images/WEB-762_TCP-view-3.png)

Note that new secrets added to TCP port scans will not be added to their corresponding hypervisors, *nix, or win discovery jobs.

## Run Now or Schedule

You can schedule TCP Port scans similarly to all other autodiscovery jobs.

![](/assets/images/WEB-762_TCP-list-page-run-now.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/WEB-762_TCP-list-page-add-schedule.png)

Select **Add another Autodiscovery Schedule** when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: Newly created jobs will not run on the first day they are created to prevent an unintended large number of jobs from running initially. If you would like to run a job after its initial creation, simply select the **Run Now** button next to the job after creation.

:::note
Setting the schedule on a TCP Port Scan job schedules the TCP Port Scan Job itself, not the autodiscovery jobs that are created as a _result_ of that TCP Port Scan.
:::
