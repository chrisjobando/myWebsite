(function () {
  const key_filter = ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'x', 'z', 'backspace', 'enter'];
  document.addEventListener('DOMContentLoaded', () => {
          loader = document.querySelector('.gba_loader');
          loader && loader.addEventListener('click', (e) => {
            let ninja = document.createElement('iframe');
            ninja.width = 500;
            ninja.height = 333.33;

            ninja.src = '/assets/gba/index.html';
            e.currentTarget.replaceWith(ninja);
            ninja.focus();
            let key_chomp = (e) => {
                if (key_filter.includes(e.key.toLowerCase())) {
                  e.preventDefault();
                  return false;
                }
              };

            [ninja, ninja.contentWindow].forEach((x) => x.addEventListener('keydown', key_chomp, false));
          });
        });
})();
