---
title: "Password Security and Permissions"
sidebar_position: 2
---

Password permissions are assigned to each password and can be done at a user and/or group level. The following is a quick primer on security, global and individual permissions.

### Password Security

- AES-256 bit encryption is used to store the passwords.
- Encryption is based on a passphrase entered by user.(One time setup and you would need to secure the passphrase incase you need to restore the backup)
- Passwords are stored in the database in an encrypted state and go to the backup file in that state. The backup file is also encrypted by a user-entered passphrase and none of these 2 passphrases are included in the backup.
- If a user is on a password page and there is no activity for 1 minute, the session is automatically logged out.
- A global timeout value (set in appliance manager) controls the overall timeout for any session.
- The view and list pages don't display the password by default. It is only displayed when "show password" is requested. (The edit page has password display for editing).
- All change/add/delete/view operations are logged in an audit trail.

Here is a blog post discussing these: [https://www.device42.com/blog/2012/05/introducing-centralized-device-password-management/](https://www.device42.com/blog/2012/05/introducing-centralized-device-password-management/)

### Global Permissions

![Global Permissions](/assets/images/wpid2099-Global_Permissions.png)

Password permissions are handled similarly to device permissions and/or permissions for other device42 operations. However, there are a few differences:

Add permissions are similar: If a user has Add Password permission, they can add passwords.

View Password permission is needed to view the password in the menu, but the permission is controlled granularly for each individual password as shown below. So, globally you can assign View/Change Password to a user or group, but it would not give that user/group permissions to view/edit specific passwords. It would only enable them to see the Secrets menu.

Delete permission is required to see the delete button, but again individual permission to delete password is controlled by permissions on the specific password. If a user can change a password, he/she can also delete that password.

### Per Password Permissions

![Per Password Permissions](/assets/images/wpid2100-Per_Password_Permissions.png)

Each password has 4 different levels of permissions:

- Users who can view the password
- Groups who can view the password
- Users who can view or change the password (view edit users)
- Groups who can view or change the password (view edit groups).

There is a requirement that at least one user or group must have access to edit the password. Otherwise, a password might become inaccessible.

If none of these permissions are entered, then by default the password creator is given rights to view and edit that password.

### Bulk Permission Change

![Bulk Permission Change](/assets/images/media_1432118719801.png)

From the Passwords list view, you can select multiple passwords and change the view or edit group permissions in bulk.
