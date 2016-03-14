import $ from 'jquery';
import R from 'ramda';
import moment from 'moment';

const toDate = twitterDate =>
  moment(twitterDate, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').unix();

export default {

  filter(query, tweets) {
    if (query === '') return tweets;
    const regExp = new RegExp(query);
    return R.filter(tweet => regExp.test(tweet.text), tweets);
  },

  oldest: R.sortBy(R.compose(toDate, R.prop('created_at'))),

  newest: tweets => R.reverse(R.sortBy(R.compose(toDate, R.prop('created_at')), tweets)),

  mostFollowed: tweets => R.reverse(R.sortBy(R.compose(parseInt, R.prop('followers_count'), R.prop('user')), tweets)),

  inbox() {
    return new Promise((resolve, reject) => {
      $.get('/api/inbox').then(
        ({response}) => {
          resolve(response);
        },

        err => {
          reject(err);
        }
      );
    });
  },
};
