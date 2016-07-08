(function(angular, undefined) {
  angular.module("coffeebotApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);