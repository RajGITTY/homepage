import React from 'react';
import './home.css';

const Home = () => {

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout button clicked");
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Users</div>
        <div className="nav-item">Analytics</div>
        <div className="nav-item">About Us</div>
      </nav>

      {/* Content */}
      <div className="content-wrapper">
        {/* Sidebar with admin profile */}
        <aside className="sidebar">
          <div className="admin-profile">
            <div className="avatar"></div>
            <h3>Admin Name</h3>
            <p>Email: admin@example.com</p>
            <p>Department: Technology</p>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </aside>

        {/* Main content with glowing query section */}
        <main className="main-content">
          <div className="query-section">
            <input 
              type="text" 
              className="query-input" 
              placeholder="Enter your query..." 
            />
            <button className="send-btn">Send</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
