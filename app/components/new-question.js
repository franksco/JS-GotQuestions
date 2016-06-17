import Ember from 'ember';
import moment from 'npm:moment';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params= {
        questionAuthor: this.get('questionAuthor'),
        question: this.get('question'),
        additionalNotes: this.get('additionalNotes'),
        timestamp: moment().format()
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
