---
title: "Operating Systems Supported in Autodiscovery"
sidebar_position: 21
---

## Background on the Device42 Test Lab

We test on as many operating systems as we can get our hands on for agentless autodiscovery. This list is by no means exhaustive or exclusive but should provide a good starting point. As a general rule, if there's an OS giving you trouble, we're happy to try and build in support for it. You can [email support](mailto:support@device42.com) or [submit a request](https://support.device42.com/) on our website.

:::note
All discoveries can be run without agents on the Device42 Main Appliance optionally using one or more remote collectors. Agentless Windows discovery requires at least one instance of the Windows Discovery Service (WDS) to be deployed somewhere on your network that can reach your desired discovery targets.
:::

## Supported Distros and Operating Systems

**Major Linux distributions** work well with autodiscovery, including: 
- Debian 
- Ubuntu
- Red Hat
- CentOS
- Fedora
- SUSE
- OpenSUSE 
  
**Most UNIX distros** are well supported, including:
- AIX
- OpenBSD
- FreeBSD
- HP-UX
- Solaris

Other UNIX distros should also work well with autodiscovery (via SSH).

Major **Windows releases (7, 8, 10, Server 2000+) are all supported** and should all work well with autodiscovery (via WMI/WinRM).

If you are running Device42 v15.14.02+, discovery of the **IBM i powered mid-range** line and **IBM z/OS** powered mainframes are also supported.

## Tested Distros and Operating Systems

<table>
  <tbody>
    <tr>
      <td width="450">
        <ul>
          <li>AIX 5</li>
          <li>AIX 6</li>
          <li>AIX 7</li>
          <li>CentOS 5.11</li>
          <li>CentOS 6.5</li>
          <li>CentOS 6.7</li>
          <li>CentOS 6.8</li>
          <li>CentOS 6.9</li>
          <li>CentOS 7.2</li>
          <li>CentOS 8</li>
          <li>Debian 7.10</li>
          <li>Debian 7.11</li>
          <li>Debian 8.4</li>
          <li>Debian 8.5</li>
          <li>Debian 9</li>
          <li>Fedora</li>
          <li>FreeBSD 10.3-RELEASE</li>
          <li>FreeBSD 9.3-RELEASE</li>
          <li>HP-UX 11</li>
          <li>IBM i v7.1 <small>(English & Spanish locales)</small></li>
          <li>IBM z/OS 2.1, 2.3</li>
          <li>Microsoft Windows 7</li>
          <li>Microsoft Windows 8</li>
          <li>Microsoft Windows 10</li>
          <li>Microsoft Windows(R) Server 2003, Enterprise Edition SP2</li>
          <li>Microsoft Windows(R) Server 2003 Standard x64 Edition SP2</li>
          <li>Microsoft Windows Server 2008 Enterprise SP1</li>
          <li>Microsoft Windows Server 2008 R2 Datacenter SP1</li>
          <li>Microsoft Windows Server 2008 R2 Standard SP1</li>
        </ul>
      </td>
      <td width="414">
        <ul>
          <li>Microsoft Windows Server 2012</li>
          <li>Microsoft Windows Server 2012 R2</li>
          <li>Microsoft Windows Server 2016</li>
          <li>Microsoft Windows Server 2019</li>
          <li>Microsoft Windows Server 2022</li>
          <li>Miracle Linux 8.4</li>
          <li>OpenVMS 8.4</li>
          <li>Oracle Linux Server 6.7</li>
          <li>Oracle Linux Server 6.8</li>
          <li>Oracle Linux Server 7.2</li>
          <li>Oracle Linux Server 8</li>
          <li>Redhat 5.x, 6.x, 7.x, 8.x</li>
          <li>Red Hat Enterprise Linux Server 5.x, 6.x, 7.x, 8.x, 9.x</li>
          <li>Solaris Sparc/x86 6</li>
          <li>Solaris Sparc/x86 7</li>
          <li>Solaris Sparc/x86 8</li>
          <li>Solaris Sparc/x86 9</li>
          <li>Solaris Sparc/x86 10</li>
          <li>Solaris Sparc/x86 11</li>
          <li>SuSE 11</li>
          <li>SuSE 12</li>
          <li>SUSE Linux Enterprise 11</li>
          <li>SUSE Linux Enterprise 12</li>
          <li>Ubuntu 12.04</li>
          <li>Ubuntu 14.04</li>
          <li>Ubuntu 16.04</li>
          <li>Ubuntu 18.04</li>
          <li>Ubuntu 20.04</li>
          <li>Ubuntu 22.04</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
