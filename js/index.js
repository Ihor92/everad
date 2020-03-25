const burger = document.querySelector('#btn_burger');

burger.addEventListener('click', function () {
  const wrap = document.querySelector('#navbarModile__wrap');

  if (wrap.classList.contains('show')) {
    console.log(true);
    wrap.classList.add('closed');
    wrap.classList.remove('show');
  } else {
    console.log(false);
    wrap.classList.add('show');
    wrap.classList.remove('closed');
  }

  wrap.addEventListener('click', function () {
    wrap.classList.add('closed');
    wrap.classList.remove('show');
    console.log("closed");
  })
});