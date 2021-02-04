/* VWO CODE SAMPLE */
vwo_$(function() {
    var TEXTS = {
    de: {
        title: "APP PROMO DE!"
    },
    en: {
        title: "APP PROMO EN!"
    }
    };
    var isDE = document.querySelector('html[lang=de]') ? true : false;        
    var BANNER = document.createElement('div');
    var HEADER = document.querySelector('#header-2');
    var _txt = isDE ? TEXTS.de : TEXTS.en;

    var styles = '<style>';
        styles += 'body {transform: translateY(40px);}';
        styles += '.app-promo {position: absolute;top: -40px;left: 0;width: 100%;background: red;padding: 5px;height: 40px;display: flex;align-items: center;justify-content: center;}';
        styles += '.app-promo h2 {color:#fff;font-weight:bold;}';
        styles += '</style>';

    BANNER.classList.add('app-promo');
    BANNER.innerHTML = '<div><h2>'+_txt.title+'</h2></div>' + styles;      
    HEADER.prepend(BANNER);
});
  
