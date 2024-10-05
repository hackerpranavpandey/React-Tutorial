import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/card.jsx'
import './App.css'

// just using some Tailwind CSS inbuilt className
// here bg-green and text-black
// p-40 padding of 40
// rounded-xl to get the rounded one
// since it is not normal css so image tag
// also should be closed
// so in this way we can use Tailwind CSS
// margin bottom as mb margin top as mt
// so using the concept of props no need to create similar components again and again
// just use the props and use same components again and again
// so I can any field of the card be it the username role text image or any other field that needs to be different for different users
// below line cannot be included here it has to be in the function App else the page will not load
// const [count, setCount] = useState(0)

function App() {
  let myObj = {
    username: "Pranav",
    age: 20,
  }
  let newArr = [1,2,3,4,5]
  let role="Software Development Engineer"
  return (
    <>
    <h1 className="bg-green-400 text-black p-10 rounded-xl"> Tailwind Test and Props </h1>
    <Card username="Pranav Kumar Pandey" role={role} text="Cybersecurity is a vast field of modern technology and we need to work on this to make technology safe and secure to be used by everyone around the globe. 
    As of now due to some recent advancement in the field of Artificial Intelligence and generative AI we need to make systems even more secure"/>

    <Card username="Vertika Pandey" role="HR Manager, AutoDesk" text="Hello Guys ! Welcome to the world of AutoDesk , the team that we have help us build some of the awesome products and this is crazy rally enough guys!"/>
    <Card username="Anonymous" role="Cyber Hacker" text="Hello welcome to my world where I just do one thing and that is cyberhacking and that also illegally so don't even think of harming me in any way"/>
    </>
  )
}

export default App