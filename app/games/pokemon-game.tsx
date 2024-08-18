"use client";
import { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";
import { ArrowRight, InfoIcon, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PokemonGame() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [guessed, setGuessed] = useState<Pokemon[]>([]);
  const [message, setMessage] = useState("Lykke til!");
  const [guess, setGuess] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const getAllPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const data = await response.json();

        const urls = data.results.map((p: { url: string }) => p.url);

        const pokemonData = await Promise.all(
          urls.map(async (url: string) => {
            const response = await fetch(url);
            const p = await response.json();

            return {
              id: p.id,
              name: p.name,
              image: {
                front: p.sprites.other.home.front_default,
              },
            };
          })
        );

        setPokemon(pokemonData);
        setCurrentPokemon(
          pokemonData[Math.floor(Math.random() * pokemonData.length)]
        );
      } catch (error) {
        console.error("Error fetching all pokemon", error);
        alert("Error");
      }
    };
    getAllPokemon();
  }, []);

  const handleSubmit = (guess: string) => {
    if (!currentPokemon) return;

    const correct = guess.toLowerCase() === currentPokemon.name;

    if (correct) {
      setGuessed([...guessed, currentPokemon]);
      setPokemon(pokemon.filter((p) => p.id !== currentPokemon.id));
      setMessage("Riktig!");
    } else {
      setMessage("Feil, riktig svar var: " + currentPokemon.name);
    }
    setGuess("");
    setCurrentPokemon(pokemon[Math.floor(Math.random() * pokemon.length)]);
  };

  return (
    <div className="m-5 p-5 bg-muted rounded-lg sm:w-1/3 text-center relative">
      <Link
        href="https://pokeapi.co/"
        target="_blank"
        className="absolute top-2 right-2"
      >
        <InfoIcon className=" size-5" />
      </Link>
      <h2>Gjett navnet til pokemonen!</h2>
      {currentPokemon ? (
        <img
          src={currentPokemon.image.front}
          alt={currentPokemon.id.toString()}
          className="size-40 sm:size-56 mx-auto"
        />
      ) : (
        <div>
          <Loader className="animate-spin size-10 mx-auto h-56" />
        </div>
      )}
      <div className="flex justify-center mt-5 gap-4">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="border-2 rounded-md py-1 px-2"
          placeholder="Pokemon"
        />
        <Button
          className="bg-gradient-to-tl from-blue-500 to-green-500"
          onClick={() => handleSubmit(guess)}
        >
          <ArrowRight />
        </Button>
      </div>
      <p className="m-5 text-muted-foreground">{message}</p>
      <div className="mt-5">
        <ProgressBar correct={guessed.length} />
      </div>
    </div>
  );
}

function ProgressBar({ correct }: { correct: number }) {
  const total = 151;
  const percentage = total > 0 ? (correct / total) * 100 : 0;

  return (
    <div className="w-full bg-gray-200 rounded-full relative">
      <div
        className="bg-gradient-to-tl from-blue-500 to-green-500 text-white text-md py-1 px-4 rounded-full h-6 "
        style={{ width: `${percentage}%` }}
      />
      <p className=" absolute text-muted-foreground top-0 right-2 tracking-wide">
        {correct + "/" + total}
      </p>
    </div>
  );
}
