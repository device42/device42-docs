---
title: "Supported Hypervisors and Containers List"
sidebar_position: 30
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

Device42 autodiscovery supports various platforms, operating systems (OSes), and container platforms. The full list, including the details and limitations of the Docker, Cisco ASA/NX OS, and Nutanix autodiscovery processes, can be found below.

If you are looking for instructions to get started with Hypervisor, Linux (\*nix), or Windows discovery, see either: 
- the [Windows / Hyper-V Discovery](/auto-discovery/windows-and-hyper-v-auto-discovery.mdx) page 
- or the [Linux / UNIX server auto-discovery](/auto-discovery/linux-unix-server-auto-discovery.mdx) page.

## Supported Hypervisor and Container Platforms

Device42 is constantly expanding the hypervisor and container platforms supported by autodiscovery. 

The list of supported platforms currently includes:

- \*nix
- AIX HMC
- Cisco ASA/NX-OS
- Citrix XenServer
- Docker
- Docker API
- HPE OneView
- HPE Simplivity
- IBM i/AS400
- IBM z/OS
- KVM/libvirt
- LXC
- Nutanix Acropolis
- Nutanix Prism (v2.0/v1)
- Nutanix Prism Central (v3)
- OpenVZ
- Oracle VM
- oVirt/Redhat
- VMware
- Windows
- WinRM

<ThemedImage
  alt="Supported HyperV platforms"
  sources={{
    light: useBaseUrl('/assets/images/hypervisors-and-containers-supported-in-auto-discovery/platforms-list-light.png'),
    dark: useBaseUrl('/assets/images/hypervisors-and-containers-supported-in-auto-discovery/platforms-list-dark.png'),
  }}
/>

Both Windows and \*nix (Linux/UNIX) can be found in this dropdown menu as well. Use those options to discover Windows servers, Linux servers, guest instances, or VMs themselves, as opposed to their hosts.

For instructions on how to configure and run these discovery jobs, please refer to [Hypervisor Autodiscovery](auto-discovery/virtual-machine-auto-discovery.md). 

:::tip
If you are using a hypervisor, a container platform, or an orchestration tool you would like to see supported - please let us know! Open a support ticket or email [support@device42.com](mailto:support@device42.com).
:::

### Docker and Docker API Autodiscovery Notes

- Docker API discovery returns basic container data with IPs and MAC addresses.
- Regular Docker discovery also returns service ports.
- By running Docker and connecting to the host, you can map connections to the container.
- You can see on the Docker host how to get the source ports of containers, without having to log in to the container to identify the connection.
- You can use the `docker top` command and supply just the container ID; you would need to use `sudo` commands for this.
- We support all standard Docker cloud operating systems such as EKS (AWS Kubernetes), GKE (Google Kubernetes), AKS (Azure Kubernetes), and standalone Kubernetes, as well as Ubuntu, CentOS, Debian, Arch Linux, and Fedora.

### Cisco ASA/NX OS Autodiscovery Notes

Device42's Cisco ASA/NX OS autodiscovery augments firewall/ASA discoveries with information gathered via SSH. If you run virtual firewall instances, Device42 will discover your virtual firewalls and list them as firewall “contexts” underneath the parent firewall. Note that this discovery method has had only limited testing.

### Nutanix Autodiscovery Notes

If you have previously run a Device42 discovery job, and are discovering new resources, then in some cases, you will need to delete and re-run to have a complete view. Note that this is a discovery workaround for the time being.

### Ignore IP and MAC Addresses From Autodiscovery

You have the option to ignore specific IP and MAC addresses globally and for specific jobs. See [Windows and Hyper-V Autodiscovery](/auto-discovery/windows-and-hyper-v-auto-discovery/#option-to-ignore-ipsmac-addresses.md) for more details.
