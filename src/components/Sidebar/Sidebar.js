// import React, {useState} from 'react';
// import styles from './Sidebar.module.css';

// const navItems = [
//   { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/217b050a94ccae14a5a2f83a1c782bb50cb5e168b74c6159aff04116e342ddce?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'Repositories', active: true },
//   { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/93f5e628af5815e16d70ec8b6c8d984f9bde39a72ef4865fddd3460e3508bc88?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'AI Code Review' },
//   { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d3dda072e701767527f31db4d5a592ca96e474128e60b41df76501da8dd03256?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'Cloud Security' },
//   { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/34561f54ab588af25d4927cc4d57bd130089f853f2bd1eb18afa3fcd0c11c7d1?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'How to Use' },
//   { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a81f67af2b9a54d74c5125ec7f56008aa7c5199ec23f58712430e1ff145f5722?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'Settings' }
// ];

// const footerItems = [
//   { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/afa361ca1280dc8c1f06c43cf1802f105a9cfab611542e007b42ccbb12cb97b0?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'Support' },
//   { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05d15fa6c7e4746dc967c7fc2cd574c72d48a2b1dcea6fad4d6a22b93e07acf5?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'Logout' }
// ];

// export default function Sidebar() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//       setIsSidebarOpen(!isSidebarOpen);
//     };
//   return (
//     <nav className={styles.navigation} aria-label="Main navigation">
      
//       <div className={styles.content}>
//         <div>
//           {/* Header Section */}
//           <header className={styles.header}>
//             <div className={styles.logo}>
//               <img
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d4891dfdd616dafb2053d14f46382dc859349911973c60dacc81f8db0601e8?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c"
//                 alt="CodeAnt AI Logo"
//                 className={styles.logoImage}
//               />
//               <span>CodeAnt AI</span>
//               <button 
//            className={`${styles.toggler} ${isSidebarOpen ? styles.togglerOpen : ''}`} 
//            onClick={toggleSidebar} 
//            aria-label="Toggle sidebar"
//          >
//            ☰
//          </button>
//             </div>
//             <div className={styles.searchInput}>
//               <button className={styles.searchButton}>
//                 UtkarshDhairyaPanwar
//                 <i className="fas fa-chevron-down" aria-hidden="true"></i>
//               </button>
//             </div>
//           </header>

//           {/* Navigation Items */}
//           <div className={styles.navList}>
//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className={`${styles.navItem} ${item.active ? styles.active : ''}`}
//                 aria-current={item.active ? 'page' : undefined}
//               >
//                 <img src={item.icon} alt="" className={styles.navIcon} />
//                 <span>{item.text}</span>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Footer Section */}
//         <footer className={styles.footer}>
//           <div className={styles.navList}>
//             {footerItems.map((item, index) => (
//               <a key={index} href="#" className={styles.navItem}>
//                 <img src={item.icon} alt="" className={styles.navIcon} />
//                 <span>{item.text}</span>
//               </a>
//             ))}
//           </div>
//         </footer>
//       </div>

      
//     </nav>
//   );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './Sidebar.module.css';

const navItems = [
  { id: 1, icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/217b050a94ccae14a5a2f83a1c782bb50cb5e168b74c6159aff04116e342ddce?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'Repositories' },
  { id: 2, icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/93f5e628af5815e16d70ec8b6c8d984f9bde39a72ef4865fddd3460e3508bc88?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'AI Code Review' },
  { id: 3, icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d3dda072e701767527f31db4d5a592ca96e474128e60b41df76501da8dd03256?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'Cloud Security' },
  { id: 4, icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/34561f54ab588af25d4927cc4d57bd130089f853f2bd1eb18afa3fcd0c11c7d1?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'How to Use' },
  { id: 5, icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a81f67af2b9a54d74c5125ec7f56008aa7c5199ec23f58712430e1ff145f5722?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'Settings' }
];

const footerItems = [
  { id: 6, icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/afa361ca1280dc8c1f06c43cf1802f105a9cfab611542e007b42ccbb12cb97b0?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'Support' },
  { id: 7, icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05d15fa6c7e4746dc967c7fc2cd574c72d48a2b1dcea6fad4d6a22b93e07acf5?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c', text: 'Logout' }
];

export default function Sidebar({isSidebarOpen, toggleSidebar}) {
  
  const [activeItem, setActiveItem] = useState(1); // Default active item is "Repositories"
  const navigate = useNavigate(); // Initialize useNavigate

  

  const handleItemClick = (event, id) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveItem(id);
  };

  const handleLogout = () => {
    // Redirect to home page
    navigate('/');
  };

  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      {/* Logo Section */}
      <div className={styles.logo}>
        <div className="upper-title">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d4891dfdd616dafb2053d14f46382dc859349911973c60dacc81f8db0601e8?placeholderIfAbsent=true&apiKey=5b02ad75f68d41338637aa210413624c"
            alt="CodeAnt AI Logo"
            className={styles.logoImage}
          />
          <span>CodeAnt AI</span>
        </div>
        <div className="lower-title">
          <button
            className={`${styles.toggler} ${isSidebarOpen ? styles.togglerOpen : ''}`}
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className={`${styles.content} ${isSidebarOpen ? styles.open : styles.collapsed}`}>
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.searchInput}>
            <button className={styles.searchButton}>
              Devesh Rathi
              <div className='icon_div'>
              <i class="fa-solid fa-chevron-down"></i>
              </div>
            </button>
          </div>
        </header>

        {/* Navigation Items */}
        <div className={styles.navList}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`${styles.navItem} ${activeItem === item.id ? styles.active : ''}`}
              onClick={(event) => handleItemClick(event, item.id)}
              aria-current={activeItem === item.id ? 'page' : undefined}
            >
              <img src={item.icon} alt={item.text} className={styles.navIcon} />
              <span>{item.text}</span>
            </a>
          ))}
        </div>

        {/* Footer Section */}
        <footer className={styles.footer}>
          <div className={styles.navList}>
            {footerItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`${styles.navItem} ${activeItem === item.id ? styles.active : ''}`}
                onClick={item.text === 'Logout' ? handleLogout : (event) => handleItemClick(event, item.id)}
              >
                <img src={item.icon} alt={item.text} className={styles.navIcon} />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </nav>
  );
}
