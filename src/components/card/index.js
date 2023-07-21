import React from 'react';
import styles from './card.module.css';
import Link from '@docusaurus/Link';

const ContentCard = ({ icon, title, link }) => {
  return (
    <Link href={link}>
      <div className={styles.cardLink}>
        <div>
          {icon}
        </div>
        <div>
          <div className={styles.cardLinkText}>
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
