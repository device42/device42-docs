import React from "react";
import styles from "./footer.module.css";
import clsx from "clsx";
import Icon from "@site/src/components/icon";
import Link from '@docusaurus/Link';


const socials = [
  { link: "https://feeds.feedburner.com/Device42", icon: "fa-solids fa-wifi" },
  { link: "https://www.youtube.com/user/godevice42", icon: "fa-brands fa-youtube" },
  { link: "https://www.facebook.com/device42", icon: "fa-brands fa-facebook" },
  { link: "https://github.com/device42", icon: "fa-brands fa-github-alt" },
  { link: "https://twitter.com/device42", icon: "fa-brands fa-twitter-square" },
  { link: "https://www.linkedin.com/company/device42", icon: "fa-brands fa-linkedin" }
]


const solutions = [
  { link: "https://www.device42.com/device42-for-dcim/", title: "Device42 as DCIM/CMDB" },
  { link: "https://www.device42.com/device42-for-it-operations/", title: "Device42 for IT Operations" },
  { link: "https://www.device42.com/device42-for-transformation/", title: "Device42 for Transformation" },
  { link: "https://www.device42.com/tours/", title: "Solution Tours" },
  { link: "https://www.device42.com/features/device-discovery/", title: "Infrastructure and IaaS Discovery" },
  { link: "https://www.device42.com/features/application-mappings/", title: "Application Dependency Mappings" },
  { link: "https://www.device42.com/features/data-center-management/", title: "Data Center Management" },
  { link: "https://www.device42.com/features/cmdb/", title: "CMDB" },
  { link: "https://www.device42.com/features/cloud-recommendation-engine/", title: "Cloud Recommendation  Engine" },
  { link: "https://www.device42.com/features/it-asset-management/", title: "IT Asset Management" },
  { link: "https://www.device42.com/features/ip-address-management/", title: "IP Address Management" },
  { link: "https://www.device42.com/features/enterprise-password-management/", title: "Password Manager" },
  { link: "https://www.device42.com/tours/ssl-certificate-management/", title: "SSL Certificate Management" },
  { link: "https://www.device42.com/migrations/", title: "Migrations" }
]


const partners = [
  { link: "https://www.device42.com/find-partner/", title: "Find Partner" },
  { link: "https://www.device42.com/become-a-partner/", title: "Become A Partner" }
]

const quickNavigation = [
  { link: "https://api.device42.com/", title: "API Documentation" },
  { link: "https://www.device42.com/blog/", title: "Blog" },
  { link: "https://www.device42.com/contact/", title: "Contact Us" },
  { link: "https://docs.device42.com/", title: "Documentation" },
  { link: "https://www.device42.com/download/", title: "Free Trial" },
  { link: "https://www.device42.com/use-cases/", title: "Use Cases" },
  { link: "https://www.device42.com/eula/", title: "End User License Agreement" }
]

const compare = [
  { link: "https://www.device42.com/vs/bmc-atrium/", title: "BMC Atrium" },
  { link: "https://www.device42.com/vs/bmc-discovery/", title: "BMC Discovery" },
  { link: "https://www.device42.com/vs/hp-ucmdb/", title: "HP uCMDB" },
  { link: "https://www.device42.com/vs/infoblox/", title: "Infoblox IPAM" },
  { link: "https://www.device42.com/vs/nlyte/", title: "Nlyte" },
  { link: "https://www.device42.com/vs/risc-networks/", title: "RISC Networks" },
  { link: "https://www.device42.com/vs/racktables/", title: "Racktables" },
  { link: "https://www.device42.com/vs/servicenow/", title: "ServiceNow" },
  { link: "https://www.device42.com/vs/sunbird/", title: "Sunbird DCIM" },
  { link: "https://www.device42.com/vs/", title: "Device42 vs, Others" }
]

function Social({ link, icon }) {
  return (
    <Link href={link}>
      <Icon fa={icon} sz="lg" cn={styles.socialIcon}/>
    </Link>
  )
}

function MenuItem({ link, title }) {
  return (
    <li>
      <Link href={link}> {title} </Link>
    </li>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="clearfix">
          <div className={clsx(styles.footerWidget, styles.footerSection)}>
            <div>
              <h4 className={styles.title}>Solutions</h4>
              <ul className={styles.menuSolutionsMenu}>
                {solutions.map((item) => (
                  <MenuItem key={item.link} {...item} />
                ))}
              </ul>
            </div>

            <div>
              <h4 className={styles.title}>Partners</h4>
              <ul>
                {partners.map((item) => (
                  <MenuItem key={item.link} {...item} />
                ))}
              </ul>
            </div>

            <div>
              <h4 className={styles.title}>Quick Navigation</h4>
              <ul>
                {quickNavigation.map((item) => (
                  <MenuItem key={item.link} {...item} />
                ))}
              </ul>
            </div>

            <div>
              <h4 className={styles.title}>COMPARE</h4>
              <ul>
                {compare.map((item) => (
                  <MenuItem key={item.link} {...item} />
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.footerWidget}>
            <div>
              <div>
                <div>
                  <a href="/">
                    <img width="285" height="68" alt="Device42"
                         src="https://blog.device42.com/wp-content/uploads/2021/08/d42-rgb-reverse.svg"/>
                  </a>
                </div>
                <p>
                    <span>
                      &copy;&nbsp;{new Date().getFullYear()}&nbsp;
                    </span>
                  Device42, Inc. All rights are reserved.
                </p>
              </div>
              <div>
                <div className={styles.footerAddress}>
                  <div>600 Saw Mill Road</div>
                  <div>West Haven, CT 06516</div>
                </div>
                <div className={styles.footerAddress}>
                  <div><a href="tel:1(844)424-2422">1 (844) 424-2422</a></div>
                  <div><a href="tel:1(203)409-7242">1 (203) 409-7242</a></div>
                </div>
                <div className={styles.footerAddress}>
                  <div><a href="mailto:info@device42.com">info@device42.com</a></div>
                  <div><a href="https://www.device42.com/privacy/">Privacy Policy</a></div>
                </div>
              </div>
              <div>
                {socials.map((item) => (
                  <Social key={item.link} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
