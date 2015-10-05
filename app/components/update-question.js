import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question) {
      var params = {
        content: this.get('content'),
        questionAuthor: this.get('questionAuthor'),
        notes: this.get('notes'),
      };
      this.set('content',''),
      this.set('questionAuthor',''),
      this.set('notes',''),
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
