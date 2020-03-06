(function (c, d) {
    var e = document.documentElement || document.body,
        a = "orientationchange" in window ? "orientationchange" : "resize",
        b = function () {
            var f = e.clientWidth;
            e.style.fontSize = (f >= 750) ? "100px" : 100 * (f / 750) + "px"
        };
    b();
    c.addEventListener(a, b, false)
})(window);
console.log("%c%c网站名称%c神马影视", "line-height:28px;", "line-height:28px;padding:4px;background:#000000;color:#FADFA3;font-size:14px;", "padding:4px;background:#F5DEB3;color:green;line-height:28px;font-size:14px;");
console.log("%c%c网站地址%chttps://www.smovw.com", "line-height:28px;", "line-height:28px;padding:4px;background:#000000;color:#FADFA3;font-size:14px;", "padding:4px 4px 4px 2px;background:#F5DEB3;color:green;line-height:28px;font-size:14px;");
