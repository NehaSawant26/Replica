import About from "./Components/About";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Mortgage from "./Components/Mortgage";
import Start from "./Components/Start";
import {createBrowserRouter, Outlet} from "react-router-dom"

function App() {
 
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Body />
     },
      {
        path : "/about",
        element : <About />
     },
     {
      path : "/start",
      element : <Start />
   },
   {
    path : "/mortgage",
    element : <Mortgage />
 }
    ]

 },
  
])



export default App;
