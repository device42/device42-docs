---
title: "Merge and Assign Software Components"
sidebar_position: 4
---

### Merge Software Components and Assign Them to a Suite

You can merge software components and assign them to a component suite.

- Select _Apps > Software > Software Components_ to display the Software Component list.
- Select the components you want to merge, select _Assign Software to Suite_ from the _Actions_ menu, and then click the lightning button to run the action.

![](/assets/images/WEB-231_SW-Component-Merge-1-1.png)

Device42 displays the Assign Software to Suite page listing the software components you selected.

![](/assets/images/WEB-231_SW-Component-Merge-2.png)

- Click _Select Software Suite_ to chose an existing software component to create the suite and assign the selected components to it, or select _Add Software Component_ to create a new component for the suite.

![](/assets/images/WEB-231_SW-Component-Merge-3-4.png)

- After you select or add the suite component, click _Assign_.

Device opens the View Software Component page and displays the new component suite. The assigned software components are listed in the _Software Components in the Suite_ section.

![](/assets/images/WEB-231_SW-Component-Merge-5-2.png)

### Merging Software Components with the Same Name

To merge software components that have the same name into a suite, merge them together before merging them into a suite. A new component suite cannot have the same _name + vendor_ combination as an existing software component; it must have a unique _name + vendor_ combination.

For example:

- software component ABC with vendor Cisco (**ex. 1**)
- software component ABC with vendor MS (**ex. 2**)
- software component ABC-Suite with vendor None (**ex. 3**)

You can merge ex. 1 into ex. 3, or merge ex. 2 into ex. 3, with no problem – however, trying to merge ex. 1 AND ex. 2 into ex. 3 will result in a validation error, prompting you to merge ex. 1 with ex. 2 before trying to merge them with ex. 3.
