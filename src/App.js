import Navbar from "./components/Navbar";
import {AuthContextProvider} from "./context/authContext";

function App() {
  return (
       <AuthContextProvider>
           <Navbar/>
       </AuthContextProvider>
  );
}

export default App;
