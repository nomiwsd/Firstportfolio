import './App.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Service from './Components/Servicess/Service';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const [categories,setcategories]=useState([
    {
    cardhead1:'HTML',
    cardhead2:'CSS',
    cardhead3:'JS',
    cardhead4:'React',
    cardhead5:'Bootstrap',
    cardhead6:'Material UI',
    text1:'28%',
    text2:'78%',
    text3:'Last Week',
    text4:'Last Month'
  }
])

  return (
   
    <div className="App">
       <Helmet>
        <title>NDev</title>
       </Helmet>
      <Header/>
     <Landing/>
     <About/>
     <Skills  data={categories[0]}/>
     <Service/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
