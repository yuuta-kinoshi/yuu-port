import React from 'react'

import render from '../assets/imgs/waifu_discord_render.png'
import Button from '../components/Button'

import './DiscordInvite.css'

const DiscordInvite = () => {
  return (
    <div className='inviteDiscordWrapper wrapper'>
      <div className="leftContent">
        <img src={render} alt="" />
      </div>
      <div className="rightContent">
        <h1 style={{color: 'black'}}>Join in my server NOW!</h1>
        <Button text='JOIN NOW' url='https://discord.gg/exG7umrj7e' blank={true} />
      </div>
    </div>
  )
}

export default DiscordInvite