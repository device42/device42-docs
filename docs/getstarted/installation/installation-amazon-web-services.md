---
title: "Amazon Web Services - Installation"
sidebar_position: 9
---
## Device42 on AWS FAQ

### Supported Regions

Device42 AWS deployments are supported in the following regions:

| Americas and Middle East    | Europe         | Asia Pacific    |
| ----------------------------|-----------------|-----------------|
| N. Virginia (US East)       | Frankfurt (Germany) | Hong Kong (Hong Kong) |
| Ohio (US East)              | Zurich (Switzerland) | Tokyo (Japan) |
| N. California (US West)     | Stockholm (Sweden) | Seoul (South Korea) |
| Oregon (US West)            | Madrid (Spain) | Mumbai (India) |
| Sao Paulo (Brazil)           | Dublin (Ireland) | Hyderabad (India) |
| Tel Aviv (Israel)           | London (United Kingdom) | Singapore (Singapore) |
| UAE (United Arab Emirates)  | Paris (France) | Sydney (Australia) |
|                             |                 | Jakarta (Indonesia) |
|                             |                 | Melbourne (Australia) |


### Costs and Licensing

Device42 on AWS operates using the _**Bring Your Own License (BYOL)**_ model, meaning there is no additional charge from Device42 to run on AWS. Aside from the yearly fee for your Device42 license, the only costs you will incur via AWS are the costs they bill you for the use of your instances; usually an hourly fee, depending on the instance size you select; larger instances usually cost more. See the next section for EC2 instance sizing information for Device42.

Device42 License Pricing information is available on the [Device42 Pricing Page](https://www.device42.com/pricing/) of our website.

The Device42 AWS offerings each come with a pre-installed, limited license.  To utilize the full capabilities of Device42 it is recommended that more capable license be obtained from a Device42 Sales representative or business partner.

Additional information on managing licenses is available on the [Upload a New License](administration/licensing.md/#upload-a-new-license) section of the [Device42 Licensing](administration/licensing.md) document.

### EC2 Instance Sizing for Device42

![Choose EC2 Instance Size for Device42](/assets/images/EC2_instance_sizing.png)

When running Device42 on AWS, it is recommended you size your Device42 Main Appliance (MA) to run on a t3.xlarge EC2 instance; this is the default. During appliance configuration on the AWS Marketplace, you will have the option to select your EC2 instance size. Only the `t3.xlarge` EC2 instance size is currently permitted.

The configuration will ONLY allow you to "Launch" successfully using one of the above listed sizes.

### AWS Service Quotas

Customers must regularly view and manage the quotas for AWS services using AWS Service Quotas dashboard. Refer to our [Sizing Recommendations](getstarted/installation/sizing-recommendations.md) documentation for more details.

### Instance Metadata Service Version (IMDS)

The Device42 AWS offering does not impose restrictions on which version of the Instance Metadata Service can be used. The user has the choice to utilize either IMDSv1 or the more recent IMDSv2.

### Secret Management and Data Storage

Please note that The Device42 AWS offering does not require the storage of any secrets in the AWS Secrets Manager.

All customer data resides on the instance itself. To enhance security, customer passwords and secrets are encrypted using AES-256 encryption. For more detailed information on how passwords and secrets are stored, please see the [Password Security and Permissions](administration/passwords/password-security-and-permissions.md) document.

* * *

## Deploying D42 from the AWS Marketplace

### Configure instance & communication settings

:::info
The Device42 AWS offering involves only a single component and does not require AWS data encryption to operate properly.  
:::

1. Launch your Device42 instance via the [AWS Marketplace](https://aws.amazon.com/marketplace/search/results?x=0&y=0&searchTerms=Device42&ref_=device42) 1-Click feature. Follow the on-screen instructions, and when you arrive at the **Launch this software** screen, select a key-pair to use for SSH console access to the Device42 appliance and be sure to allow incoming access from your external IP address:
    - **a)** You may generate a key via the **Create a key pair in EC2** link. See the "Generating a new AWS Keypair" section on this page for more help with this step. 
    
    ![Select SSH key pair to use for console access to Device42 on AWS](/assets/images/choose_SSH_keypair_AWSd42-hl.png)

    - **b)** _\[Note: this step explains how to allow traffic from your PC and/or local network to facilitate communication with the Device42 instance you are deploying **directly over the internet**. This IS NOT considered best practice and should only be used for testing; Set up a VPN or other secure means of communication for production AWS use!\]_ Create an appropriate security group via _'Security Group Settings'_. Select _'Create new based on seller settings'_ and be sure to add your external IP as an allowed IP for the default Device42 ports _\[404 ssh, 4242 appmgr-http, 4343 appmgr-https, 443 https\]_, all of which are part of the default D42 AMI security group settings for incoming SSH, appliance manager, and webUI access: 
    
    ![security group settings for access to Device42 on AWS](/assets/images/security_group_settings_CORRECT-hl.png)

2. SSH to the public endpoint of your new Device42 main appliance \[MA\] using the public DNS name or the IP address found in the AWS UI, ensuring your SSH client is configured to connect on port 404. Use the username: `device42` and the `SSH keyfile` you chose in Step 1 above for SSH authentication (instead of a password).If you have trouble connecting, be sure you've [configured your instances security group settings](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html) to allow SSH access from your PC's IP address.

![Instance ID, public ip, DNS address on EC2 dash](/assets/images/EC2_dashboard_Instance_ID-IP-DNS_hl.png)

3. Navigate to the Device42 login screen by visiting `https://DEVICE42_AWS_ADDRESS` \[where `DEVICE42\_AWS\_ADDRESS` is the DNS name (preferred) or IP address found on the AWS UI\]. Login to the Device42 web-UI using the default username `admin`, and provide your `AWS instance ID` as your temporary PW. It's a good idea to change these credentials to something more secure as soon as you log in!

![Device42 Web UI login](/assets/images/Log_in_to_D42_WebUI-hl.png)

4. Update the appliance license key - the included key is expired. Obtain an updated license by sending an email to `sales@device42.com` requesting a trial license for an AWS-Marketplace Device42 install. Once you receive the updated keyfile, save it to your local filesystem and install it via main menu, **Tools -> Licensing**, simply browsing to the new key file and then clicking **"Upload & Apply License"_:_While you should receive a your license shortly, we are working to automate this step.**

![update license d42 aws](/assets/images/update_license_AWS_d42.png)

5. Check to make sure your Amazon Machine Image (AMI) is running the latest version of Device42 and update if necessary. From the web interface of your Device42 appliance, head to the main menu, **TOOLS -> Update**. Make note of the "Current Version" number displayed, then follow the "[Check for latest version](https://www.device42.com/update/)" link or visit [https://www.device42.com/update/](https://www.device42.com/update/) to check for an update. Should the update page offer a newer release, enter your work email to download and install it by following the [Device42 Upgrade Steps](https://support.device42.com/hc/en-us/en-us/articles/222221228-Upgrade-Steps-Device42) (since this is a brand new appliance with no data, you may skip the backup noted in step 1 this time only!): 

![Check for Device42 Update](/assets/images/check_for_update_d42_aws.png)

- You're all set! Now is a good time to check out ["Getting started with Device42" documentation!](getstarted/index.md) If you have any questions or issues that the documentation doesn't address, head to https://support.device42.com or send an email to open a ticket with support@device42.com.

* * *

### Generating a new AWS keypair for SSH access

To generate a new SSH keypair for use on AWS, either click the **Create a key pair in EC2** link during configuration of your appliance or alternatively, open up the [EC2 console](https://console.aws.amazon.com/ec2/v2/home), scroll the menu on the left hand side to the **Network & Security** section, and choose **Key Pairs**: 

![Create an new SSH keypair on AWS EC2](/assets/images/create_AWS_keypair_for_SSH.png)

1. Click the "Create Key Pair" button, #1 in the image above.
2. In the dialog that pops up, give your new key-pair a name that has meaning to you.
3. Click the "Create" button. Your Keyfile will be created, and the private key will begin downloading automatically; save it somewhere safe. `FileName.pem` contains your your **private key**, which is what you will use to authenticate. If you are using Linux, copy it to your key directory.
4. To use your new SSH key with Putty on Windows, reference this helpful AWS article on [Connecting to Your Linux Instance from Windows Using PuTTY.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html)

### Accessing the D42 Appliance Manager - AWS Marketplace installs

All maintenance operations are performed through the Device42 appliance manager. The appliance manager listens on port 4343 (https://YOUR\_DEVICE42\_INSTANCE:4343). Software updates, Device42 backups and restores, and certificate management are all performed through the appliance manager:

![Appliance manager login ](/assets/images/appliance_manager_AWS.png)

For 1-click installations from the AWS Marketplace, users may log on to appliance manager using the default Device42 username `d42admin` , the password being your **AWS instance ID**. Once logged in, you'll see the appliance manager main menu: 

![D42 Appliance Manager menu](/assets/images/appliance_manager_main.png)

Note: if you installed on AWS manually (using a downloaded image), reference the Appliance Manager section below \[different credentials\].

* * *

## Deploying a downloaded image to an AWS instance \[manual installation\]

### Pre-requisites - before you begin

1. Please submit a ticket requesting access to the Device42 Amazon Machine Image (AMI). Be certain to include the following information:
    - AWS Region for Device42 Deployment
    - AWS Account Number
2. After Device42 Support has granted access to the Device42 AMI, navigate to your EC2 Dashboard and launch a new instance.
3. Select “My AMIs” (ensure to select “Shared with Me”), and deploy your appliance. _Device42 recommends t3.xlarge as the instance size._

### Configuring instance access

Given the nature of discovery and the inherent access it requires, Device42 does not recommend direct access from unrestricted internet sources. Instead, Device42 recommends access to the Device42 instance be protected through VPN connections and security groups. While these requirements will vary from environment to environment, Device42 recommends strict adherence to the principle of least privilege.

For additional visibility, Device42 recommends users enable AWS CloudTrail as a security and operational best practice: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-getting-started.html

### Appliance Manager Access - Manual AWS Installs

All maintenance operations are performed through the Device42 appliance manager. The appliance manager listens on port 4343 (https://YOUR\_DEVICE42\_INSTANCE:4343). Software updates, Device42 backups and restores, and certificate management are all performed through the appliance manager. For manual AWS (image-based) installations, you can log on to appliance manager using the default Device42 username/password \[d42admin/default\]

* * *

## Administration of Device42 on AWS

### Main Appliance Ports

The following diagram depicts the Device42 main appliance along with its associated ports within an AWS Virtual Private Cloud:

![Main appliance ports](/assets/images/d42-architecture-diagram-for-aws.png)

### Software and security updates & patches

Security patches are bundled with Device42 software updates. There is no need to manually apply patches to your Device42 instances outside of software updates. Software updates can be downloaded from https://www.device42.com/update/.

Watch the [Update Device42 Appliance How To](/how-to-videos/update-device42-appliance-how-to) walkthrough video for information on our quick Device42 update process.

### Backing up and restoring your D42 data on AWS

Device42’s backup facilities are accessible through the appliance manager. Backups can be executed immediately, and users have the ability to download a backup file immediately or on a schedule leveraging automatic saving to an SFTP, NFS, or AWS S3 destination.

For more information on backups / restores, see our documentation: [administration/appliance-manager/setting-up-backup-device42-appliance-manager.md](administration/appliance-manager/setting-up-backup-device42-appliance-manager.md).

### Monitoring / Health Checking Device42 on AWS

Device42 has a built-in health check which can be polled using your favorite monitoring tool. We offer a pre-configured [Device42 Health Check module for Nagios](https://github.com/device42/Device42-Nagios-Health-Check), which can be downloaded from Device42 on [Github - Device42-Nagios-Health-Check](https://github.com/device42/Device42-Nagios-Health-Check).

The above health-check will monitor the following:

<table><tbody><tr><td width="288"><ul><li>Backup Status</li><li>CPU Usage</li><li>Database (DB) size</li><li>Disk Usage Percent</li></ul></td><td width="288"><ul><li>Free Memory (MB)</li><li>Free Swap Memory (MB)</li><li>Total Memory (MB)</li><li>Total Swap Memory (MB)</li></ul></td></tr></tbody></table>

![Device42 Nagios Healthcheck Sample Output](/assets/images/nagios_healthcheck_example.png)

### Configuring High Availability (HA) of Device42 on AWS

If a High Availability (HA) deployment of Device42 is desired or required for a Device42 instance running on AWS, Device42 offers a supported "WarmHA" solution. To configure your deployment to run WarmHA, follow the instructions that can be found on the [Device42 WarmHA Documentation page - administration/appliance-manager/warm-ha-setup-failover-and-automated-backups.md](administration/appliance-manager/warm-ha-setup-failover-and-automated-backups.md). The linked page contains instructions on setting up WarmHA, failover, and if desired, configuring automatic backups.

An example configuration that leverages Nagios to automatically fail-over the instance in case of a failure is also described.

### Discovery across your instance - Sample IAM Policy

**Note that the following sample IAM policy is _\*not\*_ needed to simply run Device42 on AWS. You would only set up an IAM policy similar to this one if you would like to TARGET your AWS inventory for discovery, e.g. you want to document your AWS Deployment in Device42. No IAM policy is necessary to RUN Device42 in AWS nor to discover infrastructure running elsewhere!** Feel free to visit the [support site @ https://support.device42.com](https://support.device42.com/) to open a ticket or reach out to support@device42.com if you have any more questions.

The following permissions are required to support discovery:

<table><tbody><tr><td width="288"><ul><li>AmazonEc2ReadOnly</li><li>AmazonElastiCacheReadOnlyAccess</li></ul></td><td width="288"><ul><li>AmazonRDSReadOnlyAccess</li><li>AmazonS3ReadOnlyAccess</li></ul></td></tr></tbody></table>

The following is a sample IAM policy _(with minimum appropriate permissions)_ that allows Device42 to discover and inventory instances running on AWS; you may want to modify it, and should not use it if you do not understand it:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "ec2:Describe*",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "elasticloadbalancing:Describe*",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudwatch:ListMetrics",
                "cloudwatch:GetMetricStatistics",
                "cloudwatch:Describe*"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "autoscaling:Describe*",
            "Resource": "*"
        },
        {
            "Action": [
                "elasticache:Describe*"
            ],
            "Effect": "Allow",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListAllMyBuckets"
            ],
            "Resource": "*"
        },
        {
            "Action": [
                "rds:Describe*",
                "rds:ListTagsForResource",
                "ec2:DescribeAccountAttributes",
                "ec2:DescribeAvailabilityZones",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeVpcs"
            ],
            "Effect": "Allow",
            "Resource": "*"
        },
        {
            "Action": [
                "cloudwatch:GetMetricStatistics",
                "logs:DescribeLogStreams",
                "logs:GetLogEvents"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
}
```
