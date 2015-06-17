var templates = [
    "root/externallib/text!root/plugins/aulastudium/theme.css",
    "root/externallib/text!root/plugins/aulastudium/login.html",
    "root/externallib/text!root/plugins/aulastudium/program.html"
];

define(templates, function (theme, loginForm, program) {
    var plugin = {
        settings: {
            name: "aulastudium",
            type: "general",
            menuURL: "#aulastudium",
            icon: "plugins/events/icon.png",
            lang: {
                component: "core"
            }
        },

        routes: [
            ["aulastudium", "show_program", "showProgram"]
        ],

        showProgram: function() {
            var tpl = {};
            var html = MM.tpl.render(program, tpl);
            MM.panels.show('center', html, {title: MM.lang.s("aulastudium")});
        }
    };



});