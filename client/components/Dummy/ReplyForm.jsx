import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import Card from 'material-ui/lib/card/card';
import Tweet from './Tweet.jsx';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';

const ReplyForm = (props) => (
  <div key={props.tweet.created_at} className='replyForm animated fadeInRight'>
    <Card>
      <Tweet data={props.tweet} omitActions={true} />
      <CardText>
        {`Reply on behalf of @${_.get(props, 'tweet.mentioned_user')}:`}
      </CardText>
      <TextField
        style={{margin: '10px', width: '80%'}}
        hintText='Reply message'
        multiLine={true}
        rows={2}
        rowsMax={4}
      />
      <CardActions>
        <RaisedButton
          onClick={props.onReply}
          label={`Send reply to @${_.get(props, 'tweet.user.screen_name')}`}
          secondary={true}
          />
      </CardActions>
    </Card>
  </div>
);

export default ReplyForm;
