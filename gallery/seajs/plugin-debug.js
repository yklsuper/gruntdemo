(function(d,a,c,e){function f(a){var b=new Date;b.setTime(b.getTime()+2592E6);c.cookie="seajs-debug="+a.debug+"`"+a.mapfile+"`"+a.console+"; path=/; expires="+b.toUTCString()}function k(a){l++;c.body?c.body.appendChild(a):l<m&&setTimeout(function(){k(a)},200)}var b;a="";var h;if(h=c.cookie.match(/(?:^| )seajs-debug(?:(?:=([^;]*))|;|$)/))a=h[1]?decodeURIComponent(h[1]):"";a=a.split("`");b={debug:Number(a[0])||0,mapfile:a[1]||"",console:Number(a[2])||0};-1<e.search.indexOf("seajs-debug")&&(b.debug=
1,b.console=1,f(b));b.debug&&d.config({debug:!0});b.mapfile&&(c.title="[seajs debug mode] - "+c.title,d.config({preload:b.mapfile}));if(b.console){a='<div id="seajs-debug-console">  <h3>Sea.js Debug Console</h3>  <label>Map file: <input value="'+b.mapfile+'"/></label><br/>  <button>Exit</button>  <button>Hide</button>  <button>Save</button></div>';var g=c.createElement("div");g.innerHTML=a;a=c.createElement("style");c.getElementsByTagName("head")[0].appendChild(a);a.styleSheet?a.styleSheet.cssText=
"#seajs-debug-console {   position: fixed; bottom: 10px;   *position: absolute; *top: 10px; *width: 465px;   right: 10px; z-index: 999999999;  background: #fff; color: #000; font: 12px arial;  border: 2px solid #000; padding: 0 10px 10px;}#seajs-debug-console h3 {  margin: 3px 0 6px -6px; padding: 0;  font-weight: bold; font-size: 14px;}#seajs-debug-console input {  width: 400px; margin-left: 10px;}#seajs-debug-console button {  float: right; margin: 6px 0 0 10px;  box-shadow: #ddd 0 1px 2px;  font-size: 14px; padding: 4px 10px;  color: #211922; background: #f9f9f9;  text-shadow: 0 1px #eaeaea;  border: 1px solid #bbb; border-radius: 3px;  cursor: pointer; opacity: .8}#seajs-debug-console button:hover {  background: #e8e8e8; text-shadow: none; opacity: 1}#seajs-debug-console a {  position: relative; top: 10px; text-decoration: none;}":
a.appendChild(c.createTextNode("#seajs-debug-console {   position: fixed; bottom: 10px;   *position: absolute; *top: 10px; *width: 465px;   right: 10px; z-index: 999999999;  background: #fff; color: #000; font: 12px arial;  border: 2px solid #000; padding: 0 10px 10px;}#seajs-debug-console h3 {  margin: 3px 0 6px -6px; padding: 0;  font-weight: bold; font-size: 14px;}#seajs-debug-console input {  width: 400px; margin-left: 10px;}#seajs-debug-console button {  float: right; margin: 6px 0 0 10px;  box-shadow: #ddd 0 1px 2px;  font-size: 14px; padding: 4px 10px;  color: #211922; background: #f9f9f9;  text-shadow: 0 1px #eaeaea;  border: 1px solid #bbb; border-radius: 3px;  cursor: pointer; opacity: .8}#seajs-debug-console button:hover {  background: #e8e8e8; text-shadow: none; opacity: 1}#seajs-debug-console a {  position: relative; top: 10px; text-decoration: none;}"));
k(g);a=g.getElementsByTagName("button");a[2].onclick=function(){var a=g.getElementsByTagName("input")[0].value||"";b.mapfile=a;f(b);e.reload()};a[1].onclick=function(){b.console=0;f(b);e.replace(e.href.replace("seajs-debug",""))};a[0].onclick=function(){b.debug=0;f(b);e.replace(e.href.replace("seajs-debug",""))}}if(!d.find){var j=d.cache;d.find=function(a){var b=[],c;for(c in j)if(j.hasOwnProperty(c)&&("string"===typeof a&&-1<c.indexOf(a)||a instanceof RegExp&&a.test(c))){var d=j[c];d.exports&&b.push(d.exports)}return b}}var m=
100,l=0;define(d.dir+"plugin-debug",[],{})})(seajs,this,document,location);
