import React, { Suspense } from "react";
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
  padding?: string;
  // Media Query (Medium)
  M_flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  M_alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  M_justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  M_height?: string; // It is in vh (_vewport height_)
  M_width?: string; // It is in vw (_vewport width_)
  M_backgroundColor?: string;
  M_gap?: string;
  M_padding?: string;
}
export interface Box_Props_Type {
  width?: string;
  height?: string;
  color?: string;
  textColor?: string;
}

export interface Input_Props_Type {
  color?: string;
}
export interface Focus_Props_Type {
  text?: string;
  color?: string;
  height?: string;
  lineColor?: string;
}
export interface Title_Props_Type {
  color?: string;
}
export interface Skills_Props_Type extends Title_Props_Type {}
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
  padding: ${(props: DisplayFlex_Props_Type) => props.padding || "0"};

  @media (max-width: 768px) {
    flex-direction: ${(props: DisplayFlex_Props_Type) =>
      props.M_flexDirection || props.flexDirection || "row"};
    align-items: ${(props: DisplayFlex_Props_Type) =>
      props.M_alignItems || props.alignItems || "center"};
    justify-content: ${(props: DisplayFlex_Props_Type) =>
      props.M_justifyContent || props.justifyContent || "center"};
    height: ${(props: DisplayFlex_Props_Type) =>
      props.M_height || props.height || "100vh"};
    width: ${(props: DisplayFlex_Props_Type) =>
      props.M_width || props.width || "100vw"};
    background-color: ${(props: DisplayFlex_Props_Type) =>
      props.M_backgroundColor || props.backgroundColor || "white"};
    gap: ${(props: DisplayFlex_Props_Type) => props.M_gap || props.gap || "0"};
    padding: ${(props: DisplayFlex_Props_Type) =>
      props.M_padding || props.padding || "0"};
  }
`;
export const TextContent = styled(DisplayFlex).attrs({
  flexDirection: "column",
  height: "10vh",
  width: "100%",
  gap: "0.125rem",
  justifyContent: "flex-start",
})`
  transform: translateY(9vh);
  @media (max-width: 768px) {
    transform: translateY(6vh);
  }
`;

export const SelectionButton = styled.button`
  border: 0px;
  font-size: 1.5rem;
  height: 5rem;
  width: 10rem;
  background-color: transparent;
  color: black;
  outline: none;
  &:hover {
    cursor: pointer;
    color: lightblue;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SelectionContainer = styled(DisplayFlex).attrs({
  flexDirection: "row",
  height: "8vh",
  width: "75%",
  justifyContent: "space-evenly",
})`
  border-top: 2px solid #f2f2f2;
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

const Frame = styled.div`
  width: 100%;
  height: 30%;
  background-color: #ccc;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 5vw;
  gap: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }
`;

const Image = styled.div`
  width: 35vh;
  height: 35vh;
  display: flex;
  margin: 2rem 0 0 0;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
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
  p {
    display: none;
  }
  @media (max-width: 768px) {
    height: 15vh;
    width: 15vh;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      display: none;
    }
  }
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Input = styled.input`
  border: 0px;
  width: 100%;
  height: 5vh;
  font-size: 1.5rem;
  border-bottom: 1px solid
    ${(props: Input_Props_Type) => props.color || "white"};
  background-color: transparent;
  outline: none;
  &:focus {
    border-bottom: 1px solid black;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Description = styled(Input)`
  text-transform: capitalize;
  text-align: center;
  max-width: 12rem;
  color: lightblue;
  ::placeholder {
    color: lightblue;
  }
  @media (max-width: 768px) {
    max-width: 8rem;
  }
`;

export const Focus = styled(DisplayFlex).attrs({
  flexDirection: "column",
  width: "90%",
  justifyContent: "flex-start",
  alignItems: "center",
})`
  min-height: ${(props: Focus_Props_Type) => props.height || "100%"};
  height: auto;
  border-top: 2px solid ${(props: Focus_Props_Type) => props.lineColor || "white"};
  background-color: ${(props: Focus_Props_Type) => props.color || "white"};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  background-color: ${(props: Focus_Props_Type) => props.color || "white"};
  svg {
    height: 100%;
  }
  &::before {
    content: ${(props: Focus_Props_Type) => `"${props.text}"` || ""};
    position: relative;
    display: block;
    text-align: center;
    width: 10vh;
    left: -22vh;
    top: -0.8rem;
    background-color: ${(props: Focus_Props_Type) => props.color || "white"};
    font-size: 1rem;
    color: black;
  }
`;
import { BsSearch, BsCameraFill } from "react-icons/bs";
import { MdEdit, MdModeEdit } from "react-icons/md";
export default function index() {
  const color = {
    backgroundColor: "white",
    secondary: "#ccc",
  };
  return (
    <>
      <DisplayFlex flexDirection="row" alignItems="center">
        <SideBar />
        <MainSection />
      </DisplayFlex>
    </>
  );
}
export const Title = styled(DisplayFlex).attrs({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
})`
  font-size: 1rem;
  margin: 0 0 1rem 1rem;
  color: #333;
  background-color: ${(props: Title_Props_Type) => props.color || "white"};
  svg {
    font-size: 1.5rem;
    height: "100%";
    color: #333;
    &:hover {
      cursor: pointer;
      color: #aaa;
    }
  }
`;
export const Box = styled.div`
  width: 5rem;
  height: 2rem;
  background-color: ${(props: Box_Props_Type) => props.color || "white"};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: ${(props: Box_Props_Type) => props.textColor || "black"};
  text-transform: capitalize;
`;
export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
  gap: 1rem;
  background-color: ${(props: Skills_Props_Type) => props.color || "white"};
  font-size: 0.8rem;
  color: #333;
  div {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
  }
`;

export const SideBar = () => {
  const data = {
    image:
      "https://images.prismic.io/vips-ace/ff6db313-1550-4fce-ae28-f41c80ecbe86_BeautyPlus_20220707204457968_save.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1440&h=1440",
    Focus: {
      primary: "Creating something with React.js",
      secondary: "also learning WASM",
    },
    Skills: ["React.js", "Next.js", "Wasm"],
  };
  const color = {
    backgroundColor: "white",
    secondary: "orange",
    primary: "lightblue",
    lineColor: "#f2f2f2",
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DisplayFlex
        flexDirection="column"
        alignItems="center"
        width="30%"
        justifyContent="flex-start"
        gap="2rem"
        backgroundColor={color.backgroundColor}
        style={{ borderRight: `2px solid ${color.lineColor}` }}
      >
        {data.image && (
          <Image>
            <img src={data.image} alt="user" />
            <BsCameraFill />
          </Image>
        )}
        {data.Focus && (
          <Focus color={color.backgroundColor} lineColor={color.lineColor} height="16vh" text="Focus">
              <Title color={color.backgroundColor}>
                {data.Focus.primary}
                <Box color={color.primary}>Primary</Box>
              </Title>
              <Title color={color.backgroundColor}>
                {data.Focus.secondary}
                <Box color={color.secondary}>Secondary</Box>
              </Title>
          </Focus>
        )}
        {data.Skills && (
          <Focus color={color.backgroundColor} lineColor={color.lineColor}  height="10vh" text="Skills">
            <Skills color={color.backgroundColor}>
              {data.Skills.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </Skills>
          </Focus>
        )}
      </DisplayFlex>
    </Suspense>
  );
};
export const MainSection = () => {
  return (
    <DisplayFlex
      flexDirection="column"
      alignItems="center"
      width="70%"
    ></DisplayFlex>
  );
};
