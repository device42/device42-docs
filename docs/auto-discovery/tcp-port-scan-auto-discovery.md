---
title: "TCP Port Scan Autodiscovery"
sidebar_position: 31
---

## TCP Port Scan Autodiscovery

TCP Port Scan autodiscovery helps speed up autodiscovery by pre-scanning the specified range of IP Addresses. Device42 can determine what machines exist, what ports the machines have open, if they are running \*NIX or Windows, and most importantly, if they don’t exist. When the scan is complete, Device42 will utilize the resultant TCP Scan data to either create or update an autodiscovery job for the qualifying IPs.

Select _Discovery > TCP Port Scan_ from the menu and then click _Add TCP Port Scan_ from the TCP Port Scan list page.

* * *

![](/assets/images/WEB-762_TCP-add-new-1.png)

![](/assets/images/WEB-762_TCP-add-new-2.png)

![](/assets/images/WEB-762_TCP-add-new-3.png)

## Using TCP Port Scan to Create New Autodiscovery jobs

The result of a TCP Port Scan is itself new autodiscovery jobs.

While creating a new TCP Port Scan, you may provide the servers range in any supported format and specify which Remote Collector with Windows Discovery Service (WDS) you want to run the scan on. In addition, you can provide all the settings you want the \*nix or Windows autodiscovery job to be created with. This will create the appropriate auto-discovery job for you with the provided naming template and specified settings, and will continue to maintain the list of servers based on the results of each TCP port scan run.

![](/assets/images/WEB-762_TCP-view-1.png)

![](/assets/images/WEB-762_TCP-view-2.png)

![](/assets/images/WEB-762_TCP-view-3.png)

You can schedule TCP Port scans, similarly to all other autodiscovery jobs.

**Note:** Setting the schedule on a TCP Port Scan job schedules the TCP Port Scan Job ITSELF, NOT the auto-discovery jobs that are created as a _result_ of that TCP Port Scan!

## Run Now or Schedule

![](/assets/images/WEB-762_TCP-list-page-run-now.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/WEB-762_TCP-list-page-add-schedule.png)

Select **Add another Autodiscovery Schedule** from the when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the _Run Now_ button next to the job after creation.
