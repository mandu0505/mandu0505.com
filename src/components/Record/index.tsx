import styled from "styled-components";
import { Container, flexCenter } from "../../styles/theme";

const Wrapper = styled(Container)`
  .container {
    width: 100%;
    height: 70rem;
    position: sticky;
    top: 10rem;
    margin-top: 18rem;
    .box {
      margin-top: 5rem;
      .title {
        ${flexCenter};
        justify-content: space-between;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.9rem;
        color: #3effff;
      }
      .info {
        margin-top: 0.4rem;
        font-size: 1.8rem;
        line-height: 2.2rem;
        width: 350px;
      }
      .date {
        margin-top: 0.4rem;
        text-align: end;
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
    }
    &:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 50px;
    }
    &:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }
`;
const Title = styled.div<{ title: string }>`
  text-align: start;
  font-weight: bold;
  font-size: 6.4rem;
  line-height: 7.8rem;
  color: transparent;
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.white};
  position: relative;
  ::after {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    left: -0.4rem;
    top: -0.4rem;
    -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.red};
    opacity: 0.7;
  }
  ::before {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    left: 0.4rem;
    top: 0.4rem;
    -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.blue};
    opacity: 0.7;
  }
`;

const records = [
  {
    id: "Tech_Stack",
    contents: [
      {
        id: "1",
        title: "Javascript",
        info: `Understood ES6+ syntax and typescript.
        Always interested in the latest related technologies, and constantly studying to write and test efficient and clean codes.
        Familiar with media services in the web environment and can actively utilize API data and do DOM manipulation`,
        date: "",
      },
      {
        id: "2",
        title: "React",
        info: `Can code the desired functionality to meet the given requirements. 
        Have a deep understanding of the functional components and hooks that React team suggests for. 
        State management libraries such as Recoil can be actively utilized and used for purposes.`,
        date: "",
      },
    ],
  },
  {
    id: "Skills",
    contents: [
      {
        id: "1",
        title: "Language",
        info: "HTML, CSS, Javascript",
        date: "",
      },
      {
        id: "2",
        title: "Library",
        info: "React.js",
        date: "",
      },
      {
        id: "2",
        title: "State Management",
        info: "Recoil, Redux",
        date: "",
      },
      {
        id: "2",
        title: "Server side",
        info: "Node.js, Express, Next.js",
        date: "",
      },
      {
        id: "2",
        title: "Query Language",
        info: "GraphQL, Apollo",
        date: "",
      },
    ],
  },
  {
    id: `Activities`,
    contents: [
      {
        id: "1",
        title: "Rising Camp",
        info: "Online Coding Bootcamp",
        date: "2022.02 ~ 2022.04 ",
      },
      {
        id: "2",
        title: "Project Lion (LIKE LION)",
        info: "Online Coding Bootcamp",
        date: "2022.02-2022.04",
      },
    ],
  },
];

const Record = () => {
  return (
    <Wrapper>
      {records.map((record) => (
        <div className="container">
          <div>
            <Title title={record.id}>{record.id}</Title>
            {record.contents.map((content) => (
              <div className="box">
                <div className="title">
                  <div>{content.title}</div>
                </div>
                <div className="info">{content.info}</div>
                <div className="date">{content.date}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Record;
