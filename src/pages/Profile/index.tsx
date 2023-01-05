import React from "react";
import styled from "styled-components";
export interface DisplayFlex_Props_Type {
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  height?: string; // It is in vh (_vewport height_)
  width?: string; // It is in vw (_vewport width_)
  backgroundColor?: string;
  gap?: string;
}

const DisplayFlex = styled.div`
  display: flex;
  flex-direction: ${(props: DisplayFlex_Props_Type) =>
    props.flexDirection || "row"};
  align-items: ${(props: DisplayFlex_Props_Type) =>
    props.alignItems || "center"};
  justify-content: ${(props: DisplayFlex_Props_Type) =>
    props.justifyContent || "center"};
  height: ${(props: DisplayFlex_Props_Type) => props.height || "100vh"};
  width: ${(props: DisplayFlex_Props_Type) => props.width || "100vw"};
  background-color: ${(props: DisplayFlex_Props_Type) =>
    props.backgroundColor || "white"};
  gap: ${(props: DisplayFlex_Props_Type) => props.gap || "0"};
`;

const SideBar = styled(DisplayFlex).attrs({
  flexDirection: "column",
  height: "100%",
  width: "30%",
  backgroundColor: "#f2f2f2",
  justifyContent: "flex-start",
})`
  padding: 5vh 0 0 0;
`;
const Search = styled.input`
  width: 60%;
  height: 5vh;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1.1rem;
  outline: none;
`;
const SearchButton = styled.button`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1.1rem;
  outline: none;
  background-color: #ccc;
  cursor: pointer;
  &:hover {
    background-color: #aaa;
  }
`;
const MainSection = styled(DisplayFlex).attrs({
  flexDirection: "column",
  height: "100%",
  width: "70%",
  justifyContent: "flex-start",
})``;

const Frame = styled.div`
  width: 100%;
  height: 30%;
  padding: 5vh;
  background-color: #ccc;
  margin: 0 auto;
`;
const Image = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  overflow: hidden;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.1);
      transition: transform 0.5s ease;
      opacity: 0.5;
    }
    svg {
      display: block;
      position: absolute;
      font-size: 2rem;
      color: #fff;
    }
  }
  img {
    width: 100%;
    transition: transform 0.5s ease;
    height: 100%;
    object-fit: cover;
  }
  svg {
    display: none;
  }
  p{
    display: none;
  }

`;

import { BsSearch, BsCameraFill } from "react-icons/bs";
export default function index() {
  return (
    <>
      <DisplayFlex
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <SideBar>
          <DisplayFlex
            height="10vh"
            width="100%"
            flexDirection="row"
            backgroundColor="#f2f2f2"
            gap="1rem"
          >
            <Search placeholder="Search" />
            <SearchButton>
              <BsSearch />
            </SearchButton>
          </DisplayFlex>
        </SideBar>
        <MainSection>
          <Frame>
            <Image>
              <img src="/user.jpg" alt="user" style={{ height: "100%" }} />
              <BsCameraFill />
              <p>Change Profile Picture</p>
            </Image>
          </Frame>
        </MainSection>
      </DisplayFlex>
    </>
  );
}
