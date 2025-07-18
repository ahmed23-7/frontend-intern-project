// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = 'Switch to Light Mode';
  } else {
    themeToggleBtn.textContent = 'Switch to Dark Mode';
  }
});

// Show/Hide text
const toggleTextBtn = document.getElementById('toggle-text');
const hiddenText = document.querySelector('.hidden-text');

toggleTextBtn.addEventListener('click', function () {
  if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
    hiddenText.style.display = 'block';
    toggleTextBtn.textContent = 'Show Less';
  } else {
    hiddenText.style.display = 'none';
    toggleTextBtn.textContent = 'Show More';
  }
});
