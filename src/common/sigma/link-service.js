
function SigmaLinkService() {

  var self = this;

  self.execute = function() {};
  self.executeOptions = {};

  /**
   * Function to be executed at runtime after sigma has been instantiated. 
   * It allows to set bindings between the different plugin instances
   *
   * @param {Function} link - link function. Is executed with 4 parameters:sigma,
   * sigmaPlugins,the sigma DOM container and some options. The sigma object is 
   * an instance of Sigma. The sigmaPlugins object is an object containing all 
   * the plugins instances that have been initialized with their names as keys.
   * The last argument of the link function will be the executeOption object.
   */
  this.setLink = function(link) {
     self.execute = link;
  };

  /**
   * This method allows to store options reference in the service. This option
   * object will be passed to the link function as last argument.
   *
   * @param {Object} linkOptions - Object passed as last argument of the link
   * function
   */
  this.setLinkOptions = function(linkOptions) {
    self.executeOptions = linkOptions;
  };

  /**
   * Cleans up Link options.
   */
  this.clearLinkOptions = function() {
    self.executeOptions = {};
  };
}

angular.module('sigma')
.service('SigmaLink', SigmaLinkService)
;
