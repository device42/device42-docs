---
title: "Subnet Tree View"
sidebar_position: 6
---

A subnet tree view is available via the main menu; find it by navigating to _Network_ -> _Subnet Tree_

## Subnet Tree View

![](/assets/images/subnet_tree_view-1512.png)

Subnets in the tree view grouped into VRF groups. Because VRF groups have building associations, VRF group display also contains the building name.

New subnets can be added to a VRF group using the red plus button next to the VRF group name.

## Hover for details pop-up

![subnet tree hover details](/assets/images/hover_subnet_tree.png)

You can hover your mouse over any VRF groups, subnet, or IPs and get more details on each. The details include a small graph that indicates the Percentage (%) of IP addresses used.

Each subnet and VRF group has an edit button (a pencil) next to it. Click it to make changes from the subnet tree view.

## Add / edit IPs per subnet

![Add / edit IPs per subnet](/assets/images/wpid6691-media_1424648468104.png)

Using the green plus button after each subnet, you can add a new IP. When you click the green plus sign, you will see a list of all IPs that don’t exist yet in that subnet and you can just pick one for the list.

Also, next to each IP, you will now see a pencil icon that will enable you to edit the IP right from this page.

## Nest subnets right from the tree view

![Nest subnets right from the tree view](/assets/images/wpid6689-media_1424645974037.png)

You can also nest subnets right from the tree view using the red + button after each subnet. If you click the red button next to a subnet, you get a tree like view of available subnets within that subnet that you can click on and choose. You can also drag and drop subnets into another subnet or another VRF group.

## View Available Subnets

When adding subnets, you can view used and available subnets at a glance by clicking the Subnet Usage Tree button...

![View available subnets from the tree view](/assets/images/subnet-tree-availability-1.png)

In the example above, you see the available subnets for the selected parent subnet (the subnet to the left of the red plus sign that you just clicked). You will see the available subnets in green and the used (or partially used subnets) in red. You can drill further into the subnet tree by clicking "Expand All"...

![View available subnets from the tree view](/assets/images/subnet-tree-availability-2.png)

These views will help you decide which subnet to assign.

## Suggest a Subnet

When you choose a subnet to assign, the subnet you choose will have a big impact on future subnets choices. If you choose a subnet that is much bigger than you need, then many of its subnet are in effect wasted. If you choose a subnet that is near another subnet but not directly adjacent, the available subnets in between may be too small to be used and are effectively wasted. The goal is always to choose subnets that maximize future flexibility in subnet selection and assignment.

Device42 offers a patent-pending recommendation engine for choosing subnets. Just click the "Suggest a subnet" button and Device42 will calculate the optimal subnet to select.

![Recommend a subnet from the tree view](/assets/images/subnet-tree-suggest-1.png)

## Add new IPs from the tree view

![Add new IPs from the tree view](/assets/images/wpid6690-media_1424646022240.png)

Using the green plus button after each subnet, you can now add a new IP. When you click the green plus sign, you will see a list of all IPs that don’t exist yet in that subnet and you can just pick one for the list.

Also, next to each IP, you will now see a pencil icon that will enable you to edit the IP right from this page.
