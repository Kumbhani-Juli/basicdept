import { BrowserRouter, Route, Routes } from "react-router-dom";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header Color="#000" />
								<Home /> <Footer />
							</>
						}
					/>
					<Route
						path="/career"
						element={
							<>
								<Header
									backgroundColor="#272624"
									Color="#f9cdcd"
									filter="invert(85%) sepia(15%) saturate(300%) hue-rotate(310deg) brightness(100%) contrast(90%)"
								/>
								<Career />
								<Footer backgroundColor="#fff" Color="#000" />
							</>
						}
					/>
					<Route
						path="/contact"
						element={
							<>
								<Header Color="#000" />
								<Contact /> <Footer />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
