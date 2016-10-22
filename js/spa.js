/**
 * spa.js
 * Root namespace module
 * Created by suda on 2016/10/22.
 */


/* global $, spa */

var spa = ( function () {
    var initModule = function ( $container ) {
        $container.html(
            '<h1 style="display:inline-block; margin:25px;"> ' +
            "hello world" +
            "</h1>"
        );

    };

    return {initModule: initModule};
}() );
