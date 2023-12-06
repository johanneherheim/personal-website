import React from 'react'
import NumberGuessingGame from './number-guessing'
import PokemonGuessingGame from './pokemon-guessing'

export default function GamePage() {
  return (
    <div className='flex-wrap flex w-full p-10 justify-center basis-80'> 
        <div className=" rounded-md text-center">
          <NumberGuessingGame />
        </div>
        <div className=" rounded-md text-center">
          <PokemonGuessingGame />
        </div>
    </div>
  )
}
