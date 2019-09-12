function MaxAjax(max = 6) {
	// max simultaneous ajax
	this.max = max;
	// current number of running ajax requests
	this.count = 0;
	// ajax requests to be sent
	this.taskQueue = [];
}

MaxAjax.prototype.ajax = function(requestObj) {
	var self = this;

	if (this.count < this.max) {
		this.count++;
		
		return new Promise(function(resolve, reject) {
			axios(requestObj)
				.then(function (response) {
					resolve(response);

					self.count--;

					if (self.taskQueue.length > 0) {
						self.ajax(self.taskQueue.shift());
					}
				})
				.catch(function (error) {
					reject(error);

					self.count--;
					
					if (self.taskQueue.length > 0) {
						self.ajax(self.taskQueue.shift());
					}
				});
		});
	} else {
		this.taskQueue.push(requestObj);
	}
}

MaxAjax.prototype.post = function(url, params) {
	return this.ajax({
	  	method: 'post',
	  	url: url,
	  	data: params
	});
}

MaxAjax.prototype.get = function(url) {
	return this.ajax({
	  	method: 'get',
	  	url: url,
	});
}