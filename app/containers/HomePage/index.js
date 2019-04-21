/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import Door from '../../components/Door';

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100%;
  align-items: center;
`;

export default function HomePage() {
  const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

  const [doorPrizeNumber] = useState(getRandomInt(3));
  const [openedDoors, setOpenedDoors] = useState([]);

  const onDoorClickHandled = selectedDoor => {
    let newDoorsArray = [];
    if (openedDoors.length > 0) {
      newDoorsArray = openedDoors;
      newDoorsArray.push(selectedDoor);
    } else {
      const doorsArray = [0, 1, 2].filter(door => door !== selectedDoor);
      if (doorPrizeNumber !== selectedDoor) {
        newDoorsArray = doorsArray.filter(door => door !== doorPrizeNumber);
      } else {
        newDoorsArray = doorsArray.splice(getRandomInt(2), 1);
      }
    }
    setOpenedDoors([...newDoorsArray]);
  };

  return (
    <CenterDiv>
      <Door
        handleClick={() => onDoorClickHandled(0)}
        hasPrize={doorPrizeNumber === 0}
        opened={openedDoors.includes(0)}
      />
      <Door
        handleClick={() => onDoorClickHandled(1)}
        hasPrize={doorPrizeNumber === 1}
        opened={openedDoors.includes(1)}
      />
      <Door
        handleClick={() => onDoorClickHandled(2)}
        hasPrize={doorPrizeNumber === 2}
        opened={openedDoors.includes(2)}
      />
    </CenterDiv>
  );
}
