import React from "react";
import styled from "styled-components";

function Roles() {
  return (
    <RulesContainer>
      <h2>🎲 How to Play Dice Game</h2>

      <div className="text">
        <p>1. Select any number from 1 to 6.</p>
        <p>2. Click on the dice image to roll the dice.</p>
        <p>
          3. If your selected number matches the dice number, you will earn
          points equal to the dice value.
        </p>
        <p>4. If your guess is incorrect, 2 points will be deducted.</p>
        <p>5. Try to score as many points as possible!</p>
      </div>
    </RulesContainer>
  );
}

export default Roles;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 40px auto 0;
  background-color: #fbf1f1;
  padding: 24px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .text p {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
`;