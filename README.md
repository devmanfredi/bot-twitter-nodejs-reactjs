# Bot Twitter

## Getting Started

### Prerequisites
- Git
- NodeJs 12.0+
- React

### Clone

To get started you can simply clone this repository using git:
```
git clone https://github.com/devmanfredi/bot-twitter-nodejs-reactjs.git
cd bot-twitter-nodejs-reactjs

```

#### Develop Backend

Run the application from the command line using:
```
cd bot-twitter
npm install
npm start
```

#### Develop Frontend

Run the application from the command line using:
```
cd front-bot-twitter
npm install
npm start
```


## Explore Rest APIs

Namespace     |   URL                        | HTTP Verb        | Result 
--------------|----------------------------- | ---------------- | -------------------------
Tweets          | /tweets                 | POST             | Add hashTag
Tweets          | /tweets                 | GET              | Return all hashTags
Tweets          | /tweets/status             | GET              | Return tweets by hashTags
Tweets      | /tweets/:hashTag  | DELETE           | Delete hashTag

You can test them using postman or any other rest client.