var dnd = require('./assets/js/xframednd.js');

var dragDrop = new dnd({
	draggables: "#dragitemslistcontainer li",
	inFrameCssUrl: "assets/css/inframe.css"
});

dragDrop.start();

$('iframe').on('load', function () {

	dragDrop.addFrame(this);

});