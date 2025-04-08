// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
  
    // Check if dark mode was previously set
    const prefersDark = localStorage.getItem('dark-mode') === 'true';
    if (prefersDark) {
      document.body.classList.add('dark-mode');
    }
  
    // Trigger animations by adding 'loaded' class
    document.body.classList.add('loaded');
  
    // Toggle dark mode on button click
    toggleButton?.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('dark-mode', isDark);
    });
  });
  