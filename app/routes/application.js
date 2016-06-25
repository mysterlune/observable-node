import Ember from 'ember';

export default Ember.Route.extend({

  model: function(transition, params) {
    return this.store.findAll('recording');
  },

  actions: {
    record: function() {

      // Set the controller flag to disable record button...
      // Set the controller flag to disable record button...
      var indexController = this.controllerFor('index');
      indexController.set('isRecording', true);

      // And wait for the current timeout, which is 30 sec...
      Ember.run.later(this, function() {
        indexController.set('isRecording', false);
        indexController.set('isRefreshing', true);
        Ember.run.later(this, function() {
          this.refresh();
          indexController.set('isRefreshing', false);
        }, 2000)
      }, 30000);

      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.99.100/record");
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();

        function handler() {
          if(this.readyState === this.DONE) {
            if(this.status === 200) {
              resolve(this.response);
            } else {
              reject(new Error('Request to start recording did not complete successfully', '[status: '+this.status+']'))
            }
          }
        }

      });

    },

    hammer: function() {

      // Set the controller flag to disable record button...
      var indexController = this.controllerFor('index');
      indexController.set('isHammering', true);

      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.99.100/hammer");
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();

        function handler() {
          if(this.readyState === this.DONE) {
            if(this.status === 200) {
              resolve(this.response);
              indexController.set('isHammering', false);
            } else {
              reject(new Error('Request to start recording did not complete successfully', '[status: '+this.status+']'))
            }
          }
        }

      });

    }
  }
});
