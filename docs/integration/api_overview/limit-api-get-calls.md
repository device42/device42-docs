---
title: "Limit API GET Calls"
sidebar_position: 4
---

## Enforce API GET Call Limits

In Device42 you can enforce limits on the number of rows returned by API GET calls. The maximum value allowed is 1000 and this is also the default value. Enabling limits can help API performance quite a bit; however, there are some challenges to consider before adding limits:

1. Any existing integration code you have with GET calls might fail if rate limited, and may require revision. If you de-select the limits setting, your existing code will work as is.
    
2. We are still working on changes to the JIRA and Confluence plugins to make them work with limits. If you have the JIRA or Confluence plugins running in your environment, please don’t enforce limits until rate limit-compatible plugins have been released.
    

To apply this setting, go to Tools→Settings→Global Settings, and then click the "Edit" button. Toward the bottom you will see the field for API Call limits:

![Enforce API Get Limit Setting](/assets/images/API_settings_Enforce_GET_LIMIT.png)

**NOTE: Once the API GET rate limit setting is enabled, you will need to use the _total\_count_ and _offset_ parameters to fetch all the records!**
