angular.module('rtfmApp', ['firebase', 'ui.router'])
angular.module('rtfmApp').constant('fb', {
  url: 'https://rtfmappslc.firebaseio.com/',
});
angular.module('rtfmApp').config(function ($stateProvider, $urlRouterProvider) {


$stateProvider

.state('threads',{
  url: '/threads',
  controller: 'threadsCtrl',
  templateUrl: '/views/threads.html',
  resolve: {
    threadsRef: function(threadService){
      return threadService.getThreads();
    }

  }
})
.state('thread',{
  url: '/threads/:threadId',
  controller: 'threadCtrl',
  templateUrl:'views/thread.html',
  resolve: {
    threadRef: function(threadService, $stateParams) {
      return threadService.getThread($stateParams.threadId);
    },
    commentsRef: function(threadService, $stateParams) {
      return threadService.getComments($stateParams.threadId);
    }
  }

})
$urlRouterProvider.otherwise('/threads');

});
