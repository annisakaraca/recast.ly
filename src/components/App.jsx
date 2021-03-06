class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selected: exampleVideoData[0]
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  handleSelect(selectedVid) {
    this.setState({
      selected: selectedVid
    });
  }

  handleSearch(returnedVideoData) {
    console.log(returnedVideoData);
    this.setState({
      videos: returnedVideoData,
      selected: returnedVideoData[0]
    });
  }

  componentDidMount() {
    searchYouTube({key: YOUTUBE_API_KEY, q:'messi', max: 5}, this.handleSearch);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onSearch={this.handleSearch}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.selected} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} onSelect={this.handleSelect} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
