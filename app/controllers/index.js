//index controller
$.index.open();
function next(e) {
	Alloy.createController('browse_icons').getView().open();
	$.index.close();
}
