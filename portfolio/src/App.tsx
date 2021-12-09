import styled from "styled-components";
import Helmet from "react-helmet";
import { Link, Route, Routes } from "react-router-dom";
import pic from "./img/pic.png";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  padding: 30px 100px;
  z-index: 100000;
  .logo {
    @import url('https://fonts.googleapis.com/css2?family=Corinthia:wght@700&display=swap');
    font-family: 'Corinthia', cursive;
    position: relative;
    color: #116E9B;
    font-size: 30px;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 700;
    transition: 0.5s;
  }
  .active {
    .toggle:before {
      top: 14px;
      transform: rotate(45deg);
      box-shadow: 0 0 0 #fff;
    }
    .toggle:after {
      top: 14px;
      transform: rotate(-45deg);
    }
    ul {
      @media (max-width: 992px) {
        opacity: 1;
        top: 65px;
        transform: translateY(0);
      }
    }
  }
  .toggle {
    display: none;
    @media (max-width: 992px) {
      display: block;
      position: relative;
      width: 30px;
      height: 30px;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        top: 4px;
        width: 100%;
        height: 2px;
        background: #0e2247;
        z-index: 2;
        box-shadow: 0 10px 0 #0e2247;
        transition: 0.5s;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: 4px;
        width: 100%;
        height: 2px;
        background: #0e2247;
        z-index: 2;
        transition: 0.5s; 
      }
    }
  }
  .sticky {
    padding: 16px 100px;
    background: blanchedalmond;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    .logo {
      color: #116E9B;
    }
    ul {
      li {
        a {
          color: #116E9B;
        }
      }
    }
  }
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px) {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%; 
      height: calc(100vh - 60px);
      text-align: center;
      overflow: auto;
      transition: 0.5s;
      background: rgb(244, 223, 223);
      flex-direction: column;
      opacity: 0;
      transform: translateY(-100%);
    }
    li {
      position: relative;
      list-style: none;
      a {
        font-size: 14px;
        font-weight: 600;
        line-height: 42px;
        position: relative;
        text-align: center;
        padding: 5px 10px;
        color: #116E9B;
        display: inline-block;
        text-decoration: none solid #116E9B;
        cursor: pointer;
        word-spacing: 0px;
        letter-spacing: 3px;
        transition: 0.3s;
        border-radius: 10px;
        &.active {
          color: #56C6FD;
        }
        &:hover {
          color: #56C6FD;
        }
        @media (max-width: 992px) {
          margin: 5px 0;
          font-size: 24px;
          color: #116E9B;
        }
      }
    }
  }
`;
const Section = styled.div`
  position: block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;
  padding: 150px 100px 50px;
  img {
    position: relative;
    max-width: 350px;
    margin-left: 30px;
    opacity: 0.1;
  }
  h1{
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.2px;
    line-height: 18px;
    text-decoration: none solid rgb(11, 27, 56);
    word-spacing: 0px;
    padding: 70px 0 0;
    background-position: 0% 0%;
    color: #0B1B38;
    height: 18px;
    margin: 0 0 32px 0;
    display:block;
  }
  h3 {
    font-size: 57.5px;
    font-weight: 600;
    letter-spacing: -2.875px;
    text-decoration: none solid rgb(255, 255, 255);
    word-spacing: 0px;
    color: #0B1B38;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    margin: 0 0 32px 0;
    width: 450px;
    position:relative;
    display: block;
  }
  input {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 18px;
    font-weight: 800;
    line-height: 27px;
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    margin: 10px 0;
    margin-top: 20px;
    text-decoration: none;
    color: #116E9B;
    background-color: blanchedalmond;
    border: 0;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
      color: #56C6FD;
    }
  }
  .icons {
    float: left;
    margin-right: 50px;
    &:hover {
      opacity: 0.8;
    }
  }
  .home {
    z-index: 10;
    @media (max-width: 992px) {
      height: auto !important;
      display: initial;
      padding: 100px;
      box-sizing: border-box;
    }
  }
  .portfolio {
    z-index: 10;
  }
  .mandu {
    @media (max-width: 992px) {
      margin: 50px 0 0;
      position: absolute;
      right: 5%;
      margin-top: 249px;
      z-index: 1;
    }
  }
  @media (max-width: 992px) {
    height: auto !important;
    display: initial;
    box-sizing: border-box;
    padding: 150px 100px 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    text-size-adjust:inherit;
  }
`;
const Footer = styled.div`
  padding: 10px 20px;
  p {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.7px;
    line-height: 20.7px;
    text-decoration: none solid rgb(11,27,56);
    text-align: center;
    justify-content: center;
    text-transform: uppercase;
    word-spacing: 0px;
  }
`;

function App() {
  return (
    <>
      <head>
        <Helmet>
          <link rel = "icon" href = "favicon.ico"/>
          <title>gosmain / Youngmin Ko</title>
        </Helmet>
        </head>
      <body>
        <Header as="header">
          <link rel = "stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
          <a className="logo" href = "/">M</a>
            <ul>
              <li><a className="active" href = "#home">Home</a></li>
              <li><a href = "#portfolio">Portfolio</a></li>
              <li><a href = "#contact">Contact</a></li>
              <span><a href = "https://github.com/mandu0505"><i className="fab fa-github"></i></a></span>
            </ul>
            <div className = "toggle"></div>
        </Header>
        <Section className="home" as="section">
          <div className = "contentText">
            <h1>YOUNGMIN KO</h1>
            <h3>지금까지 연 중괄호 수는 기억 못 하고 있습니다</h3>
            <p>프로그래머입니다.<br/>여기저기서 돌아가는 프로그램을 만듭니다.<br/>검은 화면에 흰색 글씨만 나오는 심심해 보이는 프로그램부터 스마트폰에서 돌아가는 앱과 게임, 브라우저에서 돌아가는 홈페이지나 웹 앱, 지구 어딘가에서 열심히 돌아가는 서버도 만듭니다.</p>
          </div>
          <img className = "mandu" alt = {"pic"} src = {pic} data-speed = "1"/>
        </Section>
        <Section className="portfolio" as="section">
          <div className = "contentText">
            <a href= "/portfolio"><input type = "button" value = "전체 이력 보기"/></a>
            <h2>Skills</h2>
                <ul>
                  <li>Front-End: JavaScript, TypeScript, React.js, Next.js, HTML/CSS</li>
                  <h5 className = "showBx">
                    <span>HTML/CSS</span>
                    <p>웹표준을 지키려 노력합니다.</p>
                    <p>SCSS 문법에 익숙합니다.</p>
                    <p>styled-components, emotion을 활용할 수 있습니다.</p>
                    <p>BEM 방법론을 적용할 수 있습니다.</p>
                    <p>Tailwind같은 css 라이브러리를 사용할 수 있습니다.</p>
                    <p>keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.</p>
                    <span>Javascript</span>
                    <p>ES6+ 문법에 익숙합니다.</p>
                    <p>webpack, parcel등의 번들러 사용 경험이 있습니다.</p>
                    <p>typescript를 사용할 수 있습니다.</p>
                    <p>Jest를 활용한 테스트코드 작성 경험이 있습니다.</p>
                    <p>Storybook 작성, 빌드 및 배포 경험이 있습니다.</p>
                    <span>React</span>
                    <p>redux, redux saga, recoil 등의 상태관리 라이브러리 사용 경험이 있습니다.</p>
                    <p>next.js를 활용한 SSR 개발 경험이 있습니다.</p>
                  </h5>
                  <li>Back-End: Node.js, AWS</li>
                  <h5 className = "showBx">스킬들 자세하게 ppt형식(참고자료)</h5>
                  <li>Database: PostgreSQL, MongoDB, MYSQL</li>
                  <h5 className = "showBx">스킬들 자세하게 ppt형식(참고자료)</h5>
                </ul>
            <h2>WORK EXPERIENCES</h2>
                <p><i className = "fal fa-chevron-double-right"></i> None</p>
                <h5 className = "showBx">NGINE STUDIOS / NEXON COMPANY 소프트웨어 엔지니어, 2020. 6 –<br/>넥슨컴퍼니 산하 엔진스튜디오에서 산업기능요원으로 일하고 있습니다. </h5>
                <h5 className = "showBx">NGINE STUDIOS / NEXON COMPANY 소프트웨어 엔지니어, 2020. 6 –<br/>넥슨컴퍼니 산하 엔진스튜디오에서 산업기능요원으로 일하고 있습니다. </h5>
            <h2>EDUCATION</h2>
                <p><i className = "fal fa-chevron-double-right"></i> Xi'an Jiaotong-Liverpool University (XJTLU) 학부 20학번, 2020.09 - (휴학)</p>
            <h2>ACHIEVEMENTS</h2>
                <p><i className = "fal fa-chevron-double-right"></i> None</p>
            <h2>PROJECTS</h2>
                <p><i className = "fal fa-chevron-double-right"></i> xxx.com 트위터 한정 조회수 기반 나열 플랫폼, 2021.09 -<br/>- 개인 프로젝트 / 개발 및 디자인</p>
                <h5 className = "showBx">기존에 사용하던 트위터의 컨텐츠 나열 시스템이 불편해 새로 제작했습니다. <br/> userName에 자신의 트위터 아이디를 입력하여 조회수 순서대로 컨텐츠를 조회할 수 있습니다.</h5>
            <h2>EXTRACURRICULAR ACTIVITIES</h2>
                <p><i className = "fal fa-chevron-double-right"></i> None</p>
            <h2>OTHER EXPERIENCES</h2>
                <p><i className = "fal fa-chevron-double-right"></i> None</p>
          </div>
        </Section>
        <Section className="contact" as="section">
          <div>
            <h2>Contacts</h2>
            <br/>
            <div className="icons">
              <div><a href = "https://github.com/mandu0505"><i className="fab fa-github"></i></a></div>
              <div><p>mandu0505</p></div>
            </div>
            <div className="icons">
              <div><a href = "https://www.linkedin.com/in/youngmin-ko-0994a411b/"><i className="fab fa-linkedin"></i></a></div>
              <div><p>youngmin-ko</p></div>
            </div>
            <div className="icons">
              <div><a href = "mailto: gosmain@naver.com"><i className="fas fa-envelope-square"></i></a></div>
              <div><p>gosmain@naver.com</p></div>
            </div>
          </div>
        </Section>
        <Footer>
          <div>
            <p> © 2019 – 2021 YOUNGMIN KO / MANDU DESIGN CO. ALL RIGHTS RESERVED.</p>
          </div>
        </Footer>
      </body>
    </>
  );
}

export default App;
