function AjaxPool(max) {
	// max simultaneous ajax
	this.max = max;
	this.pool = [];
}

AjaxPool.prototype.set = function() {}

function MaxAjax(max = 6) {
	// ajax requests to be sent
	this.taskStack = [];
	// max request ajax pool for managing simultaneous requests
	this.ajaxPool = new AjaxPool(max);
}

MaxAjax.prototype.add = function(ajaxObj) {
	this.ajaxPool.set(ajaxObj)
}