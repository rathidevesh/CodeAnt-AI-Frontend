import React from 'react';
import styles from './SignInButton.module.css';

export function SignInButton({ icon, provider, onClick }) {
  return (
    <button 
      className={styles.signInButton}
      onClick={onClick}
      aria-label={`Sign in with ${provider}`} 
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className={styles.providerIcon}
      />
      <span className={styles.buttonText}>
        Sign in with {provider}
      </span>
    </button>
  );
}
