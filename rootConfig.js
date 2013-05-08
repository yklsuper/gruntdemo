seajs.config({
	base :'../../',
	plugins: ['shim'],
    alias:{
        "nav": "styles/nav/nav",
      	"jq" : {
	      src: "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",
	      exports: 'jQuery'
	    }
    },
    debug:1
});