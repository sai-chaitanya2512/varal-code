import React from 'react'
import style from "../styles/header.module.css"

export default function Header() {
  return (
    <div className={style.headerContainer}>
        <div className={style.relative}>
            <input type='text' placeholder='Search a Term | Topic' />
            <img src='' />

        </div>
    </div>
  )
}
