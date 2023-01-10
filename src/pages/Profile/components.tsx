import styled from "styled-components";
import {
  DisplayFlex_Props_Type,
  Box_Props_Type,
  Focus_Props_Type,
  Title_Props_Type,
  Skills_Props_Type,
  Input_Props_Type,
  Name_Props_Type,
  Selection_Props_Type,
} from "./component_Types";

export const DisplayFlex = styled.div`
  display: flex;
  color: ${(props: DisplayFlex_Props_Type) => props.color || "black"};
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
  width: "100%",
  justifyContent: "flex-start",
})``;

export const Search = styled.input`
  width: 60%;
  height: 5vh;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1.1rem;
  outline: none;
`;
export const SearchButton = styled.button`
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

export const Frame = styled.div`
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

export const Image = styled.div`
  width: 35vh;
  height: 35vh;
  display: flex;
  margin: 2rem 0 0 0;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50rem;
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
export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Input = styled.input`
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
  border-top: 2px solid
    ${(props: Focus_Props_Type) => props.lineColor || "white"};
  background-color: ${(props: Focus_Props_Type) => props.bgcolor || "transparent"};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
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
    background-color: ${(props: Focus_Props_Type) => props.bgcolor || "transparent"};
    font-size: 1rem;
  }
`;

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
  background-color: ${(props: Title_Props_Type) => props.color || "transparent"};
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
  width: auto;
  padding: 0.5rem 1rem;
  height: 2rem;
  background-color: ${(props: Box_Props_Type) => props.bgcolor || "transparent"};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: ${(props: Box_Props_Type) => props.color || "black"};
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    background-color: ${(props: Box_Props_Type) => props.hovercolor || "transparent"};
    }
`;
export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
  gap: 1rem;
  background-color: ${(props: Skills_Props_Type) => props.color || "transparent"};
  font-size: 0.8rem;
  color: #333;
  div {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
  }
`;

export const Name = styled.div`
  font-size: 3rem;
  color: ${(props: Name_Props_Type) => props.color || "black"};
  margin: 0 0 1rem 0;
  background-color: ${(props: Name_Props_Type) => props.bgcolor || "transparent"};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Selection = styled.div`
  display: flex;
  padding: 1rem 2rem;
  border-bottom: 2px solid
    ${(props: Selection_Props_Type) => props.lineColor || "white"};
  &:hover {
    cursor: pointer;
    color: #aaa;
    border-bottom: 2px solid lightblue;
  }
`;
