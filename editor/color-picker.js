$(function () {
    var COLORS = ["#000000", "#7400B8", "#005CB8", "#00B884", "#FC9C00", "#FC7600", "#FC2200"];

    var colorPicker = $("#colorPicker");

    COLORS.forEach(function (color) {
        var btn = $("<div/>")
            .addClass("colorPickerBtn")
            .css({
                "background-color": color,
                "border-color": getBorderColor(color)
            })
            .click(function () {
                window.svgCanvas.setColor("stroke", color);
            });
        colorPicker.append(btn);
    });

    function getBorderColor(hexColor){
        return shadeColor(hexColor, 5);
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
            b = parseInt(hexColor.substr(2, 4), 16),
            g = parseInt(hexColor.substr(4, 6), 16);

        return "#" + shadeBasicColor(r).toString(16) + shadeBasicColor(b).toString(16) + shadeBasicColor(g).toString(16);
    }

});