const Twitter = require("twit");
const config = require("../config/config");
const api = new Twitter(config);

let hashTags = [];
let tweets = [];

var params = {
  q: "",
  count: 100,
  result_type: "recent",
  lang: "pt",
};

module.exports = {

  async create(request, response) {
    const { hashTag } = request.body;
    await hashTags.push({ id: hashTags.length, value: hashTag });
    return response.json(hashTag);
  },

  async index(request, response) {
    return await response.json(hashTags);
  },

  async delete(request, response) {
    const { index } = request.params;
    if (!hashTags.includes(hashTags[index])) {
      return response.status(401).json({ error: "Operation not permited." });
    }

    await hashTags.splice(index, 1);

    return response.status(204).send();
  },

  async getTweets(request, response) {
    if (tweets.length > 0) {
      tweets = [];
    }
    for (let i = 0; i < hashTags.length; i++) {
      params.q = `#${hashTags[i].value}`;
      let list = await api.get("search/tweets", params);
      let statuses = list.data.statuses;
      let tweetsList = statuses.map((tweet) => {
        return {
          id: tweet.user.id_str,
          message: tweet.text,
          author: tweet.user.name,
          banner: tweet.user.profile_banner_url,
          favoriteCount: tweet.favorite_count,
          authorProfile: "https://twitter.com/" + tweet.user.screen_name,
          image: tweet.user.profile_image_url,
          publicationDate: tweet.created_at,
          url: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`,
          hashTag: params.q,
          hashTags: tweet.entities.hashtags.map((hashTag => hashTag.text))
        };
      });
      tweetsList.forEach((element) => {
        tweets.push(element);
      });
    }
    return response.json(tweets);
  },
};
