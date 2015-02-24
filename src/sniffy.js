function Sniffy(options){
	this.tag = options.tag;
	this.attribute = options.attribute;
	this.search = options.search;
}

Sniffy.prototype = {
	constructor: Sniffy,
	sniff: function(){
		var self = this;
		var id;

		for(id in self.search){
			var foundSelector = document.querySelector(self.tag + id);

			if(foundSelector){
				foundSelector.setAttribute(self.attribute, self.search[id]);
			}
		}
		
	}
}