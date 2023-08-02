---
title: "EnrichAI Data"
sidebar_position: 1
---

EnrichAI Data is a Device42 service to enrich discovered data – currently Device42 supports enrichment of discovered device OS data and Vendor data – additional data types will be added in future releases.

 

When EnrichAI is enabled, customer data such as OS, vendor, and the related architecture information that is collected during discovery jobs is queued up and then sent in batches to the EnrichAI service via https. The EnrichAI service will respond back with the enriched data if a match is found and the enriched data is displayed on the EnrichAI Data page. All data sent to the EnrichAI service is completely anonymized and cannot be traced back. Additionally the data being sent will never contain any identifiable information such as hostnames, IP Addresses, MAC Addresses, etc. Below is a sample of the payload

Payload: \[{"client\_id":"D42","client\_version":"999.99.99.9999999999","items": \[{"entity\_type":"os","parameters":{"os\_architecture":"","os\_name":"junos","os\_version":"12.3R12-S1","os\_version\_no":""},"req\_id":"os\_7"}, {"entity\_type":"vendor","parameters":{"vendor":"brocade"},"req\_id":"vendor\_3"}\]}\]

Note: The Main Appliance will need to be able to reach the following domains for cloud services to be registered.

- - [https://crs.device42.io/](https://crs.device42.io/) 
    - _[https://enrichai.device42.io/api/normalizations](https://enrichai.device42.io/api/normalizations)_

 

Select _Analytics > EnrichAI Data_ to display the EnrichAI Data list page.

![](/assets/images/18.04.00_EnrichAI_data-list-page.jpg)

Click the _Enriched Value_ link to view the data record. If you want, you can lock an EnrichAI data record to prevent Device42 from updating it in the future.

![](/assets/images/18.04.00_EnrichAI_data-view-page-os.jpg)

Device42 also currently displays EnrichAI Data information on OS and vendor view pages that have been enriched. The image below shows a vendor view page with EnrichAI Data – click the link to go to the data view page. Enriched data information is also available via API and DOQL in the vendor and deviceOS DOQL views.

![](/assets/images/18.04.00_EnrichAI_vendor-view-page.jpg)

 

\* Note: Device42 reserves the right to make changes/updates to the internal matching algorithm and or the golden records that are provided with this service
