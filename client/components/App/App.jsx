import React from 'react';
import { Link } from 'react-router';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Divider from 'material-ui/lib/divider';

const App = (props) => (
  <div>
    <List className={'navigation'}>
      <Link to={'/'}><ListItem primaryText="Inbox" leftIcon={<ContentInbox />} /></Link>
      <Link to={'/conversations'}><ListItem primaryText="Conversations" leftIcon={<ActionGrade />} /></Link>
    </List>
    <div className={'content'}>
    {props.children}
    </div>
  </div>
);

export default App;
