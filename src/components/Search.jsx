var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyUp={(e) => {
      var userText = $('.form-control').val();
      if (e.keyCode === 13) {
        if (userText !== '') {
          searchYouTube({key: YOUTUBE_API_KEY, q: userText, max: 5}, props.onSearch);
          $('.form-control').val('');
        }
      } else {
        clearTimeout(window.debounce);
        window.debounce = setTimeout(() => searchYouTube({key: YOUTUBE_API_KEY, q: userText, max: 5}, props.onSearch), 500)
      }
    }}/>
    <button className="btn hidden-sm-down" onClick={() => {
      var userText = $('.form-control').val();
      searchYouTube({key: YOUTUBE_API_KEY, q: userText, max: 5}, props.onSearch);
      $('.form-control').val('');
    }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
window.debounce = null;
