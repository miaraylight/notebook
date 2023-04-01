import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import s from './style.module.css'

export default function FullPostPage() {
  const { id } = useParams()
  const post = useSelector( state=>state.find(item => +item.id === +id))
    
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.head}>
          <p>Author: <span>{post.username}</span></p>
          <p>Theme: <span>{post.section}</span></p>
          <div className={s.date}>{post.date}</div>
        </div>
        <h1 className={s.title}>{post.title}</h1>
        <p className={s.descr}>{post.descr}</p>
      </div>
    </div>
  )
}
