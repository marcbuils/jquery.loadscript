/**
 * PluginAutoLoad: Load your plugins on html DOM without javascript code.
 * http://marcbuils.github.com/jquery.pluginautoload/
 * 
 * Par Marc Buils ( marc.buils@marcbuils.fr )
 * Sous licence LGPL v3 (http://www.gnu.org/licenses/lgpl-3.0.txt)
 * 
 * v0.1.0 - 01/11/2012:
 * First release
 */
;(function($){
	// lazyload script
	// ref: http://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript/
	var _loadScript = function(url, callback){
		var script = document.createElement("script")
		script.type = "text/javascript";
	 
		if (script.readyState){ //IE
			script.onreadystatechange = function(){
			if ( script.readyState == "loaded" || script.readyState == "complete"){
				script.onreadystatechange = null;
				callback();
			}
		};
		} else { //Others
			script.onload = function(){
				callback();
			};
		}
	 
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	};
	
	$.loadScript = function( p_url, p_callback ){
		var _return = $.Deferred();
		
		// Call callback if necessary
		if ( typeof( p_callback ) != 'undefined' ) {
			_return.done(function(){
				p_callback();
			});
		}
		
		// load javascript file
		_loadScript( p_url, function(){
			_return.resolve();
		} );
		
		return _return.promise();
	};
})(jQuery);