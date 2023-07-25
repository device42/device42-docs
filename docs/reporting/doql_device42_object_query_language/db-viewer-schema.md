---
title: "Database Viewer Schema"
sidebar_position: 1
---

## Viewing the Device42 Database Schema

_To explore the Device42 database schema, head to the _Help Menu (Question Mark to the left of your login name) ->_ Viewer Schema_:

![](/assets/images/WEB-828_1.jpg)

## Entity Relationship Diagram

**The Entity Relationship Diagram** \[aka ERD\] is a handy way to navigate the Device42 database schema, to visualize relationships, and to assemble DOQL queries. The ERD is searchable using the "Find" field at the top left.

By searching for `device`, database views that contain "device" are highlighted (e.g. view\_device\_v1 & other related fields), while others fade into the background:

 

![](/assets/images/WEB-828_2.jpg)

Any view can be expanded by clicking the triangle \[highlighted\] or the "Expand All" button (which will expand all views):

![](/assets/images/WEB-828_3.jpg)

## Data Dictionary

The data dictionary is another way to explore and view the details of the Device42 database and is quite handy when writing DOQL queries. The viewer schema is formatted as a text-based list, each table formatted to show the **columns** in that table, each **field's data type**, and a **field description**, which provides a quick sentence describing the type of data one should expect to find in that field.

The **Viewer Data Dictionary can be found** via the Device42 UI, _Help Menu -> Viewer Schema -> Data Dictionary_:

 

![](/assets/images/WEB-828_4.jpg)

Note that you can also get the data dictionary from this API endpoint: `/services/data/v1.0/dd/` should you prefer the API; Parameters, and more details about running DOQL queries via the API can be found on the [main D42 DOQL page here](index).
