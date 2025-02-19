---
title: "Application Component Templates"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## Introduction

You can use Application Component Templates to create and define your own application components based on services discovered by Device42 [Hypervisor /*nx/Windows](/auto-discovery/windows-and-hyper-v-auto-discovery.mdx) autodiscovery jobs run against *nix and Windows platforms. Device42 adds any application components created based on your templates to the Application Components list page.

## View Application Component Templates

Select _Applications > Application Component Templates_ from the Device42 menu to display the templates list.

![](/assets/images/Screen-Shot-2022-08-15-at-8.09.50-AM.png)

Device42 displays the Application Component Templates list page.  On this page, you can _Search by template name_, or filter the list by _Application Category_, _Enabled, Platform, or Associated Service_ and also click _+More_ to add additional filters.

![](/assets/images/Screen-Shot-2022-08-15-at-8.10.58-AM.png)

**Note**: The Application Component Templates list page also includes an _Advanced Search_ option you can use to construct more specific searches. See the [Advanced Search Feature](/getstarted/advanced-search-feature.mdx) documentation page for instructions.

![](/assets/images/WEB-757_Pic4.png)

Click on a template _Name_ to see details about that template. Click _Edit_ at the upper right to change or update an existing template.

![](/assets/images/Screen-Shot-2022-08-15-at-8.18.59-AM.png)

## Add an Application Component Template

Click _Add_ at the upper right of the template list page to add a new template.

![](/assets/images/Screen-Shot-2022-08-15-at-8.22.28-AM.png)


![](/assets/images/Screen-Shot-2022-08-15-at-8.24.27-AM.png)

### Application Component Template Configuration

- Enter a **Name** for the template (required).
- Select whether the template should be **Enabled** for use in autodiscovery – this options lets you enable the template only when you are ready to use it or disable it without having to delete it.


<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/add-app-comp-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/add-app-comp-dark.png'),
  }}
/>

### Characteristics

- Select the **Service Type** (Windows or \*Nix) to select which platform Device42 autodiscovery will search for the service(s) on which the application component will be based.(required).
- Select, enter, or add (plus sign) the **Associated Service** autodiscovery will look for to create the application component (required).
- Enter a port in the **Only services listening on this port** field to optionally specify the service port to further filter services that are listening on the specified port. Leave the field empty to ignore the port.
- For **Match Type**, choose between **Text** or **Regular Expression** option to specify how you want to filter services:
  - You can enter a text string pattern in the **Only services containing the following Command Argument text:** field to compare against Service Command Arguments on discovered service instances to create application components more specific to a service; discovery only generates application components for services whose arguments contain that string.

    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/match-type-text-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/match-type-text-dark.png'),
    }}
    />

  - Enter a regex pattern for more control over how you want to filter services. 

    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/match-type-regex-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/match-type-regex-dark.png'),
    }}
    />

### Creation Rules

![](/assets/images/App-Comp-Temp-add-2.png)

- Enter an _Application Name Pattern_ to specify how the application component will be named. You can enter static text for the name and also use the following variable to construct the application component name.
    ```
    %(device\_name)s, %(discovered\_listening\_ip)s, %(listening\_port)s, %(app\_template\_name)s
    ```
- Select, enter, or add (plus sign) any _Related Software Components_ or _Related Services_ that should associated with the application component. For Related Service, you can specify _Only services listening on this port_.
- Enter a path in _Configuration File Location_ to specify the directory in which Device42 should look for configuration files.
- Enter a name or partial name in the _Configuration Filename Filter_ field to identify the configuration file(s).
- Select _Traverse subdirectory_ (Yes/No) to have Device42 traverse the Configuration File Location directory.

### Device42 Details section

- Select the **Application Category** for the Application Component (that is, Application Layer, Database, Load Balancer, Other, Web Server).
- Enter **What is impacted** by the Application Component.
- Select or add the **Responsible Customer or Department**.
- Enter any **Tags** you want for the application component.


<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/d42-details-section-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/d42-details-section-dark.png'),
  }}
/>

### Custom Fields

Select or enter values for any _Custom Fields_ you want for the application component. You can also add _Notes_ for each Custom Field.

Click _Save_ at the upper right of the Add/Edit page to save the template and add it to the application component template list.

![](/assets/images/App-Comp-Temp-add-3.png)

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


:::tip
Set up Application Groups by defining a Starting Point. See the [Application Groups Calculation Rules](/apps/application-groups/calculation-rules) page for more details.
:::