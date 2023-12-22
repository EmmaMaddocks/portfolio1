import "./css/App.css";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Title from "./components/Title";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import {useEffect, useRef, useState} from "react";

function App() {
	const [page, setPage] = useState("/");
	console.log(page);
	return (
		<BrowserRouter>
			<div className="App">
				{/* <Title /> */}
				<Landing page={page} setPage={setPage} />

				<Nav page={page} setPage={setPage} />
				<About page={page} setPage={setPage} />
				<Experience page={page} setPage={setPage} />
				<Projects page={page} setPage={setPage} />
				<Contact page={page} setPage={setPage} />

				<Routes>
					{/* <Route path="/" element={<Landing />} /> */}
					<Route path="/about" element={<About />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
