---
title: "Application Component Templates"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## Introduction

You can use Application Component Templates to create and define your own Application Components based on services discovered by [Hypervisor/\*nix/Windows](/auto-discovery/windows-and-hyper-v-auto-discovery.mdx) autodiscovery jobs run against *nix and Windows platforms. 

Device42 adds any application components created based on your templates to the [Application Components](application-components) list page.

:::info
Application Components now automatically [suggest Application Groups](/apps/application-groups#application-group-list-page) that you can accept or ignore under **Applications > Application Groups > Application Group Suggestions** of the Main Appliance. 
:::

## View Application Component Templates

Select **Applications > Application Component Templates** from the Device42 menu to display the templates list.

<ThemedImage
  alt="App Comp Templates menu"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/menu-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/menu-dark.png'),
  }}
/>

On the Application Component Templates list page page, you can **Search by template name**, or filter the list by **Application Category**, **Enabled**, **Platform**,**Associated Service** and add **More Filters**.

<ThemedImage
  alt="More filters"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/more-filters-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/more-filters-dark.png'),
  }}
/>

The Application Component Templates list page also includes an **Advanced Search** option you can use to construct more specific searches. See the [Advanced Search Feature](/getstarted/advanced-search-feature.mdx)documentation page for instructions.

<ThemedImage
  alt="Advanced Search"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/advanced-search-query-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/advanced-search-query-dark.png'),
  }}
/>

Click on a template name to see details about that template. Click **Edit** at the upper right to change or update an existing template.

<ThemedImage
  alt="Info view of an Application Component Template"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/template-info-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/template-info-dark.png'),
  }}
/>

## Add an Application Component Template

Click **Create** at the upper right of the template list page to add a new template.

<ThemedImage
  alt="Create an Application Component Template"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/create-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/create-dark.png'),
  }}
/>

### Application Component Template Configuration

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/add-app-comp-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/add-app-comp-dark.png'),
  }}
/>

- Enter a **Name** for the template (required).
- Select whether the template should be **Enabled** for use in autodiscovery – this options lets you enable the template only when you are ready to use it or disable it without having to delete it.

### Characteristics

- Select the **Service Type** (Windows or \*Nix) to select which platform Device42 autodiscovery will search for the service(s) on which the application component will be based.(required).
- Select, enter, or add (plus sign) the **Associated Service** autodiscovery will look for to create the application component (required).
- Enter a port in the **Only services listening on this port** field to optionally specify the service port to further filter services that are listening on the specified port. Leave the field empty to ignore the port.
- For **Match Type**, choose between **Text** or **Regular Expression** option to specify how you want to filter services:
  - You can enter a **Text** string pattern to compare against Service Command Arguments on discovered service instances to create application components more specific to a service; discovery only generates application components for services whose arguments contain that string.

    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/match-type-text-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/match-type-text-dark.png'),
    }}
    />

    >Performs simple text contains match on command argument text

  - Enter a **Regular Expression** for more control over how you want to filter services. 

    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/match-type-regex-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/match-type-regex-dark.png'),
    }}
    />
    >Performs regular expression match on command argument text. Python regular expression syntax is supported. Will generate up to 4 regular expression matches: regex_name variable will contain full match, regex_nameN, where N is 1-3, will contain first 3 group matches, if available.

### Creation Rules

<ThemedImage
  alt="Creation Rules"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/creation-rules-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/creation-rules-dark.png'),
  }}
/>

- Enter an **Application Name Pattern** to specify how the application component will be named. You can enter static text for the name and also use the following variable to construct the application component name.

    >The pattern can contain the following variables:
    >- `%(device_name)s` (required)
    >- `%(discovered_listening_ip)s`
    >- `%(listening_port)s` 
    >- `%(app_template_name)s`
    ```
    %(device_name)s, %(discovered_listening_ip)s, %(listening_port)s, %(app_template_name)s
    ```

    >When regular expression matching is used, four additional variables are available:
    >- `%(regex_name)s`  (this will represent full match),  
    >- `%(regex_name1)s` 
    >- `%(regex_name2)s` 
    >- `%(regex_name3)s`  (these will represent first three group matches)  
    ```
    %(regex_name)s, %(regex_name1)s, %(regex_name2)s, %(regex_name3)s
    ```   

- Select, enter, or add (plus sign) any **Related Software Components** or **Related Services** that should associated with the application component. For Related Service, you can specify **Only services listening on this port**.
- Enter a path in **Configuration File Location** to specify the directory in which Device42 should look for configuration files.
- Enter a name or partial name in the **Configuration Filename Filter** field to identify the configuration file(s).
- Select **Traverse subdirectories** to have Device42 traverse the Configuration File Location directory.

### Device42 Details Section

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/d42-details-section-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/d42-details-section-dark.png'),
  }}
/>

- Select the **Application Category** for the Application Component (that is, Application Layer, Database, Load Balancer, Other, Web Server).
- Enter **What is impacted** by the Application Component.
- Select or add the **Responsible Customer or Department**.
- Enter any **Tags** you want for the application component.

### Custom Fields

Select the templates to add the Custom Field values to and select **Set Custom Field Value** from the **Actions** menu.

<ThemedImage
  alt="Custom Field Value action"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/set-custom-field-value-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/set-custom-field-value-dark.png'),
  }}
/>

- If you don't have any Custom Fields defined, you'll be guided to the **Add Custom Field** page where you can add one or several Custom Fields.
  
    <ThemedImage
    alt="Custom Field Value action"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/modal-config-custom-fields-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/modal-config-custom-fields-dark.png'),
    }}
    />

- If you want to create a new Custom Field, navigate to **Tools > Custom Fields** and click **Create**.

    <ThemedImage
    alt="Custom Field menu location"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/custom-fields-menu-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/custom-fields-menu-dark.png'),
    }}
    />

- Configure the new Custom Field. Set the field type, if it's **Mandatory**, **Filterable**, and whether to log changes for API calls to history.

    <ThemedImage
    alt="Configure custom field"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/add-appcomp-custom-field-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/add-appcomp-custom-field-dark.png'),
    }}
    />

- Select the templates to add the Custom Field values to and select **Set Custom Field Value** from the **Actions** menu. Enter values for the Custom Fields you want for the application component. You can also add **Notes** for each Custom Field.

    <ThemedImage
    alt="Enter Custom Field value"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/input-custom-value-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/input-custom-value-dark.png'),
    }}
    />

## Delete Application Component Templates

- Select one or more templates from the list page, select **Delete with Detailed Confirmation** from the **Actions** menu.

    <ThemedImage
    alt="Delete selected items"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/delete-action-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/delete-action-dark.png'),        
    }}
    />

- Click **Delete** to delete the template or **Cancel** to keep it.

    <ThemedImage
    alt="Delete confirmation dialog box"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/delete-confirmation-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/delete-confirmation-dark.png'),        
    }}
    />

## Autodiscovery Options

<ThemedImage
  alt="Autodiscovery Software and Applications options"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/software-and-apps-options-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/software-and-apps-options-dark.png'),
  }}
/>

The Windows/\*nix autodiscovery jobs you run will check to see which Application Component Templates are enabled and use them to create Application Components. When creating an autodiscovery job, the following necessary options are enabled by default in the **Software and Applications** tab:

- **Discover Software**
- **Discover Services**
- **Discover Applications**
