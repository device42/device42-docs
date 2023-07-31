---
title: "JDBC Driver Integration"
sidebar_position: 20
---

## Device42 JDBC Driver

The Device42 Java Database Connectivity (JDBC) driver allows you to connect to Device42 and pull data externally as a JDBC data source. The JDBC driver can be used on any platform that supports Java.

Download the Device42 JDBC driver – which should work with any JDBC-compatible client – directly from the [Device42 Miscellaneous Tools download page](https://www.device42.com/miscellaneous-tools/).

### JDBC System Requirements

System requirements for connecting to Device42 via JDBC are:

- Current Device42 installation (v15.14.02 and above), properly configured, licensed, running, and accessible.
- A host system for the D42 JDBC driver running a platform that supports Java.
- A JDBC-compatible client to connect to the Device42 JDBC data source.

### Installing the Device42 JDBC Driver

To install the Device42 JDBC driver, download the JAR file from [https://www.device42.com/miscellaneous-tools/](https://www.device42.com/miscellaneous-tools/).

## Connecting SQL Workbench to the Device42 JDBC Data Source

These steps are for SQL Workbench; other JDBC-compatible clients will have similar steps.

1. Install SQL Workbench/J ([http://www.sql-workbench.net/manual/install.html)](http://www.sql-workbench.net/manual/install.html).
2. Run SQL Workbench/J.
3. Click **File** -> **Connect Window** -> **Manage Drivers**.
4. Create new driver using the path to the downloaded JDBC driver JAR file and the classname _com.device42.jdbc.D42Driver_.

![](/assets/images/JDBC1-1.png)

5. Create a new profile using the created driver with a URL such as _jdbc:doql://sandbox.device42.com:443_ (port 443) and your credentials to your Device42 instance. Replace _sandbox.device42.com_ with your Device42 instance.

![](/assets/images/JDBC2-1.png)

6. Test a query.

![](/assets/images/JDBC3.png)
