---
title: "Warranty Autodiscovery"
sidebar_position: 37
---

# Discover Warranty Details with Device42

Device42 supports autodiscovery of hardware warranties, making tracking within Device42 a breeze.

The Device42 warranty autodiscovery and management tools will find and help you keep track of your hardware warranties from Dell, IBM, Lenovo, and Meraki. The functionality originally started as a standalone script, which still functions, and is now integrated into the main UI – select _Discovery > Warranty Sync_ from the main menu.

![](/assets/images/WEB-598_warranty-ad-menu-700x346.png)

To configure automatic warranty discovery, you'll need to simply request API keys from the vendors that require them (currently Dell and Meraki), and once you've provided Device42 with your API access keys, simply let Device42 loose! As long as your device CIs have a model and serial number present so Device42 knows what vendor to ask, and the ID of the machine, warranty autodiscovery does the rest, automatically discovering and populating your hardware's service contract information.

## Detailed Warranty Sync Instructions

**Supported Vendors:**

- Dell
- IBM
- Lenovo
- Meraki
- Cisco (Preview)

**Note**: Cisco Warranty Discovery is a preview feature of Device42 v18.01.00.

### API Keys, Configuration and Prerequisites:

1. For the script to successfully retrieve warranty information for a given device, the device’s model and serial number fields must be correctly filled out (entered or discovered). If you have more than one Vendor entry for a given vendor, the best option is to merge them prior to discovery. For example, to merge all lexical variations of "Dell" into a single vendor, head to _Infrastructure -> Vendors_ and check the boxes next to all variations of 'dell': 

![](/assets/images/WEB-598_warranty-ad-merge-vendors.png)

2. The Device42 _Model field_ must be set to one of the following: _Dell, IBM, Lenovo, or Meraki_ – hardware with different vendor name variations will not return a warranty. You can easily add the proper Alias to each vendor if your vendors are named differently. On the vendor edit screen, simply add _dell_ to the Dell vendor entry, _ibm_ for IBM, _meraki_ for Meraki, and finally _lenovo_ to the Lenovo vendor entry: 

![](/assets/images/WEB-598_warranty-ad-vendor-change-1-700x523.png)

3. Get your API keys (Dell and Meraki):

    **Dell API key**: Instructions for obtaining a Dell API key are available (this moved to TechDirect, now requires a valid Dell login) from here: [TechDirect APIs](https://tdm.dell.com/td-auth?lang=en_UShttps://techdirect.dell.com/Portal/Login.aspx?ReturnUrl=%2Fportal%2FAboutAPIs.aspxtdLegacyUrl=%2Fportal%2FAboutAPIs.aspx).

    **Meraki API Keys**: A Meraki API key must be obtained to enable Device42 to retrieve warranty information. Instructions to obtain Meraki API key: https://docs.device42.com/auto-discovery/warranty-autodiscovery/#section-9 . These instructions from Meraki offer details around their process for obtaining their API key.

    **Note:** If using the standalone warranty script (instructions in  the _STANDALONE_ section below), Python 2.7 must be installed along with the python library requests.

### Secure Communication Details

Both the UI and the warranty script transmit the same information (relevant serial number(s)) to the appropriate vendor via port 443 SSL, including the API key entered into Device42 for this purpose _only_ if required by the vendor (Dell/Meraki). Payload looks as follows:

```
payload = {'id': inline\_serials, 'apikey': self.api\_key, 'accept': 'Application/json'}
```

Warranty lookup queries the APIs at the following URLs:

```
Dell - sandbox.api.dell.com https port 443
Lenovo/IBM - support.lenovo.com https port 443
Meraki - api.meraki.com https port 443
```

## Configuring a Job / API Key Example

1. Select _Discovery > Warranty Sync_ from the main menu, then click _Add Warranty Check_ and name your job.
2. Select a vendor:
    
    For Dell or Meraki, be sure to enter your matching API key (see _API Keys_ section above for details on obtaining a Dell/Meraki API key). If you select Dell, be sure to select the API Version from the drop-down list (current default is Version 5).
    
    For IBM/Lenovo, you are required to be a large enterprise customer and will need to contact your sales representative who will put you in contact with the correct team for the API key.
    
3. You can add your API key right from this screen. Click the magnifying glass on the _Access Key_ field, and in the upper right of the window that opens, click _Add Password_ and add your key as shown below. Repeat these steps for the _Secret Key_ if necessary.
4. Choose your Order Number Generation and Debug Level options, set a schedule if desired, and save the job.
5. Go ahead and run the job!

![](/assets/images/WEB-598_warranty-ad-add-Dell-access-key-700x333.png)

As long as your API key is active, and devices have a valid model, vendor, and serial information the sync will gather warranty information. On each device in the _LifeCycle_ tab or in _Infrastructure > Purchases_, you will find past and present warranty information. This includes order details, contract/service types, and dates.

![](/assets/images/WEB-598_warranty-ad-purchase-support-tab.png)

## If you are using the STANDALONE Warranty Script:

1. Create a working directory. Copy the files from [Device42’s GitHub warranty\_check Repo](https://github.com/device42/warranty_check/)
2. Copy the file _warranty.cfg.example_ to _warranty.cfg_
3. Set the required parameters in warranty.cfg _\[D42 instance info & API keys\]_:![](/assets/images/WEB-598_warranty-ad-standalone-script-700x334.png)
4. Run the script! `$ python starter.py`

## Obtaining the Standalone Script (note: may be deprecated in the future)

As noted above, this functionality is now built into the main UI:

The latest version of the standalone script can be [downloaded from GitHub](https://codeload.github.com/device42/warranty_check/zip/refs/heads/master)

## Cisco Support API Info

Cisco discovery specifically uses Cisco’s Support API labeled `Serial Number to Information`. The endpoint used is: 
`https://api.cisco.com/sn2info/v2/coverage/summary/serial_numbers/{sr_no,sr_no,sr_no}.`

Click this link for more information: [![](https://static.production.devnetcloud.com/images/favicon.ico)Cisco Developer](https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-coverage-summary-by-serial-numbers)

If you have questions on getting access to the Cisco Support APIs, you can do so by registering an application on the Cisco API Console. You should have only the Client Credentials checkbox selected and nothing else. This should allow you to use your client ID and secret to generate a authorization token using oauth2.0 to make requests to the API.

Click this link for more information: [![](https://static.production.devnetcloud.com/images/favicon.ico)Cisco Developer](https://developer.cisco.com/docs/support-apis/#!application-registration/application-registration)

Below is an example of the App Registration form in the Cisco API console. This is the location where a majority of the configuration is needed to get Cisco warranty discovery working.

![](/assets/images/18.04.00_affinity-groups-timeline-2-700x311.png)

The API should be enabled and will be displayed in the My Apps & Keys section.

![](/assets/images/18.04.00_affinity-groups-device-calc-page-700x292.png)

 

## Meraki Details

For Meraki warranty discovery, they require that a user has all access points with corresponding serial numbers and hardware model set to "Meraki" as vendor prior to sync.
