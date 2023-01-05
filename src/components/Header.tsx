import React from 'react'
import moon from "../assets/moon.svg"

export default function Header() {
    return (
        <div>
            <h1>Where in the world?</h1>
            <span><img src={moon} alt="moon" />Dark mode</span>
        </div>
    )
}
