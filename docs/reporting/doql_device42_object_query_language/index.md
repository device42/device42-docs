---
title: "DOQL - Device42 Object Query Language"
sidebar_position: 1
---

## Querying DOQL using the Device42 API

DOQL queries can be run against the Device42 database both using https and via the RESTful API. You can make requests using curl, or can alternatively point your favorite REST API client at the DOQL query endpoints below. Consult the DOQL query parameters, explained below, and example queries that follow can be helpful as well.

Should you have any questions, consult the ["Obtaining DOQL Support"](/device42-doql/#section-6) section on this page.

### DOQL query API endpoint

**Endpoint**: `/services/data/v1.0/query/`

**Example**: `https://localhost/services/data/v1.0/query/?query=SELECT name, os_name, os_version FROM view_device_v1 order by device_pk`

**Curl example:** ``curl -X POST -d "query=select name from view_appcomp_v1 where lower(name) like 'microsoft sql%' or lower(name) like 'postgresql%' or lower(name) like 'mongodb%' or lower(name) like 'mysql%' or lower(name) like 'oracle database%' or lower(name) like 'sap%' or lower(name) like 'sybase%' or lower(name) like 'mariadb%'" -u `cat apipw` 'https://yourdevice42/services/data/v1.0/query/'``

### Query results in JSON

If you'd like your DOQL query results in JSON, set the output\_type query parameter to JSON. e.g. `curl -k -s -X POST -d 'output_type=json&query=select * from view_device_v1' -u 'admin:adm!nd42' 'http://server/services/data/v1.0/query/'`

 

### DOQL API Query Parameters

The following database query parameters can be utilized with DOQL via the API:

- **query** = the DOQL query you want to run, a SELECT command whose results are to be returned as CSV data (required)
- **delimiter** = Specifies the character that separates columns within each row (line) of the file. The default a comma. This must be a single one-byte character. (optional)
- **header** = if 'yes' specifies that the file contains a header line with the names of each column in the file. On output, the first line contains the column names from the table. (optional)
- **quote** = Specifies the quoting character to be used when a data value is quoted. The default is double-quote. This must be a single one-byte character. (optional)
- **null\_string** = Specifies the string that represents a null value. The default is an unquoted empty string. You might prefer an empty string even in text format for cases where you don't want to distinguish nulls from empty strings. (optional)
- **quote\_escape** = Specifies the character that should appear before a data character that matches the QUOTE value. The default is the same as the QUOTE value (so that the quoting character is doubled if it appears in the data). This must be a single one-byte character. (optional)
- **output\_type** = Get JSON results by setting this parameter to 'json'

### The Data Dictionary, ERD, & Viewer Schema

The data dictionary is available via the API (in JSON). **API Endpoint for the data dictionary \[in JSON\]** = `/services/data/v1.0/dd/`

 

See the [Device42 DB viewer schema page](/device42-doql/db-viewer-schema/) for information on the [DB viewer schena & Entity Relatinoship Diagram](/device42-doql/db-viewer-schema/), both of which are very handy when authoring queries, providing valuable insight into the Device42 database schema.

* * *

## DOQL Queries Against Custom Fields

When constructing DOQL queries against custom fields, be aware that custom field names that contain ANY upper-case characters OR spaces _require_ your queries to match the casing & name exactly as written, in quotes. See details below:

### Custom fields are usually case sensitive

Custom fields that use **ONLY lower-case characters, NO spaces** may refer to column names in queries using any casing. Custom field names **containing ANY upper-case characters** must referred to column names in quotes using the exact same casing as named. Custom field names **contains any spaces**, must refer to column names in quotes using the exact same casing - _(even if all characters are lower-case!)_.

**For example, consider the following telco custom field names**:

_"Region"_, the appropriate query would be: `select "Region" from view_telcocircuit_custom_fields_flat_v1`

_"region name"_, the query would have to be: `select "region name" from view_telcocircuit_custom_fields_flat_v1`

* * *

## Saved DOQL Queries

With Saved DOQL queries, Device42 user-developers can centrally store, track, and re-use queries written for prior integrations, automation projects, or other efforts. Saved queries are also be leveraged by Device42 integrations as 'system-defined' queries, and at the same time allow easy addition and/or customization of those queries.

![](/assets/images/WEB-797_1.png)

### Using Saved DOQL

Use Saved DOQL to store one or more DOQL queries on your D42 instance. Each stored query is assigned a user-defined name _(e.g. Prod\_Switches)_ and can then simply be called by referencing that name from any integration.

To add a new query (or modify an existing one), view your Stored DOQL queries via the Device42 main menu, _Tools → Integrations → Saved DOQL Queries_. Simply click "Add Saved DOQL Query" to add a new query.

![](/assets/images/WEB-797_2.png)

### DOQL Query URL

Each Saved DOQL query has an associated "Query URL", which can be seen next to each query on the "DOQL Query View" list page" _(pictured above)_ and at the bottom of the "View DOQL Query" details page _(pictured below)_.

Each Query URL links to the DOQL query API endpoint and returns the results of that specific DOQL query in .CSV format, by default. For more information on running DOQL queries via the Device42 API, see the first section of this page, _"Querying DOQL using the Device42 API"_.

### Edit an existing Saved DOQL Query

To edit an existing DOQL query, simply click the name of the query you'd like to edit, and from the "View Saved DOQL Query" screen, click "Edit" in the upper-right hand corner to edit the query: ![](/assets/images/WEB-797_3.png)

You can now make any necessary edits to the DOQL query you were looking at, and can even add notes. Click the "Save" button when you are done editing your DOQL Query: ![](/assets/images/WEB-797_4.png)

* * *

## Obtaining DOQL Support

DOQL support is NOT included. We will _NOT_ write queries for you! That said...

- If you need help writing a query, Device42 can only offer paid professional services.
- If you happen to come across a BUG, please submit it. We will fix it as part of our normal bug-fix process. There is, of course, no charge for bug fixes.

## About Device42 DOQL

Note that wherever possible, DOQL Syntax are equivalent to PostgreSQL syntax.

- This document does its best to highlight those areas in which the syntax DIFFER.
- POST calls are recommended rather than GET calls, as url length does not have limitations in POST calls.
- If using GET calls, note that URL length is limited, and any special characters in the query need to be URL encoded (i.e. %20 for space, %3B for "%").
- If something isn't working that you think should, see DOQL Support notes below.

## Samples

```
    [
    {
    "columns": [
    {
    "column": "appcomp_fk",
    "desciption": "Foreign Key to ID for Application Component",
    "data_type": "integer"
    },
    {
    "column": "Test End User",
    "desciption": "Related Field for endusers - Log for API - for Application Component",
    "data_type": "text"
    }
    ],
    "view": "view_appcomp_custom_fields_flat_v1"
    },
    {
    "columns": [
    {
    "column": "asset_fk",
    "desciption": "Foreign Key to ID for Asset",
    "data_type": "integer"
    }
    ],
    "view": "view_asset_custom_fields_flat_v1"
    },
    {
    "columns": [
    {
    "column": "asset_fk",
    "desciption": "Foreign Key to ID for Asset",
    "data_type": "integer"
    },
    {
    "column": "asset_name",
    "desciption": "Name for Asset",
    "data_type": "character varying"
    },
    {
    "column": "type_id",
    "desciption": "Identifier Key for Type for Asset Custom Field",
    "data_type": "smallint"
    },
    {
    "column": "type",
    "desciption": "Type for Asset Custom Field",
    "data_type": "text"
    },
    {
    "column": "related_model_name",
    "desciption": "Name of Related Field for Asset Custom Field",
    "data_type": "character varying"
    },
    {
    "column": "filterable",
    "desciption": "Filterable for Asset Custom Field",
    "data_type": "boolean"
    },
    {
    "column": "mandatory",
    "desciption": "Mandatory for Asset Custom Field",
    "data_type": "boolean"
    },
    {
    "column": "log_for_api",
    "desciption": "Log for API for Asset Custom Field",
    "data_type": "boolean"
    },
    {
    "column": "key",
    "desciption": "Field for Asset Custom Field",
    "data_type": "character varying"
    },
    {
    "column": "value",
    "desciption": "VLAN Custom Field for VLAN",
    "data_type": "text"
    }
    ],
    "view": "view_asset_custom_fields_v1"
    },
```
