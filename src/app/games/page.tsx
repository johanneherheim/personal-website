import React from 'react'
import NumberGuessingGame from './number-guessing'
import PokemonGuessingGame from './pokemon-guessing'

export default function GamePage() {
  return (
    <div className='flex justify-center '> 
        <section>
        <div className=" rounded-md mt-10 mx-auto max-w-md text-center">
          <NumberGuessingGame />
        </div>
        <div className=" rounded-md mt-5 mx-auto max-w-md text-center">
          <PokemonGuessingGame />
        </div>
      </section>
    </div>
  )
}
