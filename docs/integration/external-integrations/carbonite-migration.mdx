---
title: "Carbonite Migration"
sidebar_position: 3
---

## Migrating Devices Using the D42 Carbonite Migrate Feature

### System Requirements

The following software must be installed and running:

- Device42 16.22.00+
- Carbonite Agent software version 8.4.0.313+ installed and running on both source and target machines.
- Source and target machines must have all necessary ports open and accessible as mentioned in the Carbonite documentation. Please see the **Windows** section of the following [document](https://download.doubletake.com/_download/8.4/8.4.0.0/Docs/Reference/ReferenceGuide.htm#Servers/Ports.htm).
- Source and target machines must have valid Carbonite Move licenses installed and activated.
- (Optional) If you require fine tuning of the various created migration job options, more features, or failover trigger configuration, the source and target machines need to have Carbonite Migrate Replication Console installed (usually installed by default during the Carbonite Agent installation process). The machines you want to monitor or control must be added to the Replication console’s **Servers** list.

![](/assets/images/WEB-734_Carbonite-servers.png)

- Both the source and client machines need to have compatible Windows operating system versions installed. Please read Carbonite Agent’s official documentation to see all the requirements for the Full Server Migration job type here: [Full server migration requirements](https://download.doubletake.com/_download/8.4/8.4.0.0/Docs/Migrate/Windows/MigrateWindowsUsersGuide.htm#MigrateExisting/MigrateExistingRequirements.htm).

## Creating a Carbonite Migration Job from D42 Devices

- From D42’s main page, click on the top menu bar’s _Tools_ link and select _Migrations > Migration Jobs_.

![](/assets/images/WEB-734_Carbonite-menu.png)

- On the Migration Jobs list page, click _Add  Migration Job_ at the top right.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job.png)

- On the next page, you need to fill out the _Source_ and _Target_ machines’ IP addresses and select their _Secrets_. Do this by clicking on the lens icon next to each field or typing in the IP address or secret directly into the text box.

![](/assets/images/WEB-585_Carbonite-4-D42-Migration-Job-IPs.png)

- If you click the lens icon, you are prompted with a pop-up window which lists all existing IP addresses in the system and the _Device_ name associated with that IP address. Please note that before selecting an IP address, you should make sure it is attached to a device in D42. You can also search for a device by its name by entering the term in the search field.

![](/assets/images/WEB-734_Carbonite-d42-select-ip-address.png)

- The process is the same for selecting the _Secret_, which must first be created in D42 and consist of the username and password on the source and target machines.

![](/assets/images/WEB-734_Carbonite-d42-select-password.png)

- Next you have the option of leaving the source server up or shut down after a failover. The option for shutting down the source server is selected by default and should not normally be changed as it will cause IP collisions with the target server as the target will become a clone of the source (including its IP settings).

![](/assets/images/WEB-585_Carbonite-7-D42-Shutdown-Server-Checkbox.png)

- After the steps above are complete, the _Verify Job_ option on the bottom control panel is enabled; click it to save the selected settings. It may take a few minutes to complete as D42 waits for  Carbonite Agent to generate the recommended job options and verify if the job can be successfully created.

![](/assets/images/WEB-734_Carbonite-d42-add-migration-job.png)

- If everything is successful, you should see a similar verification table displayed below the fields.

![](/assets/images/WEB-734_Carbonite-d42-verify-job.png)

- If any errors are found, they will be displayed in this table and can only be fixed by using the Carbonite Replication console or performing system administrative tasks required to fix a particular failed verification step. In this case you will not be able to save this job until the issues are resolved. If resolved, you should click the _Verify Job_ button again to have the job be verified.
- You can now click any of the Save buttons on the bottom control row to save this job in D42 and have it created on the target server you selected. If you click the regular _Save_ button, you will be taken to the Migration Jobs list page.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view.png)

## Controlling Created Migration Jobs

- From the jobs list page, you’re now able to control the created job via the links next to each job’s name.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-2.png)

### Controlling a Single Job via the Links

- You can start, stop, pause and failover and refresh each job individually by clicking any one of the corresponding job commands. This mimics the functionality of the Carbonite Replication console. Here we click _Start_ to start the first job; after that it may take a few minutes to get the job started and have the Activity column update initially. If the connection between your D42 machine and the source/target servers is slow, you will have to click the _Refresh Status_ link to query the target server again to update the status of the job as we do below.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-3.png)

- You will need to click the _Refresh Status_ link to see if the initial mirroring has completed.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-4.png)

- Once the _Activity_ status changes to _Protecting_, the job will failover if any of the triggers set up in the Carbonite Replication console are triggered, or you initiate it manually by clicking the _Failover_ link.
- You can also pause the job by clicking the _Pause_ link to halt whatever is going on, and then resume the job at the point it left off by clicking the _Start_ button.
- You can stop the job by clicking the _Stop_ button to have the job stopped completely, and then clicking _Start_ to start it back up from the very beginning.
- If you click _Failover_, the failover migration process will begin transforming your target machine into source and the source machine will be shut down.
- Once this process has started, it cannot be undone, and when it completes, the source and target IPs on the Migration Jobs list page will become the same. At this point, no other actions can be performed on this job and you will get a message warning you of that if you try the action links. The only thing that can be done at this point if you’re satisfied with the migration is to delete it via the edit screen.

### Controlling Multiple Jobs via Actions

- You can control multiple jobs at once by selecting several jobs on the Migration Jobs list page and selecting one of the _Action_ drop-down commands.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-5.png)

- All the functionality described in the _Controlling a Single Job via the Links_ section above can be performed on multiple jobs.
- Here we select _Start the selected jobs_ action from the menu and click the lightning bolt button to the right to run this command. You are prompted to confirm this action. Click _Yes, I’m sure_ to continue.

![](/assets/images/WEB-585_Carbonite-15-D42-Select-Migration-Job-Action-Menu-Prompt.png)

– This confirmation prompt also applies to all other bulk actions except _Export selected items to CSV_.

- Some delay is possible at this point if if you are executing a bulk command on a large number of jobs as the execution occurs in a queue on your Carbonite Agent target server.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-6.png)

- You can now run the _Refresh the selected jobs_ action item to have the status of all your selected jobs updated.

![](/assets/images/WEB-585_Carbonite-17-D42-Select-Migration-Job-Action-2.png)

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-7-refresh.png)

– The status for both jobs has been updated.

- **Note**: If any job present in D42 has been deleted on your target server externally,  it will be automatically removed from D42 during a bulk refresh.

### Controlling a Single Job via the Action Menu

- Any single job can also be controlled via the view page’s _Action_ menu. Click on the job name you want to control in the jobs list.

![](/assets/images/WEB-585_Carbonite-19-D42-Select-Migration-Select-Job-Name.png)

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-8A-click-ellipse.png)

– Select the action you want to perform. Here we selected _Stop Job_.

- After selecting the action, go back to the Migrate Jobs list page and the status of the job should be updated. If there’s a delay between your D42 machine and your target server, click the _Refresh Status_ link to refresh the job status.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-9-stopped.png)

### Deleting Jobs

**Delete a Single Job**

- To delete a job, click on the name of the job in the list and click _Edit_ button at the top right.

![](/assets/images/WEB-734_Carbonite-d42-view-migration-job-editdelete.png)

- Now click _Delete_ at the bottom left of the Change Migration Job page. The job will be deleted from D42 and the target server running Carbonite Migrate.

![](/assets/images/WEB-734_Carbonite-d42-view-migration-job-delete-button.png)

**Deleting Multiple Jobs via the Action Menu**

- Check the jobs you would like to delete from the Migration Jobs list page and select _Delete with Detailed Confirmation_ from the _Action_ menu.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-10-2-selects.png)

- Click the lightning bolt button to the right to begin the process. Confirm your action on the next page. Your jobs will be deleted from D42 and the target server(s) running Carbonite Migration agent.

### Modifying Job Options

**Shutdown Source Server after Failover**

You can change the option of shutting down the source server after a failover. This is mostly used for troubleshooting or testing the failover feature. Note that if you disable this option, the source and target will have the same IP address assigned at the end of the failover and this might cause issues where you will have to shutdown the source server manually.

- Select the job you want to change this option on by clicking the job’s name on the Migration Jobs list page.

![](/assets/images/WEB-585_Carbonite-25-D42-Select-Migration-Click-Job-Name.png)

- On the following page, click _Edit_ at the top right of the page.

![](/assets/images/WEB-734_Carbonite-d42-view-migration-job-click-edit-button.png)

- On the next page, uncheck the _Shutdown source server after failover_ checkbox and click _Save_ at the bottom to have this option disabled on your Carbonite Agent target server.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-10-2-uncheckselect.png)

**Changing and Updating Credentials**

If you have changed the username or password of your target or source servers, you can update these in the existing job without having to recreate it.

- Begin by clicking the job name you want to edit on the job list page and click Edit button on the View Migration Job page that follows.

![](/assets/images/WEB-734_Carbonite-d42-view-migration-job-click-edit-button-2.png)

- In this example, we have added a new username _vagrant_ to the source and target machines, so we will select both the source and the target secrets to change. But you can also change just the source or the target secret.

![](/assets/images/WEB-585_Carbonite-30-D42-Change-Migration-Job.png)

- After the new secrets have been selected, just click _Save_ button at the bottom or _Save and continue editing_ to see if the changes have been accepted by the server and have been saved successfully. If there were issues while trying to update the credentials, the new settings will be canceled and the old secret will still show.

![](/assets/images/WEB-734_Carbonite-d42-view-migration-job-delete-button-1.png)

– The source and target secrets have been changed and saved to the Carbonite target server’s job and the D42 database.

- You can also verify that the credentials update operation has successfully completed by examining the job in the Carbonite Replication console’s Jobs tab and clicking the _View Recent Activity_ button in the job control row.

![](/assets/images/WEB-734_Carbonite-jobs.png)

- **Note**: If you only updated the password on the source or target, you would first need to create a new D42 secret with the new login credentials information or update your existing secret from D42’s _Resources > Secrets_ menu.

![](/assets/images/WEB-734_Secrets-menu.png)

- Once updated or added, you can perform the above procedure for the job(s) of your choice.

### Exporting Jobs to a CSV file

You can export the jobs displayed on the Migration Jobs list page via the _Export selected items to CSV_ Action menu item.

- Select the jobs you want exported to CSV from the list and select _Export selected items to CSV_ from the Action menu. Click the lightning bolt icon to begin the process.

![](/assets/images/WEB-734_Carbonite-d42-select-migration-job-to-view-12.png)

- You are prompted to save the csv file to a directory of your choice. The file will have a name **migration-job.csv**.
- Note that if you’re using Excel 2019+, the file needs to be imported and not simply opened. If you just open the file through Excel, you will have incorrect formatting of the data and some fields may be missing.
- The resulting file will look like the following.

![](/assets/images/WEB-734_Carbonite-d42-exported-cvs.png)
