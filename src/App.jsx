import Pages from "./pages/Pages.jsx";
import Header from "./Components/Header/Header.jsx"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import First from "./pages/First.jsx";
// import Pages from "./pages/Pages.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <main className="h-[calc(100vh-100px)]">
        <Pages/>
        </main>





      {/*<button*/}
       {/*   type="button"*/}
       {/*   className="text-amber-500 bg-black"*/}
       {/*   onClick={() => setCount((count) => count + 1)}*/}
       {/*>*/}
       {/*   Count is {count}*/}
       {/*</button>*/}
    </>
  )
}

export default App
