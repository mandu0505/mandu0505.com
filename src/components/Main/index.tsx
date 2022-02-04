import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Mandu0505 } from "../../assets/index";
import { Container } from "../../styles/theme";

const titleAnimation = keyframes`
  0% {
    margin-left: 100%;
  }
  100% {
    margin-left: 0;
  }
`;
const titleAnimation2 = keyframes`
  0% {
    margin-left: -100%;
  }
  100% {
    margin-right: 0;
  }
`;
const fadeIn = keyframes`
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Link = styled.div<{ idx: number }>`
  color: ${({ theme }) => theme.color.blue};
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.2rem;
  border-bottom: 0.1rem solid transparent;
  animation: ${fadeIn} 1s;
  animation-delay: ${({ idx }) => `0.${idx}s`};
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.color.red};
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.red};
    transition: 0.3s;
  }
`;
const Info = styled.div<{ idx: number }>`
  animation: ${fadeIn} 1s;
  animation-delay: ${({ idx }) => `0.${idx}s`};
  span {
    font-weight: 300;
    margin-left: 1rem;
  }
`;
const Wrapper = styled(Container)`
  padding-top: 9rem;
  position: relative;
  svg {
    position: absolute;
    right: 5rem;
  }
  .title {
    position: relative;
    top: 0;
    font-size: 14.4rem;
    font-weight: 900;
    width: 100%;
    line-height: 17.6rem;
    letter-spacing: 0.12em;
    white-space: pre-line;
    animation: ${titleAnimation} 0.5s;
    &:nth-child(3) {
      text-align: end;
      -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.white};
      color: transparent;
      animation: ${titleAnimation2} 0.5s;
    }
  }
  .links {
    margin-top: 12rem;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1.4rem;
    cursor: pointer;
  }
  .info {
    margin-top: 6rem;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.2rem;
    div {
      margin-top: 1.4rem;
    }
  }
  .title-animation {
    opacity: 0;
    top: 10rem;
    transition: 1s;
  }
`;

const links = [
  { id: "github", link: "https://github.com/mandu0505" },
  {
    id: "resume(en)",
    link: "https://mandu0505.notion.site/Youngmin-mandu0505-2753797a76154a47bacd179d0564fbb8",
  },
  {
    id: "resume(ko)",
    link: "https://mandu0505.notion.site/mandu0505-21db250e06b741c5b084d5f13fe49fa8",
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/youngmin-ko-0994a411b/",
  },
];

const infos = [
  { id: "Email", value: "gosmain@naver.com" },
  { id: "Birth", value: "2000.05.05" },
  {
    id: "Education",
    value: "Xi'an Jiaotong Liverpool University. Computer Science",
  },
];

const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const Title1 = document.querySelector("#title-1")!;
      const Title2 = document.querySelector("#title-2")!;

      window.scrollY > 100
        ? Title1.classList.add("title-animation")
        : Title1.classList.remove("title-animation");

      window.scrollY > 200
        ? Title2.classList.add("title-animation")
        : Title2.classList.remove("title-animation");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper id="main">
      <Mandu0505 />
      <div id="title-1" className="title">
        Mandu0505
      </div>
      <div id="title-2" className="title">
        <br />
        {`Youngmin`}
      </div>
      <div className="links">
        {links.map((link, i) => (
          <Link key={link.id} idx={i} onClick={() => window.open(link.link)}>
            {link.id}
          </Link>
        ))}
      </div>
      <div className="info">
        <div>Frontend Developer</div>
        {infos.map((info, i) => (
          <Info key={info.id} idx={i}>
            {info.id}.<span>{info.value}</span>
          </Info>
        ))}
      </div>
    </Wrapper>
  );
};

export default Main;
