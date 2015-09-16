#jQuery.loadscript
##Load debuggable Javascript scripts
Load a JavaScript file from the server using a GET HTTP request, then execute it. 
This function looklike jQuery.getScript() but it use LazyLoad system. So you can debug the loaded file with a Javascript debugger. 
With Firebug for exemple...


[Une documentation en francais est disponibles ici: http://marcbuils.developpez.com/cours/javascript/chargez-en-ajax-des-scripts-deboguables/]


##Author
Marc Buils (marc.buils@marcbuils.fr)
Lei Ming (poetcoders@gmail.com)

##License
LGPL v3 (http://www.gnu.org/licenses/lgpl-3.0.txt)

##Current version
v0.1.1: 
 * add `params` parameter

##Usation
For default use, load only jQuery.pluginautoload script:
```
$.loadScript( url [, prperties] [, callback()] )  
```
or
```
$.loadScript( url [, prperties] ).done( callback() );  
```

- url: URL of the script to Load.
- prperties: the prperties in [HTMLScriptElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement).
- callback: function without paraleters, called when the script is loaded.

This function return a jQuery.Deferred() object.

###Example 1: Example with Deferred (recommended)
```
<!doctype html>
<html>
	<head>
		<meta charset="utf8" />
		<title>Exemple of jQuery.loadScript with deferred</title>
		<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
		<script src="../jquery.loadscript.js"></script>
		<script>
			;(function($){
				$.loadScript('test.js', {'charset' : 'UTF-8'}).done(function(){
					$('#test').test();
				});
			})(jQuery);
		</script>
	</head>
	<body>
		<div id="test"></div>
	</body>
</html> 
```

###Example 2: Example with callback

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf8" />
		<title>Exemple of loadScript with callback</title>
		<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
		<script src="../jquery.loadscript.js"></script>
		<script>
			;(function($){
				$.loadScript('test.js', {'charset' : 'UTF-8'}, function(){
					$('#test').test();
				});
			})(jQuery);
		</script>
	</head>
	<body>
		<div id="test">clique ici</div>
	</body>
</html>
```

###Example 3: Example of multiple script loading

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf8" />
		<title>Exemple of multiple script loading</title>
		<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
		<script src="../jquery.loadscript.js"></script>
		<script>
			;(function($){
				$.when( $.loadScript('test.js', {'charset' : 'UTF-8'}), $.loadScript('test2.js')).done(function(){
					$('#test').test();
					$('#test2').test2();
				});
			})(jQuery);
		</script>
	</head>
	<body>
		<div id="test">clique ici</div>
		<div id="test2">clique ici</div>
	</body>
</html>
```
