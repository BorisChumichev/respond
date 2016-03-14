import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const Tweet = (props) => (
  <div className='tweet'>
    <Card>
      <CardHeader
        title={`${_.get(props, 'data.user.name')} (@${_.get(props, 'data.user.screen_name')})`}
        subtitle={`
          ${_.get(props, 'data.user.followers_count')} followers • 
          ${_.get(props, 'data.user.location') ? _.get(props, 'data.user.location') : 'Location N/A'} • 
          ${moment(_.get(props, 'data.created_at'), 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').fromNow()}`}
        avatar={_.get(props, 'data.user.profile_image_url_https')}
      />
      <CardText>
        {props.data.text}
      </CardText>
      {!props.omitActions &&
        <CardActions>
          <FlatButton
            onClick={props.onDelete}
            label='Mark as replied'
            primary={true}
            />
          <FlatButton
            onClick={props.onReply}
            label={`Reply to @${props.data.user['screen_name']}`}
            secondary={true}
            />
        </CardActions>
      }
    </Card>
  </div>
);

export default Tweet;
