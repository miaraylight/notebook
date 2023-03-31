const images = [
    {food : [
      '/images/food.jpg',
      '/images/food2.jpg',
      '/images/food3.jpg']},
    {other : [
      '/images/other1.jpg',
      '/images/other2.jpg',
      '/images/other3.jpg',
      '/images/other4.jpg',
      '/images/other5.jpg',
    ]},
    {sport : [
      '/images/sport1.jpg',
      '/images/sport2.jpg',
      '/images/sport3.jpg',
    ]},
    {study : [
      '/images/study1.jpg',
      '/images/study2.jpg',
      '/images/study3.jpg',
    ]},
    {travel : [
      '/images/travel1.jpg',
      '/images/travel2.jpg',
      '/images/travel3.jpg',
    ]},
    {zen : [
      '/images/zen1.jpg',
      '/images/zen2.jpg',
      '/images/zen3.jpg',
    ]}
  ]

const DELETE_POST = 'DELETE_POST';
const ADD_POST = 'ADD_POST';

const defaultState = [
    {
        id: 1,
        title: 'Math',
        section: "Study",
        username: "MiaXray",
        descr: "Hi",
        image: '/images/study1.jpg',
        grid: 'a',
    },
    {
        id: 2,
        title: 'Lorem',
        section: "Study",
        username: "MiaXray",
        descr: "Hi",
        image: '/images/other3.jpg',
        grid: 'b',
    },
    {
        id: 3,
        title: 'Kassandra',
        section: "Study",
        username: "MiaXray",
        descr: "Hi",
        image: '/images/other4.jpg',
        grid: 'c',
    },
    {
        id: 4,
        title: 'Love',
        section: "Study",
        username: "MiaXray",
        descr: "Hi",
        image: '/images/food3.jpg',
        grid: 'd',
    },
    {
        id: 5,
        title: 'Love',
        section: "Study",
        username: "MiaXray",
        descr: "Hi",
        image: '/images/sport3.jpg',
        grid: 'e',
    },
    {
        id: 6,
        title: 'Peace',
        section: "Study",
        username: "MiaXray",
        descr: "Hi",
        image: '/images/travel3.jpg',
        grid: 'f',
    },
    {
      id: 7,
      title: 'Math',
      section: "Study",
      username: "MiaXray",
      descr: "Hi",
      image: '/images/study1.jpg',
      grid: 'g',
  },
  {
      id: 8,
      title: 'Lorem',
      section: "Study",
      username: "MiaXray",
      descr: "Hi",
      image: '/images/other3.jpg',
      grid: 'h',
  },
  {
      id: 9,
      title: 'Kassandra',
      section: "Study",
      username: "MiaXray",
      descr: "Hi",
      image: '/images/other4.jpg',
      grid: 'i',
  },
  {
      id: 10,
      title: 'Love',
      section: "Study",
      username: "MiaXray",
      descr: "Hi",
      image: '/images/food3.jpg',
      grid: 'j',
  },
  {
      id: 11,
      title: 'Love',
      section: "Study",
      username: "MiaXray",
      descr: "Hi",
      image: '/images/sport3.jpg',
      grid: 'k',
  },
  {
      id: 12,
      title: 'Peace',
      section: "Study",
      username: "MiaXray",
      descr: "Hi",
      image: '/images/travel3.jpg',
      grid: 'l',
  }
]

export const addPostAction = (payload) => ({type: ADD_POST, payload})
export const deletePostAction = (payload) => ({type: DELETE_POST, payload})


export const postsReducer = (state = defaultState, action) => {
    if (action.type === ADD_POST) {
        

        const section = action.payload.section.toLowerCase()
        
        const random = Math.floor(Math.random() * 3)
        
        const backgroundImage = images.find(item => item[section])[section]
        
        const newPayload = {...action.payload, image: backgroundImage[random]}
        return [...state, newPayload]
        
    }else if (action.type === DELETE_POST) {
      return state.filter(({id})=> id !== action.payload)
    }
    return state
}