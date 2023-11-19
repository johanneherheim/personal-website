"use client";
import React, { useState } from "react";
import Confetti from "react-confetti";

const PokemonGuessingGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [userGuess, setUserGuess] = useState<string>("");
  const [hint, setHint] = useState<string | null>(null);
  const [numTries, setNumTries] = useState<number>(0);
  const [guessedCorrectly, setGuessedCorrectly] = useState<boolean>(false);
  const [randomPokemon, setRandomPokemon] = useState<number>(0);

  const startGame = () => {
    const newSecretNumber = Math.floor(Math.random() * 151) + 1;
    setRandomPokemon(newSecretNumber);
    setHint("Lykke til! 😉");
    setNumTries(0);
    setGameStarted(true);
  };
  const stopGame = () => {
    setRandomPokemon(0);
    setUserGuess("");
    setHint(null);
    setNumTries(0);
    setGameStarted(false);
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
      setHint("Skriv inn eit tal, takk!");
    } else if (guess === randomPokemon) {
      setHint(`Riktig ID! du brukte ${numTries + 1} forsøk 👏`);
      setGuessedCorrectly(true);
      setTimeout(() => {
        setGuessedCorrectly(false);
        setGameStarted(false);
      }, 9000);
    } else if (guess > randomPokemon) {
      setHint("Prøv eit lågare tal");
    } else {
      setHint("Prøv eit høgare tal");
    }
  };

  return (
    <div className="bg-secondary mx-1 rounded-md p-5">
      {guessedCorrectly && <Confetti />}
      {gameStarted ? (
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
          Start pokémon-gjettespill
        </button>
      )}
      <div>
        {gameStarted === true && (
          <div className="flex justify-between">
            <div>
              <img
                className="max-h-32 ml-8 my-2"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomPokemon}.png`}
                alt="react image"
                loading="lazy"
              />
            </div>
            <div className="mx-4">
              <p className="my-4">
                Forsøk: {numTries} <br />
                Gjett pokémonen sin ID!
              </p>
              <input
                className="mb-3 px-2"
                type="text"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Gjett et tall"
              />
              <p className="pb-3">{hint}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PokemonGuessingGame;
