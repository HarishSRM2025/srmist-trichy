const topbar = `
<div class="top-bar-wrapper">
      <!-- Search Bar -->
      <div class="search-container">
        <ul class="topbar-menu">
            <li><a href="#home">Students</a></li>
            <li><a href="#about">Faculty & Staff</a></li>
            <li><a href="#programs">Examinations</a></li>
            <li><a href="#campus">Parents</a></li>
            <li><a href="#placement">Alumni</a></li>
            <li><a href="#events">News letter</a></li>
        </ul>
      </div>

      <!-- Quick Links -->
      <div class="quick-links">
        <a href="./course.html" class="quick-link featured">
          <svg class="quick-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
          </svg>
          Courses offered
        </a>
        <a href="./aboutus.html#milestones" class="quick-link">
          <svg class="quick-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Addmission for 2026 now Live
        </a>
      </div>
    </div>`

const navbar = `
        <div class="nav-container">
            <div class="nav-wrapper">
            <div class="logo">
                <img src="./assets/images/image.png" alt="SRM">
            </div>
            <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="offcanvas-menu" id="offcanvasMenu">
            <div class="Offcanvas-logo logo">
                <img src="./assets/images/image.png" alt="SRM">
            </div>
                <ul id="off-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#programs">Programs</a></li>
                    <li><a href="infrastructure.html">Campus</a></li>
                    <li><a href="index.html#placement">Placement</a></li>
                    <li><a href="index.html#events">Events</a></li>
                    <li><a href="index.html#contact">Contact</a></li>
                    <li ><a href="iqac.html"  class="nmc-nav">Fee Payment</a></li>
                </ul>
                <div class="Mobile-help">
                    <p>Get in Touch</p>
                    <p><a style="padding: 0;" href="tel:1800 202 4565">1800 202 4565</a></p>
                    <p><a style="padding: 0;" href="mailto:helpdesk@ist.srmtrichy.edu.in">helpdesk@ist.srmtrichy.edu.in</a></p>
                </div>
            </nav>
            </div>
        </div>

        <div class="overlay" id="overlay"></div>`

const footer = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Us</h3>
                    <p>Committed to providing exceptional education and fostering the next generation of leaders and innovators through quality programs and dedicated support.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#admissions"><i class="fas fa-angle-right"></i> Admissions</a></li>
                        <li><a href="#academics"><i class="fas fa-angle-right"></i> Academics</a></li>
                        <li><a href="#campus"><i class="fas fa-angle-right"></i> Campus Life</a></li>
                        <li><a href="#research"><i class="fas fa-angle-right"></i> Research</a></li>
                        <li><a href="#alumni"><i class="fas fa-angle-right"></i> Alumni</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#library"><i class="fas fa-angle-right"></i> Library</a></li>
                        <li><a href="#portal"><i class="fas fa-angle-right"></i> Student Portal</a></li>
                        <li><a href="#calendar"><i class="fas fa-angle-right"></i> Academic Calendar</a></li>
                        <li><a href="#support"><i class="fas fa-angle-right"></i> Support Services</a></li>
                        <li><a href="#careers"><i class="fas fa-angle-right"></i> Career Center</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Connect With Us</h3>
                    <p>Follow us on social media for the latest updates and news.</p>
                    <p style="margin-top: 1rem;">
                        <i class="fas fa-envelope"></i> info@education.com<br>
                        <i class="fas fa-phone"></i> +82 123-456-7890
                    </p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Education Hub. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
        </div>
`

document.getElementById("topbar").innerHTML=topbar
document.getElementById("header").innerHTML=navbar
document.getElementById("footer").innerHTML=footer