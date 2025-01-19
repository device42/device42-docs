---
title: "AppFocus Filters"
sidebar_position: 1
---
Affinity Group AppFocus Filters allow you to choose a set of device or resource characteristics to define what is included in the Affinity Group's initial resource relationship analysis. The filters can either suggest Affinity Groups or create them automatically.

Device42 includes three predefined AppFocus Filters named Database, LB VIP, and Database Server. You can disable these filters or change their outcome, but we recommend that you do not edit them.

## Using AppFocus Filters

:::note
AppFocus Filters are now integrated directly into the Affinity Groups section. You can access them from the [Affinity Groups](/apps/affinity-groups/) page.
:::

- Access AppFocus Filters through the _Applications > Affinity Groups_ section in the main menu. You can click the _Affinity Groups Suggestions_ tab to view a filtered list of suggested groups.

![Suggested AppFocus Filters List Page](/assets/images/app-focus-filters/app-focus-list-page-new.png)

:::note
You can now pin Application Groups, allowing you to keep important items at the top of the list for quick access.

![Affinity Groups Pin Icons](/assets/images/app-focus-filters/ag-pin-icons.png)
:::

### Creating a new filter

Click the _Create_ button to access the New Application Filter page. Under _Starting Point_ you'll see two options:

- **Criteria**: For creating dynamic AppFocus filters with Group By and Tags options
- **Fixed**: For creating manual affinity groups, similar to criteria but without Group By and Tags options

![](/assets/images/app-focus-filters/add-app-filter.png)

### Predefined Filters

- The Database AppFocus Filter will automatically create affinity groups filtered by database instance. This leverages Device42's Database Discovery to show you relationships down through the database server to which database instances are related to your application.

- The Load Balancer VIP AppFocus Filter will create Affinity Groups for each VIP discovered on a load balancer. VIPs are often the primary entry point into an application so this filter will offer an outside-in perspective of the application's dependencies.

- The Database Server AppFocus Filter will mimic today's current default affinity group filter and will show you the dependencies down to the database server level. This is helpful for full SQL server migrations, or for users unable to perform level 3 database discovery.

To use a predefined Filter, change its _Outcome_ from _Suggest_ to _Auto-Create_ (see below).

- Click _+Add_ at the top right of the list page to add a new AppFocus Filter.

![](/assets/images/D42-24410_AG-filters-add-page-1-AH.png)

- Enter a _Name_ for the filter and select the _Outcome_ you want, either _Auto-Create_ or _Suggest_. The Suggest option adds the filter to the list, but does not include it when Device42 generates Affinity Groups during nightly processing. _Auto-Create_ includes the filter in Affinity Group processing.

- Click _+Add More_ at the right under Rules (a filter must have at least one rule), select the _Object Type_ for the rule, and then click _Modify Search_.

![](/assets/images/D42-24410_AG-filters-addserach-criteria-3.png)

- Use the filters in the Search Criteria window to define what types of resources or devices you want for the rule. You can also use the Advanced Search feature (binocular icon) to build a search. Click _OK_ to save the rule.

![](/assets/images/D42-24410_AG-filters-addserach-criteria-4-AH.png)

- Device42 displays the Search Criteria text for the resource or device rule.

![](/assets/images/D42-24410_AG-filters-addserach-criteria-5-AH.png)

- Select a _Group By_ value or values for the filter. Group By will enable multiple AppFocus Affinity Groups to be generated from one rule. The available Group By options will change as different object types are added to the Filter's rules.
- You can also group by Tags LIKE values.

![](/assets/images/D42-24410_AG-filters-addserach-criteria-6-group-by-AH.png)

- You can additional rules to the AppFocus filter if you want, and you can include rules for both Devices and Resources. Use the trash icon to delete a rule.

- Click _Save_ at the top right of the page to save and add the filter to the AppFocus list page. If you selected the _Auto-Create_ Outcome for the filter, Device42 will calculate one or more Affinity Groups during nightly processing.
