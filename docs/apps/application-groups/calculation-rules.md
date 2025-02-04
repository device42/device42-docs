---
title: "Calculation Rules"
sidebar_position: 1
---

# Application Group Calculation Rules

:::note
Application Groups have been renamed to **Application Groups**. AppFocus Filters are now called **Application Group Calculation Rules** in the UI.
:::

The Application Group AppFocus Filters allow you to choose a set of device or resource characteristics and use it to define the items included in the Application Group's initial resource relationship analysis. You can use filters to either suggest Application Groups or create them automatically.

Device42 includes three predefined AppFocus Filters: Database, LB VIP, and Database Server. You can disable these filters or change their outcome, but we recommend that you do not edit them.

## Using AppFocus Filters

:::note
AppFocus Filters are integrated directly into the Application Groups section. You can access them from the [Application Groups](/apps/Application-groups/) page.
:::

- Access AppFocus Filters by navigating to the **Applications > Application Groups** section in the main menu. You can click the **Application Groups Suggestions** tab to view a filtered list of suggested groups.

![Suggested AppFocus Filters List Page](/assets/images/app-focus-filters/app-focus-list-page-new.png)


### Creating a new filter

Click the **Create** button to access the New Application Filter page. Under **Starting Point** you'll see two options:

- **Criteria**: For creating dynamic AppFocus filters with **Group By** and **Tags** options
- **Fixed**: For creating manual Application groups, similar to **Criteria** but without **Group By** and **Tags** options

![](/assets/images/app-focus-filters/add-app-filter.png)

### Predefined Filters

- The Database AppFocus Filter will automatically create Application groups filtered by database instance. This leverages Device42's Database Discovery to show you relationships between your application and database instances throughout the database server.
- The Load Balancer VIP AppFocus Filter will create Application Groups for each VIP discovered on a load balancer. VIPs are often the primary entry point into an application, so this filter will offer an outside-in perspective of the application's dependencies.
- The Database Server AppFocus Filter will mimic today's current default Application group filter and will show you the dependencies down to the database server level. This is helpful for full SQL server migrations and for users unable to perform level-three database discovery.

To use a predefined Filter, change its **Outcome** from **Suggest** to **Auto-Create** (see below).

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
