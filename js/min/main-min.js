var Glider=angular.module("Glider",[]);Glider.directive("scroll",function(e){return function(n,i,t){angular.element(e).bind("scroll",function(){this.pageYOffset>=100?n.boolChangeClass=!0:n.boolChangeClass=!1,n.$apply()})}}),Glider.controller("header",function(e){e.MenuActive=!1,e.MegamenuActive=!1,e.activeMenu=function(){e.MenuActive=!e.MenuActive},e.activeMegaMenu=function(){e.MegamenuActive=!e.MegamenuActive}});