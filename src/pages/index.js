import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Footer from "@site/src/components/footer";
import ContentCard from "@site/src/components/card";
import Link from "@docusaurus/Link";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";
import {
  productDocData,
  solutionGuideData,
} from "@site/src/components/data/dummy-data";
import clsx from "clsx";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.tagline}`} noFooter={true}>
      <main className={styles.mainSection}>
        <section className={styles.heroSection}>
          <h1>{siteConfig.tagline}</h1>
        </section>
        <section className={styles.helpSection}>
          <h2>How can we help you?</h2>
          <div className={clsx(styles.searchBox, "indexSearch")}>
            <DocSearch
              indexName={siteConfig.themeConfig.algolia.indexName}
              appId={siteConfig.themeConfig.algolia.appId}
              apiKey={siteConfig.themeConfig.algolia.apiKey}
            />
          </div>
        </section>
        <section className={styles.productsSection}>
          <div className={styles.cardContainer}>
            <h2>Product Documentation</h2>
            <div className={styles.cardsContainer}>
              {productDocData.map((card, idx) => (
                <ContentCard key={idx} {...card} />
              ))}
            </div>
          </div>
          <div className={styles.cardContainer}>
            <h2>Solution Guides</h2>

            <div className={styles.cardsContainer}>
              {solutionGuideData.map((card, idx) => (
                <ContentCard key={idx} {...card} />
              ))}
              <Link to="/" className={styles.solutionsGuidesSeeMore}>
                See More Solution Guides &gt;&gt;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
