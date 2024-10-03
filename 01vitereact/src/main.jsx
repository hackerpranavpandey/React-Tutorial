import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     // so this entire syntax is converted to tree
//     <div>
//       <h1>custom App </h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props : {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click here'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root'))
.render(
  // <App/>
  reactElement
  // anotherElement
)