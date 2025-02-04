---
title: "Calculation Rules"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

# Application Group Calculation Rules

:::note
Application Groups have been renamed to **Application Groups**. AppFocus Filters are now called **Application Group Calculation Rules** in the UI.
:::

Application Group Calculation Rules is the starting point of configuring Application Groups. They are a set of device or resource characteristics that defines the items included in the Application Group's initial resource relationship analysis. You can use rules to either suggest Application Groups or create them automatically.

Device42 includes three predefined Calculation Rules: **Database**, **LB VIP**, and **Database Server**. You can disable these rules or change their outcome, but we recommend that you do not edit them.

## Using Calculation Rules

Access the **Application Calculation Rules** tab by navigating to the **Applications > Application Groups** in the main menu. The **Application Calculation Rules** tab displays a list of predefined and user-created Calculation Rules.

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/calculation-rules/calculation-rules-list-page-light.png'),
    dark: useBaseUrl('/assets/images/calculation-rules/calculation-rules-list-page-dark.png'),
  }}
/>

### Predefined Calculation Rules

There are three predefined Calculation Rules: Database, LB VIP, and Database Server. These rules are designed to help you quickly create Application Groups based on common use cases.

- The **Database** Calculation Rule will automatically create Application groups filtered by database instance. This leverages Device42's Database Discovery to show you relationships between your application and database instances throughout the database server.
- The **Load Balancer VIP** Calculation Rule will create Application Groups for each VIP discovered on a load balancer. VIPs are often the primary entry point into an application, so this filter will offer an outside-in perspective of the application's dependencies.
- The **Database Server** Calculation Rule will mimic today's current default Application group filter and will show you the dependencies down to the database server level. This is helpful for full SQL server migrations and for users unable to perform level-three database discovery.

To use the predefined rules, select one and click **Process Now**. 

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/assets/images/calculation-rules/predefined-process-now-light.png'),
    dark: useBaseUrl('/assets/images/calculation-rules/predefined-process-now-dark.png'),
  }} 
/>

### Creating a New Calculation Rule

Click the **Create** button to access the New Application Filter page. 

- Fill in the **Name** and choose between **Suggest** and **Auto-Create** for the **Outcome**. Under **Starting Points** you'll see two options:
    - **Criteria**: For creating dynamic AppFocus filters with **Group By** and **Tags** options
    - **Fixed**: For creating manual Application groups, similar to **Criteria** but without **Group By** and **Tags** options.

  <ThemedImage
    alt="Docusaurus themed image"
    sources={{
      light: useBaseUrl('/assets/images/calculation-rules/new-rule-outcome-starting-points-light.png'),
      dark: useBaseUrl('/assets/images/calculation-rules/new-rule-outcome-starting-points-dark.png'),
    }}
  />

- Fill in the **Group By** and **Tags LIKE** options. 
  
  <ThemedImage
    alt="Docusaurus themed image"
    sources={{
      light: useBaseUrl('/assets/images/calculation-rules/new-rule-group-by-logic-light.png'),
      dark: useBaseUrl('/assets/images/calculation-rules/new-rule-group-by-logic-dark.png'),
    }}
  />

- Select the **Calculation Logic** and **Visualization** options. 

  <ThemedImage
    alt="Docusaurus themed image"
    sources={{
      light: useBaseUrl('/assets/images/calculation-rules/new-rule-logic-viz-light.png'),
      dark: useBaseUrl('/assets/images/calculation-rules/new-rule-logic-viz-dark.png'),
    }}
  />

### Creating a New Calculation Rule (Legacy)

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

- You can additional rules to the AppFocus filter if you want, and you can include rules for both devices and resources. Use the trash icon to delete a rule.
- Click **Save** at the top right of the page to save and add the filter to the AppFocus list page. If you selected the **Auto-Create** outcome for the filter, Device42 will calculate one or more Application Groups during nightly processing.
  