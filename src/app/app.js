angular.module('blockmarkApp', [ 
        'templates-app',
        'templates-common',
        'blockmarkApp.graph',
        'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider) {
})

.controller('BlockmarkCtrl', function($http) {
    var self = this;
    self.results = null;
    self.error_msg = null;

	
    self.search = function() {
        
        $http.get('http://localhost:5000/search/'+self.search_term).then( 
            function(response) {
                self.error_msg = null;
                self.results = response.data;
            }, function(error_resp) {
                self.results = null;
                self.error_msg = error_resp.data.message;
                console.error('Error searching block info');
            }
        );
        
    };

})

;
