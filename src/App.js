import { Routes, Route, Link } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { NotFound } from './pages/Notfound.jsx';
import { Category } from './pages/Category.jsx';
import { Recipe } from './pages/Recipe';

function App() {
	return (
		<>
			<Header />
			<main className='container content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contacts' element={<Contact />} />
					<Route path='/category/:name' element={<Category />}></Route>
					<Route path='/meal/:idMeal' element={<Recipe />}></Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
