# 🌾 KisaanTrade – Agri B2B Web Platform
KisaanTrade is a clean and responsive frontend-only website that connects farmers and retailers to simplify B2B agriculture trading in India.
It is built using HTML, Tailwind CSS, and JavaScript — no backend used.

kisaantrade/
├── index.html
├── farmer.html
├── retailer.html
├── style.css
├── script.js
├── farmer.js
├── retailer.js
└── images/

#index.html – Landing Page
Main homepage with navigation bar, hero section, mission text, and CTA buttons.
Animations and hover effects added using Tailwind classes and style.css.
Two buttons link to farmer and retailer registration pages.

#farmer.html – Farmer Registration Page
A detailed registration form for farmers.
Includes fields like Name, Location, Product Type, Quantity, Price, Contact Number.
Same navbar/footer as the homepage to maintain UI consistency.
Form validation and success alerts handled via farmer.js.

#retailer.html – Retailer Registration Page
A similar registration page focused on retailers.
Fields include Name, City, Requirement (Product), Quantity Needed, Budget, Contact Number.
UI and styling consistent with other pages.
JavaScript validation and submission alert handled in retailer.js.

#style.css – Custom Styles (Optional)
Contains additional custom animations (fadeInUp, fadeInDown, etc.)
Extends Tailwind with custom keyframes and animation classes.
Can be used to tweak padding, margins, or extra effects not available directly via Tailwind.

#script.js – Landing Page JavaScript
Contains simple JS logic if needed (e.g., interactive elements, popups).
Can be expanded later with carousel or modal features.

#farmer.js – Farmer Form Script
Adds simple JavaScript validation for the farmer registration form.
Displays a confirmation alert when the form is submitted successfully.
Prevents submission if any required field is empty.

#retailer.js – Retailer Form Script
Similar to farmer.js, but handles validation for retailer-specific inputs.
Shows a confirmation message after successful registration.
