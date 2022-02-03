import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Container, flexCenter } from "../../styles/theme";

const titleAnimation = keyframes`
  0% {
    margin-top: 100rem;
  }
  100% {
    margin-top: -90rem;
  }
`;
const ProjectBox = styled.div<{ link: boolean }>`
  justify-self: center;
  padding: 1.3rem 0;
  box-sizing: border-box;
  border-bottom: 0.1rem solid transparent;
  transition: 0.3s;
  .project-title {
    transition: 0.3s;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 0.5rem;
  }
  .content {
    font-size: 15px;
  }
  &:hover {
    transition: 0.3s;
    border-bottom: 0.1rem solid
      ${({ link, theme }) => (link ? theme.color.red : "transparent")};
    .project-title {
      transition: 0.3s;
      color: ${({ link, theme }) =>
        link ? theme.color.blue : theme.color.white};
    }
  }
  cursor: ${({ link }) => (link ? "pointer" : "default")};
  div {
    width: 100%;
    text-align: start;
  }
`;
const Wrapper = styled(Container)`
  margin-top: 20rem; //35rem
  height: 80rem;   //110rem
  overflow: hidden;
  position: relative;
  ${flexCenter};
  .project-title-animation {
    animation: ${titleAnimation} 2s forwards;
  }
  .title-opacity {
    margin-top: 20rem;
    width: 100%;
    ${flexCenter};
    justify-content: space-between;
    font-weight: 900;
    font-size: 14.4rem;
    line-height: 17.6rem;
    opacity: 0.2;
    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.color.blue}, ${theme.color.red})`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .container {
    position: absolute;
    top: 8rem;
    width: 98rem;
    .title {
      width: 100%;
      ${flexCenter};
      justify-content: space-between;
      font-weight: 200;
      font-size: 6.4rem;
      line-height: 7.8rem;
      width: 100%;
      text-align: center;
    }
    .projects {
      display: grid;
      grid-template-columns: repeat(3, 1fr); //4개
      gap: 4rem;
      margin-top: 7rem;
      padding-bottom: 25rem;
      .box {
      }
    }
  }
  .copyright {
    width: 100%;
    text-align: center;
    padding-bottom: 5rem;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin-top: 200px;
  }
`;


const projects = [
  {
    id: "Twitproview",
    content: "Twitter Profile Tweets Listing Platform",
    link: "https://github.com/mandu0505/twitter-viewer",
  },
  {
    id: "Holoschedule",
    content: "Real-time streaming information service for VTubers in Holo Live",
    link: "https://github.com/mandu0505/holoschedule",
  },
  {
    id: "Bankbitss",
    content: "Metamask Ethereum Wallet Remittance Service",
    link: "https://github.com/mandu0505/bankbitss.com",
  },
];

const Project = () => {
  useEffect(() => {
    const handleScroll = () => {
      const title1 = document.querySelector(".title-opacity")!;

      if (window.scrollY > 3500) {
        title1.classList.add("project-title-animation");
      } else {
        title1.classList.remove("project-title-animation");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <div className="title-opacity">
        {"PROJECTS".split("").map((v) => (
          <div>{v}</div>
        ))}
      </div>
      <div className="container">
        <div className="title">
          {"PROJECTS".split("").map((v) => (
            <div>{v}</div>
          ))}
        </div>
        <div className="projects">
          {projects.map((project) => (
            <ProjectBox
              link={project.link ? true : false}
              onClick={() => project.link && window.open(project.link)}
            >
              <div className="project-title">{project.id}</div>
              <div className="content">{project.content}</div>
            </ProjectBox>
          ))}
        </div>
        <div className="copyright">© 2022 mandu0505. ALL RIGHTS RESERVED.</div>
      </div>
    </Wrapper>
  );
};

export default Project;
