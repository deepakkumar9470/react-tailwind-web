import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Header from './components/Header';
import Analytics from './components/Analytics';
import Footer from './components/Footer';





function App() {
	return (
		  <>
		    <Navbar/>
			<Hero/>
			<Analytics/>
			<Footer/>
		  </>
	);
}

export default App;

