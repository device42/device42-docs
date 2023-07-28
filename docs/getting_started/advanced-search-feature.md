---
title: "Advanced Search Feature"
sidebar_position: 7
---

## Advanced Search Feature

Many Device42 list pages contain an Advanced Search option to help you quickly and easily find the items you want; the example below shows the Resources list page. Click _Advanced Search_ to display its _Query_ bar. (Click _Basic Filtering_ to return to the default list page.)

![](/assets/images/getting_started_advanced-search-feature.png)

Advanced search lets you enter search criteria based on the columns on the list page. The basic search syntax is:

`<column name> <operator> <search value>`

When you first click in the Advanced Search Query bar, Device42 displays a list of the **column names** you can use to create your search. Click or enter a column name to begin building your search. To copy an executed advanced search, copy the URL in your browser address bar and paste the URL into a new browser tab or window. You can also bookmark the page containing the executed search.

## Search Value Formatting:

### Text

Most search values in our advanced search should be enclosed with double quotes. For example, to search for things with name _Test Device_, the query would be:

`name = "Test Device"`

If you need to use the `"` character in your search, use two double quotes instead of one:

`notes contains ("named ""test""")`

### Date Formats

Dates should still be enclosed with double quotes and the following formats are valid:

* “yyyy/mm/dd hh:mm” – (for hh:mm values use 24 hour clock)
* “yyyy-mm-dd hh:mm”
* “yyyy/mm/dd”
* “yyyy-mm-dd”

### Numbers

Numbers should be entered as just number values (integer or float, depending on the column) with no double quotes as shown below.

`id = 201`

## Operators

### EQUALS (=)

The `=` operator can be used for exact searches. This is a case-sensitive lookup on a column for a specific value. When using this operator on a column that represents a list of values, the value you search on will be compared to each value in the list – if it matches on any, that record will return.

Example:

`vendor_resource_type = "EBS"`

This will get back all items with Vendor Resource Type _EBS_.

Example of column representing a list (IP Column on Device List page):

`ip_address = "10.90.10.20"`

will return all records that contain the _10.90.10.20_ IP address.

#### Special Values

**EMPTY –** the ‘EMPTY’ keyword can be used to represent a ‘null’ or ‘blank’ value.

`hardware = EMPTY or hardware_id = EMPTY`

**CIDR Blocks** (IP _ONLY_) – A CIDR Block can be used instead of an exact value for IP Columns. This will check for IPs within the CIDR Block.

`ip_address = "10.42.0.0/16"`

will return all IP Address within the 10.42.0.0 – 10.42.255.255 block.

### NOT EQUALS (!=)

The `!=` is simply the negation of the equals operator. Every clause that can be represented with an `=` operator can also be represented with a `!=` to get the opposite.

For example,

`vendor_resource_type != "EBS"`

This will get back all items that do NOT have Vendor Resource Type of “EBS”.

### IN and NOT IN

`IN` and `NOT IN` are simply short hand for multiple `=` or `!=` clauses, respectively. For example,

`vendor_resource_type IN ("EBS", "Mountpoint")`

is the same as

`vendor_resource_type = "EBS" OR vendor_resource_type = "Mountpoint"`

As you can see from the example, IN and NOT IN values **must** be enclosed with parenthesis. You can put as many values as you’d like within the parenthesis, separated by commas.

### CONTAINS

The `contains` operator can be used for case-insensitive, partial search on text columns. As with the Equals operator, you can use this operator on a column representing a list – the partial match will be tried against each item in that list. Contains values **must** be enclosed by parenthesis.

Examples:

`name contains ("brenda")`

will return all objects with name that contains _Brenda_ (case-insensitive).

`service_command_line_args contains ("postgres")`

will return all objects with a Service Command Line Argument that contain the text _postgres_.

### COMPARATORS `(>, >=, <, <=)`

The comparator operators can be used with number, date, and IP columns. As with the Equals operator, when using any of these operators on a column representing a list, the comparison will be done against each element in the list & if any are true, the record will return.

Simple examples:

`first_added <= "2022/06/18"`

to find all objects added before June 18, 2022

`service_listener_ports < 25`

to find all objects with listener ports under 25.

##### Special Values

**Interval**

The interval value can be used for date columns. interval is a special operator you can use to filter date columns using a specified offset rather than an explicit date (this works only with the `<=` or `\>=` operators). The search values for an interval operation are `<number> <time unit>`.

`first_added >= interval "-5 days"`

This example creates a filter that returns records whose `first_added` date is greater than or equal to a time offset of 5 days in the past.

- The `<number>` can be positive or negative, where positive numbers are forward in time and negative numbers are backward in time.
- The `<time unit>` can be _years, months, weeks, days, minutes,_ or _seconds_. If you do not supply a `<time unit>`, the default is seconds.

### BETWEEN

The between operator is shorthand for checking between a range for Number, Date, and IP columns. This is especially useful for columns representing a list as it will ensure the comparison is done on each value in that list. Examples:

```
count between (10, 20)
```

will return all objects with ‘count’ in the range 10 - 20.

```
ip_address between ("10.42.10.20", "10.42.10.100")
```

will return all objects that contain an IP between the range 10.42.10.20 - 10.42.10.100.

**Note:** Device42 supports virtual IP addresses (i.e., one device can have multiple IP addresses), so we apply the following logic in filtering to provide search results.

Between – if ANY of the device IP addresses falls into the between range, the result is device is “Filtered IN”.

### NOT BETWEEN

The not between operator is shorthand for checking between a range for Number and IP columns to exclude values within that range. This is especially useful for columns representing a list as it will ensure the comparison is done on each value in that list. Examples:

```
count not between (15, 30)
```

will return all objects with ‘count’ outside the range 15 - 30.

```
ip_address not between ("10.24.16.20", "10.24.16.40")
```

will return all objects that contain an IP outside the range 10.24.16.20 - 10.24.16.40.

**Note:** Device42 supports virtual IP addresses, (i.e., one device can have multiple IP addresses), so we apply the following logic in filtering to provide search results.

Not Between – if ALL of the device IP addresses fall outside of the not between range, the result is device is “Filtered IN”. If any IP address falls into the not between range, the device is “Filtered OUT”.

## Combining Clauses

You can use **AND / OR** connectors to combine searches:

**resource\_name contains (“Brenda”) AND resource\_name contains (“D42”) OR resource\_name contains (“vol-069”)**

Remember to use parenthesis if you need to enforce the precedence of operators! If no parentheses are provided, the query will be evaluated from left to right. As you enter your search, Device42 prompts you if the search syntax is incorrect.
