$(function () {
    var COLORS = ["#18212A", "#7F49C9", "#0B58AB", "#016366", "#21853B", "#995E00", "#CC410C", "#B01A0D"],
        PRESELECTED = "#18212A",
        FILL_OPACITY = 0.2;

    var colorPicker = $("#colorPicker");
    var borderColor = "#585756";

    COLORS.forEach(function (color) {
        var btn = $("<div/>")
            .addClass("color-picker-btn")
            .css({
                "background-color": color,
                "border-color": borderColor
            })
            .click(function () {
                $(".color-selected").removeClass("color-selected");
                $(this).addClass("color-selected");
                svgCanvas.clearPathActions();
                svgCanvas.setColor("stroke", color);
                svgCanvas.setColor("fill", color);
                svgCanvas.setPaintOpacity("fill", FILL_OPACITY);
            });
        borderColor = "#2f2f2c";
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

});