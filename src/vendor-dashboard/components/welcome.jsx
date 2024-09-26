
import React from 'react'

const Welcome = () => {
    const firmName = localStorage.getItem("firmName")

  return (
    <div className='welcomeSection'>
        <h2>{firmName}</h2>
        <div className="landingImage">
          <img src='https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png' alt='welcome' width={"800px"}height={"500px"} />
        </div>
    </div>
  )
}

export default Welcome