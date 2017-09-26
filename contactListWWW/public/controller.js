var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.allContacts = [];
	var apiUrl = null;
	getContacts();
    $scope.saveContact = function() {
    	var newContact = {
    		first_name: $scope.firstName,
    		last_name: $scope.lastName,
    		contact_number: $scope.contactNumber
    	}
    	$http.post(apiUrl + '/api/contacts', newContact).then(function(res){
	    	getContacts();
	    	$scope.firstName = null;
	    	$scope.lastName = null;
	    	$scope.contactNumber = null;
    	});
    }

    function getContacts () {
        if (!apiUrl)
            setApiUrl();
        else
    	    $http.get(apiUrl + '/api/contacts').then(function(res){
    	    	$scope.allContacts = res.data;
    	    });
    }

    function setApiUrl () {
        $http.get('/env').then(function(res){
            apiUrl = 'http://' + res.data.apiUrl + ':' + res.data.apiPort;
            getContacts();
        }); 
    }
});