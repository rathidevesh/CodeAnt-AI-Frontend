import React from 'react';
import styles from './RepositoryCard.module.css';

export default function RepositoryCard({ name, isPublic, language, size, updatedAt }) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>{name}</h3>
        <span className={styles.badge}>{isPublic ? 'Public' : 'Private'}</span>
      </header>
      
      <div className={styles.details}>
        <div className={styles.language}>
          <span>{language}</span>
          <span className={styles.languageDot} aria-hidden="true" />
        </div>
        
        <div className={styles.size}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/93173ae13f6fd4d3ac7d1c084719020b99ca7ff71b107ad7729045de14858aff?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c" alt="" className={styles.sizeIcon} />
          <span>{size} KB</span>
        </div>
        
        <div>Updated {updatedAt}</div>
      </div>
    </article>
  );
}