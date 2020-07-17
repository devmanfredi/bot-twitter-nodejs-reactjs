const Twitter = require("twitter");
let twitter = new Twitter({
  //API key
  consumer_key: "pRxJGbcBxYWHIUezqJcobicd8",
  //API secret key
  consumer_secret: "UDk4wIEHQxBkzRrhLlC6vjmCCDNXeiqTXDewcRv4C1NS07PXhF",
  //Access token
  access_token_key: "1226236396467314688-QuxolpOJ3kMNNtWTGnKkYB3RtWcat4",
  //Access token secret
  access_token_secret: "fgXH2aar3QPfUkdabp22hulTrzbcvnrxbHHgXcoBTR0uS",
});
module.exports = (app, io) => {
  let socketConnection;
  let twitterStream;

  app.locals.searchTerm = "bolsonaro"; //Default search term for twitter stream.
  app.locals.showRetweets = false; //Default

  /**
   * Resumes twitter stream.
   */
  const stream = () => {
    console.log("Resuming for " + app.locals.searchTerm);
    twitter.stream(
      "statuses/filter",
      { track: app.locals.searchTerm },
      (stream) => {
        stream.on("data", (tweet) => {
          sendMessage(tweet);
        });

        stream.on("error", (error) => {
          console.log(error);
        });

        twitterStream = stream;
      }
    );
  };

  /**
   * Sets search term for twitter stream.
   */
  app.post("/setSearchTerm", (req, res) => {
    let term = req.body.term;
    app.locals.searchTerm = term;
    twitterStream.destroy();
    stream();
  });

  /**
   * Pauses the twitter stream.
   */
  app.post("/pause", (req, res) => {
    console.log("Pause");
    twitterStream.destroy();
  });

  /**
   * Resumes the twitter stream.
   */
  app.post("/resume", (req, res) => {
    console.log("Resume");
    stream();
  });

  //Establishes socket connection.
  io.on("connection", (socket) => {
    socketConnection = socket;
    stream();
    socket.on("connection", () => console.log("Client connected"));
    socket.on("disconnect", () => console.log("Client disconnected"));
  });

  /**
   * Emits data from stream.
   * @param {String} msg
   */
  const sendMessage = (tweet) => {

    if (tweet.text.includes("RT")) {
      return;
    }

    let twets = [
      {
        id: tweet.user.id_str,
        message: tweet.text,
        author: tweet.user.name,
        banner: tweet.user.profile_banner_url,
        favoriteCount: tweet.favorite_count,
        authorProfile: "https://twitter.com/" + tweet.user.screen_name,
        image: tweet.user.profile_image_url,
        publicationDate: tweet.created_at,
        url: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`,
        hashTag: app.locals.searchTerm,
        hashTags: tweet.entities.hashtags.map((hashTag) => hashTag.text),
      },
    ];
    console.log(tweet.text);

    socketConnection.emit("tweets", twets);
  };
};
