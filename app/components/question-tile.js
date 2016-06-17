import Ember from 'ember';
import moment from 'npm:moment';

export default Ember.Component.extend({
  watchQuestions: Ember.inject.service(),

  questionPostedOn: Ember.computed(function() {
    return this.get('question.question')+ 'was asked on '+ moment(this.get('question.timestamp')).format("dddd, MMMM Do YYYY, h:mm a");
  }),

  actions: {
    addToWatchList(question) {
      this.get('watchQuestions').add(question);
    },

    destroyQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
