import Chai from './Chai'

// how can we inject variables
const userName = "chai aur code"
// only evaluated expression can be written inside {}
function App() {
  return (
    <>
    <h1> {userName} </h1>
    <h1>chai aur react | in this lecture I understood about react how to make react app using npx create react app and also using npm create vite@latest about different dependencies in package.json about src folder build concept that ultimately build folder is sent to the user </h1>
    <Chai/>
    </>
  );
}

export default App;