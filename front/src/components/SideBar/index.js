import React, { useEffect } from "react";
import logo from "../../assets/logo-app.svg";
import home from "../../assets/home.svg";
import book from "../../assets/book.svg";
import user from "../../assets/user.svg";
import {
  Container,
  UserImage,
  UserImageContainer,
  UserOptionsContainer,
  UserOption,
  LogoContainer,
} from "./style";

function SideBar({ component, setComponent, setIndex }) {
  function changeComponent(n) {
    if (n === 1) {
      setComponent("home");
      setIndex(1);
    } else if (n === 2) {
      setComponent("subjects");
      setIndex(2);
    } else if (n === 4) {
      setComponent("user");
      setIndex(4);
    }
  }

  return (
    <Container>
      <UserImageContainer>
        <UserImage src="https://www.vagalume.com.br/billie-eilish/images/billie-eilish.jpg"></UserImage>
        <h6 style={{ margin: "5px" }}>User Name</h6>
      </UserImageContainer>
      <UserOptionsContainer>
        <UserOption
          active={component === "home"}
          onClick={() => changeComponent(1)}
        >
          <img
            alt="aaaaa"
            src={home}
            style={{ width: "27px", height: "33px", marginRight: "15px" }}
          ></img>
          Home
        </UserOption>
      </UserOptionsContainer>
      <UserOptionsContainer>
        <UserOption
          active={component === "subjects"}
          onClick={() => changeComponent(2)}
        >
          <img
            alt="aaaaa"
            src={book}
            style={{ width: "27px", height: "33px", marginRight: "15px" }}
          ></img>
          Subjects
        </UserOption>
      </UserOptionsContainer>

      <UserOptionsContainer>
        <UserOption
          active={component === "user"}
          onClick={() => changeComponent(4)}
        >
          <img
            alt="aaaaa"
            src={user}
            style={{ width: "27px", height: "33px", marginRight: "15px" }}
          ></img>
          Profile
        </UserOption>
      </UserOptionsContainer>

      <LogoContainer>
        <img
          src={logo}
          alt="aaaaa"
          style={{ width: "60%", height: "60px" }}
        ></img>
      </LogoContainer>
    </Container>
  );
}

export default SideBar;
