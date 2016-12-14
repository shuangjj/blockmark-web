
function BlockmarkCleanupService() {
	var self = this,
	_services = [];

	/**
	 * Called on all registered services
	 */
	self.clean = function() {
		_.forEach(_services, function(service) {
			service.clean();
		});
	};

	/**
	 * Adds a service to the clean up routine.
	 *
	 * @param {Function} service to be cleaned up on leaving.
	 */
	self.register = function(service) {
		_services.push(service);
	};
}

angular.module('blockmarkApp')
.service("BlockmarkCleanupService", BlockmarkCleanupService)
;
