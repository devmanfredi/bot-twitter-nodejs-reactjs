import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import api from "../../services/api";
import Item from "./Item";

import Tweet from "../Tweet";

import {
  Container,
  Tab,
  Tweets,
  Form,
  FormInput,
  ButtonCreate,
} from "./styles";

export default function Feed() {
  const [hashTag, setHashTag] = useState("");
  const [hashTags, setHashTags] = useState([]);
  const [tweets, setTweets] = useState([]);
  let [items, setItems] = useState([]);

  useEffect(() => {
    api.get("tweets").then((response) => {
      setHashTags(response.data);
    });

    const socket = socketIOClient("http://localhost:3333/");

    socket.on("connect", () => {
      console.log("Socket Connected");
      socket.on("tweets", (data) => {
        console.info(data);
        // let newList = [data].concat(items.slice(0, 15));
        // setItems(newList);
        // setTweets(data);
      });
    });

    socket.on("disconnect", () => {
      socket.off("tweets");
      socket.removeAllListeners("tweets");
      console.log("Socket Disconnected");
    });
  }, [tweets]);

  async function handleResume() {
    let term = "javascript";
    fetch("/setSearchTerm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ term }),
    });
  }

  async function handleNewHashTag(e) {
    e.preventDefault();

    const itensCopy = Array.from(hashTags);
    itensCopy.push({ id: hashTags.length, value: hashTag });
    setHashTags(itensCopy);

    const data = {
      hashTag,
    };

    try {
      await api.post("tweets", data);
      // history.push('/profile');
    } catch (error) {
      alert("erro em cadastrar hashTag");
    }

    setHashTag("");
  }

  async function handleTweets() {
    try {
      const result = await api.get("tweets/status");
      await setTweets(result.data);
    } catch (error) {
      alert("erro em cadastrar hashTag");
    }
  }

  async function handlePause(event) {
    fetch("/pause", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async function deleteHashTag(index) {
    const itensCopy = Array.from(hashTags);
    itensCopy.splice(index, 1);
    setHashTags(itensCopy);
    await api.delete(`tweets/${index}`);
  }

  return (
    <Container>
      <Form>
        <form onSubmit={handleNewHashTag}>
          <FormInput
            placeholder="Digite a HashTag"
            value={hashTag}
            onChange={(e) => setHashTag(e.target.value)}
          />
          <ButtonCreate outlined>Cadastrar</ButtonCreate>
          {/* <ButtonCreate outlined>Stream</ButtonCreate> */}
        </form>
      </Form>

      <ul>
        {hashTags.map(({ id, value }, index) => (
          <Item key={id} value={value} onDelete={() => deleteHashTag(index)} />
        ))}
      </ul>

      <Tab onClick={handleTweets}>Coletar Tweets</Tab>

      <Tweets>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </Tweets>
    </Container>
  );
}
