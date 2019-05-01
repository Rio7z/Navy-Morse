import mainMenu from './components/mainMenu.vue'
import lessonsLibrary from './components/lessonsLibrary.vue'
import lesson1 from './components/lessons/lesson1.vue'
import lesson1b from './components/lessons/lesson1b.vue'
import quiz from './components/quiz.vue'

export default [
  { path: '/', component: mainMenu },
  { path: '/lessons-library', component: lessonsLibrary },
  { path: '/lesson1', component: lesson1 },
  { path: '/lesson1b', component: lesson1b },
  { path: '/quiz', component: quiz }
]
