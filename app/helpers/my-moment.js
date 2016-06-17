import Ember from 'ember';
import moment from 'npm:moment';

export function myMoment(param) {
  var timestamp = param.toString();
 return moment(timestamp).format("dddd, MMMM Do YYYY, h:mm a");

}

export default Ember.Helper.helper(myMoment);
