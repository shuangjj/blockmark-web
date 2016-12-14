
angular.module( 'blockmarkApp.graph', [
  'ui.router',
  'sigma',
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'graph', {
    url: '/graph',
    views: {
      "graph": {
        controller: 'GraphCtrl',
        templateUrl: 'graph/graph.tpl.html'
      }
    },
  });
})

.run(function (SigmaLink, SigmaLifecycleService, DefaultSigmaConfig) {

    // Instantiate Sigma:
    DefaultSigmaConfig.setSigma({
      renderer: {
        type: 'canvas'
      },
      settings: {
        defaultEdgeType: 'tapered',
        font: 'robotoregular',
        defaultLabelColor: '#2e2c2d',
        defaultLabelSize: 12,
        labelThreshold: 5,
        defaultEdgeLabelSize: 12,
        edgeLabelThreshold: 7,
        labelHoverShadow: '',
      },
/*
        graph: {
	
		  "nodes": [
		  {
			  "id": "n0",
			  "label": "A node",
			  "x": 0,
			  "y": 0,
			  "size": 3
		  },
		  {
			  "id": "n1",
			  "label": "Another node",
			  "x": 3,
			  "y": 1,
			  "size": 2
		  },],
		  "edges": [
		  {
			  "id": "e0",
			  "source": "n0",
			  "target": "n1"
		  },
		  ]

        },

*/
    });  
    // Instantiate the locate plugin
    DefaultSigmaConfig.setPlugin('locate', {
      zoomDef: 0.3,
      animation: {
        node: {
          duration: 400
        },
        edge: {
          duration: 400
        },
        center: {
          duration: 300
        }
      }
    });

    // ...

    SigmaLink.setLink(function(sigmaInstance, sigmaPlugins, sigmaDOMElement, options) {
        //Init all the services related to the visualization with the sigma instance.
        SigmaLifecycleService.init(sigmaInstance, sigmaPlugins);

        // Bind Sigma and plugins events
        sigmaInstance.bind('doubleClickNode', function (event) {
            // do something
        });
        
        // Added
        /*
        sigmaInstance.graph.addNode(options['nodes'][0]);
        sigmaInstance.graph.addNode(options['nodes'][1]);
        sigmaInstance.graph.addEdge(options['edges'][0]);
        console.log(JSON.stringify(options));
        sigmaInstance.refresh();
        */
        SigmaLink.clearLinkOptions();
    });
  })

.controller( 'GraphCtrl', function ( $scope, SigmaLink ) {
    var data = {

        "nodes": [
        {
            "id": "n0",
            "label": "A node",
            "x": 0,
            "y": 0,
            "size": 3
        },
        {
            "id": "n1",
            "label": "Another node",
            "x": 3,
            "y": 1,
            "size": 2
        },],
        "edges": [
        {
            "id": "e0",
            "source": "n0",
            "target": "n1"
        },
        ]
    };
    SigmaLink.setLinkOptions(data);

})

;

