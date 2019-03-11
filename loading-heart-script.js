
(function() {
  // add the loading css
  const loadingHeartCSS = `.lds-heart__wrap{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;z-index:1001;transition:.3s ease-in}.lds-heart__wrap.all-loaded{opacity:0}.lds-heart__wrap.send-to-back{z-index:-99}.lds-heart{transform:rotate(45deg) scale(.7);display:inline-block;position:relative;width:64px;height:64px;transform-origin:32px 32px}@media (min-width:1280px){.lds-heart{transform:rotate(45deg)}}.lds-heart div{top:23px;left:19px;position:absolute;width:26px;height:26px;background:#000;animation:lds-heart 1.2s infinite cubic-bezier(.215,.61,.355,1)}.lds-heart div:after,.lds-heart div:before{content:' ';position:absolute;display:block;width:26px;height:26px;background:#000}.lds-heart div:before{left:-17px;border-radius:50% 0 0 50%}.lds-heart div:after{top:-17px;border-radius:50% 50% 0 0}@keyframes lds-heart{0%,60%{transform:scale(.95)}5%{transform:scale(1.1)}39%{transform:scale(.85)}45%{transform:scale(1)}100%{transform:scale(.9)}}`;

  var heartStyleElm = document.createElement('style');
  heartStyleElm.innerHTML = loadingHeartCSS;
  document.querySelector('head').appendChild(heartStyleElm);

  // add the markup
  function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }
  const loadingHeartEl = htmlToElement(
    `<div class="lds-heart__wrap"><div class="lds-heart"><div></div></div><span style="font-family: courier;">one sec..</span></div>`
  );
  document.querySelector('body').prepend(loadingHeartEl);

  window.addEventListener('load', function() {
    const sendLoadingScreenToBack = () => {
      document
        .querySelector('.lds-heart__wrap')
        .classList.add('send-to-back');
    };
    document
      .querySelector('.lds-heart__wrap')
      .classList.add('all-loaded');
    setTimeout(sendLoadingScreenToBack, 300);
  });
})();