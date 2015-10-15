/**
 * PluginAutoLoad: Load your plugins on html DOM without javascript code.
 * http://marcbuils.github.com/jquery.pluginautoload/
 * https://github.com/leiming/jquery.loadscript
 *
 * Par Marc Buils ( marc.buils@marcbuils.fr )
 * Lei Ming ( poetcoders@gmail.com )
 * Sous licence LGPL v3 (http://www.gnu.org/licenses/lgpl-3.0.txt)
 *
 * v0.1.1 - 09/16/2015:
 * First release
 */
;(function($){
	// lazyload script
	// ref: http://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript/
	var _loadScript = function(url, params, callback){

		var script = document.createElement("script");
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

    var scriptsProperties = [
      'type', 'src', 'htmlFor', 'event', 'charset', 'async', 'defer', 'crossOrigin', 'text'
    ];

    if (typeof params === 'object' && !$.isEmptyObject(params)) {
      for (var key in params) {
        if (params.hasOwnProperty(key) && $.inArray(key, scriptsProperties)) {
          script[key] = params[key];
        }
      }
    }

		script.src = url;
		document.getElementsByTagName(params['lazyLoad'] ? 'body' : 'head')[0].appendChild(script);
	};

	$.loadScript = function( p_url, p_params, p_callback ){

		// Handle p_params is exist
		if (arguments.length === 2 && typeof arguments[1] === 'function') {
			p_callback = arguments[1];
			p_params = {};
		}

		var _return = $.Deferred();

		// Call callback if necessary
		if ( typeof( p_callback ) === 'function' ) {
			_return.done(function(){
				p_callback();
			});
		}

		// Load javascript file
		_loadScript( p_url, p_params, function(){
			_return.resolve();
		} );

		return _return.promise();
	};
})(jQuery);
