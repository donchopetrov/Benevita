'use strict';

/*services*/
angular.module('angularapp.directives', []).
directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div><iframe style="overflow:hidden;width:73%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
}).
directive('myYoutube2', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div><iframe style="overflow:hidden;width:100%;height:100%;" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
}).directive('ngBindHtmlUnsafe', [function() {
    return function(scope, element, attr) {
        element.addClass('ng-binding').data('$binding', attr.ngBindHtmlUnsafe);
        scope.$watch(attr.ngBindHtmlUnsafe, function ngBindHtmlUnsafeWatchAction(value) {
            element.html(value || '');
        });
    }
}]);
