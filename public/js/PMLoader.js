$(document).ready(function() {
 var dict = {};
 dict[0] = "about";
 dict[1] = "projects";
 dict[2] = "contact";

 var tabs = document.querySelector('paper-tabs');
 var pages = document.querySelector('core-pages');
 tabs.addEventListener('core-select', function() {
     pages.selected = tabs.selected;

     window.location.href = document.URL.split('#')[0] + "#" + dict[pages.selected];
 });

 var q = window.location.href.split('#')[1];
 if (q == "about") pages.selected = tabs.selected = 0;
 else if (q == "projects") pages.selected = tabs.selected = 1;
 else if (q == "contact") pages.selected = tabs.selected = 2;
 else pages.selected = tabs.selected = 0;
});
