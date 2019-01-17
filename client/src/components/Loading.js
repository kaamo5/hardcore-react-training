import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Loading = props => {
  const { className } = props;

  return (
    <div className={className}>
      <FontAwesomeIcon icon={["fas", "spinner"]} pulse />
    </div>
  );
};

export default styled(Loading)`
  position: fixed;
  top: 15px;
  right: 15px;
  font-size: 1.2rem;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
`;
