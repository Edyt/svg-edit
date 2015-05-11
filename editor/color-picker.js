$(function () {
    var COLORS = ["#000000", "#7400B8", "#005CB8", "#00B884", "#FC9C00", "#FC7600", "#FC2200"],
        PRESELECTED = "#000000",
        FILL_OPACITY = 0.2;

    var colorPicker = $("#colorPicker");

    COLORS.forEach(function (color) {
        var btn = $("<div/>")
            .addClass("color-picker-btn")
            .css({
                "background-color": color,
                "border-color": getBorderColor(color)
            })
            .click(function () {
                $(".color-selected").removeClass("color-selected");
                $(this).addClass("color-selected");
                svgCanvas.clearPathActions();
                svgCanvas.setColor("stroke", color);
                svgCanvas.setColor("fill", color);
                svgCanvas.setPaintOpacity("fill", FILL_OPACITY);
            });
        colorPicker.append(btn);
    });

    preselectColor();

    function preselectColor(){
        var preselectedIdx = COLORS.indexOf(PRESELECTED);
        methodDraw.setConfig({
            initStroke: {width: '3px', color: PRESELECTED.replace("#", ""), opacity: 1},
            initFill: {color: PRESELECTED.replace("#", ""), opacity: FILL_OPACITY}});
        colorPicker.find(".color-picker-btn").eq(preselectedIdx).addClass("color-selected");
    }

    function getBorderColor(hexColor){
        return shadeColor(hexColor, 80);
    }

    function shadeColor(hexColor, diff){
        function shadeBasicColor(color){
            color += diff;
            if(color < 0){
                return 0;
            }
            if(color > 255){
                return 255;
            }
            return color;
        }

        hexColor = hexColor.replace("#", "");
        var r = parseInt(hexColor.substr(0, 2), 16),
            b = parseInt(hexColor.substr(2, 2), 16),
            g = parseInt(hexColor.substr(4, 2), 16);

        return "#" + shadeBasicColor(r).toString(16) + shadeBasicColor(b).toString(16) + shadeBasicColor(g).toString(16);
    }

});