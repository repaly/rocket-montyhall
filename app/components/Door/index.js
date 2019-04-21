/**
 *
 * Door
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import kukish from '../../images/kukish.jpg';
import gotcha from '../../images/gotcha.jpg';

const animation = css`
  transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px)
    rotateY(-105deg);
`;

const DoorBase = styled.div`
  height: 250px;
  width: 150px;
  border: 1px solid #fff;
  background: #ffffff1a;
  :not(:last-of-type) {
    margin-right: 90px;
  }
  position: relative;
`;

const DoorCover = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  transform-origin: left;
  /*Speed of the Door animation*/
  transition: all 0.5s ease-in-out;
  z-index: 1;
  ${props => (props.opened ? animation : null)};
`;

const DoorHandle = styled.div`
  position: relative;
  left: 80%;
  top: 45%;
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

function Door(props) {
  const { hasPrize, opened, handleClick } = props;

  if (opened) {
    if (hasPrize) {
      return (
        <DoorBase>
          <DoorCover opened={opened}>
            <DoorHandle />
          </DoorCover>
          <Image src={gotcha} alt="Door with prize" />
        </DoorBase>
      );
    }
    return (
      <DoorBase>
        <DoorCover opened={opened}>
          <DoorHandle />
        </DoorCover>
        <Image src={kukish} alt="Door without prize" />
      </DoorBase>
    );
  }

  return (
    <DoorBase onClick={handleClick}>
      <DoorCover opened={opened}>
        <DoorHandle />
      </DoorCover>
    </DoorBase>
  );
}

Door.propTypes = {
  hasPrize: PropTypes.bool,
  opened: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Door;
