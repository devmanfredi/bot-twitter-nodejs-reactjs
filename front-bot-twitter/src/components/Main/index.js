import React from "react";

import ProfilePage from "../ProfilePage";

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
} from "./styles";

export default function Main() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Heuler Manfredi</strong>
          <span>999 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
    </Container>
  );
}
