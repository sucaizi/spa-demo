/**
 * spa.chat.js
 * Chat feature module for SPA
 * Created by suda on 2016/10/23.
 */

spa.chat = (function () {

    var
        configMap = {
            main_html: String()
                + '<div class="spa-chat">'
                +   '<div class="spa-chat-head">'
                +       '<div class="spa-chat-head-toggle">+</div>'
                +       '<div class="spa-chat-head-title">'
                +           'chat'
                +       '</div>'
                +    '</div>'
                +    '<div class="spa-chat-closer">x</div>'
                +    '<div class="spa-chat-sizer">'
                +       '<div class="spa-chat-msgs">'
                +       '<div class="spa-chat-box"'
                +           '<input type="text">'
                +           '<div>send</div>'
                +       '</div>'
                +    '</div>'
                + '</div>',

            settalbe_map: {
                silder_open_time: true,
                slider_close_time: true,
                slider_opened_em: true,
                slider_closed_em: true,
                slider_opened_title: true,
                slider_closed_title: true,

                chat_model: true,
                people_model: true,
                set_chat_anchor: true
            },

            silder_open_time: 250,
            slider_close_time: 250,
            slider_opened_em: 16,
            slider_closed_em: 2,
            slider_opened_title: "click to close",
            slider_closed_title: "click to open",

            chat_model: null,
            people_model: null,
            set_chat_anchor: null
        },

        stateMap = {
            $append_target: null,
            position_type: "closed",
            px_per_em: 0,
            slider_hidden_px: 0,
            slider_closed_px: 0,
            slider_opened_px: 0
        },

        jqueryMap = {},

        setJqueryMap, configModule, initModule;

    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = {$container: $container};
    };

    configModule = function ( input_map ) {
        spa.util.setConfigMap( {
            input_map: input_map,
            settable_map: configMap.settalbe_map,
            config_map: configMap
        } );

        return true;
    };

    initModule = function ( $container ) {
        $container.html( configMap.main_html )
        stateMap.$container = $container;
        setJqueryMap();
        return true;
    };

    return {
        configModule: configModule,
        initModule: initModule
    };
}());
