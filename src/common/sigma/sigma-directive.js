
function sigmaDirective(DefaultSigmaConfig, SigmaLink) {
  return {
    restrict: 'AE',
    scope: {
      settings: '=',
      pluginsSettings: '=',
      id: '@',
    },
    link: function($scope, $element) {

        var sigmaSettings = ($scope.settings) ? 
            $scope.settings : DefaultSigmaConfig.getSigmaConfig();

        var pluginsSettings = $scope.pluginsSettings ? 
            $scope.pluginsSettings : DefaultSigmaConfig.getPluginConfig('locate');

        //var sigc = document.getElementById('sigma-container');
        //sigmaSettings.renderer.container = document.getElementById('sigma-container');
        sigmaSettings.renderer.container = $element[0];

        var plugins = {};

        console.log(JSON.stringify(sigmaSettings));
        console.log($element);
        /* jshint ignore:start */ 
        var sigmaInstance = new sigma(sigmaSettings);
        /* jshint ignore:end */

        // Then, let's add some data to display:                                      
        sigmaInstance.graph.addNode({                                                  
            // Main attributes:                                                          
            id: 'n0',                                                                    
            label: 'Hello',                                                              
            // Display attributes:                                                       
            x: 0,                                                                        
            y: 0,                                                                        
            size: 1,                                                                     
            color: '#f00'                                                                
        }).addNode({                                                                   
            // Main attributes:                                                          
            id: 'n1',                                                                    
            label: 'World !',                                                            
            // Display attributes:                                                       
            x: 1,                                                                        
            y: 1,                                                                        
            size: 1,                                                                     
            color: '#00f'                                                                
        }).addEdge({                                                                   
            id: 'e0',                                                                    
            // Reference extremities:                                                    
            source: 'n0',                                                                
            target: 'n1'                                                                 
        });                                

        sigmaInstance.refresh();
      //
      // If some plugins settings are specified, only the plugins set
      // will be activated with the settings provided
      //
      // if a plugin doesn't require any settings, just set its name to true.
      // ex: pluginSettings.activateState = true
      if(
        (!pluginsSettings || _.keys(pluginsSettings).length === 0) &&
        sigma.plugins
      ) {

        plugins.locate = sigma.plugins.locate(sigmaInstance,
          DefaultSigmaConfig.getPluginConfig('locate'));

      } else {

        if (pluginsSettings.locate) {
          plugins.locate = sigma.plugins.locate(
            sigmaInstance, pluginsSettings.locate
          );
        }
      }

      // The callback function is where all the bindings and links will happen.
      // The way the plugin should behave depends on the app.
      SigmaLink.execute(
        sigmaInstance, plugins, $element[0], SigmaLink.executeOptions
      );
    }
  };
}

angular.module('sigma')
.directive('sigmaWidget', sigmaDirective)
;

