const toTop = document.querySelector('#toTop');

window.addEventListener('scroll', function () {
  const scrY = this.window.scrollY;
  if (scrY > 50) {
    toTop.style.display = 'flex';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
  });
});
