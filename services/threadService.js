angular.module('rtfmApp').service('threadService', function(fb, Firebase) {
var  firebaseRef = new Firebase('https://rtfmappslc.firebaseio.com/');

    this.getThreads = function(){
      return new Firebase(fb.url + '/threads');
    }
    this.getThread = function(){
      return new Firebase(fb.url + '/threads/' + threadId)
    }
    this.getComments = function(threadId){
      return new Firebase(fb.url + '/threads/' + threadId + '/comments');
    }
})
