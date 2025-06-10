document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate a successful submission
    alert(`Thanks, ${name}! Your message has been sent.`);
    form.reset();
  });

  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
});