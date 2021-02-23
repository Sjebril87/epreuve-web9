import logo from './logo.svg';

import './App.scss';
import "tailwindcss/dist/tailwind.css";

import HeaderSection from './component/Header-section';
import Section1 from './component/Section1';
import Section2 from './component/Section2';

import Footer from './component/Footer';
import Song from './component/Song';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderSection logo={<img src="logo.png"/>}/>
        <div >
       <Song/>
      </div>
      </header>
      <section className="App-section1">
      <Section1/>
      </section>
      <section className="App-section2">
      <Section2/>
      </section>
      <section>
    
      </section>
      <footer className="App-footer">
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
