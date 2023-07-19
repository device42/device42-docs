---
title: "AWS Migration Evaluator"
sidebar_position: 3
---

You can generate a Device42 AWS Migration Evaluator report from Device42’s predefined reports and upload the report to the AWS Migration Evaluator portal. To see a sample report, visit [https://d1.awsstatic.com/asset-repository/tso-logic/MigrationEvaluator\_TSOLogic\_AWS\_BusinessCaseSample.pdf](assets/MigrationEvaluator_TSOLogic_AWS_BusinessCaseSample.pdf "https://d1.awsstatic.com/asset-repository/tso-logic/MigrationEvaluator_TSOLogic_AWS_BusinessCaseSample.pdf").To generate the report, follow the steps below.

1\. Navigate to Insights+ via the header menu.

2\. Select _Advanced Reports -> Integrations -> Total Cost of Ownership -> AWS Migration Evaluator._

3\. Download each tab of the report into separate CSV files.

4\. Combine the CSV files into a single .XLSX file for consumption by AWS. Each tab should be named to match its data.

![](/assets/images/Insights-Menu.png)

![](/assets/images/download_charts.png)

Migration Evaluator will provide console access to the customer so you can securely upload the data to us for processing.

Before you upload the Device42 report, you may want to open and edit the .XLSX file to:

- Redact any information you do not want to share with AWS.
- Open the _Assets_ tab in the spreadsheet to add tags to the Environment, Application, Department, etc., columns.

**Note:** In this example, the Device42 report is named **TSO Logic.xlsx**.

1. In the Migration Evaluator console, select _Discover > Self Reported Files_, and then click _Upload_.
2. Select your Device42 report file, and click _Upload_.

![](/assets/images/WEB-504_AWS-D42-file-import-1.png)

![](/assets/images/WEB-504_AWS-D42-file-import-3.png)

- To learn more about Migration Evaluator, please visit [https://aws.amazon.com/migration-evaluator/resources/](https://aws.amazon.com/migration-evaluator/resources/).
