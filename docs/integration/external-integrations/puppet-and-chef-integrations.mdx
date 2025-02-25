---
title: "Puppet and Chef Integrations"
sidebar_position: 25
---

### Puppet Integration

Puppet is a free configuration management utility created by Puppet Labs that helps sysadmins automate configuration and management of machines and the software running on them throughout the enterprise IT infrastructure.

Device42’s integration connector for Puppet allows Device42 software to utilize discovered system information data stored in “puppet manifests” to populate the Device42 asset inventory, eliminating the need to run redundant auto-discovery processes across the IT infrastructure.

### Puppet ENC (External Node Classifier) Integration

External Node Classifiers can accept the name of a node as input, and return the class hierarchy for that node as output. Device42 can be utilized as a Puppet ENC, allowing easy management of Puppet classes right from Device42. As opposed to managing node definitions in the main site manifest (site.pp) on your Puppet master.

An ENC Script pipes data between your Puppet Master and an ENC source -- Device42, in this case.

**Requirements:**

- Puppet v4.8+
- Puppet Server v2.7.2+
- Python v2.7.10+Getting the Device42 - Puppet ENC Integration up and running is a four step process.
    1. Create a JSON custom field in Device42 (named whatever you like)
    2. Fill the custom field you created in step #1 with your desired enviornment, in JSON.
    3. Download and configure the Device42-Puppet ENC [Integration Script](https://github.com/device42/d42-puppet-enc/).
    4. Configure your Puppet Master to use Device42 as an ENC.

**Setting up the Puppet ENC Integration Details:**

1. Navigate to **Tools -> Custom -> Devices** Fields in Device42, and click “Add Device Custom Field”. Choose "Type" JSON, and for demonstration purposes, we’ll call the field `node_classes`.

![Add Device42 Custom Field](/assets/images/Puppet_ENC_add_custom_field.png)

1a. Populate the `node_classes` field (with a placeholder) in Device42 on your target Puppet Node's CI (puppet.device42.pvt, in our case) by setting one of your device’s `node_classes` field to the following:

```
{
  "classes": {
    "example": { 
      "param": "example_param" 
    } 
  }, 
  "environment": "production" 
}
```

![Device42 Custom Field JSON](/assets/images/Puppet_ENC_custom_field_JSON.png)

1. Grab the script, and set it up:
    1. Clone the `d42-puppet-enc` repository onto your Puppet master
    2. Set it as executable permissions (`chmod +x {filename}`).
    3. If you don't have all the requirements in requirements.txt installed, install with: `pip install -r requirements.txt`
    4. Configure the settings.yaml file. It requires:
        
        - The IP address of your D42 appliance.
        - The Username + Password for your D42 appliance for authentication.
        - The name of the custom field we created earlier `node_classes`.
        
![Puppet ENC settings.yaml](/assets/images/Puppet_ENC_settings.yaml.png)

2. Designate your Puppet master as the ENC authority by editing your puppet.conf (`/etc/puppetlabs/puppet/puppet.conf`). Add these two configuration lines, specifying the location of `d42_enc_fetcher.py`:

```
[master]
  node_terminus = exec
  external_nodes = /etc/puppetlabs/puppet/d42-puppet-enc/d42_enc_fetcher.py
```


Once that's set, restart your Puppet server Services, and you're all set. Now, just create a class, and you're in business!

### Chef Integration

Device42 also provides an integration connector for Chef software — used to streamline the task of provisioning, configuring, and maintaining servers.

The Device42 – Chef integration allows Device42 software to utilize Chef-discovered system information data to populate the Device42 asset inventory, eliminating the need to run redundant auto-discovery processes.

The Device42 integration connector works with all Chef-supported versions of Chef software.

### Device42’s Additional IT Infrastructure Capabilities

Integrating Puppet or Chef with Device42, also ensures that Device42 remains aligned with the Chef or Puppet device data ensuring consistency and uniformity between Device42 and either application across all of Device42’s broad IT infrastructure management capabilities:

- IP address management
- Cabling management 
- Password management
- Server room, rack, and device visualizations
- Software license management
- Power and environmental monitoring
- Power control
- Integration Connectors Information

### Device42 — Puppet and Chef integrations are easily accomplished using Device42 provided scripts.

**Puppet:** The script to sync Puppet nodes information to Device42 can be found here: [github.com/device42/puppet_to_device42_sync_py](https://github.com/device42/puppet_to_device42_sync_py)

**Puppet ENC:** The script to use Device42 as a Puppet External Node Classifier: [github.com/device42/d42-puppet-enc](https://github.com/device42/d42-puppet-enc)

**Chef:** The script to sync Chef nodes information to Device42 can be found here: [github.com/device42/chef_to_device42_sync_py](https://github.com/device42/chef_to_device42_sync_py)

