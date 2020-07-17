import React from "react";

import Feed from "../Feed";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from "./styles";

export default function ProfilePage() {
  return (
    <Container>
      <Banner
        background={
          "https://elifeportugal.com/wp-content/uploads/2018/09/bots.jpg"
        }
      >
        <Avatar
          background={
            "https://media-exp1.licdn.com/dms/image/C4D03AQGkUlrej0r8_Q/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=TnvDOLJJjE8Nk99qEgJy5qELMDmA5wEE8pfmMY2eN2U"
          }
        />
      </Banner>

      <ProfileData>
        <h1>Heuler Manfredi</h1>
        <h2>@heuler_manfredi</h2>

        <p>
          Developer at{" "}
          <a href="https://www.linkedin.com/in/heuler-felipe-ramos-manfredi-6b6385171/">
            @HeulerManfredi
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Joinville, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 15 de dezembro de 1994
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>999</strong>
          </span>
          <span>
            <strong>999 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}
