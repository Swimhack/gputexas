// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  
  // Update the menu icon
  const menuIcon = mobileMenuBtn.querySelector('svg');
  if (mobileMenu.classList.contains('active')) {
    menuIcon.innerHTML = `
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    `;
  } else {
    menuIcon.innerHTML = `
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    `;
  }
});

// Toggle mobile dropdowns
mobileDropdownTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const content = trigger.nextElementSibling;
    const arrow = trigger.querySelector('svg');
    
    // Close other dropdowns
    mobileDropdownTriggers.forEach(otherTrigger => {
      if (otherTrigger !== trigger) {
        otherTrigger.nextElementSibling.classList.remove('active');
        otherTrigger.querySelector('svg').style.transform = 'rotate(0deg)';
      }
    });
    
    // Toggle current dropdown
    content.classList.toggle('active');
    arrow.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-btn')) {
    mobileMenu.classList.remove('active');
    const menuIcon = mobileMenuBtn.querySelector('svg');
    menuIcon.innerHTML = `
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    `;
  }
});