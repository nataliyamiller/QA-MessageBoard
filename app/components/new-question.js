import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        content: this.get('content'),
        questionAuthor: this.get('questionAuthor'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false),
      this.sendAction('saveQuestion', params);
    }
  }
});
