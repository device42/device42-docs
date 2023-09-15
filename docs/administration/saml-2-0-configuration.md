---
title: "SAML 2.0 Configuration"
sidebar_position: 13
---

Device42 integrates with SAML 2.0 in conjunction with AD or LDAP user synchronizations to provide Single Sign On (SSO) support in Device42. Once users are added to Device42 via Active Directory or LDAP, they will automatically be logged into Device42 when they load the site.

_Note_ Since authorization is handled by Device42, the user needs to exist within Device42 before they can log in for single sign on functionality to work.

SAML configuration varies between providers, but we'll provide the steps for configuration with Microsoft ADFS, Okta and Onelogin below as examples. Device42 SSO should also work with **any** SAML2.0 compatible Identity Provider, and has been confirmired working with IDaaS providers Centrify and PingIdentity's PingOne and PingFederate as well.

Should you need further assistance, please contact [Support](mailto:support@device42.com).

### Microsoft ADFS Configuration

Add new relying party trust.

![ADFS Party Trust](/assets/images/adfs-001.png)

Next screen : Add data manually.

![ADFS Party Trust](/assets/images/adfs-002.png)

Next screen : Specify your app display name.

Next screen : Choose AD FS profile.

Next screen : Choose SAML 2.0 SSO and set proper D42 ACS url – https://\_\_\_device42\_\_\_url/saml2\_auth/acs/.

![](/assets/images/SAML-admin_adfs-003.png)

Next screen : Set identifiers access – https://\_\_\_device42\_\_\_url/saml2\_auth/acs/.

![](/assets/images/SAML-admin_adfs-004.png)

Next screen : Permit all users

Next screen : In claims section ( click “edit claims” on relying party / automatic go to this section after initial setup ), add the following claims

username claim

![ADFS Party Trust](/assets/images/adfs-005.png)

nameid claim

![ADFS Party Trust](/assets/images/adfs-006.png)

Copy metadata url from endpoints

![ADFS Party Trust](/assets/images/adfs-007.png)

\*\* if you receive time synchronization error please write this command in powershell : Set-ADFSRelyingPartyTrust -TargetIdentifier "" -NotBeforeSkew 5

### Azure AD Configuration

1\. Navigate to Azure AD in the Azure portal _\> Enterprise Applications > New Application > Create your own application_. Give your app a name (the app shown in the screenshots is _Device42SAML_) and select the third option _Integrate any other application..._, then click _Create_.

![](/assets/images/image-5.png)

2\. Open your newly created enterprise app _\> Option 2- Set up Single sign on_, or select _Single sign-on_ under Manage in left-hand toolbar.

![](/assets/images/image2.png)

3\. Enter `https://<D42-FQDN-or-IP>/saml2_auth/acs/` in Identifier (Entity ID) and Reply URL (Assertion Consumer Service URL) in Section 1 Basic SAML Config.

![](/assets/images/image3.png)

4\. Navigate to the Device42 Appliance Manager > Global Settings > SAML 2.0 Settings. Copy the App Federation Metadata URL in the SAML Signing Certificate section from the enterprise app you created in Azure AD and paste into Metadata auto conf url in the D42 Appliance Manager.

![](/assets/images/image4.png)

5\. While still in the SAML 2.0 settings of the Appliance Manager, enter `username` or other appropriate SAML attribute.

Save and restart the appliance from the VM console menu with option 4. You may wish to complete steps 6 and 7 before saving/restarting so that you can still login to D42 and create users with the local admin account you've used so far. The SAML attributes tested successfully are listed below:

- **emailaddress** - Email address associated with user account in Azure AD
- **name** - User Principal Name (UPN) associated with user account in Azure AD 

![Enter SAML username](/assets/images/saml-username.png)

6\. Assign users/groups to the SAML enterprise app you created in Azure AD. These should be users/groups that you want to allow authentication into Device42 via this SAML integration.

7\. For any users associated with the enterprise app in Azure AD, create the user in Device42 using the appropriate Azure AD value with a dummy password. The integration does not pull and create users directly from Azure AD, so the users must be created within Device42 prior to any attempt to authenticate via Azure AD.

8\. Once the above has been completed, you should be able to login to your D42 instance with your Azure AD credentials.

### Okta Configuration

In Okta, click the "Admin" button:

![Okta Admin Link](/assets/images/saml-001.png)

Click “Applications” button

![Okta Applications Link](/assets/images/saml-002.png)

In the “Applications” page find “Add application” button and click it.

![Okta Admin Link](/assets/images/saml-003.png)

Choose “Create new app”

![Okta Admin Link](/assets/images/saml-004.png)

Select platform as Web and sign on method as SAML 2.0.

![Okta Admin Link](/assets/images/saml-005.png)

Set application preferences and click next

![Okta Admin Link](/assets/images/saml-006.png)

On the next page setup ACS url and field mapping. The Single Sign On URL & Audience URI should be `https://yourdevice42address/saml2_auth/acs/`. The Attribute value should be the same AD or LDAP attribute that your users will log into Device42 with. Note the "Name" given to it as this will be needed in the Device42 Appliance Manager configurations.

![Okta Admin Link](/assets/images/saml-007.png)

Click “Next” and finish setup. Open your application settings, go to the “Sign On” tab and copy url from “Identity provider metadata” link. This will be used as the "Metadata URL" in Device42's Appliance Manager.

![Okta Admin Link](/assets/images/saml-008.png)

### OneLogin Configuration

To configure SAML2 integration between OneLogin and Device42, you have to create a `SAML2 connector app` in OneLogin. Then, you will need to add users to the `SAML2 connector app` so they can login via a OneLogin account.

**Creating SAML2 Connector App**

1\. Create and login into your OneLogin account.

2\. Create an app connector in OneLogin.

- Go to Applications > Applications.

![](/assets/images/D42-26961_saml_config_1.jpg)

- Click Add App.

![](/assets/images/D42-26961_saml_config_2.jpg)

3\. Search for `SAML custom connector` and select `SAML Custom Connector (Advanced)`

![](/assets/images/D42-26961_saml_config_3.jpg)

4\. Type a display name and Save.

5\. Go to the `Configuration` tab

- Put the value `https://<<fqdn>>/saml2_auth/acs/` in `Audience (EntityID)`, `Recipient` and `ACS (Consumer)URL`
- Put `.*` in `ACS(Consumer) URL Validator`
- Save

![](/assets/images/D42-26961_saml_config_4.jpg)

6\. Go to the `Parameters` tab and add a new field (by clicking on the `+` icon)

![](/assets/images/D42-26961_saml_config_5.jpg)

- Type the `username` as `Field name`.
- Check `Include in SAML assertion`.

![](/assets/images/D42-26961_saml_config_6.jpg)

- Save
- Choose the `Username` from the drop down as the value.

![](/assets/images/D42-26961_saml_config_7.jpg)

- Save

7\. In the `SSO` tab:

- Copy the “Issuer URL”. This will be entered in the “Metadata URL” field in Device42.

![](/assets/images/D42-26961_saml_config_8.jpg)

- After this, the SAML2 app is created and ready to be integrated with Device42.

**In Device42 Appliance Manager Configuration**

Login to Device42 Appliance Manager, `https://yourdevice42address:4343`, and go to the SAML 2.0 settings on the left, then set the Metadata url you obtained above.

![](/assets/images/D42-26961_saml_config_10.jpg)

After this has been saved, SAML integration should be complete.

_Now that SAML integration is complete you need to add users to the_ `SAML Connector App` _so they can login into Device42 via OneLogin account._

**Create a User in OneLogin**

- Go to Users > Users.
- Click New User.

![](/assets/images/D42-26961_onelogin_user_1.jpg)

- Fill the form. **Username should match the username in device42 app**.

![](/assets/images/D42-26961_onelogin_user_2.jpg)

- Save.

**Add User to Application**

1. Click on the user name.
    
2. Go to the `Applications` tab and add `Application` by clicking on the `+` icon.
    

![](/assets/images/D42-26961_user_configuration_1.jpg)

- Select the SAML Custom Application created above.

![](/assets/images/D42-26961_user_configuration_2.jpg)

- Continue
- Make sure `Allow the user to sign in` is checked

![](/assets/images/D42-26961_user_configuration_3.jpg)

- Save.

Now you can log into Device42 using the OneLogin account.

### Device42 Appliance Manager Configuration

Login to Device42 Appliance Manager, `https://yourdevice42address:4343`, and go to the SAML 2.0 settings on the left, then set the Metadata url you obtained above. Set the "username" field to match the value you saved in the SAML configuration.

![](/assets/images/D42-26961_saml_config_10.jpg)

After this has been saved, SAML integration should be complete!
