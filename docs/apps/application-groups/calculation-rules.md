---
title: "Calculation Rules"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

# Overview of Application Group Calculation Rules

:::note
*Affinity Groups* have been renamed to **Application Groups**. *AppFocus Filters* are now called **Application Group Calculation Rules**.
:::

Application Group Calculation Rules are starting points or 'seeds' that point to what's important in your environment and are used to indirectly configure the resulting Application Groups. The Application Dependency Mapping (ADM) workflow starts by defining Starting Points, then setting traversal rules and stop points (logic templates) to generate the Application Groups charts.

![ADM Workflow](/assets/images/calculation-rules/adm-flow.png)

Choose Starting Points based on what you want the resulting Application Group to focus on, such as a service, database, or Saturn application. The Starting Point(s) you choose will be the Application Group's focus. For example:

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/calculation-rules/10.92.11.208_admin_core_applicationgroup-light.png'),
    dark: useBaseUrl('/assets/images/calculation-rules/10.92.11.208_admin_core_applicationgroup-dark.png'),
  }}
/>

In addition to creating new rules, you can use Device42's predefined rules, **Database**, **LB VIP**, and **Database Server**, which are based on common use cases. You can disable these rules or change their outcomes, but they are maintained by Device42 and cannot be edited.

## Using **Calculation Rules**

Access the **Application Calculation Rules** page under **Applications > Application Groups** in the main menu. The **Application Calculation Rules** page has three tabs:

- **My Application Groups**: The Application Groups that you want to use.
- **Application Group Suggestions:** A list of suggested Application Groups based on the Calculation Rules.
- **Application Group Calculation Rules:** A list of user-created and predefined Calculation Rules.

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/calculation-rules/calculation-rules-list-page-light.png'),
    dark: useBaseUrl('/assets/images/calculation-rules/calculation-rules-list-page-dark.png'),
  }}
/>

### Predefined **Calculation Rules**

There are three predefined Calculation Rules: Database, LB VIP, and Database Server. These rules are designed to help you quickly create Application Groups based on common use cases.

- The **Database** Calculation Rule will automatically create Application Groups filtered by database instance. It leverages Device42's Database Discovery to show you relationships between your application and database instances throughout the database server.
- The **Load Balancer VIP** Calculation Rule will create Application Groups for each VIP discovered on a load balancer. VIPs are often the primary entry point into an application, so this filter will offer an outside-in perspective of the application's dependencies.
- The **Database Server** Calculation Rule will mimic today's current default Application Group filter and show you the dependencies down to the database server level. This is helpful for full SQL server migrations and for users unable to perform level-three database discovery.

To use the predefined rules, select one and click **Process Now**. 

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/calculation-rules/predefined-process-now-light.png'),
    dark: useBaseUrl('/assets/images/calculation-rules/predefined-process-now-dark.png'),
  }} 
/>

## Create a New **Calculation Rule**

Under the **Application Group Calculation Rules** tab, click the **Create** button to access the New Application Filter page and fill in the **Name**.

Choose the **Outcome** of the Application Group that will be created based on the rule:
  - **Auto-Create**: Select this if you're confident that you'll want to use the Application Group resulting from this new rule. The resulting group will be added to the list under the **My Application Groups** tab.
  - **Suggest**: Select this if you're not sure if you want to use the Application Group resulting from this new rule. The resulting group will be added to the list under the **Application Group Suggestions** tab, where you'll have the option to **Accept** or **Ignore** the suggested group.

  <ThemedImage
    alt="Docusaurus themed image"
    sources={{
      light: useBaseUrl('/assets/images/calculation-rules/new-rule-outcome-starting-points-light.png'),
      dark: useBaseUrl('/assets/images/calculation-rules/new-rule-outcome-starting-points-dark.png'),
    }}
  />

### **Starting Points**

Select a Starting Point that's as close to the application as you can define it. You can think of the Starting Point as an indication of what's important. This could be a service, database, or Saturn application. It's a good idea to tag applications that are central to your environment and use the tags as Starting Points for creating Application Groups.

Under **Starting Points** you'll see two options: **Criteria** and **Fixed**.

- Select **Criteria** to search for and choose a CI from your database to serve as an example for the Application Group you want to create. You can add multiple items and toggle on the **Required** options for all or some of the items to ensure they are included in the dependency mapping.

  - Select an **Object Type**.
            
    <ThemedImage
      alt="Docusaurus themed image"
      sources={{
        light: useBaseUrl('/assets/images/calculation-rules/10.92.11.208_admin_core_application_group_calc_rule_light.png'),
        dark: useBaseUrl('/assets/images/calculation-rules/10.92.11.208_admin_core_application_group_calc_rule_dark.png'),
      }}
    />

  - You can add a **Tags** filter and provide part of the tag's name under the **Contains** text box.

    ![Search by tag](/assets/images/calculation-rules/new-rule-starting-points-criteria-2.png)

- Select **Fixed** to use specific items as definitive Starting Points rather than electing items of a similar type (criteria). Select an **Object Type** to search the database for the item you want to use as a Starting Point.

  <ThemedImage
    alt="Docusaurus themed image"
    sources={{
      light: useBaseUrl('/assets/images/calculation-rules/fixed-object-types-light.png'),
      dark: useBaseUrl('/assets/images/calculation-rules/fixed-object-types-dark.png'),
    }}
    style={{ width: '35%' }} 
  />

### **Group By** and **Tags LIKE** Options

The **Group By** field is required if you choose the **Criteria** option for the Starting Point. The **Group By** criteria creates multiple Application Groups from one rule.

Use the `%` wildcard in the **Tags LIKE** field to find items that match part of a tag name. For example, enter `app_%` to include items with tags that start with `app_`.
  
<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/calculation-rules/new-rule-group-by-logic-light.png'),
    dark: useBaseUrl('/assets/images/calculation-rules/new-rule-group-by-logic-dark.png'),
  }}
/>

### **Calculation Rule Templates** 

After you've selected the Starting Points, we need to know how you want to define and calculate the dependencies and determine what is and is not considered in the Application Groups.

The **Calculation Logic Template** allows you to add multiple rules and conditions to groups in a user-friendly interface. You can create templates that target different parts of your environment, such as active traffic or Active Directory, or a template that does both.

Under **Applications > Application Groups**, click the **Settings** button and select **Create Calculation Logic Template**. 

We recommended you select the **Form** format from the dropdown, but we've added the **DOQL** format option for backwards compatibility.

<ThemedImage
  alt="New Calculation Logic Template"
  sources={{
    light: useBaseUrl('/assets/images/calculation-rules/logic-template-form-light.png'),
    dark: useBaseUrl('/assets/images/calculation-rules/logic-template-form-dark.png'),
  }}
/>

Fill in the fields:

- **Name**: Enter a name for the template.
- **Time Period (in days)**: Choose a relatively recent time period, when you know that active communication has occurred, like 30 days.
- **Levels of Depth**: Enter the number of levels of dependencies you want to include in the calculation. To prevent including dependencies of dependencies, we recommend `5` for regular environments, but you can increase the value for very complex environments.
- **Limit of connections**: Limit the number of connections to prevent getting into any infrastructure services, like an Active Directory or backup server. You can increase the value for applications that are very noisy.
- **End at**: 
  - Select **Database** to end the calculation at the database level. If you started with a database, this option won't apply as a calculation end.
  - Select **Load Balancer Virtual IP** if that's where your application stops.
- **Include**: Include the selected items to the exclusion of everything else. You can generally leave this option blank unless you have a specific reason to limit the calculation to specific items. For example, you can choose to only include devices that are in production in the calculation. 
- **Exclude**: Select categories that don't make sense to include. For example, you can exclude IPv6 traffic or port 22.

Save and run the Calculation Group Logic Template by clicking **Process Now**.

  <ThemedImage
    alt="Process Calculation Group Logic Template"
    sources={{
      light: useBaseUrl('/assets/images/calculation-rules/template-process-now-light.png'),
      dark: useBaseUrl('/assets/images/calculation-rules/template-process-now-dark.png'),
    }}
  />

### **Visualization** Options

The Calculation Rule **Visualization** option determines the default chart depth rendered, which is useful for large environments where you want to limit the number of levels of dependencies shown in the visualization.

Leave the **Visualization** option blank to include all levels of dependencies in the Application Group and dependency visualization or enter a value to limit the number of levels shown.


  <ThemedImage
    alt="Docusaurus themed image"
    sources={{
      light: useBaseUrl('/assets/images/calculation-rules/new-rule-logic-viz-light.png'),
      dark: useBaseUrl('/assets/images/calculation-rules/new-rule-logic-viz-dark.png'),
    }}
  />

Toggle on the **Store and Display Connection Metadata** option to display communication lines and data (like the IP address and port) between boxes in the Application Group chart.

  ![Connection Metadata](/assets/images/calculation-rules/viz-metadata.png)

## Charts

Click on the **Chart** link under the **My Application Groups** tab. Click on the boxes to see details about the resource and click on the connection lines to see the dependencies and relationships between the resources.

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/calculation-rules/10.92.11.208_admin_core_device_14135_affinity_group_calc_light.png'),
    dark: useBaseUrl('/assets/images/calculation-rules/10.92.11.208_admin_core_device_14135_affinity_group_calc_dark.png'),
  }}
/>

## (Legacy) Creating a New Calculation Rule

- Click **+ Add** at the top right of the list page to add a new AppFocus Filter.

  ![](/assets/images/D42-24410_AG-filters-add-page-1-AH.png)

- Enter a **Name** for the filter and select the **Outcome** you want, either **Auto-Create** or **Suggest**. The **Suggest** option adds the filter to the list but does not include it when Device42 generates Application Groups during nightly processing. **Auto-Create** includes the filter in Application Group processing.

- Click **+ Add More** in the bottom-right corner of the **Rules** section (a filter must have at least one rule), select the **Object Type** for the rule, and then click **Modify Search**.

  ![](/assets/images/D42-24410_AG-filters-addserach-criteria-3.png)

- Use the filters in the Search Criteria window to define which resource or device types you want for the rule. You can also use the Advanced Search feature (binocular icon) to build a search. Click **OK** to save the rule.

  ![](/assets/images/D42-24410_AG-filters-addserach-criteria-4-AH.png)

- Device42 displays the Search Criteria text for the resource or device rule.

  ![](/assets/images/D42-24410_AG-filters-addserach-criteria-5-AH.png)

- Select a **Group By** value or values for the filter. **Group By** will enable multiple AppFocus Application Groups to be generated from one rule. The available **Group By** options will change as different object types are added to the filter's rules.
- You can also group by **Tags LIKE** values.

  ![](/assets/images/D42-24410_AG-filters-addserach-criteria-6-group-by-AH.png)

- You can add additional rules to the AppFocus filter if you want, and you can include rules for both devices and resources. Use the trash icon to delete a rule.
- Click **Save** at the top right of the page to save and add the filter to the AppFocus list page. If you selected the **Auto-Create** outcome for the filter, Device42 will calculate one or more Application Groups during nightly processing.
  