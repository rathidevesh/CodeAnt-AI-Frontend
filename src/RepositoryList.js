import React from 'react';
import styles from './RepositoryList.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import RepositoryCard from './components/RepositoryCard/RepositoryCard';

const repositories = [
  { name: 'design-system', isPublic: true, language: 'React', size: '7320', updatedAt: '1 day ago' },
  { name: 'codeant-ci-app', isPublic: false, language: 'Javascript', size: '5871', updatedAt: '2 days ago' },
  { name: 'analytics-dashboard', isPublic: false, language: 'Python', size: '4521', updatedAt: '5 days ago' },
  { name: 'mobile-app', isPublic: true, language: 'Swift', size: '3096', updatedAt: '3 days ago' },
  { name: 'e-commerce-platform', isPublic: false, language: 'Java', size: '6210', updatedAt: '6 days ago' },
  { name: 'blog-website', isPublic: true, language: 'HTML/CSS', size: '1876', updatedAt: '4 days ago' },
  { name: 'social-network', isPublic: false, language: 'PHP', size: '5432', updatedAt: '7 days ago' }
];

export default function RepositoryList({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </aside>
        
        <main className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <div role="region" aria-label="Repository list">
              {/* Conditionally render Header based on isSidebarOpen and viewport width */}
              {!(isSidebarOpen && window.innerWidth <= 768) && <Header />}
              {repositories.map((repo, index) => (
                <RepositoryCard key={index} {...repo} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
