---
title: "Affinity Groups"
---

## Affinity Groups Overview

Affinity Groups assists customers and partners with application grouping activities based on observed communication patterns.

### Pinned Services

Affinity Groups uses the concept of pinned services. Pinned services represent the ‘core dependencies’ of your infrastructure, and discovered database services are automatically pinned by default. Affinity group impact charts are only created for servers with pinned services, and you are free to pin other services you consider important, as well.

After discovery has been run within your environment _(we recommend a 30-day minimum time period)_, the detailed application dependency information that has been collected should now be ready to use with Affinity Groups. Collected information includes service names and communication details, and affinities are then calculated based on client communication to a particular service listening on a TCP or UDP port and server process. Users define services critical to their use case then affinity groups are processed. The result is a visualized grouping of communication patterns.

## Using Affinity Groups - How-To

From the Device42 menu, navigate to _Applications > Affinity Groups._

From this screen, enter your search criteria and/or simply click the _Chart_ link next of the Affinity Group you'd like to view. Affinity Groups are automatically calculated every night at 2AM for all 'pinned' services.

![](/assets/images/WEB-721_Affinity_Groups_Pic1.png)

Application Component Categories are now also used in Affinity Groups. Any Application Component Categories associated with a device used to create an Affinity Group will be associated with the Affinity Group. You can now quickly drill down to your discovered database impact Affinity Groups or web server dependency Affinity Groups at the click of a button.

![](/assets/images/WEB-721_Affinity_Groups_Pic2.png)

### Pinning other 'Core' services

Affinity groups are only generated for your 'Core services', which are those services that have been 'Pinned' in Device42. If you don't see the Affinity Group Impact Chart you're looking for, ensure you've pinned the relevant services. Navigate to your critical 'core services' and pin them:

![](/assets/images/Screen-Shot-2022-05-29-at-7.47.50-PM.png)

### Database Services - Pinned by default

Database services are considered 'core services' and are therefore pinned automatically. Notice the green checkmarks indicating they are already pinned:

![](/assets/images/WEB-721_Affinity_Groups_Pic4.png)

### Viewing Affinity Group Impact Charts

Simply click the _Chart_ link next to an Affinity Group name to display the associated Affinity Group Impact Chart. Use the controls at the left of the charts to highlight or search for Affinity Group Dependencies in the chart.

![](/assets/images/18.04.00_affinity-groups-chart-1.png)  
Note that Application Components are now displayed as stand-alone nodes, and are connected to any associated services and/or devices via dotted lines. You can also now run a _Service Dependencies Report_ for Affinity Groups from the Affinity Group chart view page. The Services Dependencies report details all the communications for devices within an Affinity Group.

### Affinity Group Timelines

Affinity Group timelines make it easy to see how a given Affinity Group changed over time. Changes to both Devices and Services are marked along the timeline, indicating when devices and/or services were added or removed from each Affinity Group. The timeline can also be used to quickly navigate to specific dates of interest, including those when changes occurred.

![](/assets/images/18.04.00_affinity-groups-timeline-1.png)

 Click on a vertical point in the timeline at the bottom of the chart to see a summary of changes. Click _Show Details_ to see more information about the changes.

![](/assets/images/18.04.00_affinity-groups-timeline-2.png)

### Affinity Group Calculations - Navigating up and down to next device

With Affinity Group calculations users can view an Affinity Group calculation from just about any device — Simply open the hamburger menu, and choose “Affinity Group Calculation”. Furthermore, within the Affinity Group calculation, clicking on the plus \[+\] button(s) next to the top or bottom most device in a chain, users can jump to view the “next level” calculation, either above or below. This allows a drill-up or drill-down navigation from a database server, for example, all the way to a client, or conversely from a client machine all the way down to the starred service originating the service being accessed.

Note the highlighted \[+\] plus signs in the below image:  
![](/assets/images/WEB-721_Affinity_Groups_Pic7.png)

![](/assets/images/18.04.00_affinity-groups-device-calc-page.png)

## Add Affinity Groups to a Business Application

You can now use a new command on the Affinity Group list page to quickly and easily add multiple affinity groups to an existing or new business application. Simply click up to five affinity groups on the list page and select _Add Affinity Groups to Business Applications_ from the Actions menu.

![](/assets/images/WEB-721_Affinity_Groups_Pic9.png)

Select the Business Application you want, or add a new one, and click _Add objects to the Business Application_.

![](/assets/images/WEB-721_Affinity_Groups_Pic10.png)

The Affinity Groups added will be visible on the Business Application canvas. The Devices in each Affinity Group added will have their own color. There are up to five different colors used to help indicate which devices came from which Affinity Group.

![](/assets/images/WEB-721_Affinity_Groups_Pic11.png)
