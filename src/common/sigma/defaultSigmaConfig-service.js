
function DefaultSigmaConfigService (CONFIGURED_PLUGINS) {

  var _sigmaConfig = {
    renderer: {}
  };
  var _pluginsConfig = {};

  /**
   * Sets the default configuration for sigma instances throughout the project.
   *
   * @param {Object} sigmaConf - sigma settings
   */
  this.setSigma = function(sigmaConf) {
    _sigmaConfig = sigmaConf;
  };

  /**
   * Sets the default configuration for the specified plugin
   *
   * @throw {Error} Will throw an exception if the specified plugin is not 
   *                handled by this module
   * @param {String} pluginIdentifier - plugin name
   * @param {Object} pluginsConf - configuration
   */
  this.setPlugin = function(pluginIdentifier, pluginsConf) {
    if (CONFIGURED_PLUGINS[pluginIdentifier]) {
      _pluginsConfig[pluginIdentifier] = pluginsConf;
    } else {
     throw Error('Unknown plugin '+ pluginIdentifier);
    }
  };

  /**
   * Gets the default configuration for sigma
   *
   * @returns {Object} - sigma settings
   */
  this.getSigmaConfig = function() {
    return _sigmaConfig;
  };

  /**
   * Gets the default configuration for the specified plugin
   *
   * @throw {Error} Will throw an exception if the specified plugin is not 
   *                handled by this module
   * @param {String} pluginIdentifier - plugin name
   * @returns {Object} - plugin settings
   */
  this.getPluginConfig = function(pluginIdentifier) {
    if (CONFIGURED_PLUGINS[pluginIdentifier]) {
      return _pluginsConfig[pluginIdentifier];
    } else {
      throw Error('Unknown plugin '+ pluginIdentifier);
    }
  };
}

angular.module('sigma')
.service('DefaultSigmaConfig', DefaultSigmaConfigService)
;

