---
title: "Linux & Unix Server Autodiscovery"
sidebar_position: 16
---

Device42 supports SSH-based Linux and UNIX discovery from within the main appliance (v13.2+). For a full list of supported Linux/UNIX operating systems, please visit [Device42 Supported Operating Systems.](discovery/operating-systems-supported-in-auto-discovery.md)

## Setting up Linux/Unix Autodiscovery

Before configuring an ssh-based discovery job, please be sure you have your SSH port (standard TCP port 22, or a custom port) open between your Device42 Main Appliance or Remote Collector and the targeted Unix/Linux servers. Select _Discovery > Hypervisors / *nix / Windows_ from the main menu to add a Linux/UNIX discovery job to connect and gather host and VM details. On the Add Hypervisors/*nix/win for Autodiscovery page, choose *nix as the platform, and enter your discovery target (hostnames, IPs or IP range, or CIDR), credentials, and job options. 

![](/assets/images/WEB-728_linux-unix-ad-menu.png)

### Discovery Job Options Definitions

**Job Name**: User-defined name for the job.  
**Remote Collector**: Select which remote collector you’d like to run the discovery job from – _optional_.  
**Job Debug Level**: Debug On for extra debug info, useful for a support ticket.  
**Discovery Target(s)**: Specify FQDN or IP of discovery target(s). If using FQDN, Device42 must be configured to resolve the DNS.  
**Port**: This will be 22 by default. Only change this if you have a different ssh port configured.  
**Use telnet if SSH port is closed**: Fall back to telnet (port 23) if SSH port is found to be closed.  
**Collect database server information**: Select this option to discover MYSQL and Oracle database servers.  
**Database Username/Password(s)**: Username/Password with database server permissions.  
**ADM Sampling Interval**: Off or sampling interval in minutes or hours.  
**Enable Resource Utilization Tracking for Device(s)**: Optionally enable the collection of resource utilization metrics from discovered devices.  
**Resource Utilization Sampling Interval**: Set the interval for RU data collection (only in effect if RU Tracking is enabled).  
**Discovery Target(s) Credential(s)**: Use username with permission to connect to the Linux/Unix targets.  
**Schedule for autodiscovery**: You can schedule the discovery to run at certain times.

**_WARNING:_ Please do not set up an autodiscovery/scan using critical production account credentials!**

Depending on permissions granted and your configured password policies, account lock-out could result in an otherwise completely avoidable outage. You, the customer, are responsible for any such behavior that might result if you choose to ignore this requirement.

* * *

### Naming Options

![](/assets/images/WEB-728_linux-unix-ad-naming-optionhost-discovery.png)

**Strip domain suffix**: strips the domain suffix from discovered servers - _[see the next section for hostname config details]._  
**Domains to strip**: Ordered list of domains to strip from hostname, one per line - if blank, full domain stripped; if specified, the first match is stripped.  
**Set the device name as the name given in the server field of the autodiscovery job**: if checked & discovering via hostname/FQDN, the device will be named using the discovery target name provided.  
**Overwrite existing device hostname with discovered hostname**: Check this option to give precedence to the discovered hostname.  
**Device Name Format**: select desired device naming format; see ["Configuring hostname discovery details"](discovery/linux-unix-server-auto-discovery.md#section-7) below for explanations.

![](/assets/images/WEB-728_linux-unix-ad-exclusions.png)

**Exclude Server(s)**: List of server IPs to exclude from discovery - _[Useful to ignore individual IPs when discovery target specified as range or CIDR block]_  
**Exclude Service Port Client IPs**: do not discover client connections on specified listening ports.  
**Remote IP Exclusion**: do not discover any connections to/from any of these remote IPs.

* * *

### Miscellaneous Options

The lower portion of the discovery job page includes a _Miscellaneous_ tab, which contains additional options for *nix discovery jobs. Note that there is a _Timeout_ field you use to specify the maximum wait time for server response – the timeout range is 10 to 600 seconds. 

![](/assets/images/D42-22188_nix-unix-misc-options-panel.png)

* * *

### Configuring SSH key auth for discovery

SSH keys can be used for Linux discovery in lieu of a password. Setting up discovery to use an SSH key is a simple two-step process, and even easier if your servers are already configured for SSH key access – If you can already use an SSH key to log on to your servers with the desired discovery user account, _grab your SSH private key & start with Step2!_

1. Ensure your Linux target servers are configured for SSH public key auth, and if not, configure them
    
2. Add your SSH RSA (or DSA) Private key to a credential in Device42, and use that credential to configure your discovery job otherwise, as you always have
    

#### Supported SSH key ciphers

**Device42 supports the following ciphers for SSH-key based discovery authentication:**

<table><tbody><tr><td width="288"><ul><li>aes128-ctr</li><li>aes192-ctr</li><li>aes256-ctr</li><li>aes128-gcm@openssh.com</li><li>chacha20-poly1305@openssh.com</li></ul></td><td width="288"><ul><li>arcfour256</li><li>arcfour128</li><li>arcfour</li><li>aes128-cbc</li><li>3des-cbc</li></ul></td></tr></tbody></table>

#### Configure discovery target servers for SSH Public key authentication

**1) Ensure Linux target servers are configured for SSH public key authentication** You can create a new key pair, or if you'd prefer, you may use an existing SSH key pair. To create a new key: a. Generate an RSA key pair using ssh-keygen: `ssh-keygen -t rsa`

```
Generating public/private RSA key pair.
Enter file in which to save the key (/Users/vivek/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/vivek/.ssh/id_rsa.
Your public key has been saved in /Users/vivek/.ssh/id_rsa.pub.
The key fingerprint is:
80:5f:25:7c:f4:90:aa:e1:f4:a0:01:43:4e:e8:bc:f5 vivek@desktop01
The key's randomart image is:
+--[ RSA 2048]----+
| oo    ...+.     |
|.oo  .  .ooo     |
|o .o. . .o  .    |
| o ...+o.        |
|  o .=.=S        |
| .  .Eo .        |
|                 |
|                 |
|                 |
+-----------------+
```

Note that ssh-keygen will ask you to set the Key Pair location and name. You may use the default location if you already have another key or are OK with it being overwritten e.g.,`[ $HOME/.ssh/id_rsa]`. You will also be prompted to supply a passphrase (password) for your new private key. This is OPTIONAL, and you can leave it blank if you choose. The following two files were created by the command you just ran:

```
$HOME/.ssh/id_rsa– contains your private key.
$HOME/.ssh/id_rsa.pub – contain your public key.
```

Go ahead and save a copy of the _id_rsa file (this is your private key)_ somewhere local (somewhere you are able to browse to so you can upload it to Device42). b. Use $ssh-copy-id to copy the newly generated certificate to your target host(s): `ssh-copy-id -i $HOME/.ssh/id_rsa.pub discovery_user@discoverytarget.device42.com` This sets up your target hosts for remote SSH-key based auth using the same user account you used to run the command. If you used ssh-copy-id, you're ready to test your SSH-key auth. Verify your SSH key-based login works from a remote terminal, and once verified, proceed to _Step 2_, and set up your Linux discovery job (or, optionally, modify an existing one). _Optionally, instead of ssh-copy-id, you can log onto these servers and do this manually._ Should you choose to do it manually, you must create the .ssh directory in the user's home directory you'll be using for discovery and the _authorized_keys_ file within. Substitute $HOME with your discovery user's username, and set the permissions as follows. `mkdir -p $HOME/.ssh` `chmod 0700 $HOME/.ssh` Then simply create the file `$HOME/.ssh/authorized_keys` if it doesn't already exist, and to copy & paste the newly generated public key (copy the text of the entire file) on a new line in the authorized_key file. It will look something like this: 

![authorized_key file with public key contents ](/assets/images/authorized_key-contents.png)

#### Create a discovery job that uses SSH key auth

**2) Add your private SSH RSA or DSA Private key _(created in Step 1)_ to your Device42 instance's discovery job.** Simply set up a new discovery job as you always have, _(Discovery -> HyperVisors / *nix / Windows -> Add Hypervisors/*nix/win for Autodiscovery)_, this time selecting a credential for the job's "Discovery Target(s) Credential(s)" field that includes the SSH key file (id_rsa) attached instead of a password, as shown below. You may add the file ahead of time _(Secrets menu -> "Add Password" button)_, or during job setup:

![](/assets/images/WEB_829_1-1.jpg)

 **You're all set to run Linux discovery using an SSH key!** Save and Run your discovery job! Device42 will use the SSH key instead of a password! **_*Note* -_** if you chose to set a password for your SSH key, simply check the "Use Password" box and supply the SSH key file's password as well as the ssh key! Note that you can do this after the fact by editing your created credential. You are also able to download the key file you used (circled): 

![Add PW ssh key credential](/assets/images/ssh_keyfile_add_PW.png)

* * *

## Configuring Linux Hostname Discovery Details

When discovering a device name, the first command we check is "hostname". This is used to derive the short name of the host. After running the hostname, we'll run the following commands to obtain the domain name. They're ordered by which command's results we give the most weight to:

- domainname
- dnsdomainname
- ypdomainname
- nisdomainname

If we don't get a domain name with any of those commands, we'll try "cat /etc/resolv.conf" last. In this case, we'll split on the white space in the file and look for a "domain" token. When we see one, we'll assign the domain as the 2nd token after "domain".

### Strip Domain Suffix

When selected, Device42 will drop everything after the first "." in the device name. For naming options, the above mentioned Strip Domain Suffix option occurs prior to assigning the device name according to the naming option you choose. The naming options are as follows:

1. Hostname as discovered - if the domain is present and the domain is not in the name, it is set to "name"
2. Hostname Plus Domain Name and Add Host name as Alias - alias is set to "name" and the device name becomes "name.domain"
3. Hostname Plus Domain Name the device name becomes "name.domain"
4. HostnameAddHostnamePlusDomainNameAlias names stay the same, and a alias is set as "name.domain"

## Run *Nix SSH discovery

Upon save (if you haven't scheduled the discovery), you can run it from the list, view, or edit page using the "Run now" button or link.

## Run Now or Schedule

![](/assets/images/WEB_829_2.jpg)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/WEB_829_3.jpg)

Select **Add another Auto Discovery Schedule** when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.

* * *

## Linux Considerations

Linux Autodiscovery has been tested against Redhat, Debian, CentOS, Ubuntu, and Oracle distributions and should work fine against just about all similar Linux distributions that have python installed.

_Confirm this by checking to see if your platform supports the following commands:_

Hostname: /bin/hostname

OS: /usr/bin/python -m platform

Manufacturer, Hardware and Serial #: sudo /usr/sbin/dmidecode -s system-manufacturer (and system-product-name, system-serial-number)

IP Info: /sbin/ifconfig -a

Memory: **cat** /proc/meminfo

CPU Info: **sudo** /usr/sbin/dmidecode

## Linux Permissions

There are several commands that are run as part of the Linux autodiscovery process that, by default, typically require root privileges. We do extensive testing to see which commands we can run without sudo while still obtaining all available information. The following is a table of commands we sometimes or always run as sudo. For the "Sometimes" commands, we'll try to run the command first without, and if we receive a permission denied command rather than an "invalid command", "command not found" or similar we'll attempt to run as sudo. This list will also say if it's run on every Linux/UNIX flavor or only certain platforms:


<table><tbody><tr><td align="left"><strong>Command</strong></td><td align="center"><strong>Run with sudo?</strong></td><td align="right"><strong>OS flavor</strong></td></tr><tr><td align="left">adb</td><td align="center">Sometimes</td><td align="right">Linux</td></tr><tr><td align="left">cd</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">cat</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">chkconfig</td><td align="center">Sometimes</td><td align="right">Linux</td></tr><tr><td align="left">cstm</td><td align="center">Sometimes</td><td align="right">HP-UX</td></tr><tr><td align="left">docker</td><td align="center">Always</td><td align="right">Linux</td></tr><tr><td align="left">echo</td><td align="center">Sometimes</td><td align="right">Linux</td></tr><tr><td align="left">find</td><td align="center">Sometimes</td><td align="right">Linux:FreeBSD:OpenBSD</td></tr><tr><td align="left">fcinfo</td><td align="center">Always</td><td align="right">Solaris</td></tr><tr><td align="left">fdisk</td><td align="center">Always</td><td align="right">All</td></tr><tr><td align="left">grep</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">iptables</td><td align="center">always</td><td align="right">lxc</td></tr><tr><td align="left">kdb</td><td align="center">No</td><td align="right">Aix</td></tr><tr><td align="left">ls</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">netstat</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">showmount</td><td align="center">Sometimes</td><td align="right">Linux</td></tr><tr><td align="left">ss</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">systemctl</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">crontab</td><td align="center">Always</td><td align="right">All</td></tr><tr><td align="left">exportfs</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">hdparm</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">pwdx</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">hadoop</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">hdfs</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">SYBASE__DOT__sh</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">systool</td><td align="center">Always</td><td align="right">All</td></tr><tr><td align="left">dataserver</td><td align="center">Sometimes</td><td align="right">All</td></tr><tr><td align="left">su $oracle_user</td><td align="center">Sometimes</td><td align="right">Discovers Oracle application information by running necessary commands as the Oracle user</td></tr><tr><td align="left">su $sap_hana_user</td><td align="center">Sometimes</td><td align="right">Discovers SAP HANA application information by running necessary commands as the SAP user</td></tr><tr><td align="left">dmidecode</td><td align="center">Sometimes</td><td >Linux:Freebsd:OpenBSD:Mac</td></tr><tr><td align="left">dmesg</td><td align="center">Sometimes</td><td align="right">Linux:Debian:OracleLinux:HPUX</td></tr><tr><td align="left">format</td><td align="center">Always</td><td align="right">Solaris</td></tr><tr><td align="left">pfiles</td><td align="center">Always</td><td align="right">Solaris</td></tr><tr><td align="left">zlogin</td><td align="center">Always</td><td align="right">Solaris (For Zones)</td></tr><tr><td align="left">system_profiler</td><td align="center">Sometimes</td><td align="right">Mac</td></tr><tr><td align="left">ioscan</td><td align="center">Sometimes</td><td align="right">HPUX</td></tr><tr><td align="left">print_manifest</td><td align="center">Sometimes</td><td align="right">HPUX</td></tr><tr><td align="left">swlist</td><td align="center">Sometimes</td><td align="right">HPUX</td></tr><tr><td align="left">lslpp</td><td align="center">Sometimes</td><td align="right">Aix</td></tr><tr><td align="left">virsh</td><td align="center">Always</td><td align="right">Linux</td></tr><tr><td align="left">vzctl</td><td align="center">Always</td><td align="right">Linux</td></tr><tr><td align="left">vzlist</td><td align="center">Sometimes</td><td align="right">Aix</td></tr><tr><td align="left">lxc-attach</td><td align="center">Always</td><td align="right">Linux</td></tr><tr><td align="left">lxc-ls</td><td align="center">Always</td><td align="right">Linux</td></tr><tr><td align="left">lsof</td><td align="center">Always</td><td align="right">All</td></tr><tr><td align="left">lspci</td><td align="center">Always</td><td align="right">All</td></tr></tbody></table>`

Note, these commands sometimes change so please check with Device42 for the current list. Below you can see an example of how to allow a particular user or group to run a specific sudo command without being prompted for a password:

```
**%your-group-here ALL = (ALL) NOPASSWD:/usr/sbin/dmidecode, /sbin/hdparm, /sbin/fdisk**
```

Adjust the above paths as needed to match the location of each program. If these permissions are missing, the autodiscovery client will not be able to discover hardware, manufacturer, serial #, and so on, as well as service dependencies and valuable application configuration information. You might also have to comment out the Default Require tty in the /etc/sudoers file.

## SUDO PATH in non-interactive shells

If users are experiencing Linux discoveries where Device42 is using a non-interactive shell rather than interactive, we may be trying the commands multiple times because PATH is not set in non-interactive shells. The users can set that information in their sudoers file for the service account to prevent these commands from being executed multiple times. It should be there by default, but sometimes it's commented out or removed for security hardening.

It's not a bug, but some deployments may see security alerts for invalid commands being executed because of this.

In sudoers, there should be a line as follows:

Defaults secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin"

You could alternatively make the defaults particular to just the discovery account like so:

Defaults:DISCOVERY_ACCOUNT

secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin"
