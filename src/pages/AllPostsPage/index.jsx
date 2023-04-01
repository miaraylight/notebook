import React from 'react'
import { useSelector } from 'react-redux'
import PostItem from '../../components/PostItem'
import s from './style.module.css'

export default function AllPostsPage() {
    const post = useSelector(state => state)

  return (
    <div className={s.container}>
        
        {
          post.map((item) => <div key={item.id} className={s.card}><PostItem   {...item}/> </div>)
        }
        
    </div>
  )
}
