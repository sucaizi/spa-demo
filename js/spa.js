/**
 * spa.js
 * Root namespace module
 * Created by suda on 2016/10/22.
 */


/* global $, spa */

var spa = ( function () {
    var initModule = function ( $container ) {
        spa.shell.initModule( $container );
    };

    return {initModule: initModule};
}() );
