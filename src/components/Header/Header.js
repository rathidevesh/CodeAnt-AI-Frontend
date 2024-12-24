import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Repositories</h1>
          <p className={styles.subtitle}>33 total repositories</p>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.button} aria-label="Refresh repositories">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8bcc0d7f220a77bea9c3ed56bfb915ac13e836359b468cdfba6e82902f6b5b9?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c" 
              alt="" 
              className={styles.buttonIcon} 
            />
            <span>Refresh All</span>
          </button>
          
          <button className={`${styles.button} ${styles.primary}`} aria-label="Add repository">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1229585b39434356c145e4a484dbabf3ec334454f8f3f73e8f6539a7d12e903b?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c" 
              alt="" 
              className={styles.buttonIcon} 
            />
            <span>Add Repository</span>
          </button>
        </div>
      </div>
      
      <button className={`${styles.button} ${styles.secondary}`} aria-label="Search repositories">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4b1b07ae2c2bc7ead970984ace0e3fdc94a1efe3d2f7b455b486121e4c86e71?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c" 
          alt="" 
          className={styles.buttonIcon} 
        />
        <span>Search Repositories</span>
      </button>
    </header>
  );
}
