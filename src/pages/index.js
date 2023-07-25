import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ContentCard from "@site/src/components/card";
import styles from './index.module.css';
import Footer from "@site/src/components/footer";
import Icon from "@site/src/components/icon";

const indexCards = [
  {
    title: "Getting Started",
    icon: <Icon fa="fa-regular fa-clipboard" />,
    link: "/docs/getting_started"
  },
  {
    title: "Discovery",
    icon: <Icon fa="fa-solid fa-magnifying-glass" />,
    link: "docs/discovery/"
  },
  {
    title: "Applications",
    icon: <Icon fa="fa-solid fa-box-archive" />,
    link: "docs/applications/"
  },
  {
    title: "Infrastructure Management",
    icon: <Icon fa="fa-regular fa-building" />,
    link: "/docs/infrastructure_management/"
  },
  {
    title: "Reporting",
    icon: <Icon fa="fa-solid fa-bug" />,
    link: "/docs/reporting/"
  },
  {
    title: "Integration",
    icon: <Icon fa="fa-regular fa-object-group" />,
    link: "/docs/integration/"
  },
  {
    title: "Administration",
    icon: <Icon fa="fa-solid fa-screwdriver-wrench" />,
    link: "/docs/administration/"
  },
  {
    title: "Videos",
    icon: <Icon fa="fa-solid fa-video" />,
    link: "/docs/videos/",
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      noFooter={true}>
      <main className={styles.mainSection}>
        <section className={styles.heroSection}>
          <h1>{siteConfig.tagline}</h1>
        </section>
        <section className={styles.cardSection}>
          <div className="container">
            <div className={styles.contentCard}>
              {indexCards.map((item) => (
                <ContentCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </Layout>
  );
}
