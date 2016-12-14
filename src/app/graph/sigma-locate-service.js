
function SigmaLocateService() {

  var self = this;

  // ----------------------------------------------------------------------
  //                         LifeCycle Management
  // ----------------------------------------------------------------------

  var
    _sigmaInstance,
    _locate;

  /**
   * To be called before ANY method can be called to initialize services.
   * Should be handled by the SigmaLifeCycleService.
   *
   * @param {Object} sigma  - sigma instance.
   * @param {Object} locate - sigma locate plugin instance used in the
   *                          visualization
   */
  self.init = function(sigma, locate){
    _sigmaInstance = sigma;
    _locate = locate;
  };

  /**
   * Should be called by the SigmaLifeCycleService to clear sigma from memory.
   */
  self.destroy = function(){
    _sigmaInstance = null;
    _locate = null;
  };

  // ----------------------------------------------------------------------
  //                              Location API
  // ----------------------------------------------------------------------

  /**
   * Locate the specified nodes and their neighbors.
   *
   * @param {String[]|String} nodes List of node ids or node id
   * @returns {SigmaLocateService} - The current instance.
   */
  self.locateNodes = function(nodes) {
    _locate.nodes(nodes);
    return self;
  };

  /**
   * Center the camera on the specified nodes.
   *
   * @param {String[]|String} edgeIds - Array of edge ids or edge id
   * @returns {SigmaLocateService} - The current instance.
   */
  self.locateEdges = function(edgeIds) {
    _locate.edges(edgeIds);
    return self;
  };

  /**
   * Center the camera on the view.
   *
   * @returns {SigmaLocateService} - The current instance.
   */
  self.locateCenter = function() {
    _locate.center();
    return self;
  };

  /**
   * Zoom in the visualization
   *
   * @returns {SigmaLocateService} - The current instance.
   */
  self.zoomIn = function() {
    sigma.utils.zoomTo(
      _sigmaInstance.camera,
      0,
      0,
      1 / _sigmaInstance.settings('zoomingRatio'),
      { duration: 300 }
    );
    return self;
  };

  /**
   * Zoom out the visualization
   *
   * @returns {SigmaLocateService} - The current instance.
   */
  self.zoomOut = function() {
    sigma.utils.zoomTo(
      _sigmaInstance.camera,
      0,
      0,
      _sigmaInstance.settings('zoomingRatio'),
      { duration: 300 }
    );
    return self;
  };
}

angular.module('blockmarkApp')
.service('SigmaLocateService', SigmaLocateService)
;
