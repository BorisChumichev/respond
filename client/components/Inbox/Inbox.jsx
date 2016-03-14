import React from 'react';
import { inbox, filter, oldest, newest, mostFollowed } from 'lib/tweet';
import Tweet from 'components/Dummy/Tweet.jsx';
import TextField from 'material-ui/lib/text-field';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import CircularProgress from 'material-ui/lib/circular-progress';

export default class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      shownTweets: [],
      orderBy: 'created_at_d',
      filterBy: '',
    };
  }

  setOrder(value) {
    this.setState({
      orderBy: value,
    });
  }

  setFilter(evt) {
    this.setState({
      filterBy: evt.target.value,
    });
  }

  order(orderBy, tweets) {
    return {
      'created_at_d': newest,
      'created_at_a': oldest,
      'user.followers': mostFollowed,
    }[orderBy](tweets);
  }

  componentDidMount() {
    inbox().then(tweets => {
      this.setState({tweets});
    }, err => console.log(err));
  }

  render() {
    if (this.state.tweets.length === 0)
      return <CircularProgress style={{top: '200px', left: '50%', transform: 'translateX(-50%)'}} />;

    const shownTweets = this.order(this.state.orderBy, filter(this.state.filterBy, this.state.tweets)),
      searchResult = this.state.filterBy && `(${shownTweets.length} found)`;

    return (
      <div className='tweetsList'>
        <div className='tweetsList-toolbar'>
          <TextField
            onChange={(evt) => this.setFilter(evt)}
            hintText='Search query'
            floatingLabelText={`Search among ${this.state.tweets.length} tweets ${searchResult}`}
          />
          <DropDownMenu style={{top: '16px', float: 'right'}} value={this.state.orderBy} onChange={(event, index, val) => this.setOrder(val)}>
            <MenuItem value={'created_at_d'} primaryText='Newest'/>
            <MenuItem value={'created_at_a'} primaryText='Oldest'/>
            <MenuItem value={'user.followers'} primaryText='Most followed'/>
          </DropDownMenu>
        </div>
        <div className="tweetsList-scroller">
        {shownTweets
          .map((tweet, i) => <div className='animated fadeInUp tweetsList-item' key={Math.random()}><Tweet data={tweet} /></div>)
        }
        </div>
      </div>
    );
  }
}
