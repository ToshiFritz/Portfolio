const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Optional: Change button icon
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️'; // Sun icon for light mode
  } else {
    toggleButton.textContent = '🌙'; // Moon icon for dark mode
  }
});