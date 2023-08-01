// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Device42",
  tagline: "The Hitchhiker’s Guide to DEVICE42",
  favicon: 'https://www.device42.com/wp-content/uploads/2021/08/d42-favicon.png',
  url: 'https://docs.device42.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  trailingSlash: true,

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/getstarted/',
            from: ['/getstarted/']
          },
          {
            to: '/getstarted/getting-started-with-auto-discovery/',
            from: ['/getstarted/getting-started-with-auto-discovery/', '/getstarted/getting-started-with-a-blank-slate/']
          },
          {
            to: '/getstarted/getting-started-discovery-hub/',
            from: '/getstarted/getting-started-discovery-hub/',
          },
          {
            to: '/getstarted/importing-data-from-existing-spreadsheets/',
            from: '/getstarted/importing-data-from-existing-spreadsheets/',
          },
          {
            to: '/getstarted/advanced-search-feature/',
            from: '/getstarted/advanced-search-feature/',
          },
          {
            to: '/getstarted/arrange-and-save-list-page-column-layout/',
            from: '/getstarted/arrange-and-save-list-page-column-layout/',
          },
          {
            to: '/getstarted/basic-navigation-tips-for-adding-editing/',
            from: '/getstarted/basic-navigation-tips-for-adding-editing/',
          },
          {
            to: '/getstarted/home-page-widgets-and-global-search/',
            from: '/getstarted/home-page-widgets-and-global-search/',
          },
          {
            to: '/getstarted/language-selection/',
            from: '/getstarted/language-selection/',
          },
          {
            to: '/getstarted/installation/',
            from: '/getstarted/installation/',
          },
          {
            to: '/getstarted/installation/installation-amazon-web-services/',
            from: '/getstarted/installation/installation-amazon-web-services/',
          },
          {
            to: '/getstarted/installation/installation-citrix-xen-server/',
            from: '/getstarted/installation/installation-citrix-xen-server/',
          },
          {
            to: '/getstarted/installation/installing-the-d42-netflow-collector-as-a-service/',
            from: '/getstarted/installation/installing-the-d42-netflow-collector-as-a-service/',
          },
          {
            to: '/getstarted/installation/installation-microsoft-azure/',
            from: '/getstarted/installation/installation-microsoft-azure/',
          },
          {
            to: '/getstarted/installation/installation-microsoft-hyperv/',
            from: ['/getstarted/installation/installation-microsoft-hyperv/', '/getstarted/installation/installation-microsoft-hyper/']
          },
          {
            to: '/getstarted/installation/installation-virtual-box/',
            from: '/getstarted/installation/installation-virtual-box/',
          },
          {
            to: '/getstarted/installation/getting-started-on-a-mac/',
            from: '/getstarted/installation/getting-started-on-a-mac/',
          },
          {
            to: '/getstarted/installation/getting-started-on-a-pc/',
            from: '/getstarted/installation/getting-started-on-a-pc/',
          },
          {
            to: '/getstarted/installation/remote-collector-rc-installation/',
            from: '/getstarted/installation/remote-collector-rc-installation/',
          },
          {
            to: '/getstarted/installation/installation-vcenter-server/',
            from: '/getstarted/installation/installation-vcenter-server/',
          },
          {
            to: '/getstarted/installation/installation-vmware-player/',
            from: ['/getstarted/installation/installation-vmware-player/', '/getstarted/installation/installation-vmware-player-workstation-2/']
          },
          {
            to: '/getstarted/installation/windows-discovery-service-installation/',
            from: '/getstarted/installation/windows-discovery-service-installation/',
          },
          {
            to: '/getstarted/installation/installation-xen-or-kvm-using-virt-manager/',
            from: ['/getstarted/installation/installation-xen-or-kvm-using-virt-manager/', '/getstarted/installation/installation-xen-kvm-virt-manager/']
          },
          {
            to: '/getstarted/installation/how-do-i-install-device42-xenkvm-appliance-if-import-existing-disk-image-option-is-missing/',
            from: '/getstarted/installation/how-do-i-install-device42-xenkvm-appliance-if-import-existing-disk-image-option-is-missing/',
          },
          {
            to: '/getstarted/tutorials/device42-tutorial/',
            from: ['/getstarted/tutorials/device42-tutorial/', '/getstarted/tutorials/tutorials-overview/']
          },
          {
            to: '/getstarted/tutorials/tutorial-loading-data-using-spreadsheets/',
            from: ['/getstarted/tutorials/tutorial-loading-data-using-spreadsheets/']
          },
          {
            to: '/getstarted/tutorials/tutorial-loading-data-using-the-api/',
            from: ['/getstarted/tutorials/tutorial-loading-data-using-the-api/']
          },
          {
            to: '/getstarted/tutorials/tutorial-navigating-the-device42-user-interface/',
            from: ['/getstarted/tutorials/tutorial-navigating-the-device42-user-interface/']
          },
          {
            to: '/auto-discovery/cisco-ucs-auto-discovery/',
            from: '/auto-discovery/cisco-ucs-auto-discovery/',
          },
          {
            to: '/auto-discovery/active-directory-sync/',
            from: '/auto-discovery/active-directory-sync/',
          },
          {
            to: '/auto-discovery/agent-based-discovery/',
            from: '/auto-discovery/agent-based-discovery/',
          },
          {
            to: '/auto-discovery/agent-based-offline-discovery/',
            from: '/auto-discovery/agent-based-offline-discovery/',
          },
          {
            to: '/auto-discovery/autodisc-best-practices/',
            from: '/auto-discovery/autodisc-best-practices/',
          },
          {
            to: '/auto-discovery/auto-discovery-system-requirements/',
            from: '/auto-discovery/auto-discovery-system-requirements/',
          },
          {
            to: '/auto-discovery/blade-systems-auto-discovery/',
            from: ['/auto-discovery/blade-systems-auto-discovery/', '/auto-discovery/hp-bladesystem-auto-discovery/']
          },
          {
            to: '/auto-discovery/certificate-auto-discovery/',
            from: '/auto-discovery/certificate-auto-discovery/',
          },
          {
            to: '/auto-discovery/setup-dns-autodiscovery/',
            from: ['/auto-discovery/setup-dns-autodiscovery/', '/tools/setup-dns-autodiscovery/']
          },
          {
            to: '/auto-discovery/ibm-i-as400/',
            from: '/auto-discovery/ibm-i-as400/',
          },
          {
            to: '/auto-discovery/z-os-ibm-mainframe/',
            from: '/auto-discovery/z-os-ibm-mainframe/',
          },
          {
            to: '/auto-discovery/ipmi-auto-discovery/',
            from: '/auto-discovery/ipmi-auto-discovery/',
          },
          {
            to: '/auto-discovery/linux-unix-server-auto-discovery/',
            from: ['/auto-discovery/linux-unix-server-auto-discovery/', '/linux-unix-server-auto-discovery/']
          },
          {
            to: '/auto-discovery/linux-based-autodiscovery-software/',
            from: '/auto-discovery/linux-based-autodiscovery-software/',
          },
          {
            to: '/auto-discovery/load-balancers/',
            from: ['/auto-discovery/load-balancers/', '/load-balancers/']
          },
          {
            to: '/auto-discovery/netflow-collector/',
            from: '/auto-discovery/netflow-collector/',
          },
          {
            to: '/auto-discovery/nmap-autodiscovery/',
            from: '/auto-discovery/nmap-autodiscovery/',
          },
          {
            to: '/auto-discovery/operating-systems-supported-in-auto-discovery/',
            from: '/auto-discovery/operating-systems-supported-in-auto-discovery/',
          },
          {
            to: '/auto-discovery/packet-capture/',
            from: '/auto-discovery/packet-capture/',
          },
          {
            to: '/auto-discovery/d42-ping-sweep/',
            from: ['/auto-discovery/d42-ping-sweep/', '/auto-discovery-client/d42-ping-sweep/']
          },
          {
            to: '/auto-discovery/remote-collector-rc/',
            from: ['/auto-discovery/remote-collector-rc/', '/auto-discovery/remote-collector/']
          },
          {
            to: '/auto-discovery/resource-utilization-overview/',
            from: '/auto-discovery/resource-utilization-overview/',
          },
          {
            to: '/auto-discovery/sccm-discovery-net-tool/',
            from: '/auto-discovery/sccm-discovery-net-tool/',
          },
          {
            to: '/auto-discovery/network-auto-discovery/',
            from: ['/auto-discovery/network-auto-discovery/', '/auto-discovery/setup-network-auto-discovery/']
          },
          {
            to: '/auto-discovery/hypervisors-and-containers-supported-in-auto-discovery/',
            from: '/auto-discovery/hypervisors-and-containers-supported-in-auto-discovery/',
          },
          {
            to: '/auto-discovery/tcp-port-scan-auto-discovery/',
            from: '/auto-discovery/tcp-port-scan-auto-discovery/',
          },
          {
            to: '/auto-discovery/load-balancer-f5-autodiscovery/',
            from: '/auto-discovery/load-balancer-f5-autodiscovery/',
          },
          {
            to: '/auto-discovery/unprocessed-device-records/',
            from: '/auto-discovery/unprocessed-device-records/',
          },
          {
            to: '/auto-discovery/using-apis-for-custom-auto-discovery/',
            from: '/auto-discovery/using-apis-for-custom-auto-discovery/',
          },
          {
            to: '/auto-discovery/vendors-supported-in-snmp-auto-discovery/',
            from: '/auto-discovery/vendors-supported-in-snmp-auto-discovery/',
          },
          {
            to: '/auto-discovery/virtual-machine-auto-discovery/',
            from: ['/auto-discovery/virtual-machine-auto-discovery/', '/auto-discovery/vmware-auto-discovery/']
          },
          {
            to: '/auto-discovery/warranty-autodiscovery/',
            from: '/auto-discovery/warranty-autodiscovery/',
          },
          {
            to: '/auto-discovery/windows-and-hyper-v-auto-discovery/',
            from: ['/auto-discovery/windows-and-hyper-v-auto-discovery/', '/auto-discovery/windows-auto-discovery-tool/']
          },
          {
            to: '/auto-discovery/cloud_platforms_autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/',
          },
          {
            to: '/auto-discovery/cloud_platforms_autodiscovery/aws-autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/aws-autodiscovery/',
          },
          {
            to: '/auto-discovery/cloud_platforms_autodiscovery/azure-autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/azure-autodiscovery/',
          },
          {
            to: '/auto-discovery/cloud_platforms_autodiscovery/google-cloud-platform-autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/google-cloud-platform-autodiscovery/',
          },
          {
            to: '/auto-discovery/cloud_platforms_autodiscovery/intune-autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/intune-autodiscovery/',
          },
          {
            to: '/auto-discovery/cloud_platforms_autodiscovery/kubernetes-autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/kubernetes-autodiscovery/',
          },
          {
            to: '/auto-discovery/cloud_platforms_autodiscovery/other-cloud-autodiscoveries/',
            from: '/auto-discovery/cloud-auto-discovery/other-cloud-autodiscoveries/',
          },
          {
            to: '/auto-discovery/database-discovery/cloud-databases/',
            from: '/databases/cloud-databases/',
          },
          {
            to: '/auto-discovery/database-discovery/on-premise-databases/',
            from: '/databases/on-premise-databases/',
          },
          {
            to: '/auto-discovery/storage_arrays_autodiscovery/',
            from: '/auto-discovery/storage-arrays-autodiscovery/',
          },
          {
            to: '/auto-discovery/storage_arrays_autodiscovery/dell-emc-autodiscovery/',
            from: ['/auto-discovery/dell-emc-autodiscovery/', '/auto-discovery/storage-arrays-autodiscovery/dell-emc-autodiscovery/']
          },
          {
            to: '/auto-discovery/storage_arrays_autodiscovery/hp-autodiscovery/',
            from: ['/auto-discovery/hp-autodiscovery/','/auto-discovery/storage-arrays-autodiscovery/hp-autodiscovery/']
          },
          {
            to: '/auto-discovery/storage_arrays_autodiscovery/ibm-autodiscovery/',
            from: ['/auto-discovery/ibm-autodiscovery/', '/auto-discovery/storage-arrays-autodiscovery/ibm-autodiscovery/']
          },
          {
            to: '/auto-discovery/storage_arrays_autodiscovery/all-other-storage-autodiscovery/',
            from: ['/auto-discovery/all-other-storage-autodiscovery/', '/auto-discovery/storage-arrays-autodiscovery/all-other-storage-autodiscovery/']
          },
          {
            to: '/auto-discovery/storage_arrays_autodiscovery/snmp-san-server-auto-discovery/',
            from: '/auto-discovery/snmp-san-server-auto-discovery/',
          },
          {
            to: '/auto-discovery/storage_arrays_autodiscovery/storage-arrays/',
            from: '/auto-discovery/storage-arrays/',
          },
          {
            to: '/auto-discovery/resources/cloud-resources/',
            from: '/managed-resources/cloud-resources/',
          },
          {
            to: '/apps/',
            from: '/apps/',
          },
          {
            to: '/apps/enterprise-application-dependency-mapping/adm-supported-applications/',
            from: '/enterprise-application-dependency-mapping/adm-supported-applications/',
          },
          {
            to: '/apps/enterprise-application-dependency-mapping/cloud-application-dependency-mapping/',
            from: '/enterprise-application-dependency-mapping/cloud-application-dependency-mapping/',
          },
          {
            to: '/apps/enterprise-application-dependency-mapping/configure-application-dependency-mapping/',
            from: '/enterprise-application-dependency-mapping/configure-application-dependency-mapping/',
          },
          {
            to: '/apps/services/',
            from: '/apps/services/',
          },
          {
            to: '/apps/services/service-instances/',
            from: '/apps/services/service-instances/',
          },
          {
            to: '/apps/services/scheduled-tasks/',
            from: '/apps/services/scheduled-tasks/',
          },
          {
            to: '/apps/services/service-listener-ports/',
            from: '/apps/services/service-listener-ports/',
          },
          {
            to: '/apps/services/service-communications/',
            from: '/apps/services/service-communications/',
          },
          {
            to: '/apps/services/ignored-services/',
            from: '/apps/services/ignored-services/',
          },
          {
            to: '/apps/services/network-shares/',
            from: '/apps/services/network-shares/',
          },
          {
            to: '/apps/application_components/application-component-templates/',
            from: ['/apps/application-components/application-component-templates/', '/software/application-components/', '/apps/application-components/']
          },
          {
            to: '/apps/affinity_groups/',
            from: '/apps/affinity-groups/',
          },
          {
            to: '/apps/affinity_groups/appfocus-filters/',
            from: '/apps/affinity-groups/appfocus-filters/',
          },
          {
            to: '/apps/business-applications/building-business-applications-in-device42/',
            from: ['/apps/business-applications/building-business-applications-in-device42/', '/apps/business-applications/' ]
          },
          {
            to: '/administration/active-directory-and-openldap-support/',
            from: '/tools/active-directory-and-openldap-support/',
          },
          {
            to: '/administration/advanced-routing/',
            from: ['/tools/advanced-routing/', '/console-menu/advanced-routing/']
          },
          {
            to: '/administration/add-an-active-directory-user-as-a-device42-administrator/',
            from: '/tools/add-an-active-directory-user-as-a-device42-administrator/',
          },
          {
            to: '/administration/auto-clean-feature/',
            from: '/tools/auto-clean-feature/',
          },
          {
            to: '/administration/bulk-add-active-directory-group-members-as-device42-users/',
            from: '/tools/bulk-add-active-directory-group-members-as-device42-users/',
          },
          {
            to: '/administration/custom-column-views/',
            from: '/tools/custom-column-views/',
          },
          {
            to: '/administration/custom-key-value-pairs-explained/',
            from: '/tools/custom-key-value-pairs-explained/',
          },
          {
            to: '/administration/customizing-device42/',
            from: '/tools/customizing-device42/',
          },
          {
            to: '/administration/data-reset-tool/',
            from: '/tools/data-reset-tool/',
          },
          {
            to: '/administration/generating-csrs/',
            from: '/tools/generating-csrs/',
          },
          {
            to: '/administration/licensing/',
            from: '/tools/licensing/',
          },
          {
            to: '/administration/saml-2-0-configuration/',
            from: '/tools/saml-2-0-configuration/',
          },
          {
            to: '/administration/setting-time-zone-and-ntp/',
            from: '/tools/setting-time-zone-and-ntp/',
          },
          {
            to: '/administration/tags/',
            from: '/tools/tags/',
          },
          {
            to: '/administration/tools-of-the-trade/',
            from: '/tools/tools-of-the-trade/',
          },
          {
            to: '/administration/transferring-devices-assets-and-parts-to-other-data-centers/',
            from: '/tools/transferring-devices-assets-and-parts-to-other-data-centers/',
          },
          {
            to: '/administration/appliance_manager/adding-multiple-network-interface-cardsnic-to-device42-vm/',
            from: '/device42-appliance-manager/adding-multiple-network-interface-cardsnic-to-device42-vm/',
          },
          {
            to: '/administration/appliance_manager/api-limits/',
            from: '/device42-appliance-manager/api-limits/',
          },
          {
            to: '/administration/appliance_manager/changing-device42-appliance-hostname/',
            from: '/device42-appliance-manager/changing-device42-appliance-hostname/',
          },
          {
            to: '/administration/appliance_manager/collecting-snmpwalk-output-for-troubleshooting/',
            from: '/device42-appliance-manager/collecting-snmpwalk-output-for-troubleshooting/',
          },
          {
            to: '/administration/appliance_manager/delete-history-logs/',
            from: '/device42-appliance-manager/delete-history-logs/',
          },
          {
            to: '/administration/appliance_manager/device42-appliance-manager-login/',
            from: '/device42-appliance-manager/device42-appliance-manager-login/',
          },
          {
            to: '/administration/appliance_manager/device42-restore/',
            from: '/device42-appliance-manager/device42-restore/',
          },
          {
            to: '/administration/appliance_manager/enable-or-disable-tls-versions-from-appliance-manager/',
            from: '/device42-appliance-manager/enable-or-disable-tls-versions-from-appliance-manager/',
          },
          {
            to: '/administration/appliance_manager/enabling-ssl-in-appliance-manager/',
            from: '/device42-appliance-manager/enabling-ssl-in-appliance-manager/',
          },
          {
            to: '/administration/appliance_manager/generate-log-bundle/',
            from: '/device42-appliance-manager/generate-log-bundle/',
          },
          {
            to: '/administration/appliance_manager/generating-ipmi-output-for-troubleshooting/',
            from: '/device42-appliance-manager/generating-ipmi-output-for-troubleshooting/',
          },
          {
            to: '/administration/appliance_manager/global-and-password-manager-session-timeout/',
            from: '/device42-appliance-manager/global-and-password-manager-session-timeout/',
          },
          {
            to: '/administration/appliance_manager/installing-vmware-or-xenserver-tools/',
            from: '/device42-appliance-manager/installing-vmware-or-xenserver-tools/',
          },
          {
            to: '/administration/appliance_manager/pendo-guided-tours-and-usage-information-collection/',
            from: '/device42-appliance-manager/pendo-guided-tours-and-usage-information-collection/',
          },
          {
            to: '/administration/appliance_manager/securing-the-vm-console-with-password/',
            from: '/device42-appliance-manager/securing-the-vm-console-with-password/',
          },
          {
            to: '/administration/appliance_manager/set-fqdn-for-web-access/',
            from: '/device42-appliance-manager/set-fqdn-for-web-access/',
          },
          {
            to: '/administration/appliance_manager/set-up-https-cert/',
            from: '/device42-appliance-manager/set-up-https-cert/',
          },
          {
            to: '/administration/appliance_manager/setting-up-backup-device42-appliance-manager/',
            from: '/device42-appliance-manager/setting-up-backup-device42-appliance-manager/',
          },
          {
            to: '/administration/appliance_manager/warm-ha-setup-failover-and-automated-backups/',
            from: ['/device42-appliance-manager/warm-ha-setup-failover-and-automated-backups/', '/device42-appliance-manager/warm-ha-and-automated-backups/']
          },
          {
            to: '/administration/passwords/burnt-secret-password-storage/',
            from: '/password-management/burnt-secret-password-storage/',
          },
          {
            to: '/administration/passwords/password-security-and-permissions/',
            from: '/password-management/password-security-and-permissions/',
          },
          {
            to: '/administration/passwords/set-default-password-management-group/',
            from: '/password-management/set-default-password-management-group/',
          },
          {
            to: '/administration/passwords/password-operations/',
            from: '/password-management/password-operations/',
          },
          {
            to: '/administration/passwords/password-policy/',
            from: '/password-management/password-policy/',
          },
          {
            to: '/administration/passwords/password-reporting/',
            from: '/password-management/password-reporting/',
          },
          {
            to: '/administration/role-based-access-control/role-based-permissions-and-access/',
            from: ['/role-based-access-control/role-based-permissions-and-access/', '/multitenancy-overview/', '/role-based-access-control/']
          },
          {
            to: '/integration/imports/spreadsheet-imports-and-exports/',
            from: '/imports/spreadsheet-imports-and-exports/',
          },
          {
            to: '/integration/imports/using-the-re-importable-export-feature/',
            from: '/imports/using-the-re-importable-export-feature/',
          },
          {
            to: '/integration/imports/spreadsheet-converter-tool/',
            from: '/imports/spreadsheet-converter-tool/',
          },
          {
            to: '/integration/imports/legacy-imports/',
            from: '/imports/legacy-imports/',
          },
          {
            to: '/integration/imports/legacy-imports/import-ip-sheet/',
            from: '/imports/import-ip-sheet/',
          },
          {
            to: '/integration/imports/legacy-imports/import-overview/',
            from: '/imports/import-overview/',
          },
          {
            to: '/integration/imports/legacy-imports/import-racked-devices/',
            from: '/imports/import-racked-devices/',
          },
          {
            to: '/integration/api-overview/auto-populate-windows-machines-in-an-ad-using-apis/',
            from: '/api-overview/auto-populate-windows-machines-in-an-ad-using-apis/',
          },
          {
            to: '/integration/api-overview/device42-api-documentation/',
            from: '/api-overview/device42-api-documentation/',
          },
          {
            to: '/integration/api-overview/importing-csv-files-into-d42-using-the-api-helper-utility/',
            from: ['/api-overview/importing-csv-files-into-d42-using-the-api-helper-utility/', '/apis/importing-csv-files-into-d42-using-the-api-helper-utility/']
          },
          {
            to: '/integration/api-overview/limit-api-get-calls/',
            from: '/api-overview/limit-api-get-calls/',
          },
          {
            to: '/integration/external-integrations/aperture-vista-to-device42-migration/',
            from: '/external-integrations/aperture-vista-to-device42-migration/',
          },
          {
            to: '/integration/external-integrations/azure-migrate/',
            from: '/external-integrations/azure-migrate/',
          },
          {
            to: '/integration/external-integrations/carbonite-migration/',
            from: '/external-integrations/carbonite-migration/',
          },
          {
            to: '/integration/external-integrations/cherwell-integration/',
            from: '/external-integrations/cherwell-integration/',
          },
          {
            to: '/integration/external-integrations/device42-cloud-connector-overview/',
            from: ['/external-integrations/device42-cloud-connector-overview/', '/external-integrations/device42-cloud-connector/']
          },
          {
            to: '/integration/external-integrations/cloud-services-settings/',
            from: '/external-integrations/cloud-services-settings/',
          },
          {
            to: '/integration/external-integrations/device42-confluence-connector/',
            from: '/external-integrations/device42-confluence-connector/',
          },
          {
            to: '/integration/external-integrations/cyberark-integration/',
            from: '/external-integrations/cyberark-integration/',
          },
          {
            to: '/integration/external-integrations/external-logging-config/',
            from: ['/external-integrations/external-logging-config/', '/external-integrations/external-logging/', '/external-integrations/external-logging-in-device42/']
          },
          {
            to: '/integration/external-integrations/configuring-splunk/',
            from: '/external-integrations/configuring-splunk/',
          },
          {
            to: '/integration/external-integrations/foreman-smart-proxy-plugin/',
            from: '/external-integrations/foreman-smart-proxy-plugin/',
          },
          {
            to: '/integration/external-integrations/freshservice-integration/',
            from: '/external-integrations/freshservice-integration/',
          },
          {
            to: '/integration/external-integrations/device42-hp-service-manager-integration/',
            from: '/external-integrations/device42-hp-service-manager-integration/',
          },
          {
            to: '/integration/external-integrations/jenkins-integration/',
            from: '/external-integrations/jenkins-integration/',
          },
          {
            to: '/integration/external-integrations/device42-jira-integration/',
            from: '/external-integrations/device42-jira-integration/',
          },
          {
            to: '/integration/external-integrations/device42-jira-cloud-integration/',
            from: '/external-integrations/device42-jira-cloud-integration/',
          },
          {
            to: '/integration/external-integrations/microsoft-laps-integration/',
            from: '/external-integrations/microsoft-laps-integration/',
          },
          {
            to: '/integration/external-integrations/monitor-device42-health-status-in-nagios/',
            from: '/external-integrations/monitor-device42-health-status-in-nagios/',
          },
          {
            to: '/integration/external-integrations/odbc-driver-integration/',
            from: '/external-integrations/odbc-driver-integration/',
          },
          {
            to: '/integration/external-integrations/jdbc-driver-integration/',
            from: '/external-integrations/jdbc-driver-integration/',
          },
          {
            to: '/integration/external-integrations/opsgenie-integration/',
            from: '/external-integrations/opsgenie-integration/',
          },
          {
            to: '/integration/external-integrations/pagerduty-integration/',
            from: '/external-integrations/pagerduty-integration/',
          },
          {
            to: '/integration/external-integrations/powerbi-integration/',
            from: '/external-integrations/powerbi-integration/',
          },
          {
            to: '/integration/external-integrations/puppet-and-chef-integrations/',
            from: '/external-integrations/puppet-and-chef-integrations/',
          },
          {
            to: '/integration/external-integrations/collect-node-data-from-device42-for-rundeck/',
            from: '/external-integrations/collect-node-data-from-device42-for-rundeck/',
          },
          {
            to: '/integration/external-integrations/device42-saltstack-integration/',
            from: '/external-integrations/device42-saltstack-integration/',
          },
          {
            to: '/integration/external-integrations/device42-servicenow-connector/',
            from: '/external-integrations/device42-servicenow-connector/',
          },
          {
            to: '/integration/external-integrations/webhooks-generic-integration/',
            from: '/external-integrations/webhooks-generic-integration/',
          },
          {
            to: '/integration/external-integrations/device42-zendesk-connector/',
            from: '/external-integrations/device42-zendesk-connector/',
          },
          {
            to: '/reports/',
            from: '/reports/',
          },
          {
            to: '/reports/reports/insights-plus/',
            from: '/insights-plus/',
          },
          {
            to: '/reports/reports/advanced-reporting/',
            from: '/reports/advanced-reporting/',
          },
          {
            to: '/reports/reports/aws-migration-evaluator/',
            from: '/reports/aws-migration-evaluator/',
          },
          {
            to: '/reports/reports/aws-migration-hub/',
            from: '/reports/aws-migration-hub/',
          },
          {
            to: '/reports/reports/cloud-endure-device42/',
            from: '/reports/cloud-endure-device42/',
          },
          {
            to: '/reports/reports/cloud-recommendation-engine/',
            from: '/reports/cloud-recommendation-engine/',
          },
          {
            to: '/reports/reports/creating-reports/',
            from: '/reports/creating-reports/',
          },
          {
            to: '/reports/reports/discovery-quality-scores/',
            from: '/reports/discovery-quality-scores/',
          },
          {
            to: '/reports/reports/export-records/',
            from: '/reports/export-records/',
          },
          {
            to: '/reports/reports/jobs-dashboard/',
            from: '/reports/jobs-dashboard/',
          },
          {
            to: '/reports/reports/object-history-aka-audit-log/',
            from: '/reports/object-history-aka-audit-log/',
          },
          {
            to: '/reports/reports/periodic-jobs-page/',
            from: '/reports/periodic-jobs-page/',
          },
          {
            to: '/reports/reports/relutech-for-aws-migration/',
            from: '/reports/relutech-for-aws-migration/',
          },
          {
            to: '/reports/reports/run-book/',
            from: '/reports/run-book/',
          },
          {
            to: '/reports/reports/save-and-schedule-reports/',
            from: '/reports/save-and-schedule-reports/',
          },
          {
            to: '/reports/reports/setup-alerts-and-notifications/',
            from: '/reports/setup-alerts-and-notifications/',
          },
          {
            to: '/reports/device42-doql/',
            from: '/device42-doql/',
          },
          {
            to: '/reports/device42-doql/db-viewer-schema/',
            from: '/device42-doql/db-viewer-schema/',
          },
          {
            to: '/reports/dbb-cookbook/app-dependency-mapping/',
            from: '/dbb-cookbook/app-dependency-mapping/',
          },
          {
            to: '/reports/dbb-cookbook/business-app-dependencies/',
            from: '/dbb-cookbook/app-dependency-mapping/business-app-dependencies/',
          },
          {
            to: '/reports/dbb-cookbook/business-app-device-impacts/',
            from: '/dbb-cookbook/app-dependency-mapping/business-app-device-impacts/',
          },
          {
            to: '/reports/dbb-cookbook/business-app-hardware-eol-eos-impact/',
            from: '/dbb-cookbook/app-dependency-mapping/business-app-hardware-eol-eos-impact/',
          },
          {
            to: '/reports/dbb-cookbook/business-app-operating-system-eol-eos/',
            from: '/dbb-cookbook/app-dependency-mapping/business-app-operating-system-eol-eos/',
          },
          {
            to: '/reports/dbb-cookbook/workload-and-application-communication-business-app-communications/',
            from: '/dbb-cookbook/app-dependency-mapping/workload-and-application-communication-business-app-communications/',
          },
          {
            to: '/reports/dbb-cookbook/workload-and-application-communication-ip-service-communications/',
            from: '/dbb-cookbook/app-dependency-mapping/workload-and-application-communication-ip-service-communications/',
          },
          {
            to: '/reports/dbb-cookbook/compute/',
            from: '/dbb-cookbook/compute/',
          },
          {
            to: '/reports/dbb-cookbook/compute-devices/',
            from: '/dbb-cookbook/compute/compute-devices/',
          },
          {
            to: '/reports/dbb-cookbook/device-count-by-device-type/',
            from: '/dbb-cookbook/compute/device-count-by-device-type/',
          },
          {
            to: '/reports/dbb-cookbook/device-count-by-service-level/',
            from: '/dbb-cookbook/compute/device-count-by-service-level/',
          },
          {
            to: '/reports/dbb-cookbook/device-to-rack-inventory/',
            from: '/dbb-cookbook/compute/device-to-rack-inventory/',
          },
          {
            to: '/reports/dbb-cookbook/devices-missing-device_type-or-service_level/',
            from: '/dbb-cookbook/compute/devices-missing-device_type-or-service_level/',
          },
          {
            to: '/reports/dbb-cookbook/physical-device-inventory/',
            from: '/dbb-cookbook/compute/physical-device-inventory/',
          },
          {
            to: '/reports/dbb-cookbook/physical-devices-by-customer-department/',
            from: '/dbb-cookbook/compute/physical-devices-by-customer-department/',
          },
          {
            to: '/reports/dbb-cookbook/physical-devices-without-hardware-model/',
            from: '/dbb-cookbook/compute/physical-devices-without-hardware-model/',
          },
          {
            to: '/reports/dbb-cookbook/physical-inventory-by-manufacturer/',
            from: '/dbb-cookbook/compute/physical-inventory-by-manufacturer/',
          },
          {
            to: '/reports/dbb-cookbook/vm-density/',
            from: '/dbb-cookbook/compute/vm-density/',
          },
          {
            to: '/reports/dbb-cookbook/vm-devices/',
            from: '/dbb-cookbook/compute/vm-devices/',
          },
          {
            to: '/reports/dbb-cookbook/vm-inventory/',
            from: '/dbb-cookbook/compute/vm-inventory/',
          },
          {
            to: '/reports/dbb-cookbook/security/',
            from: '/dbb-cookbook/security/',
          },
          {
            to: '/reports/dbb-cookbook/devices-accessed-by-external-ips/',
            from: '/dbb-cookbook/security/devices-accessed-by-external-ips/',
          },
          {
            to: '/reports/dbb-cookbook/devices-possibly-containing-pii-that-have-public-ips/',
            from: '/dbb-cookbook/security/devices-possibly-containing-pii-that-have-public-ips/',
          },
          {
            to: '/reports/dbb-cookbook/devices-using-commonly-exploited-ports/',
            from: '/dbb-cookbook/security/devices-using-commonly-exploited-ports/',
          },
          {
            to: '/reports/dbb-cookbook/devices-with-mismatch-between-prod-and-non-prod-environments/',
            from: '/dbb-cookbook/security/devices-with-mismatch-between-prod-and-non-prod-environments/',
          },
          {
            to: '/reports/dbb-cookbook/devices-with-no-oss/',
            from: '/dbb-cookbook/security/devices-with-no-oss/',
          },
          {
            to: '/reports/dbb-cookbook/devices-with-os-but-no-software/',
            from: '/dbb-cookbook/security/devices-with-os-but-no-software/',
          },
          {
            to: '/reports/dbb-cookbook/devices-with-prohibited-software-as-designated-by-customer/',
            from: '/dbb-cookbook/security/devices-with-prohibited-software-as-designated-by-customer/',
          },
          {
            to: '/reports/dbb-cookbook/network-information-for-ips-without-attached-devices/',
            from: '/dbb-cookbook/security/network-information-for-ips-without-attached-devices/',
          },
          {
            to: '/infrastructure-management/devices/device-add-edit/',
            from: '/devices/device-add-edit/',
          },
          {
            to: '/infrastructure-management/devices/clone-a-device/',
            from: '/devices/clone-a-device/',
          },
          {
            to: '/infrastructure-management/devices/device-blade-chassis/',
            from: '/devices/device-blade-chassis/',
          },
          {
            to: '/infrastructure-management/devices/device-blade-slots/',
            from: ['/devices/device-blade-slots/', '/device/device-blade-slots/']
          },
          {
            to: '/infrastructure-management/devices/device-cluster/',
            from: '/devices/device-cluster/',
          },
          {
            to: '/infrastructure-management/devices/device-lifecycle-tab/',
            from: '/devices/device-lifecycle-tab/',
          },
          {
            to: '/infrastructure-management/devices/device-other-tab/',
            from: '/devices/device-other-tab/',
          },
          {
            to: '/infrastructure-management/devices/device-parts-slots/',
            from: ['/devices/device-parts-slots/', '/device/device-parts-slots/']
          },
          {
            to: '/infrastructure-management/devices/device-parts-tab/',
            from: '/devices/device-parts-tab/',
          },
          {
            to: '/infrastructure-management/devices/device-properties-tab/',
            from: '/devices/device-properties-tab/',
          },
          {
            to: '/infrastructure-management/devices/device-services-tab/',
            from: '/devices/device-services-tab/',
          },
          {
            to: '/infrastructure-management/devices/device-software-tab/',
            from: '/devices/device-software-tab/',
          },
          {
            to: '/infrastructure-management/devices/device-virtual-blade/',
            from: '/devices/device-virtual-blade/',
          },
          {
            to: '/infrastructure-management/devices/device-name-profiles/',
            from: '/devices/device-name-profiles/',
          },
          {
            to: '/infrastructure-management/devices/device-custom-fields/',
            from: '/devices/device-custom-fields/',
          },
          {
            to: '/infrastructure-management/devices/device-ignore-rules/',
            from: '/devices/device-ignore-rules/',
          },
          {
            to: '/infrastructure-management/devices/device-list-view-2/',
            from: '/devices/device-list-view-2/',
          },
          {
            to: '/infrastructure-management/devices/what-if-scenarios/',
            from: '/devices/what-if-scenarios/',
          },
          {
            to: '/infrastructure-management/devices/hardware-models-templates/',
            from: ['/devices/hardware-models-templates/', '/device/hardware/']
          },
          {
            to: '/infrastructure-management/software/software-license-management/',
            from: '/apps/software/software-license-management/',
          },
          {
            to: '/infrastructure-management/software/software-licensing-alerts-and-notifications/',
            from: '/apps/software/software-licensing-alerts-and-notifications/',
          },
          {
            to: '/infrastructure-management/software/software-components/',
            from: '/apps/software/software-components/',
          },
          {
            to: '/infrastructure-management/software/merge-and-assign-software-components/',
            from: '/apps/software/merge-and-assign-software-components/',
          },
          {
            to: '/infrastructure-management/software/software-in-use/',
            from: '/apps/software/software-in-use/',
          },
          {
            to: '/infrastructure-management/software/software-eol-eos/',
            from: '/apps/software/software-eol-eos/',
          },
          {
            to: '/infrastructure-management/operating-systems/',
            from: '/apps/operating-systems/',
          },
          {
            to: '/infrastructure-management/certificate-management/',
            from: '/apps/certificate-management/',
          },
          {
            to: '/infrastructure-management/buildings-rooms-and-racks/auditing-racks/',
            from: '/buildings-rooms-and-racks/auditing-racks/',
          },
          {
            to: '/infrastructure-management/buildings-rooms-and-racks/buildings-and-rooms/',
            from: '/buildings-rooms-and-racks/buildings-and-rooms/',
          },
          {
            to: '/infrastructure-management/buildings-rooms-and-racks/impact-charts/',
            from: '/buildings-rooms-and-racks/impact-charts/',
          },
          {
            to: '/infrastructure-management/buildings-rooms-and-racks/racks/',
            from: '/buildings-rooms-and-racks/racks/',
          },
          {
            to: '/infrastructure-management/connectivity/cables/',
            from: '/connectivity/cables/',
          },
          {
            to: '/infrastructure-management/connectivity/circuits/',
            from: '/connectivity/circuits/',
          },
          {
            to: '/infrastructure-management/connectivity/creating-wall-jacks/',
            from: '/connectivity/creating-wall-jacks/',
          },
          {
            to: '/infrastructure-management/connectivity/patch-panel-cable-management-definitions-and-legends-2/',
            from: ['/connectivity/patch-panels/patch-panel-cable-management-definitions-and-legends-2/', '/connectivity/patch-panels/']
          },
          {
            to: '/infrastructure-management/power_units/adding-atss/',
            from: '/power-units/adding-atss/',
          },
          {
            to: '/infrastructure-management/power_units/adding-pdus/',
            from: '/power-units/pdus/adding-pdus/',
          },
          {
            to: '/infrastructure-management/power_units/defining-pdu-models/',
            from: ['/power-units/pdus/defining-pdu-models/', '/pdu_overview/defining-pdu-models/']
          },
          {
            to: '/infrastructure-management/power_units/pdu-ports/',
            from: ['/power-units/pdus/pdu-ports/', '/pdu/']
          },
          {
            to: '/infrastructure-management/power_units/pdu-rack-display/',
            from: ['/power-units/pdus/pdu-rack-display/', '/pdu_overview/pdu-rack-display/']
          },
          {
            to: '/infrastructure-management/power_units/supported-pdu-vendors/',
            from: '/power-units/supported-pdu-vendors/',
          },
          {
            to: '/infrastructure-management/parts_and_parts_slots/importing-part-models/',
            from: ['/parts-and-parts-slots/importing-part-models/', '/spare-parts-management/importing-part-models/']
          },
          {
            to: '/infrastructure-management/parts_and_parts_slots/importing-parts/',
            from: '/parts-and-parts-slots/importing-parts/',
          },
          {
            to: '/infrastructure-management/parts_and_parts_slots/managing-spare-parts/',
            from: '/parts-and-parts-slots/managing-spare-parts/',
          },
          {
            to: '/infrastructure-management/parts_and_parts_slots/part-model-templates/',
            from: ['/parts-and-parts-slots/part-model-templates/', '/spare-parts-management/models-and-parts/']
          },
          {
            to: '/infrastructure-management/parts_and_parts_slots/parts-slots/',
            from: '/parts-and-parts-slots/parts-slots/',
          },
          {
            to: '/infrastructure-management/power_and_environmental_monitoring/environmental-monitoring/',
            from: '/energy-monitoringmanagement/environmental-monitoring/',
          },
          {
            to: '/infrastructure-management/power_and_environmental_monitoring/getting-started-with-power-and-environmental-monitoring/',
            from: '/energy-monitoringmanagement/getting-started-with-power-and-environmental-monitoring/',
          },
          {
            to: '/infrastructure-management/power_and_environmental_monitoring/manage-monitored-ips/',
            from: '/energy-monitoringmanagement/manage-monitored-ips/',
          },
          {
            to: '/infrastructure-management/power_and_environmental_monitoring/power-monitoring-and-control/',
            from: '/energy-monitoringmanagement/power-monitoring-and-control/',
          },
          {
            to: '/infrastructure-management/power_and_environmental_monitoring/power-rc-setup-job-migration/',
            from: '/energy-monitoringmanagement/power-rc-setup-job-migration/',
          },
          {
            to: '/infrastructure-management/power_and_environmental_monitoring/unit-display-settings/',
            from: '/energy-monitoringmanagement/unit-display-settings/',
          },
          {
            to: '/infrastructure-management/ipam/dns-records/',
            from: '/ipam/dns-records/',
          },
          {
            to: '/infrastructure-management/ipam/dns-zones/',
            from: '/ipam/dns-zones/',
          },
          {
            to: '/infrastructure-management/ipam/ip-addresses/',
            from: '/ipam/ip-addresses/',
          },
          {
            to: '/infrastructure-management/ipam/ip-nat-map/',
            from: '/ipam/ip-nat-map/',
          },
          {
            to: '/infrastructure-management/ipam/mac-addresses/',
            from: '/ipam/mac-addresses/',
          },
          {
            to: '/infrastructure-management/ipam/subnet-tree-view/',
            from: '/ipam/subnet-tree-view/',
          },
          {
            to: '/infrastructure-management/ipam/subnets/',
            from: '/ipam/subnets/',
          },
          {
            to: '/infrastructure-management/ipam/switch-ports/',
            from: ['/ipam/switch-ports/', '/ipam/switch-port/']
          },
          {
            to: '/infrastructure-management/ipam/switch-templates/',
            from: '/ipam/switch-templates/',
          },
          {
            to: '/infrastructure-management/ipam/vlans/',
            from: '/ipam/vlans/',
          },
          {
            to: '/infrastructure-management/ipam/vrf-groups/',
            from: '/ipam/vrf-groups/',
          },
          {
            to: '/infrastructure-management/mobile_inventory/asset-tag-printing/',
            from: '/mobile-inventory/asset-tag-printing/',
          },
          {
            to: '/infrastructure-management/mobile_inventory/auto-assign-asset-numbers/',
            from: '/mobile-inventory/auto-assign-asset-numbers/',
          },
          {
            to: '/infrastructure-management/mobile_inventory/bulk-qr-printing/',
            from: '/mobile-inventory/bulk-qr-printing/',
          },
          {
            to: '/infrastructure-management/mobile_inventory/printing-qr-codes-from-ie/',
            from: '/mobile-inventory/printing-qr-codes-from-ie/',
          },
          {
            to: '/infrastructure-management/mobile_inventory/printing-qr-codes-from-firefox/',
            from: '/mobile-inventory/printing-qr-codes-from-firefox/',
          },
          {
            to: '/infrastructure-management/mobile_inventory/understanding-qr-and-bar-codes-in-device42/',
            from: ['/mobile-inventory/understanding-qr-and-bar-codes-in-device42/', '/qr-codes-asset-tags-inventory-management-mobile-devices/understanding-qr-codes/']
          },
          {
            to: '/infrastructure-management/mobile_inventory/using-mobile-devices-for-asset-management/',
            from: '/mobile-inventory/using-mobile-devices-for-asset-management/',
          },
          {
            to: '/infrastructure-management/accounting/purchases/',
            from: '/accounting/purchases/',
          },
          {
            to: '/how-to-videos/',
            from: '/how-to-videos/',
          },
          {
            to: '/how-to-videos/accessing-hidden-menus-for-advanced-customization/',
            from: '/how-to-videos/accessing-hidden-menus-for-advanced-customization/',
          },
          {
            to: '/how-to-videos/add-a-new-route-to-device42/',
            from: ['/how-to-videos/add-a-new-route-to-device42/', '/how-to-videos/add-a-route-to-device42/']
          },
          {
            to: '/how-to-videos/add-and-bulk-edit-hardware-models-how-to/',
            from: '/how-to-videos/add-and-bulk-edit-hardware-models-how-to/',
          },
          {
            to: '/how-to-videos/adding-links-and-other-urls-to-devices/',
            from: '/how-to-videos/adding-links-and-other-urls-to-devices/',
          },
          {
            to: '/how-to-videos/agentless-auto-discovery-tool-how-to/',
            from: '/how-to-videos/agentless-auto-discovery-tool-how-to/',
          },
          {
            to: '/how-to-videos/api-imports-add-create-hardware-models/',
            from: ['/how-to-videos/api-imports-add-create-hardware-models/', '/api/']
          },
          {
            to: '/how-to-videos/api-imports-adding-devices-to-racks/',
            from: '/how-to-videos/api-imports-adding-devices-to-racks/',
          },
          {
            to: '/how-to-videos/backup-and-restore-how-to/',
            from: '/how-to-videos/backup-and-restore-how-to/',
          },
          {
            to: '/how-to-videos/building-hierarchy-view-how-to/',
            from: '/how-to-videos/building-hierarchy-view-how-to/',
          },
          {
            to: '/how-to-videos/bulk-export-import-how-to/',
            from: '/how-to-videos/bulk-export-import-how-to/',
          },
          {
            to: '/how-to-videos/create-and-connect-patch-panels-and-switch-ports-how-to/',
            from: '/how-to-videos/create-and-connect-patch-panels-and-switch-ports-how-to/',
          },
          {
            to: '/how-to-videos/device-discovery-troubleshooting-how-to/',
            from: '/how-to-videos/device-discovery-troubleshooting-how-to/',
          },
          {
            to: '/how-to-videos/device42-object-query-language-doql/',
            from: '/how-to-videos/device42-object-query-language-doql/',
          },
          {
            to: '/how-to-videos/generic-csv-import-tool-how-to/',
            from: '/how-to-videos/generic-csv-import-tool-how-to/',
          },
          {
            to: '/how-to-videos/',
            from: '/how-to-videos/index/',
          },
          {
            to: '/how-to-videos/jira-integration-how-to/',
            from: '/how-to-videos/jira-integration-how-to/',
          },
          {
            to: '/how-to-videos/packet-capture-101/',
            from: '/how-to-videos/packet-capture-101/',
          },
          {
            to: '/how-to-videos/ping-sweep-tool-how-to/',
            from: '/how-to-videos/ping-sweep-tool-how-to/',
          },
          {
            to: '/how-to-videos/update-device42-appliance-how-to/',
            from: ['/how-to-videos/update-device42-appliance-how-to/', '/how-to-videos/update-d42-how-to/']
          },
          {
            to: '/how-to-videos/wmi-authentication-testing-tool-how-to/',
            from: '/how-to-videos/wmi-authentication-testing-tool-how-to/',
          },
        ],
      },
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').Options} */
  presets: [
    [
        '@docusaurus/preset-classic',
      ({

        docs: {
          routeBasePath: '/',
          editUrl:
            'https://github.com/device42/device42-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
         containerId: 'GTM-56V4NGQ',
        },   
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

     docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },  
      image: 'img/d42-social-card.png',
      algolia: {
        indexName: 'dev',
        appId: 'G1PBLM6LHG',
        apiKey: 'e1a0fe8ee0c7cc229ac937295f499837'
      },
      navbar: {
        logo: {
          alt: 'Device42 Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            href: '/getstarted',
            label: 'Documentation',
            position: 'left',
          },
          {
            href: 'https://www.device42.com/device42-product/',
            label: 'Product',
            position: 'right',
          },
          {
            href: 'https://www.device42.com/features/',
            label: 'Features',
            position: 'right',
          },
          {
            href: 'https://www.device42.com/customers/',
            label: 'Customers',
            position: 'right',
          },
          {
            href: 'https://www.device42.com/company/',
            label: 'Company',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

