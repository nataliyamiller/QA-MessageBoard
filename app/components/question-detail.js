import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(params) {
     this.sendAction('saveAnswer', params);
   },
   
    deleteQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
