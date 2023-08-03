---
title: "Device42 Public-Facing Deployment Best Practices & Recommendations"
---

## Device42 Application Hardening

When deploying Device42 in a production environment, it's important to conform to common application hardening best practices. Many of these best practices are industry standards for any production application. This document attempts to outline these best practices within the context of Device42.

The following is a high-level description of those best practices as recommended by Device42.

 

### Change all passwords for any default credentials

For the Main Appliance (MA) this means changing the following sets of credentials:

1. **System Console User**

\- Default Credential: device42 | adm!nd42

2. **Web GUI Admin User**

\- Default Credential: admin | adm!nd42

\- Note: This account can also be disabled entirely (though you will need at least one superuser active on the appliance)

3. **Appliance Manager**

\- Default Credential: d42admin | default

\*\*Do note that if you are deploying through the AWS or Azure marketplaces then the passwords above are not the default values used. Review the below documentation for more information:\*\*

\- \[AMAZON WEB SERVICES – INSTALLATION\] ([getstarted/installation/installation-amazon-web-services/](getstarted/installation/installation-amazon-web-services.md))

\- \[MICROSOFT AZURE – INSTALLATION\] ([getstarted/installation/installation-microsoft-azure/](getstarted/installation/installation-microsoft-azure.md))

For the Remote Collector (RC) this means changing the System Console User (Default Credential: client | device42).

There is no Device42 configured credential for the Windows Discovery Service (WDS).

 

### Practice good password hygiene

\- Set a strong passphrase for the secrets vault

\- Device42 has a built-in password/secret vault and all secrets are encrypted using AES-256 bit encryption. Encryption is based on a passphrase entered by the user. (One time setup and you would need to secure the passphrase in case you need to restore the backup). This passphrase should ideally be random and as long as possible.

\- Use burnt secrets whenever possible

\- A “burnt secret” is simply a way to store a password and designate it as ‘un-retrievable’. If a password is set to ‘burnt’, it can never be retrieved after being stored, however, Device42 can utilize a “burnt secret” for discovery.

\- If passwords must be stored in a viewable manner, limit access whenever possible

\- Consider creating custom groups to limit users who can view secrets.

\- Passwords can also have individual permissions to further restrict who can view/edit/use them

\- Review the below documentation for more information:

\- \[PASSWORD SECURITY AND PERMISSIONS\] ([passwords/password-security-and-permissions/](administration/passwords/password-security-and-permissions.md))

\- \[SET DEFAULT PASSWORD MANAGEMENT GROUP\] ([passwords/set-default-password-management-group/](administration/passwords/set-default-password-management-group.md))

\- Leverage \[password policies\] ([passwords/password-policy/](administration/passwords/password-policy.md)) to ensure that Device42 users have:

\- Cryptographically strong passwords (i.e., min counts of numeric, special, and uppercase letter characters)

\- Password expiration dates

\- Max # of invalid login attempts

 

### Restrict access using groups with functional and object permissions

\- Device42 includes role-based access control capabilities to restrict the actions and objects that users or groups can interact with

\- Whenever possible it is recommended to take the least privileged approach

\- For example, this might mean when creating dedicated users for API access, limit their actions to read-only if that is all that is required

\- Users can also have staff access revoked meaning they can only interact with the API and can't login via the GUI

\- Limiting the # of super users active on the appliance is also recommended whenever feasible

 

### Obfuscate access to the appliance

Like any internal production application, Device42 should only be deployed in private networks and should never be allocated a public IP address directly. Device42 does not need to be open to the public internet in order to integrate with any of the SAAS based integrations that we maintain as the MA leverages our \[cloud connector\]  ([external-integrations/device42-cloud-connector-overview/](integration/external-integrations/device42-cloud-connector-overview.md)) to obfuscate your appliance from the public internet. If you are thinking of deploying Device42 with a dedicated public IP address it is highly recommended that you reach out to support@device42.com to discuss potential use cases that would merit such a configuration. If you must expose Device42 to the public internet, it is critical that you DO NOT have default credentials configured. Additionally, you should also take measures to restrict access to the management ports used by the appliance. This means restricting access to port 404 (Used for SSH access to the MA) and 4242/4343 (Used for http/https access to the appliance manager)

To further obfuscate your MA, you may wish to also configure a proxy for any outbound HTTP/HTTPS connections. You can configure proxy settings from within the global settings section of the appliance manager.

 

### Additional security-related configurations

\- Disable older TLS versions if not required

\- By default, the appliance is configured to use TLS v.1.2 only but it is always good to double-check your current configuration.

\- From the appliance manager you can see what TLS versions are enabled by navigating to Global Settings -> TLS versions for Web Console and TLS versions for Appliance Manager respectively.

\- Disable HTTP access

\- By default Device42 will upgrade HTTP connections to HTTPS however HTTP access can be disabled entirely

\- From the appliance manager you can disable HTTP access by navigating to Global Settings -> Enable/Disable HTTP for Web Console and Appliance Manager SSL respectively.

\- Import a HTTPS certificate

\- You can add your own https certificate and key file to further secure the web console.

\- See \[SET UP HTTPS CERT\] ([device42-appliance-manager/set-up-https-cert/](administration/appliance-manager/set-up-https-cert.md)) for more information.

\- Set inactivity timeouts for user sessions

\- Device42 provides global inactivity timeouts to kill stale sessions

\- You can configure separate timeout values for general GUI access and access to the appliance manager

\- Check your currently configured timeout values by navigating to Global Settings -> Set Inactivity logout time

\- You can also configure a separate timeout value for the secrets vault.

\- The secrets timeout is configured from the the web GUI under Tools -> Global Settings -> Secrets

\- If you already leverage a SAML 2.0 provider like Okta or OneLogin that enforces 2FA or MFA, consider setting up a \[SAML 2.0 CONFIGURATION\] ([tools/saml-2-0-configuration/](administration/saml-2-0-configuration.md))

\- In addition to SAML, Device42 can also be configured to use Active Directory for authentication

\- See \[ACTIVE DIRECTORY / LDAP USER SYNC\] ([auto-discovery/active-directory-sync.md](auto-discovery/active-directory-sync.md)) for more information

\- Device42 also stores audit history events. Any login events or modifications to objects within the database are stored and retained for a configurable duration.

\- Consider adjusting the 'Days to Keep logs:' setting from Tools -> Log Settings within the web GUI.

\- You may also choose to offload these events to an external log collection tool like Splunk to keep them for historical purposes. See \[Splunk Integration with Device42\] ([https://www.device42.com/integrations/splunk/](https://www.device42.com/integrations/splunk/)) for more information on the Splunk integration.
