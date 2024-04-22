---
title: "Application Component Templates"
sidebar_position: 1
---

## Introduction

You can use Application Component Templates to create and define your own application components based on services discovered by Device42 [Hypervisor /*nx/Windows](/auto-discovery/windows-and-hyper-v-auto-discovery.mdx) autodiscovery jobs run against *nix and Windows platforms. Device42 adds any application components created based on your templates to the Application Components list page.

## View Application Component Templates

Select _Applications > Application Component Templates_ from the Device42 menu to display the templates list.

![](/assets/images/Screen-Shot-2022-08-15-at-8.09.50-AM.png)

Device42 displays the Application Component Templates list page.  On this page, you can _Search by template name_, or filter the list by _Application Category_, _Enabled, Platform, or Associated Service_ and also click _+More_ to add additional filters.

![](/assets/images/Screen-Shot-2022-08-15-at-8.10.58-AM.png)

**Note**: The Application Component Templates list page also includes an _Advanced Search_ option you can use to construct more specific searches. See the [Advanced Search Feature](getstarted/advanced-search-feature.md) documentation page for instructions.

![](/assets/images/WEB-757_Pic4.png)

Click on a template _Name_ to see details about that template. Click _Edit_ at the upper right to change or update an existing template.

![](/assets/images/Screen-Shot-2022-08-15-at-8.18.59-AM.png)

## Add an Application Component Template

Click _Add_ at the upper right of the template list page to add a new template.

![](/assets/images/Screen-Shot-2022-08-15-at-8.22.28-AM.png)

 

![](/assets/images/Screen-Shot-2022-08-15-at-8.24.27-AM.png)

### Application Component Template Configuration

- Enter a _Template Name_ (required).
- Select whether the template should be _Enabled_ (Yes/No) for use in autodiscovery – this allows you to create a template but enable it only when you are ready to use it or disable it without having to delete it.

### Characteristics

- Select the _Rule Type_ (Windows/\*Nix) to select which platform Device42 autodiscovery will search for the service(s) on which the application component will be based.
- Select, enter, or add (plus sign) the _Service_ autodiscovery will look for to create the application component (required).
- Enter a port in the _Only services listening on this port_ field to optionally specify the service port to further filter services that are listening on the specified port. Leave the field empty to ignore the port.
- You can enter a text string pattern in the _Only services containing the following Command Argument text:_ field to compare against Service Command Arguments on discovered service instances to create application components more specific to a service; discovery only generates application components for services whose arguments contain that string.

![](/assets/images/App-Comp-Temp-add-2.png)

### Creation Rules

- Enter an _Application Name Pattern_ to specify how the application component will be named. You can enter static text for the name and also use the following variable to construct the application component name.

    %(device\_name)s, %(discovered\_listening\_ip)s, %(listening\_port)s, %(app\_template\_name)s

- Select, enter, or add (plus sign) any _Related Software Components_ or _Related Services_ that should associated with the application component. For Related Service, you can specify _Only services listening on this port_.
- Enter a path in _Configuration File Location_ to specify the directory in which Device42 should look for configuration files.
- Enter a name or partial name in the _Filename Filter (optional)_ field to identify the configuration file(s).
- Select _Traverse subdirectory_ (Yes/No) to have Device42 traverse the Configuration File Location directory.

### Device42 Details

- Select the _Category_ for the application component ( e.g., Application Layer, Database, Load Balancer, Other, Web Server).
- Enter _What is impacted_ by the application component.
- Select or add the _Responsible Customer or Department_.
- Enter any _Tags_ you want for the application component.

![](/assets/images/App-Comp-Temp-add-3.png)

### Custom Fields

Select or enter values for any _Custom Fields_ you want for the application component. You can also add _Notes_ for each Custom Field.

Click _Save_ at the upper right of the Add/Edit page to save the template and add it to the application component template list.

## Delete Application Component Templates

Select one or more templates from the list page, select _Delete with Detailed Confirmation_ from the Actions menu, and then click the hammer icon.

![](/assets/images/App-Comp-Temp-delete.png)

Click _Delete_ to delete the template or _Cancel_ to keep it.

![](/assets/images/App-Comp-Temp-delete-2.png)

## Autodiscovery Options

The Windows /  \*Nix autodiscovery jobs you run will check to see which application component templates are enabled and use them to create application components. When you create your discovery jobs, be sure to select the following options in the _Software and Applications_ tab:

- Discover Software
- Discover Services
- Discover Applications

![](/assets/images/App-Comp-AD-Job-Software-Opts.png)
