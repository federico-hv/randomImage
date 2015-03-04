function Controller() {
    function cambiarFoto() {
        var pic = $.foto;
        0 == num % 2 ? pic.setImage("/images/fotitos/luna.jpg") : pic.setImage("/images/fotitos/lunaroja.jpeg");
        num++;
        reproducirSonido();
    }
    function deshabilitarSonido() {
        touchSound.disable($.unoUno);
        touchSound.disable($.titulo);
        touchSound.disable($.unoDos);
        touchSound.disable($.foto);
        touchSound.disable($.unoTres);
        touchSound.disable($.dos);
        touchSound.disable($.cambiarFoto);
    }
    function reproducirSonido() {
        player.play();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.main = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#750D33",
        height: "100%",
        width: "100%",
        id: "main"
    });
    $.__views.index.add($.__views.main);
    $.__views.uno = Ti.UI.createView({
        width: "100%",
        height: "70%",
        layout: "vertical",
        id: "uno"
    });
    $.__views.main.add($.__views.uno);
    $.__views.unoUno = Ti.UI.createView({
        width: "100%",
        height: "15%",
        layout: "vertical",
        id: "unoUno"
    });
    $.__views.uno.add($.__views.unoUno);
    $.__views.titulo = Ti.UI.createLabel({
        width: "80%",
        height: "100%",
        font: {
            fontSize: "40dp"
        },
        color: "white",
        textAlign: "center",
        text: "La luna",
        id: "titulo"
    });
    $.__views.unoUno.add($.__views.titulo);
    $.__views.unoDos = Ti.UI.createView({
        width: "100%",
        height: "70%",
        id: "unoDos"
    });
    $.__views.uno.add($.__views.unoDos);
    $.__views.foto = Ti.UI.createImageView({
        backgroundColor: "red",
        image: "/images/fotitos/luna.jpg",
        width: "70%",
        height: "80%",
        borderRadius: 20,
        id: "foto"
    });
    $.__views.unoDos.add($.__views.foto);
    $.__views.unoTres = Ti.UI.createView({
        width: "100%",
        height: "15%",
        id: "unoTres"
    });
    $.__views.uno.add($.__views.unoTres);
    $.__views.dos = Ti.UI.createView({
        width: "100%",
        height: "30%",
        id: "dos"
    });
    $.__views.main.add($.__views.dos);
    $.__views.cambiarFoto = Ti.UI.createButton({
        width: "80%",
        height: "40%",
        top: 10,
        title: "Cambiar Imagen",
        id: "cambiarFoto"
    });
    $.__views.dos.add($.__views.cambiarFoto);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var touchSound = require("com.gstreetmedia.androidtouchsound");
    var player = Ti.Media.createSound({
        url: "/audio/audio1.wav"
    });
    $.index.addEventListener("open", function() {
        deshabilitarSonido();
        alert("sonido enganchado al cambio de foto");
    });
    var num = 1;
    $.cambiarFoto.addEventListener("click", function() {
        cambiarFoto();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;