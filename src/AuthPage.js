import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInButton } from './SignInButton';
import { SIGN_IN_OPTIONS } from './constants';
import styles from './AuthPage.module.css';

export function AuthPage() {
  const [selectedTab, setSelectedTab] = useState('SAAS');
  const navigate = useNavigate();

  // Define the options for the "Self Hosted" tab
  const SELF_HOSTED_OPTIONS = [
    {
      id: 'gitlab',
      name: 'GitLab',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a15e01b4b86a939fd742ddaf0e0224e811466c9143d25fb07d9a3ad29bec325?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c',
    },
    {
      id: 'sso',
      name: 'Sign with SSO',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d9708e68240614d72323fdec45309738a1b1dd41d68e4ff41b502097e40a1b72?placeholderIfAbsent=true&apiKey=6d98892eb686437a81619b5186f54d37',
    },
  ];

  // Choose the appropriate options based on the selected tab
  const optionsToDisplay = selectedTab === 'SAAS' ? SIGN_IN_OPTIONS : SELF_HOSTED_OPTIONS;

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageColumn}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/102bb50cbcc9dfe3aca3ef1c8ad7f1cf20924d1e0b2aabaaa5b39ed6869129c5?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c"
            alt="CodeAnt AI Platform illustration"
            className={styles.heroImage}
          />
        </div>
        
        <div className={styles.authColumn}>
          <div className={styles.authCard}>
            <div className={styles.cardHeader}>
              <div className={styles.brandSection}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a10ae9b7fa99451d7b5ce99f0a8fe317b615d3451dd4d2450c96ec55cc46bbc?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c"
                  alt=""
                  className={styles.brandLogo}
                />
                <h1 className={styles.brandName}>CodeAnt AI</h1>
              </div>
              <h2 className={styles.welcomeText}>Welcome to CodeAnt AI</h2>
            </div>

            <div className={styles.tabSection}>
              <button
                className={selectedTab === 'SAAS' ? styles.tabActive : styles.tab}
                onClick={() => setSelectedTab('SAAS')}
              >
                SAAS
              </button>
              <button
                className={selectedTab === 'Self Hosted' ? styles.tabActive : styles.tab}
                onClick={() => setSelectedTab('Self Hosted')}
              >
                Self Hosted
              </button>
            </div>

            <div className={styles.signInSection}>
              {optionsToDisplay.map(option => (
                <SignInButton
                  key={option.id}
                  icon={option.icon}
                  provider={option.name}
                  onClick={() => navigate('/repositories')}
                />
              ))}
            </div>
          </div>

          <p className={styles.termsText}>
            By signing up you agree to the <strong>Privacy Policy</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
