(function () {
  const root = document.getElementById('root');
  const btnBack = document.querySelector('.back_to_main');

  root.style.display = 'none';
  btnBack.style.display = 'none';

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.preloader').classList.add('preloader_hidden');
      root.style.display = 'initial';
      btnBack.style.display = 'flex';
    }, 1000);
  });
})();

/*
this is an old version
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preloader_hidden');
});
*/
