import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Button from "../styled/Button";
import Roles from "../Roles";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    setError("");

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetGame = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setCurrentDice(1);
    setError("");
    setShowRules(false);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />

        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice}
      />

      <div className="btns">
        <OutlineButton onClick={resetGame}>
          Reset Game
        </OutlineButton>

        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>

      {showRules && <Roles />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 10px;

  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
`;

const OutlineButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px 18px;
  min-width: 220px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;