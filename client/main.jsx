import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import App from 'components/App/App.jsx';
import Inbox from 'components/Inbox/Inbox.jsx';
import Conversations from 'components/Conversations/Conversations.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Inbox}/>
      <Route path="conversations" component={Conversations}/>
      <Route path="*" component={Inbox}/>
    </Route>
  </Router>
), document.getElementById('js-main'))
