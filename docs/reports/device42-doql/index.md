---
title: "DOQL - Device42 Object Query Language"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

DOQL queries are run against the Device42 database both using HTTPS and via the RESTful API. You can make requests using curl, or can alternatively point your favorite REST API client at the DOQL query endpoints below. Consult the DOQL query parameters, explained below, and example queries that follow can be helpful as well.

:::tip
Use our [InsightsAI chat](insightsai.mdx) under **Analytics > InsightsAI** of the MA to create and interpret DOQL query snippets quickly in the context of the Device42 data tables. 
:::

### DOQL Query API Endpoint Example

Visit the [Device42 API documentation](https://api.device42.com/) for more information on DOQL query endpoints.

**DOQL Endpoint**: `/services/data/v1.0/query/`

**Example**:
```bash
https://localhost/services/data/v1.0/query/?query=SELECT name, os_name, os_version FROM view_device_v1 order by device_pk
```

**Curl example:** 
```bash
curl -X POST \
  -d "query=select name from view_appcomp_v1 where lower(name) like 'microsoft sql%' or lower(name) like 'postgresql%' or lower(name) like 'mongodb%' or lower(name) like 'mysql%' or lower(name) like 'oracle database%' or lower(name) like 'sap%' or lower(name) like 'sybase%' or lower(name) like 'mariadb%'" \
  -u $(cat apipw) \
  'https://yourdevice42/services/data/v1.0/query/'
```

### Query Results in JSON Format

If you'd like your DOQL query results in JSON format, set the `output_type` query parameter to `json`. For example:

```bash
curl -k -s -X POST \
  -d 'output_type=json&query=select * from view_device_v1' \
  -u 'admin:adm!nd42' \
  'http://server/services/data/v1.0/query/'
```

### DOQL API Query Parameters

The following database query parameters can be utilized with DOQL via the API. The required parameters are `query` and `output_type`.

- **`query`**: the DOQL query you want to run, a `SELECT` command whose results are to be returned as CSV data (required).
- **`delimiter`**: Specifies the character that separates columns within each row (line) of the file. The default a comma (`,`). This must be a single one-byte character.
- **`header`**: If `yes` specifies that the file contains a header line with the names of each column in the file. On output, the first line contains the column names from the table.
- **`quote`**: Specifies the quoting character to be used when a data value is quoted. The default is a double-quote (`"`). This must be a single one-byte character.
- **`null_string`**: A parameter defining how null values are represented in the CSV. The default is an empty string, but you can customize this (for example, to represent nulls with a specific string like `'NULL'`).
- **`quote_escape`**: Specifies the character that should appear before a data character that matches the `QUOTE` value. The default is the same as the `QUOTE` value (so that the quoting character is doubled if it appears in the data). This must be a single one-byte character.
- **`output_type`**: Get JSON results by setting this parameter to `json`.

### The Data Dictionary, ERD, and Viewer Schema

The data dictionary is available in JSON format via the API at the following endpoint:

```
/services/data/v1.0/dd/
```

See the [Database Viewer Schema page](db-viewer-schema.md) for information on the DB viewer schema and Entity Relationship Diagram, both of which are very handy when authoring queries, providing valuable insight into the Device42 database schema.

## DOQL Queries Against Custom Fields

When constructing DOQL queries against custom fields, keep in mind that custom field names that contain any **upper-case characters** or **spaces** require your queries to match this casing and format exactly as written, in double quotes.

### Custom Fields are Usually Case Sensitive

Custom field names with only lowercase characters and no spaces can be referenced (as the column name in the database) with any casing in queries. Custom field names with **upper-case characters** or **spaces** must be referenced using the exact casing in quotes.

**For example, consider the following telco custom field names**:

- For `Region`, the appropriate query would be: 
```sql
select "Region" from view_telcocircuit_custom_fields_flat_v1
```

- For `region name`, the query would need to be:
```sql
select "region name" from view_telcocircuit_custom_fields_flat_v1
```

- For `region`, since it only has lowercase characters and no spaces, the query can be:
```sql
select region from view_telcocircuit_custom_fields_flat_v1
```

## Saved DOQL Queries

With Saved DOQL queries, you can centrally store, track, and re-use queries written for prior integrations, automation projects, or other efforts. You can reference the name of a saved query (for example, "Prod_Switches") to call it from any integration. Saved queries are also leveraged by Device42 integrations as 'system-defined' queries, and at the same time allow easy addition and customization of those queries.

To add, edit, and view your stored DOQL queries, go to **Tools > Integrations > Saved DOQL Queries** from the main menu.

<ThemedImage
  alt="Saved DOQL Queries menu item"
  sources={{
    light: useBaseUrl('/assets/images/device42-doql/saved-doql-queries-light.png'),
    dark: useBaseUrl('/assets/images/device42-doql/saved-doql-queries-dark.png'),
  }}
/>

### Add a New Saved DOQL Query

- Click **+ Add Saved DOQL Query** to add a new query from the "DOQL Query View" list page.

    <ThemedImage
    alt="Saved DOQL Queries menu item"
    sources={{
        light: useBaseUrl('/assets/images/device42-doql/saved-queries-list-page-light.png'),
        dark: useBaseUrl('/assets/images/device42-doql/saved-queries-list-page-dark.png'),
    }}
    />

- Enter the query name, the DOQL query itself, and any notes you'd like to add. Use the **Test SQL** button to check the validity of the query before saving.
 
    <ThemedImage
    alt="DOQL Query form"
    sources={{
        light: useBaseUrl('/assets/images/device42-doql/save-query-fields-light.png'),
        dark: useBaseUrl('/assets/images/device42-doql/save-query-fields-dark.png'),
    }}
    />

### DOQL Query URL

Each saved DOQL query has an associated **Query URL**, which can be seen next to each query on the **Saved DOQL Queries** list page and at the bottom of an individual query's details page.

<ThemedImage
  alt="View saved DOQL Query"
  sources={{
    light: useBaseUrl('/assets/images/device42-doql/view-saved-query-light.png'),
    dark: useBaseUrl('/assets/images/device42-doql/view-saved-query-dark.png'),
  }}
/>

The query URL links to the DOQL query API endpoint and returns the results of that specific DOQL query in .CSV format. For more information on running DOQL queries via the Device42 API, see the first section of this page, [Querying DOQL using the Device42 API](#querying-doql-using-the-device42-api).

### Edit or Clone an Existing Saved DOQL Query

- To edit an existing DOQL query, click the name of the query you'd like to edit, and from the "View Saved DOQL Query" screen, click "**Edit**" in the upper-right corner. You can also **Clone DOQL Query** to create a new query based on the existing one.

    <ThemedImage
    alt="Edit button for saved DOQL Query"
    sources={{
        light: useBaseUrl('/assets/images/device42-doql/edit-button-saved-query-light.png'),
        dark: useBaseUrl('/assets/images/device42-doql/edit-button-saved-query-dark.png'),
    }}
    />

- You can now make any necessary edits to the DOQL query you were looking at, and can even add notes. Click the **Save** button when you are done editing your DOQL Query.

    <ThemedImage
    alt="Edit saved DOQL Query"
    sources={{
        light: useBaseUrl('/assets/images/device42-doql/edit-query-fields-light.png'),
        dark: useBaseUrl('/assets/images/device42-doql/edit-query-fields-dark.png'),
    }}
    />

## About Device42 DOQL

Note that wherever possible, DOQL Syntax are equivalent to PostgreSQL syntax.

- This document does its best to highlight those areas in which the syntax DIFFER.
- POST calls are recommended rather than GET calls, as url length does not have limitations in POST calls.
- If using GET calls, note that URL length is limited, and any special characters in the query need to be URL encoded (i.e. %20 for space, %3B for "%").

## Sample Database Schema

Below is a sample database schema in JSON format:

```json
{
  "tables": [
    {
      "table": "view_appcomp_custom_fields_flat_v1",
      "columns": [
        {
          "column": "appcomp_fk",
          "description": "Foreign Key to ID for Application Component",
          "data_type": "integer"
        },
        {
          "column": "Test End User",
          "description": "Related Field for endusers - Log for API - for Application Component",
          "data_type": "text"
        }
      ]
    },
    {
      "table": "view_asset_custom_fields_flat_v1",
      "columns": [
        {
          "column": "asset_fk",
          "description": "Foreign Key to ID for Asset",
          "data_type": "integer"
        }
      ]
    },
    {
      "table": "view_asset_custom_fields_v1",
      "columns": [
        {
          "column": "asset_fk",
          "description": "Foreign Key to ID for Asset",
          "data_type": "integer"
        },
        {
          "column": "asset_name",
          "description": "Name for Asset",
          "data_type": "character varying"
        },
        {
          "column": "type_id",
          "description": "Identifier Key for Type for Asset Custom Field",
          "data_type": "smallint"
        },
        {
          "column": "type",
          "description": "Type for Asset Custom Field",
          "data_type": "text"
        },
        {
          "column": "related_model_name",
          "description": "Name of Related Field for Asset Custom Field",
          "data_type": "character varying"
        },
        {
          "column": "filterable",
          "description": "Filterable for Asset Custom Field",
          "data_type": "boolean"
        },
        {
          "column": "mandatory",
          "description": "Mandatory for Asset Custom Field",
          "data_type": "boolean"
        },
        {
          "column": "log_for_api",
          "description": "Log for API for Asset Custom Field",
          "data_type": "boolean"
        },
        {
          "column": "key",
          "description": "Field for Asset Custom Field",
          "data_type": "character varying"
        },
        {
          "column": "value",
          "description": "VLAN Custom Field for VLAN",

```json
[
  {
    "columns": [
      {
        "column": "appcomp_fk",
        "description": "Foreign Key to ID for Application Component",
        "data_type": "integer"
      },
      {
        "column": "Test End User",
        "description": "Related Field for endusers - Log for API - for Application Component",
        "data_type": "text"
      }
    ],
    "view": "view_appcomp_custom_fields_flat_v1"
  },
  {
    "columns": [
      {
        "column": "asset_fk",
        "description": "Foreign Key to ID for Asset",
        "data_type": "integer"
      }
    ],
    "view": "view_asset_custom_fields_flat_v1"
  },
  {
    "columns": [
      {
        "column": "asset_fk",
        "description": "Foreign Key to ID for Asset",
        "data_type": "integer"
      },
      {
        "column": "asset_name",
        "description": "Name for Asset",
        "data_type": "character varying"
      },
      {
        "column": "type_id",
        "description": "Identifier Key for Type for Asset Custom Field",
        "data_type": "smallint"
      },
      {
        "column": "type",
        "description": "Type for Asset Custom Field",
        "data_type": "text"
      },
      {
        "column": "related_model_name",
        "description": "Name of Related Field for Asset Custom Field",
        "data_type": "character varying"
      },
      {
        "column": "filterable",
        "description": "Filterable for Asset Custom Field",
        "data_type": "boolean"
      },
      {
        "column": "mandatory",
        "description": "Mandatory for Asset Custom Field",
        "data_type": "boolean"
      },
      {
        "column": "log_for_api",
        "description": "Log for API for Asset Custom Field",
        "data_type": "boolean"
      },
      {
        "column": "key",
        "description": "Field for Asset Custom Field",
        "data_type": "character varying"
      },
      {
        "column": "value",
        "description": "VLAN Custom Field for VLAN",
        "data_type": "text"
      }
    ],
    "view": "view_asset_custom_fields_v1"
  }
]
```
