//index controller
$.index.open();
function next(e) {
	Alloy.createController('browse_icons').getView().open();
	$.index.close();
}
$.index.addEventListener('click', function() {
	console.log('click!');
	
	$.fa.add($.no_icon_here,'fa-flag');
	//$.no_icon_here.fireEvent('fa_add',{icon: 'fa-flag'});
});
