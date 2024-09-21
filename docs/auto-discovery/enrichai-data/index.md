---
title: "EnrichAI Data"
sidebar_position: 99
---

EnrichAI Data is a Device42 service to enrich discovered data. Currently, Device42 supports the enrichment of discovered device OS data and vendor data.

## Data Fields

From Device42 version 18.12, the following vendor attributes, operating system attributes, and support date fields will be populated if data for them are available.  These attributes are mined from a set of validated authoritative sources to ensure accuracy.

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

Note that from the v18.12 release, the **OS Architecture: 32 vs 64 bit** field is no longer part of EnrichAI data. Both the 32 and 64-bit architectures will coalesce into a single entry since OS dates, licensing, patches, and risk profiles are not affected by architecture.

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

When EnrichAI is enabled, device data such as OS, vendor, and the related architecture information that is collected during discovery jobs is queued up and then sent in batches to the EnrichAI service via HTTPS. All data is processed using a background task to prevent negative system impact.  The EnrichAI service will respond with the enriched data if a match is found and the enriched data is displayed on the EnrichAI Data page.  These results may not be available or visible immediately based on the number of requests in the queue and the system load.  

In addition, if the entry is new or unique, it may require the EnrichAI service to perform a background check with authoritative sources for new data or changes to previous data which can be displayed on the next discovery for this device.  For this reason, each discovery will check with the EnrichAI service to ensure fresh and correct values have been set. Data sent to the EnrichAI service is completely anonymized and cannot be traced back. Additionally, the data being sent will never contain any identifiable information such as hostnames, IP Addresses, MAC addresses, etc. Below is a sample of the payload:

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
      },
      {
        "context_info": {
          "discovery_type": "",
          "hardware_name": "",
          "hardware_vendor_name": ""
        },
        "entity_type": "software",
        "parameters": {
          "category": "",
          "hidden_name": "(https://support.microsoft.com/help/4598481) KB4598481",
          "name": "KB4598481",
          "vendor": "Microsoft",
          "version": "KB4598481"
        },
        "req_id": "software_912"
      },
      {
        "context_info": {
          "discovery_type": "vserver/*nix",
          "hardware_name": "",
          "hardware_vendor_name": ""
        },
        "entity_type": "service",
        "parameters": {
          "description": "Apache Tomcat Web Application Container",
          "displayName": "tomcat",
          "prettyName": "tomcat",
          "vendor": ""
        },
        "req_id": "service_5803"
      }
    ]
  }
]
```
## EnrichAI Connectivity

Please make sure the following is in place to ensure connectivity with EnrichAI:

1. Configure the Cloud Connector and ensure it is reachable.
2. Ensure that the EnrichAI endpoints are reachable, including the registration endpoint:
   - `https://registration.device42.com`
   - `https://crs.device42.io/`
   - `https://enrichai.device42.io/api/normalizations`
3. Register the license online.

[InsightsAI AI](/reports/device42-doql/doql-ai.mdx) generates queries based on natural language prompts you provide. Entered prompts are sent to the endpoint `ai42.device42.io`.

## Using the EnrichAI Interface

Select **Analytics > EnrichAI Data** to display the EnrichAI Data list page.

![](/assets/images/18.04.00_EnrichAI_data-list-page.jpg)

Click the **Enriched Value** link to view the data record. If you want, you can lock an EnrichAI data record to prevent Device42 from updating it in the future.

![](/assets/images/18.04.00_EnrichAI_data-view-page-os.jpg)

Device42 also currently displays EnrichAI Data information on OS and vendor view pages that have been enriched. The image below shows a vendor view page with EnrichAI Data – click the link to go to the data view page. Enriched data information is also available via API and DOQL in the vendor and deviceOS DOQL views.

![](/assets/images/18.04.00_EnrichAI_vendor-view-page.jpg)

## EnrichAI Data Handling and Security Practices

1. No personal or personally identifiable data is maintained by the EnrichAI service.
2. Data sent to EnrichAI is not associated with or tracked to the calling system or installation.
3. Unmatched values (values that do not have a corresponding match in EnrichAI) are stored for future mining and resolution. This storage has no association with the calling system or installation.
4. Only Device42 personnel work with these non-identifiable data elements.
5. Data collected for future enrichment mining is stored in the United States.

:::note
Device42 reserves the right to make changes and updates to the internal matching algorithm and or the golden records that are provided with this service.
:::
