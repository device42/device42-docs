import React, { useEffect } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowUpRightFromSquare, faBook } from "@fortawesome/free-solid-svg-icons";
import styles from "./download-card.module.css";

function DownloadButton({ label, href }) {
  const external = /^https?:\/\//.test(href);
  const url = useBaseUrl(href);
  return (
    <a
      className={styles.button}
      href={external ? href : url}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}
    >
      <FontAwesomeIcon icon={external ? faArrowUpRightFromSquare : faDownload} />
      <span>{label}</span>
    </a>
  );
}

// Match every card on the page to the tallest one.
function equalizeCards() {
  const cards = [...document.querySelectorAll(`.${styles.card}`)];
  cards.forEach((c) => (c.style.minHeight = ""));
  const max = Math.max(...cards.map((c) => c.offsetHeight));
  cards.forEach((c) => (c.style.minHeight = `${max}px`));
}

export function DownloadGrid({ children }) {
  useEffect(() => {
    let frame;
    const run = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(equalizeCards);
    };
    run();
    // Fonts change text height after first paint.
    document.fonts?.ready.then(run);
    window.addEventListener("resize", run);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", run);
    };
  }, []);
  return <div className={styles.grid}>{children}</div>;
}

// The title is a Markdown heading in the children so it gets an anchor and a TOC entry.
export default function DownloadCard({ version, docs, downloads = [], children }) {
  return (
    <div className={styles.card}>
      {version && <p className={styles.version}>Version <strong>{version}</strong></p>}
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        {docs && (
          <Link className={styles.docs} to={docs}>
            <FontAwesomeIcon icon={faBook} />
            <span>Documentation</span>
          </Link>
        )}
        {downloads.length > 0 && (
          <div className={styles.buttons}>
            {downloads.map((d) => (
              <DownloadButton key={d.href} label={d.label} href={d.href} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
