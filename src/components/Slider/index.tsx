import styled from "styled-components";
import TextSlider from "./TextSlider";
import ProgressBar from "./Progressbar";
import { flexCenter } from "../../styles/theme";

const Wrapper = styled.div`
  ${flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  z-index: 100;
`;

const Slider = () => {
  return (
    <Wrapper>
      <TextSlider />
      <ProgressBar />
    </Wrapper>
  );
};

export default Slider;
