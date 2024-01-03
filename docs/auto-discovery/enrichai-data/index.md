---
title: "EnrichAI Data"
sidebar_position: 99
---

EnrichAI Data is a Device42 service to enrich discovered data. Currently Device42 supports the enrichment of discovered device OS data and vendor data.

## Data Fields

From Device42 version 18.12 , the following vendor attributes, operating system attributes, and support date fields will be populated if data for them are available.

### Vendor Attributes

| Vendor Attributes       | Description                                             |
|-------------------------|---------------------------------------------------------|
| Vendor Name             | The standardized vendor company title     |
| Parent                  | The name of a corporate parent company (if one exists)  |
| Vendor Name Aliases     | A list of also-known-as names (if they exist)               |

### Operating System Attributes

| Field               | Description                                                   |
|---------------------|---------------------------------------------------------------|
| OS Name             | Contains the standardized name of the Operating System        |
| OS Family              | Contains the Operating System family of releases              |
| OS Edition             | The edition identifier for the Operating System               |
| OS Vendor              | Name of the vendor of the Operating System                    |
| OS Version Number           | General version number of the release                          |
| Key Support Dates  | See the table below for details on the available date fields  |

Note that from the v18.12 release, the **OS Architecture: 32 vs 64 bit** field is no longer part of EnrichAI data. Both the 32 and 64 bit architectures will coalesce into a single entry since OS dates, licensing, patches, and risk profiles are not affected by architecture.

### Key Support Dates

| Key Support Dates                  | Description                                                           |
|------------------------------------|-----------------------------------------------------------------------|
| Base Release Date                  | Date when OS became available                                        |
| Release Start Date                 | Date support started for the OS release                               |
| Release End Date                   | Date support ended for the release                                    |
| End of Life Date                    | Date when the OS is no longer sold                                    |
| End of Support Date                 | Date when mainstream support ends                                     |
| Extended End of Support Date        | Date when extended support ends                                       |
| End Of Maintenance Date             | Date when no more patches will be released under standard maintenance agreement |
| Extended End Of Maintenance Date    | Date when no more patches will be released under extended maintenance agreement |

Note that these date fields may not be populated depending on the vendor, OS, and availability of information.

## EnrichAI data collection

When EnrichAI is enabled, customer data such as OS, vendor, and the related architecture information that is collected during discovery jobs is queued up and then sent in batches to the EnrichAI service via https. The EnrichAI service will respond back with the enriched data if a match is found and the enriched data is displayed on the EnrichAI Data page. All data sent to the EnrichAI service is completely anonymized and cannot be traced back. Additionally, the data being sent will never contain any identifiable information such as hostnames, IP Addresses, MAC addresses, etc. Below is a sample of the payload:

```json
[
  {
    "client_id": "D42",
    "client_version": "999.99.99.9999999999",
    "items": [
      {
        "entity_type": "os",
        "parameters": {
          "os_architecture": "",
          "os_name": "junos",
          "os_version": "12.3R12-S1",
          "os_version_no": ""
        },
        "req_id": "os_7"
      },
      {
        "entity_type": "vendor",
        "parameters": {
          "vendor": "brocade"
        },
        "req_id": "vendor_3"
      }
    ]
  }
]
```
## Using the EnrichAI Interface

The Main Appliance will need to be able to reach the following domains for cloud services to be registered:

- `https://registration.device42.com`
- `https://crs.device42.io/`
- `https://enrichai.device42.io/api/normalizations`


Select **Analytics > EnrichAI Data** to display the EnrichAI Data list page.

![](/assets/images/18.04.00_EnrichAI_data-list-page.jpg)

Click the **Enriched Value** link to view the data record. If you want, you can lock an EnrichAI data record to prevent Device42 from updating it in the future.

![](/assets/images/18.04.00_EnrichAI_data-view-page-os.jpg)

Device42 also currently displays EnrichAI Data information on OS and vendor view pages that have been enriched. The image below shows a vendor view page with EnrichAI Data – click the link to go to the data view page. Enriched data information is also available via API and DOQL in the vendor and deviceOS DOQL views.

![](/assets/images/18.04.00_EnrichAI_vendor-view-page.jpg)

:::info 
Device42 reserves the right to make changes and updates to the internal matching algorithm and or the golden records that are provided with this service
:::