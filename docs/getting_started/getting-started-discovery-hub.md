---
title: "Getting Started - Discovery Hub"
sidebar_position: 3
---

Welcome to Device42, we are glad you're here! The Discovery Hub service is a quick and easy way to understand what you have in your on-prem environment. This is a springboard for creating Discovery Jobs and getting fully acquainted with the product. Discovery Hub will run a scan against your environment, based on the inputs you provide. We will then categorize that data from which you can begin discovery within your environment(s)! Note that current Discovery Hub is only for on-prem environments.

## Getting Started

You will need to know the IPs, IP ranges or CIDR blocks you wish to scan against. If you don't have all that data to start, you can simply create additional scans later. Under the Discovery tab, select Discovery Hub.

![](/assets/images/image-10-700x381.png)

To create a new scan, select "New" in the column on the left. You will need to name the scan and select which Remote Collector (RC) or Collectors to run against. Enter the IPs you wish to scan and click start.

![](/assets/images/Screenshot-at-May-02-20-24-59-700x380.png)

Once the scan begins, the bar at the top will track your progress. The length of time required to run the scan depends on the number of targets entered, roughly 2 minutes/IP for ranges with over 50k targets.

![](/assets/images/Screenshot-at-May-02-20-26-16-700x381.png)

Now you have a completed scan! Six categories of data will be displayed on the summary screen: Windows, Linux, Network Devices, Hypervisors, Other/Unknown, and Unreachable. Other/Unknown means something was returned in the scan but it cannot be categorized. Unreachable means nothing was returned from those targets. This category can be large, so the data is not displayed for that section.

![](/assets/images/Screenshot-at-May-02-20-27-06-700x381.png)

### Notes

- We recommend running one scan at a time, at least initially, so as not to inundate the network.
- At this time, if a scan is stopped it cannot be resumed and a new scan would need to be created to finish the scanning those remaining targets.
- These scans are completed with nmap data so there could be some variability in the data as it fingerprints the OS.
