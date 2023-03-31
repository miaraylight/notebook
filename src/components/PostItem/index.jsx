import { useDispatch } from 'react-redux'
import { deletePostAction } from '../../store/reducers/postsReducers'
import icon from './image/icons8-delete-trash-24.png'
import s from './style.module.css'

export default function PostItem({id, title, section, username, descr, image}) {
  const dispatch = useDispatch()
  return (
    <div className={s.wrapper}>
      <button onClick={()=>dispatch(deletePostAction(id))}>
        <img src={icon} alt="delete-button-icon" />
      </button>
      <div >
        <img className={s.image} src={process.env.PUBLIC_URL + image} alt="background" />
      </div>
        <div className={s.head}>
          <p>{section}</p>
          <h3>{title}</h3>
          <button>Read more</button>
        </div>
    </div>
  )
}
