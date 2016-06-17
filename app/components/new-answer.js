import Ember from 'ember';
import moment from 'npm:moment';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save1() {
      var params = {
        author: this.get('author'),
        reply: this.get('reply'),
        question: this.get('question'),
        timestamp: moment().format()
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
