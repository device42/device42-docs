---
title: "Jenkins Integration"
sidebar_position: 14
---

If you use Jenkins, the popular open-source automation server, it's likely your automated jobs authenticate against one or more local and/or remote systems as part of their tasks. The Device42/Jenkins integration allows Device42 to securely store & retrieve these credentials within Device42, which boasts a robust built-in secret/password management solution. Instead of trying to store new or existing credentials in your automation scripts, or in Jenkins in addition to countless other locations, leverage the centralized secret store in Device42.

Simply add or update a secret/password in Device42, and with the Jenkins integration, your automation instantly has access to the updated credentials. Forget manual credentials updates across your infrastructure!

If you like this integration, check out the [Device42 integration page](https://device42.com/integrations/) for even more time saving & efficiency boosting features!

 

## Installing the Device42-Jenkins Integration

![Jenkins](/assets/images/Jenkins-logo-butler-transparent.png)

### Build he Jenkins plugin from source (optional)

_Note: **Maven** is required to build the plugin._

1. Begin by cloning the Device42 Jenkins Plugin repo from Device42's Github: `git clone https://github.com/device42/device42-jenkins-credentials-plugin`
2. Next, change your working directory to the plugin directory of the repo you just cloned: `cd device42-jenkins-credentials-plugin`
3. Call Maven install to build the plugin: `mvn install -DskipTests`
4. Follow "Configuring Jenkins" section below to install the plugin you just built into Jenkins.

### Configuring Jenkins

1. Login to your Jenkins instance.
2. Select the 'Manage Jenkins' Gear icon from the menu on the left, and then choose ‘Manage Plugins’ (green puzzle piece) --> 'Advanced' tab.
3. Click the "Browse" button under the "Upload Plugin" heading _(2nd from top)_ and select the `Device42.hpi` Device42 plugin you downloaded _\[or built from source\]_.
4. Click "Open" on the dialog, and then click the "Upload" button to upload the plugin to Jenkins: ![Upload Device42 Jenkins Plugin](/assets/images/upload_d42_plugin_hpi_jenkins.png)

 

### Configuring Device42

Device42 doesn't require any specific configuration for the integration other than having your D42 Main appliance up and running & its API accessible.

New passwords and Secrets are created & managed within Device42 (no changes from your usual workflow), and those secrets are read by the integration via the Device42 API each time Jenkins automation runs.

 

### Using the Device42-Jenkins credentials integration

The Device42-Jenkins credentials integration allows you to use passwords/secrets stored in Device42 within Jenkins automations by pulling them via the Device42 API when Jenkins automations run. Credentials stored within Device42 are made available in Jenkins as _variables_, the names of which are user-customizable. Each D42 credential variable may be referenced as many times as desired within a Jenkins automation.

The following example walks through embedding a new credential into a Jenkins automation, and then pulls it and a second credential from Device42 and stores attributes from both into a text file, which can then be seen on the host instance, thus demonstrating the concept. Users can then use this technique to power any integration needed across their enterprise utilizing secrets centrally and securely stored within Device42:

1. Begin by creating a new Jenkins automation Job _\[via the + button tab\]_, or opening an existing Job for editing within Jenkins _\[by clicking its name\]_: ![Jenkins add or edit job](/assets/images/jenkins_add-edit_job.png)
2. Within the job configuration, scroll down to "Bindings" (or click the "build triggers" tab to jump). Click the "Add" button (#1), and choose "Device42 Secret credentials" (#2) from the popup to insert a D42 credential variable. Click the "Add" button with the key icon (#3) to select the Device42 credential you want to add: ![Add a Device42 credential variable to Jenkins](/assets/images/add_d42_secret_credential_to_job.png)
3. You can now specify the details of the Device42 credential you'd like to associate. Specify the following: **Kind** of credential - which in this case is a _'Device42 Secret Credential'_, **Scope**: _(required)_\- availability of your credential variable to other Jenkins jobs, **Device**: _(required)_\- the name of the device the credential is associated with in Device42, **User**: _(required)_\- the username associated with credential/secret in Device42 **ID**: _(normally left blank & auto-generated)_ - An internal unique ID assigned to the credential; useful for scripted configurations. **Description** - _(optional)_\- specify a descriptive description so you can recognize this credential in Jenkins \[and tell it apart from others w/ the same username\] ![add D42 credential fields](/assets/images/add_d42_credentials_fields.png)
4. You may now reference your new Device42 credential variable using the `$Variable_Name` as specified in the _Execute Shell_: ![Jenkins Execute Shell with D42 credential variables](/assets/images/D42_secrets_as_Jenkins_variables.png) Repeat the above steps to add more credentials from Device42, if desired.
5. Congratulations - You're all set! Go ahead and leverage the Device42 - Jenkins integration to power some of your production automation jobs, and say good-bye to the scramble that goes along with trying to update credentials in 2038342 different places last minute!

 

If you have any questions about the Device42-Jenkins plugin, or are experiencing issues, please open a ticket @ [support.device42.com](https://support.device42.com) or [email support@device42.com](mailto:support@device42.com) and we'll do the best we can to help. Note that we only provide basic troubleshooting assistance for problems involving the integration itself.

* * *

Download the [Device42 Jenkins integration plugin](https://github.com/device42/device42-jenkins-credentials-plugin/) today.

_Note that Device42 is required to use the Device42-Jenkins plugin_. [Download a free trial](https://device42.com/download) _\[all features, no nag-ware\]_ now!
