var searchYouTube = (options, callback) => {
  options.part = 'snippet';
  options.videoEmbeddable = 'true';
  options.type = 'video';

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,

    success: function(data) {
      console.log(data.items);
      //
      callback(data.items);
    },

    error: function(data) {
      console.log('ERROR', data);
    }
  });
};

window.searchYouTube = searchYouTube;
