---
title: "SaltStack Integration"
sidebar_position: 26
---

### Intro

**_Quickly and easily sync Salt Node information to Device42_**

Salt (aka SaltStack) is a Python-based open source configuration management software and remote execution engine. Salt supports the Software-Defined Datacenter, allowing configuration of your Infrastructure as Code (IaC). With the Device42 Salt Integration, you can now gather information about your devices from the same tool you use to provision them. The Device42 / Salt Integration can gather the following from Salt:

- Name
- Node Type
- CPU Power
- Customer
- Virtual or Physical
- Virtual Sub-type
- CPU Core Count
- Manufacturer
- Operating System & OS Version
- Total Memory
- HDD Count
- Service Level

### Assumptions & Pre-Requisites

Working Salt & Device42 installations. Tested against Salt Master 2016.11.1 Carbon To allow connections, sign your minions certificate on your Salt Master and run the script on your Salt Master server

- Python v2.7.x
- PyYAML _\[$ easy\_install pyyaml or $ pip install pyyaml\]_
- appdirs _\[$ easy\_install appdirs or $ pip install appdirs\]_
- futures _\[$ easy\_install futures or $ pip install futures\]_
- jinja2 _\[$ easy\_install jinja2 or $ pip install jinja2\]_
- tornado _\[$ easy\_install tornado or $ pip install tornado\]_
- requests _\[$ easy\_install requests or $ pip install requests\]_
- salt _\[$ easy\_install salt or $ pip install salt\]_
- markupsafe _\[$ easy\_install markupsafe or $ pip install markupsafe\]_
- msgpack-python _\[$ easy\_install msgpack-python or $ pip install msgpack-python\]_
- packaging _\[$ easy\_install packaging or $ pip install packaging\]_
- pycrypto _\[$ easy\_install pycrypto or $ pip install pycrypto\]_
- pyparsing _\[$ easy\_install pyparsing or $ pip install pyparsing\]_
- pyzmq _\[$ easy\_install pyzmq or $ pip install pyzmq\]_
- singledispatch _\[$ easy\_install singledispatch or $ pip install singledispath\]_
- six _\[$ easy\_install six or $ pip install six\]_

### Configuration and Usage

1. Create a working directory foo and copy the contents of the salt\_to\_device42\_sync repository to it.
2. Copy (or move/rename) the settings file settings.yaml.example to _settings.yaml_.
3. Populate the settings.yaml file you created in the last step with your Device42 instance info \[host, user, pss\]:

```
========= Device 42
Device42:
    host: host
    user: user
    pass: pass

# ========= Options
# static options
Static:
    customer: null
    customer_id: null
    service_level: null

Options:
    # as_node_name: one of [fqdn, name]
    as_node_name: fqdn
    node_filter: [] 
```

(consult README.MD & requirements.txt for more details)

1. Configure node filtering, if desired. Details regarding configuration options can be found in NodeFilter.md. Filter settings are added following the ‘options:’ section of _settings.yaml_.
2. Run the script! $ python saltexplore.py \[-c /path/to/settings.yaml\]

If you run into any unexpected behavior, bugs, or otherwise have questions, comments, or feature requests, feel free to reach out to support@device42.com.

### Download the Salt integration script for Device42 today!
