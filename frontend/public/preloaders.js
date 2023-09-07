const content = [];
//once I have only two elements for action I decided do not additional classes to html-elements and collect array by stupid way:
content[0] = document.getElementById('root');
content[1] = document.querySelector('.back_to_main');

(function () {
  content.forEach((el) => {
    el.classList.add('hideContent');
  });

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.preloader').classList.add('preloader_hidden');

      content.forEach((el) => {
        el.classList.remove('hideContent');
      });
    }, 1000);
  });
})();

function showLoading() {
  content.forEach((el) => {
    el.classList.add('hideContent');
  });
  document.querySelector('.preloader').classList.remove('preloader_hidden');
}

function hideLoading() {
  setTimeout(() => {
    document.querySelector('.preloader').classList.add('preloader_hidden');

    content.forEach((el) => {
      el.classList.remove('hideContent');
    });
  }, 1000);
}

/*
this shall be deleted on aug 9 2023 after tests:


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
*/

/*
this is an old version
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preloader_hidden');
});
*/
