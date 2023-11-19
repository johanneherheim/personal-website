"use client";
import React, { useState } from "react";
import Confetti from "react-confetti";

const NumberGuessingGame: React.FC = () => {
  const [openGame, setOpenGame] = useState<boolean>(false);
  const [secretNumber, setSecretNumber] = useState<number | null>(null);
  const [userGuess, setUserGuess] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [numTries, setNumTries] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [guessedCorrectly, setGuessedCorrectly] = useState<boolean>(false);

  const startGame = () => {
    const newSecretNumber = Math.floor(Math.random() * 11);
    setSecretNumber(newSecretNumber);
    setResult("Lykke til! 😉");
    setNumTries(0);
    setGameStarted(true);
    setOpenGame(true);
  };

  const stopGame = () => {
    setSecretNumber(null);
    setUserGuess("");
    setResult(null);
    setNumTries(0);
    setGameStarted(false);
    setOpenGame(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleGuess();
    }
  };

  const handleGuess = () => {
    const guess = parseInt(userGuess, 10);
    setNumTries(numTries + 1);
    if (isNaN(guess)) {
      setResult("Skriv inn eit heilttal, takk!");
    } else if (guess === secretNumber) {
      setResult(`Riktig tal! du brukte ${numTries + 1} forsøk 👏`);
      setGuessedCorrectly(true);
      setTimeout(() => {
        setGuessedCorrectly(false);
        setOpenGame(false);
      }, 8000);
    } else if (numTries === 0) {
      setResult("Ikkje så lett?");
    } else if (numTries === 1) {
      setResult("Prøv hardare!");
    } else if (numTries === 2) {
      setResult("Din naut! prøv eit anna tal");
    } else if (numTries === 3) {
      setResult(`haha! du trudde det var ${guess}?`);
    } else if (numTries === 4) {
      setResult(`${guess} er heller ikkje rett 🤣`);
    } else if (numTries === 5) {
      setResult("Din pappskalle! prøv litt til ...");
    } else if (numTries === 6) {
      setResult("Amøbe ...");
    } else {
      setResult("Eg trur du burde gi deg snart 🥲");
    }
  };

  return (
    <div className="bg-secondary mx-1 rounded-md p-5">
      {guessedCorrectly && <Confetti />}
      {openGame ? (
        <button
          className=" bg-secondary py-2 rounded-md w-48 sm:w-full"
          onClick={stopGame}
        >
          Stopp spillet
        </button>
      ) : (
        <button
          className=" bg-secondary py-2 rounded-md w-48 sm:w-full"
          onClick={startGame}
        >
          Start tall-gjettespill
        </button>
      )}
      <div>
        {openGame === true && (
          <>
            <p className="my-4">
              Forsøk: {numTries} <br />
              Gjett talet i intervallet [0, 10]:
            </p>
            <input
              className="mb-3 px-2"
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Gjett et tall"
            />
            <p className="pb-3">{result}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default NumberGuessingGame;
