import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'
import board from './icons/icons-board.png'
import add from './icons/icons-add.png'

export default function Header() {
  return (
    <div className={s.container}>
        <div className={s.wrapper}>
            <NavLink className = {({isActive}) => isActive ? s.active : s.link } to="/">
              <img className={s.board} src={board} alt="board-icon" /> 
              Board
            </NavLink>
            <p className={s.header}>Thoughts</p>
            <NavLink className = {({isActive}) => isActive ? s.active : s.link } to="/add">
              Add Post
              <img className={s.add} src={add} alt="add-icon" />
            </NavLink>
        </div>
    </div>
  )
}
