import React from "react";

import {
  Container,
  Author,
  LinkTweet,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
} from "./styles";

const Tweet = ({ id, tweet }) => {
  return (
    <Container>
      <Body>
        <Avatar background={tweet.image} />

        <Content>
          <Header>
            <Author>
              <a
                style={{ textDecoration: "none" }}
                href={tweet.authorProfile}
                target="blank"
              >
                {tweet.author}
              </a>
            </Author>

            <Dot />
            <time>{tweet.publicationDate}</time>
          </Header>

          <Description>{tweet.message}</Description>
          <br />

          <LinkTweet>
            <a
              style={{ textDecoration: "none", color: "#1a8acf" }}
              href={tweet.url}
              target="blank"
            >
              {tweet.url}
            </a>
          </LinkTweet>

          {tweet.hashTags.map((hashTag) => (
            <LinkTweet>
              <a
                style={{ textDecoration: "none", color: "#1a8acf" }}
                href={`https://twitter.com/hashtag/${hashTag}?src=hashtag_click`}
                target="blank"
              >
                {`#${hashTag}`}
              </a>
            </LinkTweet>
          ))}
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              18
            </Status>
            <Status>
              <LikeIcon />
              {tweet.favoriteCount}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
