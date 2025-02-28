---
title: "Application Component Templates"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## Introduction

You can use Application Component Templates to create and define your own Application Components based on services discovered by [Hypervisor/\*nix/Windows](/auto-discovery/windows-and-hyper-v-auto-discovery) autodiscovery jobs run against *nix and Windows platforms. 

Device42 adds the Application Components you create using templates to the [Application Components](/apps/application-components) list page.

:::info
Application Components now automatically [suggest Application Groups](/apps/application-groups#application-group-list-page) that you can accept or ignore under **Applications > Application Groups > Application Group Suggestions** on the Main Appliance. 
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

On the Application Component Templates list page, you can **Search by template name**, or filter the list by **Application Category**, **Enabled**, **Platform**, **Associated Service**, or by any of the options under **More Filters**.

<ThemedImage
  alt="More filters"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/more-filters-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/more-filters-dark.png'),
  }}
/>

The Application Component Templates list page also includes an **Advanced Search** option you can use to construct more specific searches. See the [Advanced Search Feature](/getstarted/advanced-search-feature.mdx) page for instructions.

<ThemedImage
  alt="Advanced Search"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/advanced-search-query-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/advanced-search-query-dark.png'),
  }}
/>

Click on a template name to see more details about that template. Click **Edit** in the upper right corner of the details page to change or update an existing template.

<ThemedImage
  alt="Info view of an Application Component Template"
  sources={{
    light: useBaseUrl('/assets/images/application-component-templates/template-info-light.png'),
    dark: useBaseUrl('/assets/images/application-component-templates/template-info-dark.png'),
  }}
/>

## Add an Application Component Template

You can add a new template by clicking **Create** in the top right of the template list page.

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
- Select whether the template should be **Enabled** for use in autodiscovery jobs. This option lets you enable or disable the template according to when you need it without having to delete it when it's not in use.

### Characteristics

- Select the **Service Type** (Windows or \*Nix) to specify which platform Device42 autodiscovery searches for the service(s) that the Application Component will be based on.(required).
- Select, enter, or add (using the **plus sign** icon) the **Associated Service** that autodiscovery will search for and use to create the Application Component (required).
- Enter a port in the **Only services listening on this port** field to limit autodiscovery to only the services that are listening on your chosen port. Leave the field empty to ignore the port.
- For **Match Type**, select **Text** or **Regular Expression** to specify how you want to filter services:
  - You can enter a **Text** string pattern that discovery will use to create more service-specific Application Components by only generating Application Components for services with Service Command Arguments that contain the string.

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

- Enter an **Application Name Pattern** to specify how the Application Component is named. You can use static text and the following variables to construct the Application Component name.

    >The pattern can contain the following variables:
    >- `%(device_name)s` (required)
    >- `%(discovered_listening_ip)s`
    >- `%(listening_port)s` 
    >- `%(app_template_name)s`
    ```
    %(device_name)s, %(discovered_listening_ip)s, %(listening_port)s, %(app_template_name)s
    ```

    >When you use regular expression matching, four additional variables are available:
    >- `%(regex_name)s`  (this will represent the full match),  
    >- `%(regex_name1)s` 
    >- `%(regex_name2)s` 
    >- `%(regex_name3)s`  (these will represent the first three group matches)  
    ```
    %(regex_name)s, %(regex_name1)s, %(regex_name2)s, %(regex_name3)s
    ```   

- Select, enter, or add (using the **plus sign** icon) any **Related Software Components** or **Related Services** that should be associated with the Application Component. For Related Services, you can specify **Only services listening on this port**.
- Enter a path in **Configuration File Location** to specify the directory that Device42 should search for configuration files.
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

- Select the **Application Category** for the Application Component (either **Application Layer**, **Database**, **Load Balancer**, **Other**, or **Web Server**).
- Enter **What is impacted** by the Application Component.
- Select or add the **Responsible Customer or Department**.
- Enter any **Tags** you want for the Application Component.

### Custom Fields

Select the templates to which you want to add the Custom Field values, then select **Set Custom Field Value** from the **Actions** menu.

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

To create a new Custom Field, navigate to Tools > Custom Fields and click Create.

    <ThemedImage
    alt="Custom Field menu location"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/custom-fields-menu-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/custom-fields-menu-dark.png'),
    }}
    />

- Configure the new Custom Field. Set the field type and use the checkboxes to specify whether it's **Mandatory**, whether it's **Filterable**, and whether it will **Log for API** (meaning changes for API calls are logged to history).

    <ThemedImage
    alt="Configure custom field"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/add-appcomp-custom-field-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/add-appcomp-custom-field-dark.png'),
    }}
    />

- To add the Custom Field values, select the templates you want to edit and then select **Set Custom Field Value** from the **Actions** menu. Enter the Custom Fields values you want for the Application Component. You can also add **Notes** for each Custom Field.

    <ThemedImage
    alt="Enter Custom Field value"
    sources={{
        light: useBaseUrl('/assets/images/application-component-templates/input-custom-value-light.png'),
        dark: useBaseUrl('/assets/images/application-component-templates/input-custom-value-dark.png'),
    }}
    />

## Delete Application Component Templates

- Select one or more templates from the list page, then select **Delete with Detailed Confirmation** from the **Actions** menu.

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
