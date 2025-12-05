// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Device42",
  tagline: "The Hitchhiker’s Guide to DEVICE42",
  favicon: 'https://www.device42.com/wp-content/uploads/2021/08/d42-favicon.png',
  url: 'https://docs.device42.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Load the Feedback Rocket SDK on every page
  scripts: [
    {
      async: true,
      src: 'https://www.feedbackrocket.io/sdk/v1.1.js',
      'data-fr-id': 'ZGuyxqZHGoYVrmt3nYmF2',
      'data-fr-reply': "",
      'data-fr-theme': 'dynamic',
    },
    {
      src: 'https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js',
      'data-domain-script': '018fa3d5-077b-79ba-acca-d22007888127',
      charset: 'UTF-8',
    },
  ],

  customFields: {
    onetrustScript: `function OptanonWrapper() { }`,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  trailingSlash: true,

  plugins: [
    function onetrustScriptPlugin(context, options) {
      return {
        name: 'inject-onetrust-script',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: context.siteConfig.customFields.onetrustScript,
              },
            ],
          };
        },
      };
    },
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/getstarted/getting-started-with-auto-discovery/',
            from: ['/getstarted/getting-started-with-a-blank-slate/'],
          },
          {
            to: '/administration/feedback-and-contributions/how-to-contribute-documentation-fixes/',
            from: ['/administration/how-to-contribute-documentation-fixes/'],
          },
          {
            to: '/administration/feedback-and-contributions/how-to-submit-documentation-feedback/',
            from: ['/administration/how-to-submit-documentation-feedback/'],
          },
          {
            to: '/administration/feedback-and-contributions/how-to-update-or-contribute-images/',
            from: ['/administration/how-to-update-or-contribute-images/'],
          },
          {
            to: '/administration/main-appliance-remote-collector-faq/',
            from: ['/getstarted/faqs/main-appliance-remote-collector-faq/'],
          },
          {
            to: '/getstarted/discovery-hub/',
            from: ['/getstarted/getting-started-discovery-hub/'],
          },
          {
            to: '/getstarted/deployment-best-practices/',
            from: ['/public-deployment-best-practices/', '/getstarted/public-deployment-best-practices'],
          },
          {
            to: '/getstarted/deploy-device42/installation-microsoft-hyperv/',
            from: ['/getstarted/installation/installation-microsoft-hyper/', '/getstarted/installation/installation-microsoft-hyperv/'],
          },
          {
            to: '/getstarted/deploy-device42/installation-xen-or-kvm-using-virt-manager/',
            from: ['/getstarted/installation/installation-xen-kvm-virt-manager/', '/getstarted/installation/installation-xen-or-kvm-using-virt-manager/'],
          },
          {
            to: '/getstarted/deploy-device42/',
            from: ['/getstarted/installation/', '/getstarted/installation/index/'],
          },
          {
            to: '/getstarted/deploy-device42/discovery-port-configurations/',
            from: ['/getstarted/installation/discovery-port-configurations/'],
          },
          {
            to: '/getstarted/deploy-device42/how-do-i-install-device42-xenkvm-appliance-if-import-existing-disk-image-option-is-missing/',
            from: ['/getstarted/installation/how-do-i-install-device42-xenkvm-appliance-if-import-existing-disk-image-option-is-missing/'],
          },
          {
            to: '/getstarted/deploy-device42/installation-amazon-web-services/',
            from: ['/getstarted/installation/installation-amazon-web-services/'],
          },
          {
            to: '/getstarted/deploy-device42/installation-citrix-xen-server/',
            from: ['/getstarted/installation/installation-citrix-xen-server/'],
          },
          {
            to: '/getstarted/deploy-device42/installation-microsoft-azure/',
            from: ['/getstarted/installation/installation-microsoft-azure/'],
          },
          {
            to: '/getstarted/deploy-device42/installation-vcenter-server/',
            from: ['/getstarted/installation/installation-vcenter-server/'],
          },
          {
            to: '/getstarted/deploy-device42/installing-the-d42-netflow-collector-as-a-service/',
            from: ['/getstarted/installation/installing-the-d42-netflow-collector-as-a-service/'],
          },
          {
            to: '/getstarted/deploy-device42/remote-collector-rc-installation/',
            from: ['/getstarted/installation/remote-collector-rc-installation/'],
          },
          {
            to: '/getstarted/deploy-device42/resource-and-deployment-architecture-overview/',
            from: ['/getstarted/installation/resource-and-deployment-architecture-overview/'],
          },
          {
            to: '/getstarted/deploy-device42/security-posture-and-high-level-permissions/',
            from: ['/getstarted/installation/security-posture-and-high-level-permissions/'],
          },
          {
            to: '/getstarted/deploy-device42/sizing-recommendations/',
            from: ['/getstarted/installation/sizing-recommendations/'],
          },
          {
            to: '/getstarted/deploy-device42/windows-discovery-service-installation/',
            from: ['/getstarted/installation/windows-discovery-service-installation/'],
          },
          {
            to: '/getstarted/deploy-device42/windows-service-installation/',
            from: ['/getstarted/installation/windows-service-installation/'],
          },
          {
            to: '/getstarted/tutorials/device42-tutorial/',
            from: ['/getstarted/tutorials/tutorials-overview/'],
          },
          {
            to: '/auto-discovery/blade-systems-auto-discovery/',
            from: ['/auto-discovery/hp-bladesystem-auto-discovery/'],
          },
          {
            to: '/auto-discovery/setup-dns-autodiscovery/',
            from: ['/tools/setup-dns-autodiscovery/'],
          },
          {
            to: '/auto-discovery/linux-unix-server-auto-discovery/',
            from: ['/linux-unix-server-auto-discovery/'],
          },
          {
            to: '/auto-discovery/load-balancers/',
            from: ['/load-balancers/'],
          },
          {
            to: '/auto-discovery/d42-ping-sweep/',
            from: ['/auto-discovery-client/d42-ping-sweep/'],
          },
          {
            to: '/auto-discovery/remote-collector-rc/',
            from: ['/auto-discovery/remote-collector/'],
          },
          {
            to: '/auto-discovery/network-auto-discovery/',
            from: ['/auto-discovery/setup-network-auto-discovery/'],
          },
          {
            to: '/auto-discovery/virtual-machine-auto-discovery/',
            from: ['/auto-discovery/vmware-auto-discovery/'],
          },
          {
            to: '/auto-discovery/windows-and-hyper-v-auto-discovery/',
            from: ['/auto-discovery/windows-auto-discovery-tool/'],
          },
          {
            to: '/auto-discovery/database-discovery/',
            from: ['/databases/'],
          },
          {
            to: '/auto-discovery/database-discovery/cloud-databases/',
            from: ['/databases/cloud-databases/'],
          },
          {
            to: '/auto-discovery/database-discovery/on-premise-databases/',
            from: ['/databases/on-premise-databases/'],
          },
          {
            to: '/auto-discovery/storage-arrays-autodiscovery/dell-emc-autodiscovery/',
            from: ['/auto-discovery/dell-emc-autodiscovery/'],
          },
          {
            to: '/auto-discovery/storage-arrays-autodiscovery/hp-autodiscovery/',
            from: ['/auto-discovery/hp-autodiscovery/'],
          },
          {
            to: '/auto-discovery/storage-arrays-autodiscovery/ibm-autodiscovery/',
            from: ['/auto-discovery/ibm-autodiscovery/'],
          },
          {
            to: '/auto-discovery/storage-arrays-autodiscovery/all-other-storage-autodiscovery/',
            from: ['/auto-discovery/all-other-storage-autodiscovery/'],
          },
          {
            to: '/auto-discovery/storage-arrays-autodiscovery/snmp-san-server-auto-discovery/',
            from: ['/auto-discovery/snmp-san-server-auto-discovery/'],
          },
          {
            to: '/auto-discovery/storage-arrays-autodiscovery/storage-arrays/',
            from: ['/auto-discovery/storage-arrays/'],
          },
          {
            to: '/auto-discovery/resources/',
            from: ['/managed-resources/'],
          },
          {
            to: '/auto-discovery/resources/cloud-resources/',
            from: ['/managed-resources/cloud-resources/'],
          },
          {
            to: '/apps/application-groups/',
            from: ['/apps/affinity-groups/'],
          },
          {
            to: '/apps/business-services/',
            from: ['/apps/business-applications/'],
          },
          {
            to: '/apps/business-services/building-business-services-in-device42/',
            from: ['/apps/business-applications/building-business-applications-in-device42/'],
          },
          {
            to: '/apps/application-groups/calculation-rules/',
            from: ['/apps/affinity-groups/appfocus-filters/'],
          },
          {
            to: '/apps/enterprise-application-dependency-mapping/',
            from: ['/enterprise-application-dependency-mapping/'],
          },
          {
            to: '/apps/enterprise-application-dependency-mapping/adm-supported-applications/',
            from: ['/enterprise-application-dependency-mapping/adm-supported-applications/'],
          },
          {
            to: '/apps/enterprise-application-dependency-mapping/cloud-application-dependency-mapping/',
            from: ['/enterprise-application-dependency-mapping/cloud-application-dependency-mapping/'],
          },
          {
            to: '/apps/enterprise-application-dependency-mapping/configure-application-dependency-mapping/',
            from: ['/enterprise-application-dependency-mapping/configure-application-dependency-mapping/'],
          },
          {
            to: '/infrastructure-management/devices/archiving-devices-and-resources/',
            from: ['/archiving-devices-and-resources/'],
          },
          {
            to: '/infrastructure-management/software/',
            from: ['/apps/software/'],
          },
          {
            to: '/apps/application-components/application-component-templates/',
            from: ['/software/application-components/'],
          },
          {
            to: '/getstarted/',
            from: ['/tools/tools-of-the-trade/', '/administration/tools-of-the-trade/'],
          },
          {
            to: '/administration/active-directory-and-openldap-support/',
            from: ['/tools/active-directory-and-openldap-support/'],
          },
          {
            to: '/administration/advanced-routing/',
            from: ['/tools/advanced-routing/', '/console-menu/advanced-routing/'],
          },
          {
            to: '/administration/add-an-active-directory-user-as-a-device42-administrator/',
            from: ['/tools/add-an-active-directory-user-as-a-device42-administrator/'],
          },
          {
            to: '/administration/auto-clean-feature/',
            from: ['/tools/auto-clean-feature/'],
          },
          {
            to: '/administration/bulk-add-active-directory-group-members-as-device42-users/',
            from: ['/tools/bulk-add-active-directory-group-members-as-device42-users/'],
          },
          {
            to: '/administration/custom-column-views/',
            from: ['/tools/custom-column-views/'],
          },
          {
            to: '/administration/custom-key-value-pairs-explained/',
            from: ['/tools/custom-key-value-pairs-explained/'],
          },
          {
            to: '/administration/customizing-device42/',
            from: ['/tools/customizing-device42/'],
          },
          {
            to: '/administration/data-reset-tool/',
            from: ['/tools/data-reset-tool/'],
          },
          {
            to: '/administration/generating-csrs/',
            from: ['/tools/generating-csrs/'],
          },
          {
            to: '/administration/licensing/',
            from: ['/tools/licensing/'],
          },
          {
            to: '/administration/saml-2-0-configuration/',
            from: ['/tools/saml-2-0-configuration/'],
          },
          {
            to: '/administration/setting-time-zone-and-ntp/',
            from: ['/tools/setting-time-zone-and-ntp/'],
          },
          {
            to: '/administration/tags/',
            from: ['/tools/tags/'],
          },
          {
            to: '/administration/transferring-devices-assets-and-parts-to-other-data-centers/',
            from: ['/tools/transferring-devices-assets-and-parts-to-other-data-centers/'],
          },
          {
            to: '/administration/appliance-manager/',
            from: ['/device42-appliance-manager/'],
          },
          {
            to: '/administration/appliance-manager/adding-multiple-network-interface-cardsnic-to-device42-vm/',
            from: ['/device42-appliance-manager/adding-multiple-network-interface-cardsnic-to-device42-vm/'],
          },
          {
            to: '/administration/appliance-manager/api-limits/',
            from: ['/device42-appliance-manager/api-limits/'],
          },
          {
            to: '/administration/appliance-manager/changing-device42-appliance-hostname/',
            from: ['/device42-appliance-manager/changing-device42-appliance-hostname/'],
          },
          {
            to: '/administration/appliance-manager/collecting-snmpwalk-output-for-troubleshooting/',
            from: ['/device42-appliance-manager/collecting-snmpwalk-output-for-troubleshooting/'],
          },
          {
            to: '/administration/appliance-manager/delete-history-logs/',
            from: ['/device42-appliance-manager/delete-history-logs/'],
          },
          {
            to: '/administration/appliance-manager/device42-appliance-manager-login/',
            from: ['/device42-appliance-manager/device42-appliance-manager-login/'],
          },
          {
            to: '/administration/appliance-manager/device42-restore/',
            from: ['/device42-appliance-manager/device42-restore/'],
          },
          {
            to: '/administration/appliance-manager/enable-or-disable-tls-versions-from-appliance-manager/',
            from: ['/device42-appliance-manager/enable-or-disable-tls-versions-from-appliance-manager/'],
          },
          {
            to: '/administration/appliance-manager/enabling-ssl-in-appliance-manager/',
            from: ['/device42-appliance-manager/enabling-ssl-in-appliance-manager/'],
          },
          {
            to: '/administration/appliance-manager/generate-log-bundle/',
            from: ['/device42-appliance-manager/generate-log-bundle/'],
          },
          {
            to: '/administration/appliance-manager/generating-ipmi-output-for-troubleshooting/',
            from: ['/device42-appliance-manager/generating-ipmi-output-for-troubleshooting/'],
          },
          {
            to: '/administration/appliance-manager/global-and-password-manager-session-timeout/',
            from: ['/device42-appliance-manager/global-and-password-manager-session-timeout/'],
          },
          {
            to: '/administration/appliance-manager/installing-vmware-or-xenserver-tools/',
            from: ['/device42-appliance-manager/installing-vmware-or-xenserver-tools/'],
          },
          {
            to: '/administration/appliance-manager/pendo-guided-tours-and-usage-information-collection/',
            from: ['/device42-appliance-manager/pendo-guided-tours-and-usage-information-collection/'],
          },
          {
            to: '/administration/appliance-manager/set-fqdn-for-web-access/',
            from: ['/device42-appliance-manager/set-fqdn-for-web-access/'],
          },
          {
            to: '/administration/appliance-manager/set-up-https-cert/',
            from: ['/device42-appliance-manager/set-up-https-cert/'],
          },
          {
            to: '/administration/appliance-manager/setting-up-backup-device42-appliance-manager/',
            from: ['/device42-appliance-manager/setting-up-backup-device42-appliance-manager/'],
          },
          {
            to: '/administration/appliance-manager/warm-ha-setup-failover-and-automated-backups/',
            from: ['/device42-appliance-manager/warm-ha-setup-failover-and-automated-backups/', '/device42-appliance-manager/warm-ha-and-automated-backups/'],
          },
          {
            to: '/administration/passwords/burnt-secret-password-storage/',
            from: ['/password-management/burnt-secret-password-storage/'],
          },
          {
            to: '/administration/passwords/password-security-and-permissions/',
            from: ['/password-management/password-security-and-permissions/'],
          },
          {
            to: '/administration/passwords/set-default-password-management-group/',
            from: ['/password-management/set-default-password-management-group/'],
          },
          {
            to: '/administration/passwords/password-operations/',
            from: ['/password-management/password-operations/'],
          },
          {
            to: '/administration/passwords/password-policy/',
            from: ['/password-management/password-policy/'],
          },
          {
            to: '/administration/passwords/secrets-reporting/',
            from: [
              '/password-management/password-reporting/',
              '/administration/passwords/password-reporting/'
            ],
          },
          {
            to: '/administration/role-based-access-control/',
            from: ['/role-based-access-control/'],
          },
          {
            to: '/administration/role-based-access-control/role-based-permissions-and-access/',
            from: [
              '/role-based-access-control/role-based-permissions-and-access/', 
              '/multitenancy-overview/'
            ],
          },
          {
            to: '/integration/imports/spreadsheet-imports-and-exports/',
            from: ['/imports/spreadsheet-imports-and-exports/'],
          },
          {
            to: '/integration/imports/using-the-re-importable-export-feature/',
            from: ['/imports/using-the-re-importable-export-feature/'],
          },
          {
            to: '/integration/imports/spreadsheet-converter-tool/',
            from: ['/imports/spreadsheet-converter-tool/'],
          },
          {
            to: '/integration/imports/',
            from: ['/imports/'],
          },
          {
            to: '/integration/imports/spreadsheet-imports-and-exports/',
            from: ['/imports/legacy-imports/', '/integration/imports/legacy-imports/'],
          },
          {
            to: '/integration/imports/spreadsheet-imports-and-exports/',
            from: ['/imports/import-ip-sheet/', '/integration/imports/legacy-imports/import-ip-sheet/'],
          },
          {
            to: '/integration/imports/spreadsheet-imports-and-exports/',
            from: ['/imports/import-overview/', '/integration/imports/legacy-imports/import-overview/'],
          },
          {
            to: '/integration/imports/spreadsheet-imports-and-exports/',
            from: ['/imports/import-racked-devices/', '/integration/imports/legacy-imports/import-racked-devices/'],
          },
          {
            to: '/integration/api-overview/',
            from: ['/api-overview/'],
          },
          {
            to: '/integration/external-integrations/aperture-vista-to-device42-migration/',
            from: ['/external-integrations/aperture-vista-to-device42-migration/'],
          },
          {
            to: '/integration/external-integrations/azure-migrate/',
            from: ['/external-integrations/azure-migrate/'],
          },
          {
            to: '/integration/external-integrations/carbonite-migration/',
            from: ['/external-integrations/carbonite-migration/'],
          },
          {
            to: '/integration/external-integrations/cherwell-integration/',
            from: ['/external-integrations/cherwell-integration/'],
          },
          {
            to: '/integration/external-integrations/device42-cloud-connector-overview/',
            from: ['/external-integrations/device42-cloud-connector-overview/', '/external-integrations/device42-cloud-connector/'],
          },
          {
            to: '/integration/external-integrations/cloud-services-settings/',
            from: ['/external-integrations/cloud-services-settings/'],
          },
          {
            to: '/integration/external-integrations/device42-confluence-connector/',
            from: ['/external-integrations/device42-confluence-connector/'],
          },
          {
            to: '/integration/external-integrations/cyberark-integration/',
            from: ['/external-integrations/cyberark-integration/'],
          },
          {
            to: '/integration/external-integrations/external-logging-config/',
            from: ['/external-integrations/external-logging-config/', '/external-integrations/external-logging/', '/external-integrations/external-logging-in-device42/'],
          },
          {
            to: '/integration/external-integrations/configuring-splunk/',
            from: ['/external-integrations/configuring-splunk/'],
          },
          {
            to: '/integration/external-integrations/foreman-smart-proxy-plugin/',
            from: ['/external-integrations/foreman-smart-proxy-plugin/'],
          },
          {
            to: '/integration/external-integrations/freshservice-integration/',
            from: ['/external-integrations/freshservice-integration/'],
          },
          {
            to: '/integration/external-integrations/device42-hp-service-manager-integration/',
            from: ['/external-integrations/device42-hp-service-manager-integration/'],
          },
          {
            to: '/integration/external-integrations/jenkins-integration/',
            from: ['/external-integrations/jenkins-integration/'],
          },
          {
            to: '/integration/external-integrations/jira-integrations/device42-jira-integration/',
            from: ['/external-integrations/device42-jira-integration/'],
          },
          {
            to: '/integration/external-integrations/jira-integrations/device42-jira-assets-integration/',
            from: ['/external-integrations/device42-jira-assets-integration/'],
          },
          {
            to: '/integration/external-integrations/jira-integrations/device42-jira-cloud-integration/',
            from: ['/external-integrations/device42-jira-cloud-integration/'],
          },
          {
            to: '/integration/external-integrations/microsoft-laps-integration/',
            from: ['/external-integrations/microsoft-laps-integration/'],
          },
          {
            to: '/integration/external-integrations/monitor-device42-health-status-in-nagios/',
            from: ['/external-integrations/monitor-device42-health-status-in-nagios/'],
          },
          {
            to: '/integration/external-integrations/odbc-driver-integration/',
            from: ['/external-integrations/odbc-driver-integration/'],
          },
          {
            to: '/integration/external-integrations/jdbc-driver-integration/',
            from: ['/external-integrations/jdbc-driver-integration/'],
          },
          {
            to: '/integration/external-integrations/opsgenie-integration/',
            from: ['/external-integrations/opsgenie-integration/'],
          },
          {
            to: '/integration/external-integrations/pagerduty-integration/',
            from: ['/external-integrations/pagerduty-integration/'],
          },
          {
            to: '/integration/external-integrations/powerbi-integration/',
            from: ['/external-integrations/powerbi-integration/'],
          },
          {
            to: '/integration/external-integrations/puppet-and-chef-integrations/',
            from: ['/external-integrations/puppet-and-chef-integrations/'],
          },
          {
            to: '/integration/external-integrations/collect-node-data-from-device42-for-rundeck/',
            from: ['/external-integrations/collect-node-data-from-device42-for-rundeck/'],
          },
          {
            to: '/integration/external-integrations/device42-saltstack-integration/',
            from: ['/external-integrations/device42-saltstack-integration/'],
          },
          {
            to: '/integration/external-integrations/device42-servicenow-connector/',
            from: ['/external-integrations/device42-servicenow-connector/'],
          },
          {
            to: '/integration/external-integrations/webhooks-generic-integration/',
            from: ['/external-integrations/webhooks-generic-integration/'],
          },
          {
            to: '/integration/external-integrations/device42-zendesk-connector/',
            from: ['/external-integrations/device42-zendesk-connector/'],
          },
          {
            to: '/reports/reports/insights-plus/',
            from: ['/insights-plus/'],
          },
          {
            to: '/reports/reports/advanced-reporting/',
            from: ['/reports/advanced-reporting/'],
          },
          {
            to: '/reports/reports/aws-migration-evaluator/',
            from: ['/reports/aws-migration-evaluator/'],
          },
          {
            to: '/reports/reports/aws-migration-hub/',
            from: ['/reports/aws-migration-hub/'],
          },
          {
            to: '/reports/reports/cloud-endure-device42/',
            from: ['/reports/cloud-endure-device42/'],
          },
          {
            to: '/reports/reports/cloud-recommendation-engine/',
            from: ['/reports/cloud-recommendation-engine/'],
          },
          {
            to: '/reports/reports/creating-reports/',
            from: ['/reports/creating-reports/'],
          },
          {
            to: '/reports/reports/discovery-quality-scores/',
            from: ['/reports/discovery-quality-scores/'],
          },
          {
            to: '/reports/reports/export-records/',
            from: ['/reports/export-records/'],
          },
          {
            to: '/reports/reports/jobs-dashboard/',
            from: ['/reports/jobs-dashboard/'],
          },
          {
            to: '/reports/reports/object-history-aka-audit-log/',
            from: ['/reports/object-history-aka-audit-log/'],
          },
          {
            to: '/reports/reports/periodic-jobs-page/',
            from: ['/reports/periodic-jobs-page/'],
          },
          {
            to: '/reports/reports/relutech-for-aws-migration/',
            from: ['/reports/relutech-for-aws-migration/'],
          },
          {
            to: '/reports/reports/run-book/',
            from: ['/reports/run-book/'],
          },
          {
            to: '/reports/reports/save-and-schedule-reports/',
            from: ['/reports/save-and-schedule-reports/'],
          },
          {
            to: '/reports/reports/setup-alerts-and-notifications/',
            from: ['/reports/setup-alerts-and-notifications/'],
          },
          {
            to: '/reports/device42-doql/',
            from: ['/device42-doql/'],
          },
          {
            to: '/reports/device42-doql/db-viewer-schema/',
            from: ['/device42-doql/db-viewer-schema/'],
          },
          {
            to: '/reports/device42-doql/insightsai/',
            from: ['/reports/device42-doql/doql-ai/'],
          },
          {
            to: '/reports/dbb-cookbook/',
            from: ['/dbb-cookbook/'],
          },
          {
            to: '/reports/dbb-cookbook/app-dependency-mapping/',
            from: ['/dbb-cookbook/app-dependency-mapping/'],
          },
          {
            to: '/reports/dbb-cookbook/business-app-dependencies/',
            from: ['/dbb-cookbook/app-dependency-mapping/business-app-dependencies/'],
          },
          {
            to: '/reports/dbb-cookbook/business-app-device-impacts/',
            from: ['/dbb-cookbook/app-dependency-mapping/business-app-device-impacts/'],
          },
          {
            to: '/reports/dbb-cookbook/business-app-hardware-eol-eos-impact/',
            from: ['/dbb-cookbook/app-dependency-mapping/business-app-hardware-eol-eos-impact/'],
          },
          {
            to: '/reports/dbb-cookbook/business-app-operating-system-eol-eos/',
            from: ['/dbb-cookbook/app-dependency-mapping/business-app-operating-system-eol-eos/'],
          },
          {
            to: '/reports/dbb-cookbook/workload-and-application-communication-business-app-communications/',
            from: ['/dbb-cookbook/app-dependency-mapping/workload-and-application-communication-business-app-communications/'],
          },
          {
            to: '/reports/dbb-cookbook/workload-and-application-communication-ip-service-communications/',
            from: ['/dbb-cookbook/app-dependency-mapping/workload-and-application-communication-ip-service-communications/'],
          },
          {
            to: '/reports/dbb-cookbook/compute/',
            from: ['/dbb-cookbook/compute/'],
          },
          {
            to: '/reports/dbb-cookbook/compute-devices/',
            from: ['/dbb-cookbook/compute/compute-devices/'],
          },
          {
            to: '/reports/dbb-cookbook/device-count-by-device-type/',
            from: ['/dbb-cookbook/compute/device-count-by-device-type/'],
          },
          {
            to: '/reports/dbb-cookbook/device-count-by-service-level/',
            from: ['/dbb-cookbook/compute/device-count-by-service-level/'],
          },
          {
            to: '/reports/dbb-cookbook/device-to-rack-inventory/',
            from: ['/dbb-cookbook/compute/device-to-rack-inventory/'],
          },
          {
            to: '/reports/dbb-cookbook/devices-missing-device_type-or-service_level/',
            from: ['/dbb-cookbook/compute/devices-missing-device_type-or-service_level/'],
          },
          {
            to: '/reports/dbb-cookbook/physical-device-inventory/',
            from: ['/dbb-cookbook/compute/physical-device-inventory/'],
          },
          {
            to: '/reports/dbb-cookbook/physical-devices-by-customer-department/',
            from: ['/dbb-cookbook/compute/physical-devices-by-customer-department/'],
          },
          {
            to: '/reports/dbb-cookbook/physical-devices-without-hardware-model/',
            from: ['/dbb-cookbook/compute/physical-devices-without-hardware-model/'],
          },
          {
            to: '/reports/dbb-cookbook/physical-inventory-by-manufacturer/',
            from: ['/dbb-cookbook/compute/physical-inventory-by-manufacturer/'],
          },
          {
            to: '/reports/dbb-cookbook/vm-density/',
            from: ['/dbb-cookbook/compute/vm-density/'],
          },
          {
            to: '/reports/dbb-cookbook/vm-devices/',
            from: ['/dbb-cookbook/compute/vm-devices/'],
          },
          {
            to: '/reports/dbb-cookbook/vm-inventory/',
            from: ['/dbb-cookbook/compute/vm-inventory/'],
          },
          {
            to: '/reports/dbb-cookbook/security/',
            from: ['/dbb-cookbook/security/'],
          },
          {
            to: '/reports/dbb-cookbook/devices-accessed-by-external-ips/',
            from: ['/dbb-cookbook/security/devices-accessed-by-external-ips/'],
          },
          {
            to: '/reports/dbb-cookbook/devices-possibly-containing-pii-that-have-public-ips/',
            from: ['/dbb-cookbook/security/devices-possibly-containing-pii-that-have-public-ips/'],
          },
          {
            to: '/reports/dbb-cookbook/devices-using-commonly-exploited-ports/',
            from: ['/dbb-cookbook/security/devices-using-commonly-exploited-ports/'],
          },
          {
            to: '/reports/dbb-cookbook/devices-with-mismatch-between-prod-and-non-prod-environments/',
            from: ['/dbb-cookbook/security/devices-with-mismatch-between-prod-and-non-prod-environments/'],
          },
          {
            to: '/reports/dbb-cookbook/devices-with-no-oss/',
            from: ['/dbb-cookbook/security/devices-with-no-oss/'],
          },
          {
            to: '/reports/dbb-cookbook/devices-with-os-but-no-software/',
            from: ['/dbb-cookbook/security/devices-with-os-but-no-software/'],
          },
          {
            to: '/reports/dbb-cookbook/devices-with-prohibited-software-as-designated-by-customer/',
            from: ['/dbb-cookbook/security/devices-with-prohibited-software-as-designated-by-customer/'],
          },
          {
            to: '/reports/dbb-cookbook/network-information-for-ips-without-attached-devices/',
            from: ['/dbb-cookbook/security/network-information-for-ips-without-attached-devices/'],
          },
          {
            to: '/infrastructure-management/devices/device-add-edit/',
            from: ['/devices/device-add-edit/'],
          },
          {
            to: '/infrastructure-management/devices/clone-a-device/',
            from: ['/devices/clone-a-device/'],
          },
          {
            to: '/infrastructure-management/devices/device-blade-chassis/',
            from: ['/devices/device-blade-chassis/'],
          },
          {
            to: '/infrastructure-management/devices/device-blade-slots/',
            from: ['/devices/device-blade-slots/', '/device/device-blade-slots/'],
          },
          {
            to: '/infrastructure-management/devices/device-cluster/',
            from: ['/devices/device-cluster/'],
          },
          {
            to: '/infrastructure-management/devices/device-lifecycle-tab/',
            from: ['/devices/device-lifecycle-tab/'],
          },
          {
            to: '/infrastructure-management/devices/device-other-tab/',
            from: ['/devices/device-other-tab/'],
          },
          {
            to: '/infrastructure-management/devices/device-parts-slots/',
            from: ['/devices/device-parts-slots/', '/device/device-parts-slots/'],
          },
          {
            to: '/infrastructure-management/devices/device-parts-tab/',
            from: ['/devices/device-parts-tab/'],
          },
          {
            to: '/infrastructure-management/devices/device-properties-tab/',
            from: ['/devices/device-properties-tab/'],
          },
          {
            to: '/infrastructure-management/devices/device-services-tab/',
            from: ['/devices/device-services-tab/'],
          },
          {
            to: '/infrastructure-management/devices/device-software-tab/',
            from: ['/devices/device-software-tab/'],
          },
          {
            to: '/infrastructure-management/devices/device-virtual-blade/',
            from: ['/devices/device-virtual-blade/'],
          },
          {
            to: '/infrastructure-management/devices/device-name-profiles/',
            from: ['/devices/device-name-profiles/'],
          },
          {
            to: '/infrastructure-management/devices/device-custom-fields/',
            from: ['/devices/device-custom-fields/'],
          },
          {
            to: '/infrastructure-management/devices/device-ignore-rules/',
            from: ['/devices/device-ignore-rules/'],
          },
          {
            to: '/infrastructure-management/devices/device-list-view-2/',
            from: ['/devices/device-list-view-2/'],
          },
          {
            to: '/infrastructure-management/devices/device-list-view-2/',
            from: ['/devices/device-list-view/'],
          },
          {
            to: '/infrastructure-management/devices/what-if-scenarios/',
            from: ['/devices/what-if-scenarios/'],
          },
          {
            to: '/infrastructure-management/devices/hardware-models-templates/',
            from: ['/devices/hardware-models-templates/', '/device/hardware/'],
          },
          {
            to: '/infrastructure-management/software/software-license-management/',
            from: ['/apps/software/software-license-management/', '/solution-guides/software-license-management/'],
          },
          {
            to: '/infrastructure-management/software/software-licensing-alerts-and-notifications/',
            from: ['/apps/software/software-licensing-alerts-and-notifications/'],
          },
          {
            to: '/infrastructure-management/software/software-components/',
            from: ['/apps/software/software-components/'],
          },
          {
            to: '/infrastructure-management/software/merge-and-assign-software-components/',
            from: ['/apps/software/merge-and-assign-software-components/'],
          },
          {
            to: '/infrastructure-management/software/software-in-use/',
            from: ['/apps/software/software-in-use/'],
          },
          {
            to: '/infrastructure-management/software/software-eol-eos/',
            from: ['/apps/software/software-eol-eos/'],
          },
          {
            to: '/infrastructure-management/operating-systems/',
            from: ['/apps/operating-systems/'],
          },
          {
            to: '/infrastructure-management/certificate-management/',
            from: ['/apps/certificate-management/'],
          },
          {
            to: '/infrastructure-management/buildings-rooms-and-racks/',
            from: ['/buildings-rooms-and-racks/'],
          },
          {
            to: '/infrastructure-management/buildings-rooms-and-racks/auditing-racks/',
            from: ['/buildings-rooms-and-racks/auditing-racks/'],
          },
          {
            to: '/infrastructure-management/buildings-rooms-and-racks/buildings-and-rooms/',
            from: ['/buildings-rooms-and-racks/buildings-and-rooms/'],
          },
          {
            to: '/infrastructure-management/buildings-rooms-and-racks/impact-charts/',
            from: ['/buildings-rooms-and-racks/impact-charts/'],
          },
          {
            to: '/infrastructure-management/buildings-rooms-and-racks/racks/',
            from: ['/buildings-rooms-and-racks/racks/'],
          },
          {
            to: '/infrastructure-management/connectivity/',
            from: ['/connectivity/'],
          },
          {
            to: '/infrastructure-management/connectivity/cables/',
            from: ['/connectivity/cables/'],
          },
          {
            to: '/infrastructure-management/connectivity/circuits/',
            from: ['/connectivity/circuits/'],
          },
          {
            to: '/infrastructure-management/connectivity/creating-wall-jacks/',
            from: ['/connectivity/creating-wall-jacks/'],
          },
          {
            to: '/infrastructure-management/connectivity/patch-panels/',
            from: ['/connectivity/patch-panels/'],
          },
          {
            to: '/infrastructure-management/connectivity/patch-panels/creating-patch-panels-from-scratch-in-device42-an-example/',
            from: ['/connectivity/patch-panels/creating-patch-panels-from-scratch-in-device42-an-example/'],
          },
          {
            to: '/infrastructure-management/connectivity/patch-panels/patch-panel-cable-management-definitions-and-legends-2/',
            from: ['/connectivity/patch-panels/patch-panel-cable-management-definitions-and-legends/'],
          },
          {
            to: '/infrastructure-management/power-units/',
            from: ['/power-units/'],
          },
          {
            to: '/infrastructure-management/power-units/adding-atss/',
            from: ['/power-units/adding-atss/'],
          },
          {
            to: '/infrastructure-management/power-units/',
            from: ['/power-units/pdus/'],
          },
          {
            to: '/infrastructure-management/power-units/adding-pdus/',
            from: ['/power-units/pdus/adding-pdus/'],
          },
          {
            to: '/infrastructure-management/power-units/defining-pdu-models/',
            from: ['/power-units/pdus/defining-pdu-models/', '/pdu_overview/defining-pdu-models/'],
          },
          {
            to: '/infrastructure-management/power-units/pdu-ports/',
            from: ['/power-units/pdus/pdu-ports/', '/pdu/'],
          },
          {
            to: '/infrastructure-management/power-units/pdu-rack-display/',
            from: ['/power-units/pdus/pdu-rack-display/', '/pdu_overview/pdu-rack-display/'],
          },
          {
            to: '/infrastructure-management/power-units/supported-pdu-vendors/',
            from: ['/power-units/supported-pdu-vendors/'],
          },
          {
            to: '/infrastructure-management/parts-and-parts-slots/',
            from: ['/parts-and-parts-slots/'],
          },
          {
            to: '/infrastructure-management/parts-and-parts-slots/importing-part-models/',
            from: ['/parts-and-parts-slots/importing-part-models/', '/spare-parts-management/importing-part-models/'],
          },
          {
            to: '/infrastructure-management/parts-and-parts-slots/importing-parts/',
            from: ['/parts-and-parts-slots/importing-parts/'],
          },
          {
            to: '/infrastructure-management/parts-and-parts-slots/managing-spare-parts/',
            from: ['/parts-and-parts-slots/managing-spare-parts/'],
          },
          {
            to: '/infrastructure-management/parts-and-parts-slots/part-model-templates/',
            from: ['/parts-and-parts-slots/part-model-templates/', '/spare-parts-management/models-and-parts/'],
          },
          {
            to: '/infrastructure-management/parts-and-parts-slots/parts-slots/',
            from: ['/parts-and-parts-slots/parts-slots/'],
          },
          {
            to: '/infrastructure-management/power-and-environmental-monitoring/environmental-monitoring/',
            from: ['/energy-monitoringmanagement/environmental-monitoring/', '/energy-monitoringmanagement/'],
          },
          {
            to: '/infrastructure-management/power-and-environmental-monitoring/getting-started-with-power-and-environmental-monitoring/',
            from: ['/energy-monitoringmanagement/getting-started-with-power-and-environmental-monitoring/'],
          },
          {
            to: '/infrastructure-management/power-and-environmental-monitoring/manage-monitored-ips/',
            from: ['/energy-monitoringmanagement/manage-monitored-ips/'],
          },
          {
            to: '/infrastructure-management/power-and-environmental-monitoring/power-monitoring-and-control/',
            from: ['/energy-monitoringmanagement/power-monitoring-and-control/'],
          },
          {
            to: '/infrastructure-management/power-and-environmental-monitoring/power-rc-setup-job-migration/',
            from: ['/energy-monitoringmanagement/power-rc-setup-job-migration/'],
          },
          {
            to: '/infrastructure-management/power-and-environmental-monitoring/unit-display-settings/',
            from: ['/energy-monitoringmanagement/unit-display-settings/'],
          },
          {
            to: '/infrastructure-management/ipam/dns-records/',
            from: ['/ipam/dns-records/'],
          },
          {
            to: '/infrastructure-management/ipam/dns-zones/',
            from: ['/ipam/dns-zones/'],
          },
          {
            to: '/infrastructure-management/ipam/ip-addresses/',
            from: ['/ipam/ip-addresses/'],
          },
          {
            to: '/infrastructure-management/ipam/ip-nat-map/',
            from: ['/ipam/ip-nat-map/'],
          },
          {
            to: '/infrastructure-management/ipam/',
            from: ['/ipam/mac-addresses/'],
          },
          {
            to: '/infrastructure-management/ipam/',
            from: ['/infrastructure-management/ipam/mac-addresses/'],
          },
          {
            to: '/infrastructure-management/ipam/subnet-tree-view/',
            from: ['/ipam/subnet-tree-view/'],
          },
          {
            to: '/infrastructure-management/ipam/subnets/',
            from: ['/ipam/subnets/'],
          },
          {
            to: '/infrastructure-management/ipam/switch-ports/',
            from: ['/ipam/switch-ports/', '/ipam/switch-port/'],
          },
          {
            to: '/infrastructure-management/ipam/switch-templates/',
            from: ['/ipam/switch-templates/'],
          },
          {
            to: '/infrastructure-management/ipam/vlans/',
            from: ['/ipam/vlans/'],
          },
          {
            to: '/infrastructure-management/ipam/vrf-groups/',
            from: ['/ipam/vrf-groups/'],
          },
          {
            to: '/infrastructure-management/mobile-inventory/',
            from: ['/mobile-inventory/'],
          },
          {
            to: '/infrastructure-management/mobile-inventory/asset-tag-printing/',
            from: ['/mobile-inventory/asset-tag-printing/'],
          },
          {
            to: '/infrastructure-management/mobile-inventory/auto-assign-asset-numbers/',
            from: ['/mobile-inventory/auto-assign-asset-numbers/'],
          },
          {
            to: '/infrastructure-management/mobile-inventory/bulk-qr-printing/',
            from: ['/mobile-inventory/bulk-qr-printing/'],
          },
          {
            to: '/infrastructure-management/mobile-inventory/printing-qr-codes-from-ie/',
            from: ['/mobile-inventory/printing-qr-codes-from-ie/'],
          },
          {
            to: '/infrastructure-management/mobile-inventory/printing-qr-codes-from-firefox/',
            from: ['/mobile-inventory/printing-qr-codes-from-firefox/'],
          },
          {
            to: '/infrastructure-management/mobile-inventory/understanding-qr-and-bar-codes-in-device42/',
            from: ['/mobile-inventory/understanding-qr-and-bar-codes-in-device42/', '/qr-codes-asset-tags-inventory-management-mobile-devices/understanding-qr-codes/'],
          },
          {
            to: '/infrastructure-management/mobile-inventory/using-mobile-devices-for-asset-management/',
            from: ['/mobile-inventory/using-mobile-devices-for-asset-management/'],
          },
          {
            to: '/infrastructure-management/accounting/purchases/',
            from: ['/accounting/purchases/'],
          },
          {
            to: '/infrastructure-management/accounting/',
            from: ['/accounting/'],
          },
          {
            to: '/auto-discovery/d42-ping-sweep/',
            from: ['/how-to-videos/ping-sweep-tool-how-to/'],
          },
          {
            to: '/getstarted/getting-started-with-auto-discovery/',
            from: ['/how-to-videos/agentless-auto-discovery-tool-how-to/'],
          },
          {
            to: '/how-to-videos/',
            from: ['/how-to-videos/add-a-route-to-device42/'],
          },
          {
            to: '/how-to-videos/api-imports-add-create-hardware-models/',
            from: ['/api/'],
          },
          {
            to: '/how-to-videos/',
            from: ['/how-to-videos/index/'],
          },
          {
            to: '/how-to-videos/',
            from: [
              '/how-to-videos/add-a-new-route-to-device42/',
              '/how-to-videos/building-hierarchy-view-how-to',
              '/how-to-videos/device42-object-query-language',
              '/how-to-videos/jira-integration-how-to',
              '/how-to-videos/packet-capture'
            ],
          },
          {
            to: '/how-to-videos/update-device42-appliance-how-to/',
            from: ['/how-to-videos/update-d42-how-to/'],
          },
          {
            to: '/auto-discovery/enrichai-data/enrichai-opt-out',
            from: ['/enrichai-data/enrichai-opt-out/'],
          },
          {
            to: '/auto-discovery/enrichai-data/',
            from: ['/enrichai-data/'],
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
            'https://github.com/device42/device42-docs/edit/main/',
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
        indexName: '<ENV_ALGOLIA_INDEX>',
        appId: '<ENV_ALGOLIA_APP_ID>',
        apiKey: '<ENV_ALGOLIA_READ_KEY>'
      },
      navbar: {
        logo: {
          alt: 'Device42 Logo',
          src: 'img/device42-fw-black.webp',
          srcDark: 'img/device42-fw-white.webp',
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
          {
            type: 'html',
            position: 'right', value:
              `<a href=# class=navbar__button data-fr-widget>
                Page feedback
              </a>`,

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

