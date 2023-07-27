import React from "react";
import styles from "./card.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

const ContentCard = ({ title, icon, whiteIcon, link }) => {
  return (
    <Link href={link} className={styles.myCard}>
      <ThemedImage
        sources={{
          light: icon,
          dark: whiteIcon,
        }}
        className={styles.myCardIcon}
      />
      <p>{title}</p>
    </Link>
  );
};

export default ContentCard;
