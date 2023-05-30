// // import logo from './logo.svg';
// import './App.css';
// import Authentication from './Authentication';


// function App() {
//   return (
//     <div className="App">
//       <Authentication />
//     </div>
//   );
// }

// export default App;

import './App.css';
import AboutUs from './AboutUs';
import Home from './Home';
import Authentication from "./Authentication";
import Contact from './Contact';
import OrderNow from './OrderNow';



function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/authentication":
      Component = Authentication
      break
    case "/aboutus":
      Component = AboutUs
      break
    case "/contact":
      Component = Contact
      break
    case "/ordernow":
      Component = OrderNow
      break
    default:
      // Default case logic
      break;
  }
  return (
    <div >
      <Component />
    </div>
  );
}

export default App;
