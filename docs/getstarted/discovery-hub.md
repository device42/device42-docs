---
title: "Discovery Hub: scoping and onboarding"
sidebar_position: 3.5
---

# Discovery Hub: Scoping and Onboarding Support

The goal of Discovery Hub is to make onboarding into Device42 as fast and simple as possible. We designed it with three central tenets in mind: that a new user needs to be guided through a new UI, that we need to show customers what they have to discover and that users need to see value in their tooling immediately. This document will walk you through how Discovery Hub can help with those points.

You can consider Discovery Hub to be your “square one” in using and navigating Device42. Using IPs, IP ranges or CIDR blocks, we will scan your network and pull in information. We group the returned information into 6 categories and, when possible, we will also give information about the returned device such as the OS type or the Fully Qualified Domain Name (FQDN).

### Setting up your First Discovery Hub Scan

Log into the Device42 UI and navigate to the Discovery Menu. The first option is Discovery Hub.

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-01.png)

To set up a Discovery Hub scan, you need to name the scan and select the Remote Collector[^1] that we will run against. You also need to know the IPs, IP ranges or CIDR blocks for your target environment. 

You enter the IP information in the box highlighted in the image below and click the + sign. You can enter as many targets as you like into the box, but do keep in mind that the more targets, the longer the scan will likely take. 

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-02.png)

Once you have entered in the information, click the green start button. 

The scan will start immediately. As pictured below, you will see the green start box, a percentage ticker showing you completion status and the 6 categories of assets: Windows, Nix, Network Devices, Hypervisors, Other/Unknown and Unreachable.

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-03.png)

### Understanding the Categories

Windows, Nix, Network and Hypervisors are mostly self explanatory. However, some network devices which run Linux under the hood can be miscategorized. We have implemented Configuration Options that can help ensure these items group correctly. Other/Unknown devices either don’t fall neatly into one of the four main categories or nmap doesn’t have a mapping to the device. Unreachable indicates that nothing was returned from that IP. 

### Prerequisites:

A note on Nmap:  While Nmap attempts to produce accurate results, keep in mind that all of its insights are based on packets returned by the target machines (or firewalls in front of them). Such hosts may be untrustworthy and send responses intended to confuse or mislead Nmap.

### Configure Network Scan Options

Optionally, you may edit the speed - and subsequent accuracy - of your scans. Fast scans will run as quickly as possible, while moderate and normal scans will run slower. The relative quickness of the scan is determined by the size of the ranges inputted. 

Alternate matching allows you to determine how far we go in ensuring an accurate match - this is especially applicable for network devices which run an OS under the hood. 

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-04.png)


### Alternate Matching Explained

Nmap returns a list of matches for each accessible target, in order of accuracy percentage. Allowing alternate matching means we will always use the match with the highest accuracy. The accuracy distance is the percentage points of accuracy that will be allowed. By default, alternate matching will be turned on.


### Viewing Scan Results

The scans you have created will be displayed in the left hand column. Once started, a scan can be stopped but cannot be resumed or edited. To view the scope of the scan, click the Setting button in the top right of the screen (highlighted below) and the parameters will display. 

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-05.png)

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-06.png)

Now, you are ready to dig into your results! You can view the entirety of the results or drill into each category. The results will be grouped by CIDR block. When you click into a specific block, you will see the fingerprinted OS and, if found, the Fully Qualified Domain Name (FQDN). 

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-07.png)

From here, you should have a good baseline understanding of your environment. You can continue to add scans to get a complete view or start setting up discovery jobs. Once you begin to set up jobs, you will begin to consume Device42 Core Licenses. You’ll need to make sure you have enough license to cover the jobs or results will be impacted.

### Setting up Discovery Jobs

When setting up jobs, you will need to go by category (Windows devices, Nix Devices, etc). First, select the category and the Remote Collector. Next you can select the IPs, you can select single IPs or the entire CIDR block. 

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-08.png)

Once you’ve selected the fields, the “+ Discovery Job” field can be selected. Once you click that, you will see the job type, the number of targets and licenses needed. You will need to name the discovery job and enter the credentials we should use for discovery. 

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-09.png)

When the job is created successfully, you will see the screen below. You can close the window and go back to your scans, or click the link to be taken to the job page. You can edit job settings from the job page.

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-10.png)

Within the Settings tab of completed Discovery Hub scans, you can see the linked jobs that were created based on those results.

![Discovery Hub menu](/assets/images/discovery-hub/discovery-hub-11.png)

## Conclusion

Discovery Hub allows you to quickly and accurately assess your environment(s). Using this information, you can jump right into using Device42 - getting comfortable within the product and delivering results to your end user fast. Discovery Hub can be used at the beginning of your Device42 journey and revisited as you continue to enhance visibility into your IT estates.

#### Additional details

This information is accurate as of release v18.09.00, with more usability enhancements on their way.

## Notes

[^1]:
     If you haven’t yet set up Remote Collectors, see this [documentation](https://docs.device42.com/getstarted/installation/remote-collector-rc-installation/).

