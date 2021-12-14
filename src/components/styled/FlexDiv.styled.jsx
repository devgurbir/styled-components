import styled from "styled-components";

const StyledFlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};

  justify-self: ${(props) =>
    props.justifySelf ? props.justifySelf : "stretch"};
`;

export default StyledFlexDiv;
