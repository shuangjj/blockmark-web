
function SigmaLifecycleService(SigmaLocateService, BlockmarkCleanupService) {
	var self = this,
	_initialized = false;

	/**
	 * Called on the sigma directive and plugin instantiation
	 * to pass reference of sigma to the plugins
	 *
	 * @param sigma
	 * @param sigmaPlugins
	 */
	self.init = function(sigma, sigmaPlugins) {
		SigmaLocateService.init(sigma, sigmaPlugins.locate);
		_initialized = true;
	};

	/**
	 * Called to clean up memory of all variable instances in the sigma services.
	 */
	self.clean = function() {
		if (_initialized) {
			SigmaLocateService.destroy();
		}
		_initialized = false;
	};

	BlockmarkCleanupService.register(self);
}


angular.module('blockmarkApp')
.service("SigmaLifecycleService", SigmaLifecycleService)
;
