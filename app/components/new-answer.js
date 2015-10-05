import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        answerContent: this.get('answerContent') ? this.get('answerContent') : "",
        answerAuthor: this.get('answerAuthor') ? this.get('answerAuthor') : "",
        question: this.get('question') ? this.get('question') : ""
      };
      this.set('answerContent', ''),
      this.set('answerAuthor', ''),
      this.set('addNewAnswer', false),
      this.sendAction('saveAnswer', params);
  }
}
});
