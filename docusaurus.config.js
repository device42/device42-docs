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

plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/getting_started/getting-started-with-auto-discovery/',
            from: ['/getstarted/getting-started-with-auto-discovery/', '/getstarted/getting-started-with-a-blank-slate/']
          },
          {
            to: '/docs/getting_started/getting-started-discovery-hub/',
            from: '/getstarted/getting-started-discovery-hub/',
          },
          {
            to: '/docs/getting_started/importing-data-from-existing-spreadsheets/',
            from: '/getstarted/importing-data-from-existing-spreadsheets/',
          },
          {
            to: '/docs/getting_started/advanced-search-feature/',
            from: '/getstarted/advanced-search-feature/',
          },
          {
            to: '/docs/getting_started/arrange-and-save-list-page-column-layout/',
            from: '/getstarted/arrange-and-save-list-page-column-layout/',
          },
          {
            to: '/docs/getting_started/basic-navigation-tips-for-adding-editing/',
            from: '/getstarted/basic-navigation-tips-for-adding-editing/',
          },
          {
            to: '/docs/getting_started/home-page-widgets-and-global-search/',
            from: '/getstarted/home-page-widgets-and-global-search/',
          },
          {
            to: '/docs/getting_started/language-selection/',
            from: '/getstarted/language-selection/',
          },
          {
            to: '/docs/getting_started/installation/installation-amazon-web-services/',
            from: '/getstarted/installation/installation-amazon-web-services/',
          },
          {
            to: '/docs/getting_started/installation/installation-citrix-xen-server/',
            from: '/getstarted/installation/installation-citrix-xen-server/',
          },
          {
            to: '/docs/getting_started/installation/installing-the-d42-netflow-collector-as-a-service/',
            from: '/getstarted/installation/installing-the-d42-netflow-collector-as-a-service/',
          },
          {
            to: '/docs/getting_started/installation/installation-microsoft-azure/',
            from: '/getstarted/installation/installation-microsoft-azure/',
          },
          {
            to: '/docs/getting_started/installation/installation-microsoft-hyperv/',
            from: ['/getstarted/installation/installation-microsoft-hyperv/', '/getstarted/installation/installation-microsoft-hyper/']
          },
          {
            to: '/docs/getting_started/installation/installation-virtual-box/',
            from: '/getstarted/installation/installation-virtual-box/',
          },
          {
            to: '/docs/getting_started/installation/getting-started-on-a-mac/',
            from: '/getstarted/installation/getting-started-on-a-mac/',
          },
          {
            to: '/docs/getting_started/installation/getting-started-on-a-pc/',
            from: '/getstarted/installation/getting-started-on-a-pc/',
          },
          {
            to: '/docs/getting_started/installation/remote-collector-rc-installation/',
            from: '/getstarted/installation/remote-collector-rc-installation/',
          },
          {
            to: '/docs/getting_started/installation/installation-vcenter-server/',
            from: '/getstarted/installation/installation-vcenter-server/',
          },
          {
            to: '/docs/getting_started/installation/installation-vmware-player/',
            from: ['/getstarted/installation/installation-vmware-player/', '/getstarted/installation/installation-vmware-player-workstation-2/']
          },
          {
            to: '/docs/getting_started/installation/windows-discovery-service-installation/',
            from: '/getstarted/installation/windows-discovery-service-installation/',
          },
          {
            to: '/docs/getting_started/installation/installation-xen-or-kvm-using-virt-manager/',
            from: ['/getstarted/installation/installation-xen-or-kvm-using-virt-manager/', '/getstarted/installation/installation-xen-kvm-virt-manager/']
          },
          {
            to: '/docs/getting_started/installation/how-do-i-install-device42-xenkvm-appliance-if-import-existing-disk-image-option-is-missing/',
            from: '/getstarted/installation/how-do-i-install-device42-xenkvm-appliance-if-import-existing-disk-image-option-is-missing/',
          },
          {
            to: '/docs/getting_started/tutorials/device42-tutorial/',
            from: ['/getstarted/tutorials/device42-tutorial/', '/getstarted/tutorials/tutorials-overview/']
          },
          {
            to: '/docs/getting_started/tutorials/tutorial-loading-data-using-spreadsheets/',
            from: ['/getstarted/tutorials/tutorial-loading-data-using-spreadsheets/']
          },
          {
            to: '/docs/getting_started/tutorials/tutorial-loading-data-using-the-api/',
            from: ['/getstarted/tutorials/tutorial-loading-data-using-the-api/']
          },
          {
            to: '/docs/getting_started/tutorials/tutorial-navigating-the-device42-user-interface/',
            from: ['/getstarted/tutorials/tutorial-navigating-the-device42-user-interface/']
          },
          {
            to: '/docs/discovery/auto-discovery/',
            from: '/auto-discovery/',
          },
          {
            to: '/docs/discovery/active-directory-sync/',
            from: '/auto-discovery/active-directory-sync/',
          },
          {
            to: '/docs/discovery/agent-based-discovery/',
            from: '/auto-discovery/agent-based-discovery/',
          },
          {
            to: '/docs/discovery/agent-based-offline-discovery/',
            from: '/auto-discovery/agent-based-offline-discovery/',
          },
          {
            to: '/docs/discovery/autodisc-best-practices/',
            from: '/auto-discovery/autodisc-best-practices/',
          },
          {
            to: '/docs/discovery/auto-discovery-system-requirements/',
            from: '/auto-discovery/auto-discovery-system-requirements/',
          },
          {
            to: '/docs/discovery/blade-systems-auto-discovery/',
            from: ['/auto-discovery/blade-systems-auto-discovery/', '/auto-discovery/hp-bladesystem-auto-discovery/']
          },
          {
            to: '/docs/discovery/certificate-auto-discovery/',
            from: '/auto-discovery/certificate-auto-discovery/',
          },
          {
            to: '/docs/discovery/setup-dns-autodiscovery/',
            from: ['/auto-discovery/setup-dns-autodiscovery/', '/tools/setup-dns-autodiscovery/']
          },
          {
            to: '/docs/discovery/ibm-i-as400/',
            from: '/auto-discovery/ibm-i-as400/',
          },
          {
            to: '/docs/discovery/z-os-ibm-mainframe/',
            from: '/auto-discovery/z-os-ibm-mainframe/',
          },
          {
            to: '/docs/discovery/ipmi-auto-discovery/',
            from: '/auto-discovery/ipmi-auto-discovery/',
          },
          {
            to: '/docs/discovery/linux-unix-server-auto-discovery/',
            from: ['/auto-discovery/linux-unix-server-auto-discovery/', '/linux-unix-server-auto-discovery/']
          },
          {
            to: '/docs/discovery/linux-based-autodiscovery-software/',
            from: '/auto-discovery/linux-based-autodiscovery-software/',
          },
          {
            to: '/docs/discovery/load-balancers/',
            from: '/auto-discovery/load-balancers/',
          },
          {
            to: '/docs/discovery/netflow-collector/',
            from: '/auto-discovery/netflow-collector/',
          },
          {
            to: '/docs/discovery/nmap-autodiscovery/',
            from: '/auto-discovery/nmap-autodiscovery/',
          },
          {
            to: '/docs/discovery/operating-systems-supported-in-auto-discovery/',
            from: '/auto-discovery/operating-systems-supported-in-auto-discovery/',
          },
          {
            to: '/docs/discovery/packet-capture/',
            from: '/auto-discovery/packet-capture/',
          },
          {
            to: '/docs/discovery/d42-ping-sweep/',
            from: ['/auto-discovery/d42-ping-sweep/', '/auto-discovery-client/d42-ping-sweep/']
          },
          {
            to: '/docs/discovery/remote-collector-rc/',
            from: ['/auto-discovery/remote-collector-rc/', '/auto-discovery/remote-collector/']
          },
          {
            to: '/docs/discovery/resource-utilization-overview/',
            from: '/auto-discovery/resource-utilization-overview/',
          },
          {
            to: '/docs/discovery/sccm-discovery-net-tool/',
            from: '/auto-discovery/sccm-discovery-net-tool/',
          },
          {
            to: '/docs/discovery/network-auto-discovery/',
            from: ['/auto-discovery/network-auto-discovery/', '/auto-discovery/setup-network-auto-discovery/']
          },
          {
            to: '/docs/discovery/hypervisors-and-containers-supported-in-auto-discovery/',
            from: '/auto-discovery/hypervisors-and-containers-supported-in-auto-discovery/',
          },
          {
            to: '/docs/discovery/tcp-port-scan-auto-discovery/',
            from: '/auto-discovery/tcp-port-scan-auto-discovery/',
          },
          {
            to: '/docs/discovery/load-balancer-f5-autodiscovery/',
            from: '/auto-discovery/load-balancer-f5-autodiscovery/',
          },
          {
            to: '/docs/discovery/unprocessed-device-records/',
            from: '/auto-discovery/unprocessed-device-records/',
          },
          {
            to: '/docs/discovery/using-apis-for-custom-auto-discovery/',
            from: '/auto-discovery/using-apis-for-custom-auto-discovery/',
          },
          {
            to: '/docs/discovery/vendors-supported-in-snmp-auto-discovery/',
            from: '/auto-discovery/vendors-supported-in-snmp-auto-discovery/',
          },
          {
            to: '/docs/discovery/virtual-machine-auto-discovery/',
            from: ['/auto-discovery/virtual-machine-auto-discovery/', '/auto-discovery/vmware-auto-discovery/']
          },
          {
            to: '/docs/discovery/warranty-autodiscovery/',
            from: '/auto-discovery/warranty-autodiscovery/',
          },
          {
            to: '/docs/discovery/windows-and-hyper-v-auto-discovery/',
            from: ['/auto-discovery/windows-and-hyper-v-auto-discovery/', '/auto-discovery/windows-auto-discovery-tool/']
          },
          {
            to: '/docs/discovery/cloud_platforms_autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/',
          },
          {
            to: '/docs/discovery/cloud_platforms_autodiscovery/aws-autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/aws-autodiscovery/',
          },
          {
            to: '/docs/discovery/cloud_platforms_autodiscovery/azure-autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/azure-autodiscovery/',
          },
          {
            to: '/docs/discovery/cloud_platforms_autodiscovery/google-cloud-platform-autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/google-cloud-platform-autodiscovery/',
          },
          {
            to: '/docs/discovery/cloud_platforms_autodiscovery/intune-autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/intune-autodiscovery/',
          },
          {
            to: '/docs/discovery/cloud_platforms_autodiscovery/kubernetes-autodiscovery/',
            from: '/auto-discovery/cloud-auto-discovery/kubernetes-autodiscovery/',
          },
          {
            to: '/docs/discovery/cloud_platforms_autodiscovery/other-cloud-autodiscoveries/',
            from: '/auto-discovery/cloud-auto-discovery/other-cloud-autodiscoveries/',
          },
          {
            to: '/docs/discovery/database_discovery/cloud-databases/',
            from: '/databases/cloud-databases/',
          },
          {
            to: '/docs/discovery/database_discovery/on-premise-databases/',
            from: '/databases/on-premise-databases/',
          },
          {
            to: '/docs/discovery/storage_arrays_autodiscovery/',
            from: '/auto-discovery/storage-arrays-autodiscovery/',
          },
          {
            to: '/docs/discovery/storage_arrays_autodiscovery/dell-emc-autodiscovery/',
            from: '/auto-discovery/dell-emc-autodiscovery/',
          },
          {
            to: '/docs/discovery/storage_arrays_autodiscovery/hp-autodiscovery/',
            from: '/auto-discovery/hp-autodiscovery/',
          },
          {
            to: '/docs/discovery/storage_arrays_autodiscovery/ibm-autodiscovery/',
            from: '/auto-discovery/ibm-autodiscovery/',
          },
          {
            to: '/docs/discovery/storage_arrays_autodiscovery/all-other-storage-autodiscovery/',
            from: '/auto-discovery/all-other-storage-autodiscovery/',
          },
          {
            to: '/docs/discovery/storage_arrays_autodiscovery/snmp-san-server-auto-discovery/',
            from: '/auto-discovery/snmp-san-server-auto-discovery/',
          },
          {
            to: '/docs/discovery/storage_arrays_autodiscovery/storage-arrays/',
            from: '/auto-discovery/storage-arrays/',
          },
          {
            to: '/docs/discovery/resources/cloud-resources/',
            from: '/managed-resources/cloud-resources/',
          },
          {
            to: '/docs/applications/',
            from: '/apps/',
          },
          {
            to: '/docs/applications/application_dependency_mapping/adm-supported-applications/',
            from: '/enterprise-application-dependency-mapping/adm-supported-applications/',
          },
          {
            to: '/docs/applications/application_dependency_mapping/cloud-application-dependency-mapping/',
            from: '/enterprise-application-dependency-mapping/cloud-application-dependency-mapping/',
          },
          {
            to: '/docs/applications/application_dependency_mapping/configure-application-dependency-mapping/',
            from: '/enterprise-application-dependency-mapping/configure-application-dependency-mapping/',
          },
          {
            to: '/docs/applications/services/',
            from: '/apps/services/',
          },
          {
            to: '/docs/applications/services/service-instances/',
            from: '/apps/services/service-instances/',
          },
          {
            to: '/docs/applications/services/scheduled-tasks/',
            from: '/apps/services/scheduled-tasks/',
          },
          {
            to: '/docs/applications/services/service-listener-ports/',
            from: '/apps/services/service-listener-ports/',
          },
          {
            to: '/docs/applications/services/service-communications/',
            from: '/apps/services/service-communications/',
          },
          {
            to: '/docs/applications/services/ignored-services/',
            from: '/apps/services/ignored-services/',
          },
          {
            to: '/docs/applications/services/network-shares/',
            from: '/apps/services/network-shares/',
          },
          {
            to: '/docs/applications/application_components/application-component-templates/',
            from: ['/apps/application-components/application-component-templates/', '/software/application-components/']
          },
          {
            to: '/docs/applications/affinity_groups/appfocus-filters/',
            from: '/apps/affinity-groups/appfocus-filters/',
          },
          {
            to: '/docs/applications/business_applications/building-business-applications-in-device42/',
            from: '/apps/business-applications/building-business-applications-in-device42/',
          },
          {
            to: '/docs/administration/active-directory-and-openldap-support/',
            from: '/tools/active-directory-and-openldap-support/',
          },
          {
            to: '/docs/administration/advanced-routing/',
            from: ['/tools/advanced-routing/', '/console-menu/advanced-routing/']
          },
          {
            to: '/docs/administration/add-an-active-directory-user-as-a-device42-administrator/',
            from: '/tools/add-an-active-directory-user-as-a-device42-administrator/',
          },
          {
            to: '/docs/administration/auto-clean-feature/',
            from: '/tools/auto-clean-feature/',
          },
          {
            to: '/docs/administration/bulk-add-active-directory-group-members-as-device42-users/',
            from: '/tools/bulk-add-active-directory-group-members-as-device42-users/',
          },
          {
            to: '/docs/administration/custom-column-views/',
            from: '/tools/custom-column-views/',
          },
          {
            to: '/docs/administration/custom-key-value-pairs-explained/',
            from: '/tools/custom-key-value-pairs-explained/',
          },
          {
            to: '/docs/administration/customizing-device42/',
            from: '/tools/customizing-device42/',
          },
          {
            to: '/docs/administration/data-reset-tool/',
            from: '/tools/data-reset-tool/',
          },
          {
            to: '/docs/administration/generating-csrs/',
            from: '/tools/generating-csrs/',
          },
          {
            to: '/docs/administration/licensing/',
            from: '/tools/licensing/',
          },
          {
            to: '/docs/administration/saml-2-0-configuration/',
            from: '/tools/saml-2-0-configuration/',
          },
          {
            to: '/docs/administration/setting-time-zone-and-ntp/',
            from: '/tools/setting-time-zone-and-ntp/',
          },
          {
            to: '/docs/administration/tags/',
            from: '/tools/tags/',
          },
          {
            to: '/docs/administration/tools-of-the-trade/',
            from: '/tools/tools-of-the-trade/',
          },
          {
            to: '/docs/administration/transferring-devices-assets-and-parts-to-other-data-centers/',
            from: '/tools/transferring-devices-assets-and-parts-to-other-data-centers/',
          },
          {
            to: '/docs/administration/appliance_manager/adding-multiple-network-interface-cardsnic-to-device42-vm/',
            from: '/device42-appliance-manager/adding-multiple-network-interface-cardsnic-to-device42-vm/',
          },
          {
            to: '/docs/administration/appliance_manager/api-limits/',
            from: '/device42-appliance-manager/api-limits/',
          },
          {
            to: '/docs/administration/appliance_manager/changing-device42-appliance-hostname/',
            from: '/device42-appliance-manager/changing-device42-appliance-hostname/',
          },
          {
            to: '/docs/administration/appliance_manager/collecting-snmpwalk-output-for-troubleshooting/',
            from: '/device42-appliance-manager/collecting-snmpwalk-output-for-troubleshooting/',
          },
          {
            to: '/docs/administration/appliance_manager/delete-history-logs/',
            from: '/device42-appliance-manager/delete-history-logs/',
          },
          {
            to: '/docs/administration/appliance_manager/device42-appliance-manager-login/',
            from: '/device42-appliance-manager/device42-appliance-manager-login/',
          },
          {
            to: '/docs/administration/appliance_manager/device42-restore/',
            from: '/device42-appliance-manager/device42-restore/',
          },
          {
            to: '/docs/administration/appliance_manager/enable-or-disable-tls-versions-from-appliance-manager/',
            from: '/device42-appliance-manager/enable-or-disable-tls-versions-from-appliance-manager/',
          },
          {
            to: '/docs/administration/appliance_manager/enabling-ssl-in-appliance-manager/',
            from: '/device42-appliance-manager/enabling-ssl-in-appliance-manager/',
          },
          {
            to: '/docs/administration/appliance_manager/generate-log-bundle/',
            from: '/device42-appliance-manager/generate-log-bundle/',
          },
          {
            to: '/docs/administration/appliance_manager/generating-ipmi-output-for-troubleshooting/',
            from: '/device42-appliance-manager/generating-ipmi-output-for-troubleshooting/',
          },
          {
            to: '/docs/administration/appliance_manager/global-and-password-manager-session-timeout/',
            from: '/device42-appliance-manager/global-and-password-manager-session-timeout/',
          },
          {
            to: '/docs/administration/appliance_manager/installing-vmware-or-xenserver-tools/',
            from: '/device42-appliance-manager/installing-vmware-or-xenserver-tools/',
          },
          {
            to: '/docs/administration/appliance_manager/pendo-guided-tours-and-usage-information-collection/',
            from: '/device42-appliance-manager/pendo-guided-tours-and-usage-information-collection/',
          },
          {
            to: '/docs/administration/appliance_manager/securing-the-vm-console-with-password/',
            from: '/device42-appliance-manager/securing-the-vm-console-with-password/',
          },
          {
            to: '/docs/administration/appliance_manager/set-fqdn-for-web-access/',
            from: '/device42-appliance-manager/set-fqdn-for-web-access/',
          },
          {
            to: '/docs/administration/appliance_manager/set-up-https-cert/',
            from: '/device42-appliance-manager/set-up-https-cert/',
          },
          {
            to: '/docs/administration/appliance_manager/setting-up-backup-device42-appliance-manager/',
            from: '/device42-appliance-manager/setting-up-backup-device42-appliance-manager/',
          },
          {
            to: '/docs/administration/appliance_manager/warm-ha-setup-failover-and-automated-backups/',
            from: ['/device42-appliance-manager/warm-ha-setup-failover-and-automated-backups/', '/device42-appliance-manager/warm-ha-and-automated-backups/']
          },
          {
            to: '/docs/administration/passwords/burnt-secret-password-storage/',
            from: '/password-management/burnt-secret-password-storage/',
          },
          {
            to: '/docs/administration/passwords/password-security-and-permissions/',
            from: '/password-management/password-security-and-permissions/',
          },
          {
            to: '/docs/administration/passwords/set-default-password-management-group/',
            from: '/password-management/set-default-password-management-group/',
          },
          {
            to: '/docs/administration/passwords/password-operations/',
            from: '/password-management/password-operations/',
          },
          {
            to: '/docs/administration/passwords/password-policy/',
            from: '/password-management/password-policy/',
          },
          {
            to: '/docs/administration/passwords/password-reporting/',
            from: '/password-management/password-reporting/',
          },
          {
            to: '/docs/administration/role-based_access_control/role-based-permissions-and-access/',
            from: ['/role-based-access-control/role-based-permissions-and-access/', '/multitenancy-overview/']
          },
          {
            to: '/docs/integration/imports/spreadsheet-imports-and-exports/',
            from: '/imports/spreadsheet-imports-and-exports/',
          },
          {
            to: '/docs/integration/imports/using-the-re-importable-export-feature/',
            from: '/imports/using-the-re-importable-export-feature/',
          },
          {
            to: '/docs/integration/imports/spreadsheet-converter-tool/',
            from: '/imports/spreadsheet-converter-tool/',
          },
          {
            to: '/docs/integration/imports/legacy_imports/',
            from: '/imports/legacy-imports/',
          },
          {
            to: '/docs/integration/imports/legacy_imports/import-ip-sheet/',
            from: '/imports/import-ip-sheet/',
          },
          {
            to: '/docs/integration/imports/legacy_imports/import-overview/',
            from: '/imports/import-overview/',
          },
          {
            to: '/docs/integration/imports/legacy_imports/import-racked-devices/',
            from: '/imports/import-racked-devices/',
          },
          {
            to: '/docs/integration/api_overview/auto-populate-windows-machines-in-an-ad-using-apis/',
            from: '/api-overview/auto-populate-windows-machines-in-an-ad-using-apis/',
          },
          {
            to: '/docs/integration/api_overview/device42-api-documentation/',
            from: '/api-overview/device42-api-documentation/',
          },
          {
            to: '/docs/integration/api_overview/importing-csv-files-into-d42-using-the-api-helper-utility/',
            from: ['/api-overview/importing-csv-files-into-d42-using-the-api-helper-utility/', '/apis/importing-csv-files-into-d42-using-the-api-helper-utility/']
          },
          {
            to: '/docs/integration/api_overview/limit-api-get-calls/',
            from: '/api-overview/limit-api-get-calls/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/aperture-vista-to-device42-migration/',
            from: '/external-integrations/aperture-vista-to-device42-migration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/azure-migrate/',
            from: '/external-integrations/azure-migrate/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/carbonite-migration/',
            from: '/external-integrations/carbonite-migration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/cherwell-integration/',
            from: '/external-integrations/cherwell-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/device42-cloud-connector-overview/',
            from: ['/external-integrations/device42-cloud-connector-overview/', '/external-integrations/device42-cloud-connector/']
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/cloud-services-settings/',
            from: '/external-integrations/cloud-services-settings/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/device42-confluence-connector/',
            from: '/external-integrations/device42-confluence-connector/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/cyberark-integration/',
            from: '/external-integrations/cyberark-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/external-logging-config/',
            from: ['/external-integrations/external-logging-config/', '/external-integrations/external-logging/', '/external-integrations/external-logging-in-device42/']
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/configuring-splunk/',
            from: '/external-integrations/configuring-splunk/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/foreman-smart-proxy-plugin/',
            from: '/external-integrations/foreman-smart-proxy-plugin/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/freshservice-integration/',
            from: '/external-integrations/freshservice-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/device42-hp-service-manager-integration/',
            from: '/external-integrations/device42-hp-service-manager-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/jenkins-integration/',
            from: '/external-integrations/jenkins-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/device42-jira-integration/',
            from: '/external-integrations/device42-jira-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/device42-jira-cloud-integration/',
            from: '/external-integrations/device42-jira-cloud-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/microsoft-laps-integration/',
            from: '/external-integrations/microsoft-laps-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/monitor-device42-health-status-in-nagios/',
            from: '/external-integrations/monitor-device42-health-status-in-nagios/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/odbc-driver-integration/',
            from: '/external-integrations/odbc-driver-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/jdbc-driver-integration/',
            from: '/external-integrations/jdbc-driver-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/opsgenie-integration/',
            from: '/external-integrations/opsgenie-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/pagerduty-integration/',
            from: '/external-integrations/pagerduty-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/powerbi-integration/',
            from: '/external-integrations/powerbi-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/puppet-and-chef-integrations/',
            from: '/external-integrations/puppet-and-chef-integrations/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/collect-node-data-from-device42-for-rundeck/',
            from: '/external-integrations/collect-node-data-from-device42-for-rundeck/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/device42-saltstack-integration/',
            from: '/external-integrations/device42-saltstack-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/device42-servicenow-connector/',
            from: '/external-integrations/device42-servicenow-connector/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/webhooks-generic-integration/',
            from: '/external-integrations/webhooks-generic-integration/',
          },
          {
            to: '/docs/integration/external_integrations_and_migrations/device42-zendesk-connector/',
            from: '/external-integrations/device42-zendesk-connector/',
          },
          {
            to: '/docs/reporting/',
            from: '/reports/',
          },
          {
            to: '/docs/reporting/reports/insights-plus/',
            from: '/insights-plus/',
          },
          {
            to: '/docs/reporting/reports/advanced-reporting/',
            from: '/reports/advanced-reporting/',
          },
          {
            to: '/docs/reporting/reports/aws-migration-evaluator/',
            from: '/reports/aws-migration-evaluator/',
          },
          {
            to: '/docs/reporting/reports/aws-migration-hub/',
            from: '/reports/aws-migration-hub/',
          },
          {
            to: '/docs/reporting/reports/cloud-endure-device42/',
            from: '/reports/cloud-endure-device42/',
          },
          {
            to: '/docs/reporting/reports/cloud-recommendation-engine/',
            from: '/reports/cloud-recommendation-engine/',
          },
          {
            to: '/docs/reporting/reports/creating-reports/',
            from: '/reports/creating-reports/',
          },
          {
            to: '/docs/reporting/reports/discovery-quality-scores/',
            from: '/reports/discovery-quality-scores/',
          },
          {
            to: '/docs/reporting/reports/export-records/',
            from: '/reports/export-records/',
          },
          {
            to: '/docs/reporting/reports/jobs-dashboard/',
            from: '/reports/jobs-dashboard/',
          },
          {
            to: '/docs/reporting/reports/object-history-aka-audit-log/',
            from: '/reports/object-history-aka-audit-log/',
          },
          {
            to: '/docs/reporting/reports/periodic-jobs-page/',
            from: '/reports/periodic-jobs-page/',
          },
          {
            to: '/docs/reporting/reports/relutech-for-aws-migration/',
            from: '/reports/relutech-for-aws-migration/',
          },
          {
            to: '/docs/reporting/reports/run-book/',
            from: '/reports/run-book/',
          },
          {
            to: '/docs/reporting/reports/save-and-schedule-reports/',
            from: '/reports/save-and-schedule-reports/',
          },
          {
            to: '/docs/reporting/reports/setup-alerts-and-notifications/',
            from: '/reports/setup-alerts-and-notifications/',
          },
          {
            to: '/docs/reporting/reports/use-custom-sql-advanced-report/',
            from: '/reports/use-custom-sql-advanced-report/',
          },
          {
            to: '/docs/reporting/doql_device42_object_query_language/db-viewer-schema/',
            from: '/device42-doql/db-viewer-schema/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/app-dependency-mapping/',
            from: '/dbb-cookbook/app-dependency-mapping/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/business-app-dependencies/',
            from: '/dbb-cookbook/app-dependency-mapping/business-app-dependencies/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/business-app-device-impacts/',
            from: '/dbb-cookbook/app-dependency-mapping/business-app-device-impacts/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/business-app-hardware-eol-eos-impact/',
            from: '/dbb-cookbook/app-dependency-mapping/business-app-hardware-eol-eos-impact/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/business-app-operating-system-eol-eos/',
            from: '/dbb-cookbook/app-dependency-mapping/business-app-operating-system-eol-eos/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/workload-and-application-communication-business-app-communications/',
            from: '/dbb-cookbook/app-dependency-mapping/workload-and-application-communication-business-app-communications/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/workload-and-application-communication-ip-service-communications/',
            from: '/dbb-cookbook/app-dependency-mapping/workload-and-application-communication-ip-service-communications/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/compute/',
            from: '/dbb-cookbook/compute/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/compute-devices/',
            from: '/dbb-cookbook/compute/compute-devices/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/device-count-by-device-type/',
            from: '/dbb-cookbook/compute/device-count-by-device-type/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/device-count-by-service-level/',
            from: '/dbb-cookbook/compute/device-count-by-service-level/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/device-to-rack-inventory/',
            from: '/dbb-cookbook/compute/device-to-rack-inventory/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/devices-missing-device_type-or-service_level/',
            from: '/dbb-cookbook/compute/devices-missing-device_type-or-service_level/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/physical-device-inventory/',
            from: '/dbb-cookbook/compute/physical-device-inventory/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/physical-devices-by-customer-department/',
            from: '/dbb-cookbook/compute/physical-devices-by-customer-department/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/physical-devices-without-hardware-model/',
            from: '/dbb-cookbook/compute/physical-devices-without-hardware-model/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/physical-inventory-by-manufacturer/',
            from: '/dbb-cookbook/compute/physical-inventory-by-manufacturer/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/vm-density/',
            from: '/dbb-cookbook/compute/vm-density/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/vm-devices/',
            from: '/dbb-cookbook/compute/vm-devices/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/vm-inventory/',
            from: '/dbb-cookbook/compute/vm-inventory/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/security/',
            from: '/dbb-cookbook/security/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/devices-accessed-by-external-ips/',
            from: '/dbb-cookbook/security/devices-accessed-by-external-ips/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/devices-possibly-containing-pii-that-have-public-ips/',
            from: '/dbb-cookbook/security/devices-possibly-containing-pii-that-have-public-ips/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/devices-using-commonly-exploited-ports/',
            from: '/dbb-cookbook/security/devices-using-commonly-exploited-ports/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/devices-with-mismatch-between-prod-and-non-prod-environments/',
            from: '/dbb-cookbook/security/devices-with-mismatch-between-prod-and-non-prod-environments/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/devices-with-no-oss/',
            from: '/dbb-cookbook/security/devices-with-no-oss/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/devices-with-os-but-no-software/',
            from: '/dbb-cookbook/security/devices-with-os-but-no-software/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/devices-with-prohibited-software-as-designated-by-customer/',
            from: '/dbb-cookbook/security/devices-with-prohibited-software-as-designated-by-customer/',
          },
          {
            to: '/docs/reporting/dbb_cookbook/network-information-for-ips-without-attached-devices/',
            from: '/dbb-cookbook/security/network-information-for-ips-without-attached-devices/',
          },
          {
            to: '/docs/infrastructure_management/',
            from: '/infrastructure_management/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-add-edit/',
            from: '/devices/device-add-edit/',
          },
          {
            to: '/docs/infrastructure_management/devices/clone-a-device/',
            from: '/devices/clone-a-device/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-blade-chassis/',
            from: '/devices/device-blade-chassis/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-blade-slots/',
            from: ['/devices/device-blade-slots/', '/device/device-blade-slots/']
          },
          {
            to: '/docs/infrastructure_management/devices/device-cluster/',
            from: '/devices/device-cluster/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-lifecycle-tab/',
            from: '/devices/device-lifecycle-tab/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-other-tab/',
            from: '/devices/device-other-tab/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-parts-slots/',
            from: ['/devices/device-parts-slots/', '/device/device-parts-slots/']
          },
          {
            to: '/docs/infrastructure_management/devices/device-parts-tab/',
            from: '/devices/device-parts-tab/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-properties-tab/',
            from: '/devices/device-properties-tab/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-services-tab/',
            from: '/devices/device-services-tab/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-software-tab/',
            from: '/devices/device-software-tab/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-virtual-blade/',
            from: '/devices/device-virtual-blade/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-name-profiles/',
            from: '/devices/device-name-profiles/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-custom-fields/',
            from: '/devices/device-custom-fields/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-ignore-rules/',
            from: '/devices/device-ignore-rules/',
          },
          {
            to: '/docs/infrastructure_management/devices/device-list-view-2/',
            from: '/devices/device-list-view-2/',
          },
          {
            to: '/docs/infrastructure_management/devices/what-if-scenarios/',
            from: '/devices/what-if-scenarios/',
          },
          {
            to: '/docs/infrastructure_management/devices/hardware-models-templates/',
            from: ['/devices/hardware-models-templates/', '/device/hardware/']
          },
          {
            to: '/docs/infrastructure_management/software/software-license-management/',
            from: '/apps/software/software-license-management/',
          },
          {
            to: '/docs/infrastructure_management/software/software-licensing-alerts-and-notifications/',
            from: '/apps/software/software-licensing-alerts-and-notifications/',
          },
          {
            to: '/docs/infrastructure_management/software/software-components/',
            from: '/apps/software/software-components/',
          },
          {
            to: '/docs/infrastructure_management/software/merge-and-assign-software-components/',
            from: '/apps/software/merge-and-assign-software-components/',
          },
          {
            to: '/docs/infrastructure_management/software/software-in-use/',
            from: '/apps/software/software-in-use/',
          },
          {
            to: '/docs/infrastructure_management/software/software-eol-eos/',
            from: '/apps/software/software-eol-eos/',
          },
          {
            to: '/docs/infrastructure_management/operating-systems/',
            from: '/apps/operating-systems/',
          },
          {
            to: '/docs/infrastructure_management/certificate-management/',
            from: '/apps/certificate-management/',
          },
          {
            to: '/docs/infrastructure_management/buildings_rooms_and_racks/auditing-racks/',
            from: '/buildings-rooms-and-racks/auditing-racks/',
          },
          {
            to: '/docs/infrastructure_management/buildings_rooms_and_racks/buildings-and-rooms/',
            from: '/buildings-rooms-and-racks/buildings-and-rooms/',
          },
          {
            to: '/docs/infrastructure_management/buildings_rooms_and_racks/impact-charts/',
            from: '/buildings-rooms-and-racks/impact-charts/',
          },
          {
            to: '/docs/infrastructure_management/buildings_rooms_and_racks/racks/',
            from: '/buildings-rooms-and-racks/racks/',
          },
          {
            to: '/docs/infrastructure_management/connectivity/cables/',
            from: '/connectivity/cables/',
          },
          {
            to: '/docs/infrastructure_management/connectivity/circuits/',
            from: '/connectivity/circuits/',
          },
          {
            to: '/docs/infrastructure_management/connectivity/creating-wall-jacks/',
            from: '/connectivity/creating-wall-jacks/',
          },
          {
            to: '/docs/infrastructure_management/connectivity/patch-panel-cable-management-definitions-and-legends-2/',
            from: '/connectivity/patch-panels/patch-panel-cable-management-definitions-and-legends-2/',
          },
          {
            to: '/docs/infrastructure_management/power_units/adding-atss/',
            from: '/power-units/adding-atss/',
          },
          {
            to: '/docs/infrastructure_management/power_units/adding-pdus/',
            from: '/power-units/pdus/adding-pdus/',
          },
          {
            to: '/docs/infrastructure_management/power_units/defining-pdu-models/',
            from: ['/power-units/pdus/defining-pdu-models/', '/pdu_overview/defining-pdu-models/']
          },
          {
            to: '/docs/infrastructure_management/power_units/pdu-ports/',
            from: '/power-units/pdus/pdu-ports/',
          },
          {
            to: '/docs/infrastructure_management/power_units/pdu-rack-display/',
            from: ['/power-units/pdus/pdu-rack-display/', '/pdu_overview/pdu-rack-display/']
          },
          {
            to: '/docs/infrastructure_management/power_units/supported-pdu-vendors/',
            from: '/power-units/supported-pdu-vendors/',
          },
          {
            to: '/docs/infrastructure_management/parts_and_parts_slots/importing-part-models/',
            from: ['/parts-and-parts-slots/importing-part-models/', '/spare-parts-management/importing-part-models/']
          },
          {
            to: '/docs/infrastructure_management/parts_and_parts_slots/importing-parts/',
            from: '/parts-and-parts-slots/importing-parts/',
          },
          {
            to: '/docs/infrastructure_management/parts_and_parts_slots/managing-spare-parts/',
            from: '/parts-and-parts-slots/managing-spare-parts/',
          },
          {
            to: '/docs/infrastructure_management/parts_and_parts_slots/part-model-templates/',
            from: ['/parts-and-parts-slots/part-model-templates/', '/spare-parts-management/models-and-parts/']
          },
          {
            to: '/docs/infrastructure_management/parts_and_parts_slots/parts-slots/',
            from: '/parts-and-parts-slots/parts-slots/',
          },
          {
            to: '/docs/infrastructure_management/power_and_environmental_monitoring/environmental-monitoring/',
            from: '/energy-monitoringmanagement/environmental-monitoring/',
          },
          {
            to: '/docs/infrastructure_management/power_and_environmental_monitoring/getting-started-with-power-and-environmental-monitoring/',
            from: '/energy-monitoringmanagement/getting-started-with-power-and-environmental-monitoring/',
          },
          {
            to: '/docs/infrastructure_management/power_and_environmental_monitoring/manage-monitored-ips/',
            from: '/energy-monitoringmanagement/manage-monitored-ips/',
          },
          {
            to: '/docs/infrastructure_management/power_and_environmental_monitoring/power-monitoring-and-control/',
            from: '/energy-monitoringmanagement/power-monitoring-and-control/',
          },
          {
            to: '/docs/infrastructure_management/power_and_environmental_monitoring/power-rc-setup-job-migration/',
            from: '/energy-monitoringmanagement/power-rc-setup-job-migration/',
          },
          {
            to: '/docs/infrastructure_management/power_and_environmental_monitoring/unit-display-settings/',
            from: '/energy-monitoringmanagement/unit-display-settings/',
          },
          {
            to: '/docs/infrastructure_management/ipam/dns-records/',
            from: '/ipam/dns-records/',
          },
          {
            to: '/docs/infrastructure_management/ipam/dns-zones/',
            from: '/ipam/dns-zones/',
          },
          {
            to: '/docs/infrastructure_management/ipam/ip-addresses/',
            from: '/ipam/ip-addresses/',
          },
          {
            to: '/docs/infrastructure_management/ipam/ip-nat-map/',
            from: '/ipam/ip-nat-map/',
          },
          {
            to: '/docs/infrastructure_management/ipam/mac-addresses/',
            from: '/ipam/mac-addresses/',
          },
          {
            to: '/docs/infrastructure_management/ipam/subnet-tree-view/',
            from: '/ipam/subnet-tree-view/',
          },
          {
            to: '/docs/infrastructure_management/ipam/subnets/',
            from: '/ipam/subnets/',
          },
          {
            to: '/docs/infrastructure_management/ipam/switch-ports/',
            from: ['/ipam/switch-ports/', '/ipam/switch-port/']
          },
          {
            to: '/docs/infrastructure_management/ipam/switch-templates/',
            from: '/ipam/switch-templates/',
          },
          {
            to: '/docs/infrastructure_management/ipam/vlans/',
            from: '/ipam/vlans/',
          },
          {
            to: '/docs/infrastructure_management/ipam/vrf-groups/',
            from: '/ipam/vrf-groups/',
          },
          {
            to: '/docs/infrastructure_management/mobile_inventory/asset-tag-printing/',
            from: '/mobile-inventory/asset-tag-printing/',
          },
          {
            to: '/docs/infrastructure_management/mobile_inventory/auto-assign-asset-numbers/',
            from: '/mobile-inventory/auto-assign-asset-numbers/',
          },
          {
            to: '/docs/infrastructure_management/mobile_inventory/bulk-qr-printing/',
            from: '/mobile-inventory/bulk-qr-printing/',
          },
          {
            to: '/docs/infrastructure_management/mobile_inventory/printing-qr-codes-from-ie/',
            from: '/mobile-inventory/printing-qr-codes-from-ie/',
          },
          {
            to: '/docs/infrastructure_management/mobile_inventory/printing-qr-codes-from-firefox/',
            from: '/mobile-inventory/printing-qr-codes-from-firefox/',
          },
          {
            to: '/docs/infrastructure_management/mobile_inventory/understanding-qr-and-bar-codes-in-device42/',
            from: ['/mobile-inventory/understanding-qr-and-bar-codes-in-device42/', '/qr-codes-asset-tags-inventory-management-mobile-devices/understanding-qr-codes/']
          },
          {
            to: '/docs/infrastructure_management/mobile_inventory/using-mobile-devices-for-asset-management/',
            from: '/mobile-inventory/using-mobile-devices-for-asset-management/',
          },
          {
            to: '/docs/infrastructure_management/accounting/purchases/',
            from: '/accounting/purchases/',
          },
          {
            to: '/docs/videos/accessing-hidden-menus-for-advanced-customization/',
            from: '/how-to-videos/accessing-hidden-menus-for-advanced-customization/',
          },
          {
            to: '/docs/videos/add-a-new-route-to-device42/',
            from: ['/how-to-videos/add-a-new-route-to-device42/', '/how-to-videos/add-a-route-to-device42/']
          },
          {
            to: '/docs/videos/add-and-bulk-edit-hardware-models-how-to/',
            from: '/how-to-videos/add-and-bulk-edit-hardware-models-how-to/',
          },
          {
            to: '/docs/videos/adding-links-and-other-urls-to-devices/',
            from: '/how-to-videos/adding-links-and-other-urls-to-devices/',
          },
          {
            to: '/docs/videos/agentless-auto-discovery-tool-how-to/',
            from: '/how-to-videos/agentless-auto-discovery-tool-how-to/',
          },
          {
            to: '/docs/videos/api-imports-add-create-hardware-models/',
            from: ['/how-to-videos/api-imports-add-create-hardware-models/', '/api/']
          },
          {
            to: '/docs/videos/api-imports-adding-devices-to-racks/',
            from: '/how-to-videos/api-imports-adding-devices-to-racks/',
          },
          {
            to: '/docs/videos/backup-and-restore-how-to/',
            from: '/how-to-videos/backup-and-restore-how-to/',
          },
          {
            to: '/docs/videos/building-hierarchy-view-how-to/',
            from: '/how-to-videos/building-hierarchy-view-how-to/',
          },
          {
            to: '/docs/videos/bulk-export-import-how-to/',
            from: '/how-to-videos/bulk-export-import-how-to/',
          },
          {
            to: '/docs/videos/create-and-connect-patch-panels-and-switch-ports-how-to/',
            from: '/how-to-videos/create-and-connect-patch-panels-and-switch-ports-how-to/',
          },
          {
            to: '/docs/videos/device-discovery-troubleshooting-how-to/',
            from: '/how-to-videos/device-discovery-troubleshooting-how-to/',
          },
          {
            to: '/docs/videos/device42-object-query-language-doql/',
            from: '/how-to-videos/device42-object-query-language-doql/',
          },
          {
            to: '/docs/videos/generic-csv-import-tool-how-to/',
            from: '/how-to-videos/generic-csv-import-tool-how-to/',
          },
          {
            to: '/docs/videos/',
            from: '/videos/index/',
          },
          {
            to: '/docs/videos/jira-integration-how-to/',
            from: '/how-to-videos/jira-integration-how-to/',
          },
          {
            to: '/docs/videos/packet-capture-101/',
            from: '/how-to-videos/packet-capture-101/',
          },
          {
            to: '/docs/videos/ping-sweep-tool-how-to/',
            from: '/how-to-videos/ping-sweep-tool-how-to/',
          },
          {
            to: '/docs/videos/update-device42-appliance-how-to/',
            from: ['/how-to-videos/update-device42-appliance-how-to/', '/how-to-videos/update-d42-how-to/']
          },
          {
            to: '/docs/videos/wmi-authentication-testing-tool-how-to/',
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
      image: 'img/d42-social-card.png',
      navbar: {
        logo: {
          alt: 'Device42 Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            href: '/docs/getting_started',
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

