---
title: "HashiCorp Vault Integration"
sidebar_position: 12.5
---

# HashiCorp Vault Integration

Each Device42 autodiscovery job is configured to use one (or more) sets of system credentials. If you already use HashiCorp Vault to manage passwords and other secrets, or simply don't want to use Device42 for this purpose, the Device42 HashiCorp Vault integration allows Device42 to securely store and retrieve these credentials externally as your primary secret management solution.

HashiCorp Vault offers useful features such as automatic password rotation, which can be configured to rotate secrets per your specific corporate policies and industry guidelines.

:::info
Please note that passwords retrieved from HashiCorp Vault are not viewable in Device42.
:::

## Configuring HashiCorp Vault

### Pre-requisites

- **(Required) Role ID / Secret ID:** For the HashiCorp Vault integration to work, you will need to create an AppRole in HashiCorp Vault with a policy that grants "read" to the desired Secret Paths. 
    - AppRole authentication is done by using both "RoleID" and "SecretID" as credentials. 
    - Details on how to create an AppRole and retrieve the RoleID and SecretID can be found [here](https://developer.hashicorp.com/vault/docs/auth/approle).
- **(Required) Secret Engine Path:** You will also need to specify the path to a valid K/V Version 1 or Version 2 secret engine to retrieve secrets from. Example: secret, kv, foo, bar, etc.
- **(Optional) Namespace:** If you're leveraging Multi-Tenancy with Namespaces then you will need to include the Namespace as well. Note: This is Limited to Vault Enterprise Standard or HCP Vault Clusters.


## Configuring Device42

- Select **Tools > Integrations > HashiCorp Vault** from the Device42 menu.

![](/assets/images/hashicorp-vault-integration/HashiCorp_2.png)

- Click on the **Edit** button in the bottom right corner and enter your HashiCorp Vault RESTful API information. (Example below)

![](/assets/images/hashicorp-vault-integration/HashiCorp_3.png)

- Verify connectivity by clicking the **Test Settings** button in the top right corner.

![](/assets/images/hashicorp-vault-integration/HashiCorp_4.png)

- The **Test Settings** button attempts to validate the supplied configuration settings by retrieving a token from HashiCorp Vault. If a token is successfully retrieved, a message stating "HashiCorp Vault Settings Valid" should appear in the top right corner. (Example Success Response Below)

![](/assets/images/hashicorp-vault-integration/HashiCorp_5.png)

- If you run into configuration errors related to SSL errors, you may need to disable SSL Verification within the HashiCorp Vault configuration page before trying again. 

![](/assets/images/hashicorp-vault-integration/HashiCorp_6.png)

## Using the Device42 HashiCorp Vault Integration for Discovery

To create a new password object using HashiCorp Vault, simply select HashiCorp Vault from the **Password Storage** drop-down menu:

![](/assets/images/hashicorp-vault-integration/HashiCorp_1.png)

**Note:** By default, both usernames and passwords are retrieved from HashiCorp Vault by looking up the secret using its path within the vault. The value used to do the lookup is assumed to be stored in the **Label** field of the related Secret in Device42. If there is no value for **Label** then the value is taken from the **Username** field instead. Usernames and passwords are parsed from the Secret returned by HashiCorp Vault using the slugs "username" and "password" respectively. You may also override the default slugs used by utilizing **Password Custom fields** named **username_slug** and **password_slug**.
