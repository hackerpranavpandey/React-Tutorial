import React from 'react';

const URL = "https://t4.ftcdn.net/jpg/07/99/93/57/360_F_799935713_AY7b37lJ4IuI2W3ojKX1a28Qkh7Slf4y.jpg"
// concept of props
// so no need to create similar cards for each user
// just use the concepts of props and pss the value
// directly from the App.jsx file

// no need to use the word props always

// function Card(props){
//   console.log(props.username);
//   return (   
//     <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-20">
//     <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={URL} alt="" width="384" height="512" />
//     <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
//     <blockquote>
//     <p className="text-lg font-medium">
//       Cybersecurity is a vast field of modern technology and we need to work on this to make technology safe and secure to be used by everyone around the globe. 
//       As of now due to some recent advancement in the field of Artificial Intelligence and generative AI we need to make systems even more secure
//     </p>
//     </blockquote>
//     <figcaption className="font-medium">
//     <div className="text-sky-500 dark:text-sky-400">
//       Pranav Kumar Pandey
//     </div>
//     <div className="text-slate-700 dark:text-slate-500">
//       Software Development Engineer, CRED
//     </div>
//     </figcaption>
// </div>
// </figure>
//   )
// }

function Card({username="Default users" , role="Software Development Engineer", text="Welcome to the world of the software and programming as well as coding"}){
  console.log({username});
  return (   
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-20">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={URL} alt="" width="384" height="512" />
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
    <p className="text-lg font-medium">
      {text}
    </p>
    </blockquote>
    <figcaption className="font-medium">
    <div className="text-sky-500 dark:text-sky-400">
      {username}
    </div>
    <div className="text-slate-700 dark:text-slate-500">
      {role}
    </div>
    </figcaption>
</div>
</figure>
  )
}

export default Card;