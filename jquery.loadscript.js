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
	$.loadScript = function( p_url, p_callback ){
		var _return = $.Deferred();
		
		// Call callback if necessary
		if ( typeof( p_callback ) != 'undefined' ) {
			_return.done(function(){
				p_callback();
			});
		}
		
		// load javascript file
		$.getScript( p_url, function(){
			_return.resolve();
		} );
		
		return _return.promise();
	};
})(jQuery);