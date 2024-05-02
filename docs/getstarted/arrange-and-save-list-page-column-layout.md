---
title: "Arrange and Save List Page Column Layout"
sidebar_position: 8
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

List pages in Device42 have the option to create a default view by rearranging the columns displayed and the sorting order of records.

- Click the **gear icon** button on the right.

    <ThemedImage
    alt="List page gear icon"
    sources={{
        light: useBaseUrl('/assets/images/arrange-and-save-list-page/gear-icon-light.png'),
        dark: useBaseUrl('/assets/images/arrange-and-save-list-page/gear-icon-dark.png'),
    }}
    />

- The page displays a **Table Columns** dropdown menu you can use to select the columns you want to include on the page.

    <ThemedImage
    alt="Table columns"
    sources={{
        light: useBaseUrl('/assets/images/arrange-and-save-list-page/table-columns-menu-light.png'),
        dark: useBaseUrl('/assets/images/arrange-and-save-list-page/table-columns-menu-dark.png'),
    }}
    style={{ width: '80%' }} 
    />

- Click and drag a column header to move the column to a new position. In the example below, we move the **Hardware** column.

    <ThemedImage
    alt="Move column"
    sources={{
        light: useBaseUrl('/assets/images/arrange-and-save-list-page/move-column-light.png'),
        dark: useBaseUrl('/assets/images/arrange-and-save-list-page/move-column-dark.png'),
    }}
    style={{ width: '80%' }} 
    />

- You can also select a column to set the sorting precedence for the list view. Reset the order to default by clicking the number next to the column name.

    <ThemedImage
    alt="Column sort"
    sources={{
        light: useBaseUrl('/assets/images/arrange-and-save-list-page/column-type-sort-light.png'),
        dark: useBaseUrl('/assets/images/arrange-and-save-list-page/column-type-sort-dark.png'),
    }}
    style={{ width: '70%' }} 
    />

- After you select and arrange the columns, **Name** (1) the view and select **System Default** or **User Default** (2) to set whether the view should apply globally or for you. Click **Save As New** (3). Note that the availability of the **System Default** option depends on your permission level. 

    <ThemedImage
    alt="Save column view"
    sources={{
        light: useBaseUrl('/assets/images/arrange-and-save-list-page/save-view-light.png'),
        dark: useBaseUrl('/assets/images/arrange-and-save-list-page/save-list-view-dark.png'),
    }}
    style={{ width: '140%' }} 
    />

    The column layout you saved will now be the default for list pages.

- You can **Delete** a custom column list view you have defined for list pages. Note that this does not apply to the default **System Column List** view and you need the correct permissions to see the **Delete** button.

    <ThemedImage
    alt="Delete view"
    sources={{
        light: useBaseUrl('/assets/images/arrange-and-save-list-page/delete-view-light.png'),
        dark: useBaseUrl('/assets/images/arrange-and-save-list-page/delete-view-dark.png'),
    }}
    style={{ width: '75%' }} 
    />