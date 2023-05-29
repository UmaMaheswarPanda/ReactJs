import React from 'react'

function Hero(props) {
    if(heroName ==='joker'){
        throw new Error('Not a hero')
    }
  return (
    <div>Hero = {props.name}</div>
  )
}
export default  Hero;