---
title: "Linux Based Autodiscovery Software"
sidebar_position: 17
---

**Note:** Since v13.2, Device42 has supported Linux (and UNIX) based autodiscovery from within the main UI. If you are simply trying to run discovery against Linux or UNIX, see our [Linux and UNIX Server AutoDiscovery Instructions.](linux-unix-server-auto-discovery) or our [Remote Collector documentation](remote-collector-rc.md). If you want to use the standalone Linux discovery tools, continue reading below.

# Linux Based Autodiscovery Software

The Linux Based Autodiscovery Software is an OPTIONAL external tool that can be run on Linux machines either standalone or as a service. It autodiscovers information about linux servers and sends that information to Device42.

## Installation

The client can be downloaded by going to the [Device42 Autodiscovery Software page](https://www.device42.com/autodiscovery/) and downloading the "Linux Based Auto Discovery Software".

There are no dependencies for running the application. You may need to set it to executable with `chmod +x linux_discovery_app`.

## Settings

To configure the autodiscovery application, edit the inventory.cfg file using your editor of choice.

Enter your Device42 credentials in \[settings\]:

```
[settings]
# base_url points to your Device42 server
# For example: base_url = https://192.168.1.50
base_url   =  https://
# Device42 username and password
username   =  admin
secret = adm!nd42
```

In the \[targets\] section, enter any IP addresses, IP address ranges, or CIDR blocks to identify the servers to run autodiscovery on. You can also exclude specific IP addresses or ranges.

```
[targets]
# targets can be specified as:
# single: 192.168.1.125
# range: 192.168.1.101-192.168.1.150
# cidr block: 192.168.1.0/24
# any combination of above: 192.168.3.0/24,192.168.4.1-192.168.4.10,192.168.55.22,10.0.0.0/24
targets   =

# exclude IPs from target scope (single, range, cidr or any combination separated by comma)
exclude_ips=
```

The \[credentials\] section allows you to supply a key file or username:password pairs to attempt logging in (and discovery) with:

**Discovery Account _WARNING:_ Please do _not_ set up an autodiscovery / scan using critical \[production\] account credentials! Please create a separate, dedicated account to use _only_ for discovery**

_Depending on permissions granted & your configured password policies, account lock-out could result in an otherwise completely avoidable outage. You, the customer, are responsible for any such behavior that might result if you choose to ignore this requirement._

```
[credentials]
# If using key file instead of username and password, enter 'True' for use_key_file setting and
# path to the private key file. For example:
# use_key_file = True
# key_file = /home/user/.ssh/id_rsa
use_key_file = False
key_file     =
# You can use as many USER:PWD combinations as you like separated by commas.
# TIP: put more frequently used combinations at the beginning of line
# For example: credentials = user:P@ssw0rd,root:P@ssw0rd
# If using key file, instead of user:password combination use just username
# For example: credentials = root
credentials = root:hunter2,user:password
```

You can also specify ssh ports, and which details you would like autodiscovered or not:

```
[ssh_settings]
ssh_port      = 22
timeout       = 10

[options]
get_serial_info             = True
get_hardware_info           = True
get_os_details              = True
get_cpu_info                = True
get_memory_info             = True
ignore_domain               = False
ignore_virtual_machines     = False
upload_ipv6                 = True
duplicate_serials           = False
remove_stale_ips            = True
give_hostname_precedence    = True
mac_lookup                  = False
debug                       = True
threads                     = 50
dict_output                 = False
add_hdd_as_device_properties= False 
add_hdd_as_parts            = True
add_nic_as_parts = False
```

After saving the inventory.cfg file, run the application:

```
./d42_autodiscovery
```

And you will see the results on your screen:

```
Application started
Version 1.1.0
Loading settings... done
Checking licenses... done
  Software license is active
  Services license is active
  Applications license is active
2 IPs found
Checking IPs for open SSH port... done
0 IPs removed / 2 IPs left to scan
Application loaded
Started processing... done in 8 seconds
Processed 2 IPs
2 devices were successfully added/updated
```

## Debugging

The autodiscovery will create api.log, debug.log, error.log, and short.log files with information about the autodiscovery process. If for some reason the results are unexpected, please email support@device42.com with information about the job ran and include those log files.

## Considerations

Linux Autodiscovery has been tested on Redhat, Debian, CentOS, Ubuntu, and Oracle distributions and probably will work on similar linux distributions that have python intsalled. (You can confirm this by checking to see if your platform supports the following commands: Hostname: /bin/hostname OS: /usr/bin/python -m platform Manufacturer, Hardware and Serial # : sudo /usr/sbin/dmidecode -s system-manufacturer (and system-product-name, system-serial-number) IP Info: /sbin/ifconfig -a Memory: /proc/meminfo CPU Info: from /usr/sbin/dmidecode

## Linux Considerations

Linux Autodiscovery has been tested against Redhat, Debian, CentOS, Ubuntu, and Oracle distributions and should work fine against just about any similar Linux distribution that has python installed.

_Confirm this by checking to see if your platform supports the following commands:_

Hostname: /bin/hostname OS: /usr/bin/python -m platform Manufacturer, Hardware and Serial # : sudo /usr/sbin/dmidecode -s system-manufacturer (and system-product-name, system-serial-number) IP Info: /sbin/ifconfig -a Memory: /proc/meminfo CPU Info: from /usr/sbin/dmidecode

## Linux Permissions

There are several commands that are run as part of the Linux autodiscovery process that, by default, typically require root privileges. We do extensive testing to see which commands we can run without sudo while still obtaining all available information. The following is a table of commands we sometimes or always run as sudo. For the "Sometimes" commands, we'll try to run the command first without, and if we receive a permission denied command rather than an "invalid command", "command not found" or similar we'll attempt to run as sudo. This list will also say if it's ran on every linux/unix flavor or only certain platforms:

| **Command** | **Sudo** | **OS Flavor & Notes** |
| :-: | :-: | :-: |
| cat | Sometimes | All |
| fdisk | Always | All |
| grep | Sometimes | All |
| ls | Sometimes | All |
| cd | Sometimes | All |
| netstat | Sometimes | All |
| ss | Sometimes | All |
| crontab | Always | All |
| exportfs | Sometimes | All |
| hdparm | Sometimes | All |
| pwdx | Sometimes | All |
| hadoop | Sometimes | All |
| hdfs | Sometimes | All |
| SYBASE\_\_DOT\_\_sh | Sometimes | All |
| dataserver | Sometimes | All |
| sudo su $oracleuser | Sometimes | All - used to execute commands as the user Oracle is running as to discover Oracle Database details |
| dmidecode | Sometimes | Linux:Freebsd:OpenBSD:Mac |
| dmesg | Sometimes | Linux:Debian:OracleLinux:HPUX |
| format | Always | Solaris |
| pfiles | Always | Solaris |
| zlogin | Always | Solaris (For Zones) |
| system\_profiler | Sometimes | Mac |
| ioscan | Sometimes | HPUX |
| print\_manifest | Sometimes | HPUX |
| swlist | Sometimes | HPUX |
| lslpp | Sometimes | Aix |

Below you can see an example of how to allow a particular user or group to run a specific sudo command without being prompted for password:

```
**%your-group-here ALL = (ALL) NOPASSWD:/usr/sbin/dmidecode, /sbin/hdparm, /sbin/fdisk**
```

Adjust the above paths as needed to match the location of each program. If these permissions are missing, the autodiscovery client will not be able to discover hardware, manufacturer, serial #, and so on, as well as service dependencies and valuable application configuration information.

You might also have to comment out Default Requiretty in /etc/sudoers file.
