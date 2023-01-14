import React, { Suspense } from "react";
import Upload from "./upload";
import {
  DisplayFlex,
  Box,
  Name,
  Image,
  Focus,
  Title,
  Skills,
  Selection,
  SelectionContainer,
} from "./components";
import { BsSearch, BsCameraFill } from "react-icons/bs";
import { MdEdit, MdModeEdit } from "react-icons/md";
export interface data_type {
  name?: string;
  username?: string;
  designation?: string;
  image?: string;
  focus?: string[];
  skills?: string[];
}
export interface color_type {
  background: {
    primary: string;
    secondary: string;
  };
  font: {
    primary: string;
    secondary: string;
  };
  focus: {
    primary: string;
    secondary: string;
  };
  lineColor?: string;
}
export default function index() {
  const [data, setData] = React.useState<data_type>({});
  const path = window.location.pathname;
  const username = path.split("/")[1];
  React.useEffect(() => {
    const User_Data = async () => {
      let data = await firestore
        .collection("User")
        .where("username", "==", username)
        .get();
      return data.docs.map((doc) => doc.data());
    };
    User_Data().then((data) => {
      if (data.length !== 0) {
        setData(data[0]);
        console.log(data);
      }
    });
  }, []);
  // const data = {
  //   name: "Kanishk Rawat",
  //   designation: "Frontend Developer",
  //   image: "https://avatars.githubusercontent.com/u/97908874?v=4",
  //   focus: [
  //     "Creating something with React.js",
  //     "also learning WASM",
  //   ],
  //   skills: [
  //     "React.js",
  //     "Next.js",
  //     "C++",
  //     "Python",
  //     "Node",
  //     "Javascript",
  //     "TypeScript",
  //   ],
  // };
  const color = {
    background: {
      primary: "white",
      secondary: "lightblue",
    },
    font: {
      primary: "pink",
      secondary: "white",
    },
    focus: {
      primary: "lightblue",
      secondary: "orange",
    },
    lineColor: "#f2f2f2",
  };
  return (
    <>
      {data.username ? (
        <DisplayFlex flexDirection="row" alignItems="flex-start">
          <SideBar data={data} color={color} />
          <MainSection data={data} color={color} />
        </DisplayFlex>
      ):(
        <DisplayFlex flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
          <h1>User Not Found</h1>
        </DisplayFlex>
      )}
    </>
  );
}
interface props_type {
  data: data_type;
  color: color_type;
}

export const SideBar = ({ data, color }: props_type) => {
  return (
    <>
      <DisplayFlex
        flexDirection="column"
        alignItems="center"
        width="30%"
        justifyContent="flex-start"
        gap="2rem"
        color={color.font.primary}
        backgroundColor={color.background.primary}
        style={{ borderRight: `2px solid ${color.lineColor}` }}
      >
        {data.image && (
          <Image>
            <img src={data.image} alt="user" />
            <BsCameraFill />
          </Image>
        )}
        {data.focus && (
          <Focus
            lineColor={color.lineColor}
            height="16vh"
            text="Focus"
            bgcolor={color.background.primary}
          >
            <Title>
              {data.focus[0]}
              <Box color={color.focus.primary}>Primary</Box>
            </Title>
            <Title>
              {data.focus[1]}
              <Box color={color.focus.secondary}>Secondary</Box>
            </Title>
          </Focus>
        )}
        {data.skills && (
          <Focus
            lineColor={color.lineColor}
            height="10vh"
            text="Skills"
            bgcolor={color.background.primary}
          >
            <Skills>
              {data.skills.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </Skills>
          </Focus>
        )}
      </DisplayFlex>
    </>
  );
};

import { RiMessage2Fill } from "react-icons/ri";
import { firestore } from "../../firebase/firebasefunction";
export const MainSection = ({ color, data }: props_type) => {
  return (
    <>
      <DisplayFlex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="70%"
        height="100%"
      >
        <DisplayFlex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          height="15%"
          padding="4rem 2rem"
          // backgroundColor="#D7E9B9"
          // style={{
          //   backgroundImage:
          //     "url(https://marketplace.canva.com/EAE2cQaUHVA/1/0/1600w/canva-black-minimal-motivation-quote-linkedin-banner-HoRi-2buBWk.jpg)",
          // }}
        >
          <Name>{data.name}</Name>
          <Name style={{ fontSize: "1rem" }} color={"lightblue"}>
            {data.designation}
          </Name>
          <DisplayFlex
            flexDirection="row"
            justifyContent="flex-start"
            width="35%"
            height="10%"
            gap="2rem"
            padding="2.3rem 0"
            backgroundColor="transparent"
          >
            <Box
              style={{
                width: "auto",
                padding: "0.125rem 1.5rem",
                height: "2.5rem",
                fontSize: "1.1rem",
                border: "1px solid black",
              }}
              hovercolor={color.background.secondary}
              color={"#434242"}
              bgcolor={color.background.primary}
            >
              <RiMessage2Fill />
              Contact
            </Box>
            <Box
              style={{
                width: "auto",
                padding: "0.25rem 1.5rem",
                height: "2.5rem",
                fontSize: "1.1rem",
              }}
              color={"#434242"}
              bgcolor={color.background.secondary}
            >
              Edit Profile
            </Box>
          </DisplayFlex>
        </DisplayFlex>
        <DisplayFlex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
          height="80%"
          backgroundColor={color.background.primary}
        >
          <SelectionContainer>
            <Selection>About</Selection>
            <Selection>Timeline</Selection>
          </SelectionContainer>
          <Focus
            style={{ width: "100%" }}
            bgcolor={color.background.primary}
            lineColor={color.lineColor}
            text=""
          >
          </Focus>
        </DisplayFlex>
      </DisplayFlex>
    </>
  );
};
