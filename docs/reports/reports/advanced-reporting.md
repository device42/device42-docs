---
title: "Advanced Reporting"
sidebar_position: 2
---

:::info
We are primarily invested in **[Standard Reports](standard-reports.mdx)** and **[Insights+](insights-plus.mdx)** and encourage customers to use those first.
:::

## Advanced Reporting Engine Overview

Device42's Advanced Reporting engine is a quantum leap forward in functionality. It is a fully incorporated, schedulable BI/reporting platform that lets you create both ad-hoc reports that may include visualizations, and export the output in different formats as desired. A changing selection of pre-defined reports is included with Advanced Reporting, while an unlimited number may be added under "User-Defined" reports, exported, imported, and shared!

Simply head to the Reports menu → Advanced reporting to get started:

![Device42 Advanced Reporting Screen](/assets/images/advanced_reporting_example-201905.png)

Device42's Advanced Reporting engine is extremely flexible, and you can use it to take your reporting to the next level, extracting insight and business intelligence from your infrastructure data.

In this section, you'll learn how to select data and build reports in advanced reporting. If you prefer a video, see [this advanced reporting blog post](https://www.device42.com/blog/2018/04/25/advanced-reporting-video-walk-through/) for a quick advanced reporting walkthrough!

### Running an existing report

Running an existing report in advanced reporting is fast and easy.

Head to _Reports -> Advanced Reporting_ and expand "Pre-defined reports" on the left by clicking the arrow to show the list of existing reports.

1. Choose a report from the list, highlight it, and click the 'hamburger' menu _(see #1, image below)_. In the menu popup, click "Run Report" _(#2 below)_.
![Run existing report advanced reporting](/assets/images/run_existing_report.png)

4. **To have your report results exported in a Microsoft Excel XLS/XLSX format spreadsheet, simply click the "XLS" button and save the file!**
![Save report output as XLS Microsoft Excel Spreadsheet file](/assets/images/save_as_XLS.png)

### Customizing an existing report

Customizing an existing report is easy! Simply make a copy, and edit the copy, or double click any user-created report to edit it directly.

1. If you would like to customize an existing report, either right click or click on the hamburger menu (three horizontal lines) and choose "Duplicate" to make a copy: ![Copy existing report](/assets/images/customize-existing-report.png)
2. Now, double click the report you just copied, make your desired edits, and run as before!

### Scheduling Advanced Reports

You can view all scheduled Advanced Reports, and can edit their schedules by clicking the "clock" icon on the left hand panel of advanced reporting (pictured below): ![Schedule & edit schedules for Advanced Reports](/assets/images/scheduled_reports.png)

To edit the schedule of a report, click the "Pencil" icon on the far right of each row. Upon clicking the pencil, you will see the edit schedule screen: ![Edit advanced report schedule ](/assets/images/edit_report_schedule.png)

* * *

## Building a Custom Advanced Report

The following is the basic flow for building an advanced report.

1. First, click the plus sign in the upper left to begin creating a new report. Choose "Advanced Report" to start.
2. Give the report a name that meaningfully identifies the report to you.
3. Move to the "Categories" tab to select the items you'd like to include in the report. You will notice that certain categories are greyed out based on the data points you select; certain categories of data limits other items that can be included into the report to related information.
4. Next, head to the "Sorts" tab to configure your sorts and to filter your data. Sorting and filtering in advanced reporting is done via SQL joins, and the advanced reporting GUI interface makes it very straightforward. Start by clicking the "Gear icon" in advanced reporting, and then select joins: ![Gear menu edit joins](/assets/images/edit_joins-menu.png) Configure any desired custom filters via the Joins window that popped up: ![Edit Joins](/assets/images/edit_joins_window.png)
5. Finally, configure your report layout. Select parameters you are interested from the parameter pool on the left, double clicking each to add to the report. Next, add any other fields that are relevant to your report. Now that all or fields are on the report, order them in the report.

### Sorting and ordering report data

Sorting in Advanced Reporting is handled using Joins by matching Primary and Foreign keys. Note that advanced reporting does a pretty good job attempting to set these for you, but for complicated reports, you will have to set/customize the joins yourself. You'll want to create joins that results in the data you care about, consulting the Device42 data dictionary when necessary. Note that Primary Key's should almost always have a matching foreign key, from being a PK matching to a FK. If you are seeing data that you didn't expect, there may still be joins that need to be modified. Access joins by clicking the "Gear" icon, and selecting "Joins": ![Edit Joins](/assets/images/edit_joins_window.png)

### Use a DOQL query to create a report data-set

With Device42's Advanced Reporting, you can use DOQL (a SQL derivative) to create your data-set for your report.

To create a report based on a DOQL query, name the report, and then **simply choose "Add SQL" during the 'Category' selection step of report creation _(instead of choosing any categories)_**_.

For a full set of steps in more detail, with pictures, see the dedicated ["Use custom SQL in Advanced Report" page](reports/reports/use-custom-sql-advanced-report.md).

* * *

## Reporting data categories

### The Data Dictionary

All data categories in Advanced Reporting are inherited directly from Device42's published database views. You can see all of them in the data dictionary, which can always be found by clicking the "Data Dictionary" button at the top right of the reporting window, which will show you all available categories (see the 'data dictionary' button in the screenshot in the next section below): ![data dictionary](/assets/images/data_dictionary.png)

### The Viewer Entity Relationship Diagram \[ERD\]

The Viewer Entity Relationship Diagram, or ERD for short, is a handy and powerful way to navigate the Device42 database schema. Useful for visualizing relationships and writing DOQL queries, you can quickly navigate to the ERD from the Advanced Reporting Screen: ![Entity Relationship Diagram button on Advanced Reporting screen](/assets/images/ERD_button-HL.png)

Clicking the "Entity Relationship Diagram" button brings up the ERD. Here is an example screenshot of the ERD. Note that the ERD has it's own page; for more information check out the dedicated [Device42 ERD/Viewer Schema page](reports/device42-doql/db-viewer-schema.md). In this example, the "Find" field contains the search keyword `affinity`, and therefore much of the ERD has been greyed out while the items that match the 'affinity' search query are visible: ![Device42 entity relationship diagram](/assets/images/entity_relationship_diagram_example.png)_
