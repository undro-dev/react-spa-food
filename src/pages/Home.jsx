import { useState, useEffect } from 'react';
import { getAllCategories } from '../api.js';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);

	const navigate = useNavigate();

	const { pathname, search } = useLocation();

	const handleSearch = str => {
		setFilteredCatalog(
			catalog.filter(item =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())
			)
		);
		navigate({
			pathname,
			search: `?search=${str}`,
		});
	};

	useEffect(() => {
		getAllCategories().then(data => {
			setCatalog(data.categories);
			setFilteredCatalog(
				search
					? data.categories.filter(item =>
							item.strCategory
								.toLowerCase()
								.includes(search.split('=')[1].toLowerCase())
					  )
					: data.categories
			);
		});
	}, [search]);

	return (
		<>
			<Search cb={handleSearch} />
			{!catalog.length ? (
				<Preloader />
			) : (
				<CategoryList catalog={filteredCatalog}></CategoryList>
			)}
		</>
	);
}

export { Home };
