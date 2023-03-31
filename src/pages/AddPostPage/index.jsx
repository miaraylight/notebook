import React from 'react'
import { useDispatch } from 'react-redux'
import { addPostAction } from '../../store/reducers/postsReducers';
import s from './style.module.css'

export default function AddPostPage() {

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        
        e.preventDefault()
        const {title, section, username, descr} = e.target;
        const post = {
            id: Date.now() + Math.random().toFixed(3),
            title: title.value,
            section: section.value,
            username: username.value,
            descr: descr.value,
        }
        dispatch(addPostAction(post))
        title.value = ""
        section.value = ""
        username.value = ""
        descr.value = ""
        
    }

  return (
    <div className={s.container}>
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={onSubmit}>
                <div className={s.content}>
                    <div className={s.info}>
                        <input type="text" name="title" placeholder='Title' required/>
                        
                        <select name="section" id="section">
                            <option value="Travel">Travel</option>
                            <option value="Sport">Sport</option>
                            <option value="Study">Study</option>
                            <option value="Food">Food</option>
                            <option value="Zen">Zen</option>
                        </select>
                        <input type="text" name="username" placeholder='Username'/>
                    </div>
                    <div className={s.text}>
                        <textarea id="decsr" name="descr" rows="13" cols="35" placeholder='Write' required></textarea>
                    </div>
                </div>
                <button className={s.addButton}>Add Post</button>
            </form>
        </div>
    </div>
  )
}
