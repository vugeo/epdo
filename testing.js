version.extensions.timedgotoMacro = {
    major: 1,
    minor: 2,
    revision: 0
};
macros["goto"] = macros.timedgoto = {
    timer: null,
    handler: function (a, b, c, d) {
        function cssTimeUnit(s) {
            if (typeof s == "string") {
                if (s.slice(-2).toLowerCase() == "ms") {
                    return +(s.slice(0, -2)) || 0
                } else {
                    if (s.slice(-1).toLowerCase() == "s") {
                        return +(s.slice(0, -1)) * 1000 || 0
                    }
                }
            }
            throwError(a, s + " isn't a CSS time unit");
            return 0
        }
        var t, d, m, s;
        t = c[c.length - 1];
        d = d.fullArgs();
        m = 0;
        if (b != "goto") {
            d = d.slice(0, d.lastIndexOf(t));
            m = cssTimeUnit(t)
        }
        d = eval(Wikifier.parse(d));
        if (d + "" && state && state.init) {
            if (macros["goto"].timer) {
                clearTimeout(macros["goto"].timer)
            }
            //s = state.history[0].passage.title;
            macros["goto"].timer = setTimeout(function () {
                state.display(d, a);
            }, m)
        }
    }
};


macros.add("moveonafterplaying", {
    version: { major: 1, minor: 0, revision: 0 },
    handler: function ()
    {
        try
        {
            var sound = new Audio(this.args[0]);
            sound.addEventListener("ended", function(){
                alert("ended!");
                var dest = eval(Wikifier.parse(this.args[1]));
                state.display(dest);
            });
            sound.play();
            //new Wikifier(this.output, "<div id=''></div>");
        }
        catch (e)
        {
            return this.error("Error: " + e.message);
        }
    }
});
