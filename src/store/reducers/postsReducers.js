const DELETE_POST = 'DELETE_POST';
const ADD_POST = 'ADD_POST';

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

const insteadState = [
  {
    id: 1,
    title: "Sed ut perspiciatis unde omnis iste natus",
    section: "Study",
    username: "MiaXray",
    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/images/study1.jpg",
    date: "Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)"
  },
  {
    id: 2,
    title: "Lorem ipsum",
    section: "Music",
    username: "Martin",
    descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    image: "/images/other3.jpg",
    date: "Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)"
  },
  {
    id: 3,
    title: "Kassandra",
    section: "Tech",
    username: "Alex",
    descr: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    image: "/images/other4.jpg",
    date: "Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)"
  },
  {
    id: 4,
    title: "At vero eos et accusamus",
    section: "Food",
    username: "Tony",
    descr: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    image: "/images/food3.jpg",
    date: "Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)"
  },
  {
    id: 5,
    title: "Just do it",
    section: "Sport",
    username: "Shreck",
    descr: "I was here",
    image: "/images/sport3.jpg",
    date: "Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)"
  },
  {
    id: 6,
    title: "Peace",
    section: "Travel",
    username: "Benner",
    descr: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    image: "/images/travel3.jpg",
    date: "Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)"
  },
];

export const addPostAction = (payload) => ({type: ADD_POST, payload})
export const deletePostAction = (payload) => ({type: DELETE_POST, payload})

const defaultState = JSON.parse(localStorage.getItem('posts')) ?? insteadState

const writeToLocalStorage = (posts) => localStorage.setItem('posts', JSON.stringify(posts))

export const postsReducer = (state = defaultState, action) => {
  if (action.type === ADD_POST) {
    const section = action.payload.section.toLowerCase();
    const random = Math.floor(Math.random() * 3);
    const backgroundImage = images.find((item) => item[section])[section];
    const newPayload = { ...action.payload, image: backgroundImage[random] };
    writeToLocalStorage([...state, newPayload]);
    return [...state, newPayload];

  } else if (action.type === DELETE_POST) {
    const postDelete = state.filter(({ id }) => id !== action.payload);
    writeToLocalStorage(postDelete)
    return [...postDelete]
  }
  return state;
};