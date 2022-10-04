import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Resume from "./Resume"
import Home from "./Home"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/resume" element={<Resume />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
