import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/intro/Intro';
import { themeContext } from "./Contex";
import { useContext } from 'react';
import Services from './components/services/Services';
import Expirance from './components/expreance/Expirance';
import Portfillio from './components/portofllio/Portfillio';
import Testiminuls from './components/testminals/Testiminuls';
import Certifcate from './components/certificate/Certifcate';
import Footer from './components/footer/Footer';
import Contaacte from './components/contacte/Contaacte';

function App() {

   
  const them =     useContext(themeContext)

  const darkMode = them.state.darkMode;
  console.log(darkMode)
  return (
    <div className='App'  
    
    
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
  

    
    
    
    >
      <Navbar/>
    
        <Intro/>
        <Services/>
        <Expirance/>
        <Portfillio/>
        <Testiminuls/>  
        <Certifcate/>
        <Contaacte/>  
        <Footer/>
      
      
    
  
     
  
  
      

    </div>
  
  );

}

export default App;
