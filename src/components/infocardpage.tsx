import React from 'react'
import InfoCards, { cards } from "./infocards";

export default function InfoCardPage() {
  return (
    <div className="max-w-3xl flex justify-center mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-8">
        {cards.map((c) => (
          <div key={c.name}>
            <InfoCards
              link={c.link}
              name={c.name}
              picture={c.picture}
              ></InfoCards>
          </div>
        ))}
      </div>
    </div>
  )
}
