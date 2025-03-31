// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create global header element
    const header = document.createElement("header");
    header.className = "global-header";
    
    // Insert the header HTML
    header.innerHTML = `
      <div class="header-container">
        <!-- (Optional) Overlay if you want a gradient or partial overlay. You can remove if not needed. -->
        <div class="header-overlay"></div>
    
        <!-- Logo Area -->
        <div class="logo">
          <img src="../../../images/site_logo.png" alt="Logo">
        </div>
    
        <!-- Hamburger Icon (Shown on mobile) -->
        <div class="menu-toggle" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
    
        <!-- Navigation Menu -->
        <nav class="nav-menu" id="navMenu">
          <ul>
            <li><a href="../../../index.html" class="nav-link">Home</a></li>
            <li><a href="/OURPROJECT/Htmls/about.html" class="nav-link">About Us</a></li>
            <li><a href="/OURPROJECT/Htmls/product.html" class="nav-link">Products</a></li>
            <li><a href="/OURPROJECT/Htmls/contact_us.html" class="nav-link">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    `;
    
    // Insert the header at the very top of the body
    document.body.insertBefore(header, document.body.firstChild);
    
    // Create global footer element
    const footer = document.createElement("footer");
    footer.className = "global-footer";
    footer.innerHTML = `
      <div class="footer-container">
        <p>&copy; 2025 Vintage Cars. All rights reserved.</p>
        <p>Designed with passion &amp; creativity.</p>
      </div>
    `;
    // Append the footer at the end of the body
    document.body.appendChild(footer);
    
    // JavaScript for toggling the menu on mobile
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    
    menuToggle.addEventListener("click", function() {
      navMenu.classList.toggle("open");
    });
  
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        const linkUrl = new URL(link.href, window.location.origin);
        const linkPath = linkUrl.pathname;

        // Special case for home page
        const isHomePage = currentPath === '/' || currentPath.endsWith('index.html');
        const isHomeLink = linkPath.endsWith('index.html') || linkPath === '/';

        if ((currentPath === linkPath) || (isHomePage && isHomeLink)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
  });
  