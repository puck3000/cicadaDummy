$(function() {  
   $("header").headroom();
});

// transformicons
!function(n,r){"function"==typeof define&&define.amd?define(r):n.transformicons=r()}(this||window,function(){"use strict";var n={},r="tcon-transform",t={transform:["click"],revert:["click"]},e=function(n){return"string"==typeof n?Array.prototype.slice.call(document.querySelectorAll(n)):"undefined"==typeof n||n instanceof Array?n:[n]},o=function(n){return"string"==typeof n?n.toLowerCase().split(" "):n},i=function(n,r,i){var c=(i?"remove":"add")+"EventListener",u=e(n),a=u.length,s={};for(var l in t)s[l]=r&&r[l]?o(r[l]):t[l];for(;a--;)for(var d in s)for(var v=s[d].length;v--;)u[a][c](s[d][v],f)},f=function(r){n.toggle(r.currentTarget)};return n.add=function(r,t){return i(r,t),n},n.remove=function(r,t){return i(r,t,!0),n},n.transform=function(t){return e(t).forEach(function(n){n.classList.add(r)}),n},n.revert=function(t){return e(t).forEach(function(n){n.classList.remove(r)}),n},n.toggle=function(t){return e(t).forEach(function(t){n[t.classList.contains(r)?"revert":"transform"](t)}),n},n});transformicons.add('.tcon');

// mobile Nav toggle
$(function() {  
    $('#navToggle').click(function() {
    	$('nav').toggleClass('open');
    });

});