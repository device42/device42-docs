---
title: "Cherwell Integration"
sidebar_position: 4
---

**Device42-Cherwell integration requires** a working Cherwell installation, Device42 instance, and assumes a Linux server with python 3.5+.

## Configuring Cherwell

To prepare Cherwell to accept relationship data from Device42, two new CI types must be created within Cherwell: one for _apps_ & one for _services_. The following steps will create them:

1. Open Cherwell Service Management Administrator and on the left-side menu under _"Common Tasks"_, choose _"Create a new Blueprint"_ (optionally, edit an existing Blueprint): ![Create new or Open Blueprint](/assets/images/create_open_blueprint.png)
2. Create a new CI type for Applications called `Config - Application` by clicking _"New Business Object"_ and defining the object: ![Create new CI for applications](/assets/images/Create_application_CI_business_object_properties.png)
3. Obtain the "Internal ID" of the new Application CI Business Object you just created (you'll need it for the config file) before closing the window by selecting the "Advanced" icon and clicking _Business Object ID_: ![Cherwell CI business object internal ID](/assets/images/Obtain_Cherwell_internal_ID_application_CI.png)
4. Edit the properties of your new Application Business Object CI, and add the fields `u_device42_id`, type 'text', size:15 & `u_device42_url`, type 'text', size:300: ![Add new custom fields to Cherwell business object CI](/assets/images/add_fields_to_new_Cherwell_business_object_CI.png)
5. Add a second new CI business object named `Config - Service` to Cherwell for Services by repeating steps #2-4 again.

 

## Configuring the D42-Cherwell integration

To sync your autodiscovered hardware, servers, software, services, and/or assets, etc. (CIs) from Device42 to Cherwell, configure the integration:

1. Download the integration from the [Device42 Cherwell Integration page](https://www.device42.com/integrations/cherwell/), and unzip the folder to the directory of your choice.
2. Download the sample `mapping.xml` configuration file from [Device42's Github](https://github.com/device42/cherwell_device42_sync/blob/master/mapping.xml.sample) and put it into the folder you created in step 1.
3. Configure the integration credentials to allow connection between Device42 and Cherwell:
    - Save a copy of `mapping.xml.sample` as `mapping.xml`.
    - Enter your Cherwell & Device42 **URLs**, **user names**, and **passwords** in their respective sections (lines 3-11), and for Cherwell only, the `client_id` - find it in your Cherwell instance: _Cherwell Service Management Administration -> Security -> Edit REST API Client Settings -> Client Key_
4. Configure the tasks section (below the credential settings) by entering the Cherwell Business Object IDs you saved from above, mapping each Device42 API resource to be synced (the `resource` value) to the appropriate fields in Cherwell (the `target` value). It is very important to ensure you've updated the configuration completely, mapping all of the details you are syncing from Device42 to their appropriate default endpoints in Cherwell (for example, service\_level). _Should you have trouble or need debugging, there is a `DEBUG` variable in `lib.py` which can be set to `True` or `False`._
5. Execute a one-time CI sync by running the following command: `python sync.py`.
6. Schedule your syncs to run automatically by adding a `crontab` entry that will execute `sync.py` as often as you deem necessary, depending on the rate of change in your enviornment & existing discovery job schedules. This [crontab generator](https://crontab-generator.org/) can help you generate crontab syntax appropriate for your schedule. This example runs twice a day @ noon & midnight: `0 */12 * * * python sync.py >/dev/null 2>&1`

 

## Application Group Configuration for Cherwell

**The latest Device42 version is required**

Creation of Application Groups in Cherwell is not enabled by default. To enable Application groups in `mapping.xml`. Relevant Attributes are as follows:

- `Copy Application Group data from Device42 to Cherwell`: _true/false_. Enable/disable Application Group mapping in Cherwell - _disabled by default._
- `reset-connections`: _true/false_. A setting of `true` resets all existing upstream/downstream service relationships, removing them from Cherwell before new relationships are processed - _enabled by default_.

Tasks must contain at least the following 3 tags:

1. For **Service Instances** (aka _Config-Service_\* CI in Cherwell; _serviceinstance_ in Device42)
2. For **Application Components** (aka _Config-Application_\* CI in Cherwell; _appcomp_ in Device42)
3. For **Devices** (aka _device_ in Device42). Several for devices can be present if devices are mapped to several CIs on Cherwell.

Each section must contain the following attributes:

- `d42-model`: the name of CI(model) in Device42
- `bus-ob-id`: the business object ID of CI in Cherwell

Each section must contain one or more upstream/downstream relationships (section). The section represents _1 `<->` Many_ downstream relationship and has to contain the following attributes:

- `d42-model`: the name of CI(model) in Device42 of the 'child' in relationship
- `id`: the ID of relationship (the _CI links Downstream CIs_ relationship should be used in common case). This value can be obtained in Cherwell from Cherwell service management administration -> blueprint -> Config - \* -> Edit relationships... -> relationship -> Edit -> Advanced -> Relationship ID. For proper working, please make sure that used relationship has the reversed one (_Upstream_).

The Service Instances and Application Components sections must include the section for creating new objects in Cherwell. Mappings are not applicable for devices since they should be processed in own tasks.

Consult the examples in the `mapping.xml.sample` file.
