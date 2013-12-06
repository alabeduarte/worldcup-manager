angular.module('worldcup-manager')
.filter('search', ['$filter', function ($filter) {
   return function (items, text) {
      if (!text || text.length === 0) return items;

      var searchTerms = text.split(' ');
      
      searchTerms.forEach(function(term) {
        if (term && term.length)
          items = $filter('filter')(items, term);
      });

      return items;
   };
}]);

