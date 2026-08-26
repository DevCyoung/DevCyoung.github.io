const button = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.site-nav');
button?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});
