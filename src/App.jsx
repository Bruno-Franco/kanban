import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Main from './components/Main'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Navbar />
			<Main />
			<Footer />
		</>
	)
}

export default App
