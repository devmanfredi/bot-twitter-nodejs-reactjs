import React from "react";
import socketIOClient from "socket.io-client";
import Tweet from "../Tweet";

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    const socket = socketIOClient("http://localhost:3000/");

    socket.on("connect", () => {
      console.log("Socket Connected");
      socket.on("tweets", (data) => {
        console.info(data);
        let newList = [data].concat(this.state.items.slice(0, 15));
        this.setState({ items: newList });
      });
    });
    socket.on("disconnect", () => {
      socket.off("tweets");
      socket.removeAllListeners("tweets");
      console.log("Socket Disconnected");
    });
  }

  render() {
    let items = this.state.items;
    return (
      <div>
        {items.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    );
  }
}

export default Stream;