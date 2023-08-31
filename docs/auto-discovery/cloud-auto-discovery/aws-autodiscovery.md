---
title: "AWS Autodiscovery"
sidebar_position: 2
---

Device42's AWS Autodiscovery ensures you have full visibility into your AWS environments. This visibility gives you insights into your total AWS consumption - allowing you optimize on spend and services consumed. We are adding new discoveries all the time, specifically based on customer need.

## Getting Started with AWS Autodiscovery

**To create an AWS Autodiscovery job, you will need to:**

1. Prepare your AWS Account - you can use the policy example shown below.
2. Device42 utilizes your AWS Access Key and Secret Key to perform discovery; please have these handy.

**Note**: Device42 encourages customers to follow AWS best practices for managing your IAM credentials, including using strong passwords, regular password rotation, applying the principle of least privilege to users and their passwords, etc.

For more information, see the article _Best Practices for Managing AWS Access Keys_ at [https://docs.aws.amazon.com/accounts/latest/reference/best-practices.html](https://docs.aws.amazon.com/accounts/latest/reference/best-practices.html).

### Initiating an AWS Discovery

- Select _Discovery > Cloud_ from the main menu and then click _Add Cloud Autodiscovery_ at the top right of the Cloud Autodiscovery list page.
- Enter a _Name_ for the job.
- Select the _Cloud Type_ > _Amazon AWS_ from the drop-down menu.

![](/assets/images/Image_4_Cloud_Disc_AWS.png)

- Select the _Remote Collector_ for the job.
- Add your Amazon _Access Key ID_ and your _Secret Key_ for the account(s) to be discovered. (Do this by clicking the magnifying glass, and then clicking _Add Password_ in the upper right corner. Enter your Access Key ID or Secret Key in the field labeled _Password_.  Device42 will store the keys encrypted_._)
- Select _Discover Main Account_ to have the job discover the main AWS account in addition to any AWS Roles accounts you select.
- Select the _Available AWS Roles_ whose account(s) you want to discover and use the arrow to add them to the _Chosen AWS Roles_ list.

**Note:** See [Defining AWS Roles](#addedit-aws-roles) below for instruction for creating the AWS Roles that Devices42 displays for AWS cloud autodiscovery jobs.

- Choose one or more Amazon regions to search. ![](/assets/images/Image_5_Cloud_Disc_AWS.png)
- You can also select options for adding vendor metadata, choose how to  handle instances not found in subsequent discovery vendor, select device name format options, add tags for discovered devices, etc.
- Check _Kubernetes Discovery_ to discover Kubernetes clusters hosted on your cloud platform.
- Add object categories, tags, and a customer for discovered devices, etc.

![](/assets/images/K8s-Discovery-Option_AWSAzureGoogle.png)

- Scroll down the page and click the _Advanced Features (Show)_ tab to select the different types of resources you want the job to discover (Route53, S3, EBS, Databases, etc.).

![](/assets/images/discovery_cloud_platforms_autodiscovery_aws-autodiscovery.png)

- Add an _Autodiscovery Schedule_ to schedule the job if wanted or add _Admin Groups_ for the job.
- Click _Save_ or _Save and continue editing_ to save the discovery job.
- When you return to the Cloud Discovery list page, you can click _Run Now_ to run the job immediately.

### AWS Discovery Items

Note that some Discovery items require enabling the feature and cannot be discovered otherwise.

| Cloud Service/Object Name | Where in D42                      | Accessed API                             | Information Generated                                   |
| ------------------------- | --------------------------------- | ---------------------------------------- | ------------------------------------------------------ |
| Dynamo DB                 | Resources --> All Resources       | dynamodb._region_.amazonaws.com         | Backup details, contributor insights, tables, limits, etc. |
| EC2 Instances             | Resources --> All Resources       | ec2._region_.amazonaws.com              | Service name, instance id, status, location, etc.      |
| Elastic Block Storage (EBS) | Resources --> All Resources      | ec2._region_.amazonaws.com              | Lists, rules, tags, etc.                                |
| ElastiCache Nodes         | Resources --> All Resources       | elasticache._region_.amazonaws.com      | Account info, status, location                          |
| Elastic File System (EFS) | Resources --> All Resources       | elasticfilesystemr_egion.amazonaws.com  | File system, access points, mount targets               |
| Elastic Load Balancer (ELB) | Resources --> All Resources      | elasticloadbalancing._region_.amazonaws.com | Attributes, description, rules, tags, target groups  |
| Lambda                   | Resources --> All Resources       | lambda._region_.com                    | Name, ARN, code size, memory, runtime                   |
| KMS                      | Resources --> All Resources       | kms._region_.amazonaws.com             | Region, categories, access points, ACLs, notes, tags, custom fields |
| Kubernetes (EKS)         | Resources --> All Resources       | eks._region_.amazonaws.com              | Containers, nodes, clusters                              |
| RDS Instances             | Resources --> All Resources       | rds._region_.amazonaws.com              | Account info, status, location                          |
| Redshift                 | Resources --> All Resources       | redshift._region_.amazonaws.com         | Backup details, contributor insights, tables, limits    |
| Route 53                 | Resources --> All Resources       | route53.amazonaws.com                  | Type, content, tags                                     |
| S3                        | Resources --> Storage --> Cloud Storage | *.s3._region_.amazonaws.com s3._region_.amazonaws.com *.s3.amazonaws.com s3.amazonaws.com | Storage utilization, bucket, bucket policies           |
| SNS                       | Resources --> All Resources     | sns._region_.amazon.aws.com             | Topic, endpoints, attributes, subscriptions  |
| SQS                       |  Resources --> All Resources     | sqs._region_.amazon.aws.com            | Queues, tags, queue attributes |
| Subnets                   | Network --> Subnets              |                                       | Subnets                                                |
| VPCs                      | Resources --> VPC                 | vpc.aws-region.amazonaws.com            | Attributes, AZs, Auth rules, etc.                       |


**Additional Endpoint Information**

_**Regular Discovery**_

- [sts.amazonaws.com](https://sts.amazonaws.com)
- `https://organizations.us-east-1.amazonaws.com` _(Only if one of any of the available features is enabled.)_

_**K8s cluster endpoints access per K8s RBAC setup**_

- /api/v1/namespaces/kube-system
- /api/v1/nodes?watch=False
- /api/v1/services?watch=False
- /apis/apps/v1/deployments?watch=False OR /apis/extensions/v1beta1/deployments?watch=False (depends on k8s version)
- /apis/networking.k8s.io/v1beta1/ingresses?watch=False OR /apis/extensions/v1beta1/ingresses?watch=False (depends on k8s version)

_**Example of minimum policy**_ _(except for K8s cluster endpoints, since it is controlled by K8s RBAC)._

```
{

    "Version": "2012-10-17",
    "Statement": [

        {
                   "Effect": "Allow",
                   "Action": [
                       "acm:DescribeCertificate",
                       "acm:List*",
                       "apigateway:GET",
                       "autoscaling:Describe*",
                       "cloudfront:ListDistributions",
                       "cloudsearch:DescribeDomains",
                       "cloudfront:ListTagsForResource",
                       "cloudwatch:GetMetricData",
                       "cloudwatch:GetMetricStatistics",
                       "cloudwatch:Describe*",
                       "cloudwatch:ListMetrics",
                       "config:SelectResourceConfig"
                       "dynamodb:DescribeLimits",
                       "dynamodb:ListTables",
                       "dynamodb:ListGlobalTables",
                       "dynamodb:DescribeTable",
                       "dynamodb:DescribeGlobalTable",
                       "ec2:Describe*",
                       "eks:ListClusters",  
                       "eks:DescribeNodegroup",  
                       "eks:DescribeUpdate",  
                       "eks:ListNodegroups",  
                       "eks:ListUpdates",
                       "eks:DescribeCluster"
                       "elasticache:Describe\*",
                       "elasticfilesystem:DescribeFileSystems",
                       "elasticfilesystem:DescribeAccessPoints",
                       "elasticfilesystem:DescribeAccountPreferences",
                       "elasticfilesystem:DescribeMountTargets",
                       "elasticloadbalancing:Describe\*",
                       "kms:ListResourceTags"
                       "kms:ListKeys",
                       "lambda:List*",
                       "lambda:GetFunction",
                       "lambda:GetAccountSettings",
                       "lambda:GetPolicy",
                       "logs:DescribeLogStreams",
                       "logs:GetLogEvents",
                       "organizations:ListRoots",
                       "organizations:ListAccountsForParent",
                       "organizations:ListOrganizationalUnitsForParent",
                       "organizations:DescribeAccount",
                       "rds:Describe*",
                       "rds:ListTagsForResource",
                       "redshift:DescribeClusters",
                       "redshift:DescribeReservedNodes",
                       "route53:ListResourceRecordSets",
                       "route53domains:ListDomains",
                       "route53:ListHostedZones",
                       "route53:ListTagsForResource",
                       "s3:ListAllMyBuckets",  
                       "s3:GetBucketPublicAccessBlock",  
                       "s3:GetBucketPolicyStatus",  
                       "s3:GetBucketAcl",  
                       "s3:GetBucketLocation",  
                       "s3:ListAccessPoints",    
                       "s3:GetAccessPointPolicyStatus",
                       "s3:GetEncryptionConfiguration" 
                       "sns:GetTopicAttributes",
                       "sns:ListTagsForResource",
                       "sns:ListTopics",
                       "sqs:listQueues",
                       "sqs:GetQueueAttributes",
                       "sqs:listQueueTags   ",                 
                         
                       
            ],
            "Resource": "*"
        }
    ]
}
```
* * *

### Add/Edit AWS Roles

Device42 includes an editor you can use to define or edit the AWS Roles displayed for Amazon AWS cloud autodiscovery jobs. Follow the steps below to view and add AWS Roles.

- Select _Resources > Secrets > AWS Roles_ from the main menu.

![](/assets/images/discovery_cloud_platforms_autodiscovery_aws-autodiscovery2.png)

- Device42 displays the AWS Roles list page. Use the _AWS Role_ drop-down to select a role to display or click _Advanced_ to construct more specific searches. See the [Advanced Search Feature](getstarted/advanced-search-feature.md) documentation page for instructions.

![](/assets/images/Image_9_Cloud_Disc_AWS_Roles_2.png)

- Click _Add_ at the top right to add a new role – click a role _Name_ to view or edit that role.

![](/assets/images/Image_10_and_11_Cloud_Disc_AWS_Roles.png)

- Enter a _Name_ for the role.
- Enter the _AWS Role_ label and an optional _AWS Role Description_.
- In the _Account ID and External ID_ section, click _\+ Add More_.
- Add the role _Account ID_ and the _External ID_ – click the eye icon to show or hide the field. Click the trash can icon to remove  the entries.
- Click _Save_ at the top right of the page to save the role.

Device42 adds the new AWS Role to the roles list; it will also appear in the Available AWS Roles list when you create or edit an Amazon AWS cloud autodiscovery job.

**Note:** The following steps are required if you are looking to leverage the AWS switch (Assume) Roll on the API calls to scan other AWS accounts

1. From the Main Account:
    
    1. Create a role within IAM -> This should be using the "Another AWS Account" option
        
    2. We would need an account that uses just accountID and one that would be with the Require ExternalID option - Note no requirement for MFA option at this time
        
    3. Policy to be added - use the example minimum policy needed for discovery from our docs site [here](auto-discovery/cloud-auto-discovery/index.md)
        
2. From the Sub (or separate)-account
    
    Have a user that is assigned the assumerole from Step 2 "Grant Access to the Role" here in the AWS IAM case [IAM Tutorial](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html "https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html")
        

* * *

## Amazon API Autodiscovery

### Amazon API Discovery Items

<table><tbody><tr><td><strong>Cloud Service/Object Name</strong></td><td><strong>Where to locate in D42</strong></td><td>Accessed API</td><td>Information Generated</td></tr><tr><td>EC2 Instances</td><td>Devices --&gt; All Devices</td><td>&nbsp;</td><td>Service name, instance ID, OS platform, image ID, Status, etc.</td></tr></tbody></table>

![](/assets/images/Image_28_Cloud_Disc_AMZN_API.png)

When discovering your Amazon Cloud via the Amazon API, Device42 authenticates against the **API URL** with your **AWS API Access Key** and **Secret Key**. To create a discovery job, please ensure you have these available. You can find or generate new AWS API Access keys via the AWS Console -> UserName Menu --> "My Security Credentials". Expand the "Access keys (access key ID and secret access key)" item, and "Create New Access Key" (or reference an existing one): 

![create aws api access key](/assets/images/create_AWS_API-access_key.png)

1. Begin by setting **Cloud Type:** ‘Amazon AWS’ via the dropdown \[pictured\].
2. Enter a ‘Name’ for your Amazon AWS API discovery job.
3. Enter the 'URL' to of the AWS API endpoint you are targeting, including the port if necessary - for URLs and other information on AWS API endpoints, reference the "Endpoints" section of [the AWS API documentation](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#Using_Endpoints).
4. Add your **AWS API Key ID** to the "Account ID" field, followed by the corresponding **Amazon Secret Key** in the "Secret Key" field for the account to be discovered: You'll add both your API Key ID and Secret Key to Device42 as separate 'password' entries, and the procedure is the same as adding a new password: 
    - Click the magnifying glass to bring up the credential selection screen
    - Click the ‘Add Password’ button in the upper right-hand corner
    - Enter your Account ID in the field labeled “Password:” - _The USERNAME FIELD IS NOT USED by cloud discoveries!_, & click "Save"Repeat the process and add a second entry for your Secret Key, as well. Note that Device42 stores these values encrypted; If desired, you may also set access permissions on your AWS credentials.
5. In the **Region:** box, enter the region you are targeting, e.g. _us-east-1_.
6. Set a discovery schedule if desired; Save and run your AWS API discovery!

**Options for AWS API Discovery:**

- **Action for Instance not found:** Choose how Device42 will handle the situation of an instance that was previously discovered not being found on subsequent discovery runs. Change Status will update the instance's status, while "Delete Instance" will delete the missing instance. The best choice for you depends on how you manage your infrastructure.
- **Strip Domain Name:** Strips the domain name (everything after the first period) from the name as discovered before storing in Device42
- **Object category for discovered devices:** Choose a category to assign to discovered devices
- **Overwrite existing object categories:** Select this option to overwrite any previously assigned categories with the current selection
