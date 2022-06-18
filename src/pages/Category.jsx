import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

function Category() {
	const navigate = useNavigate();
	const { name } = useParams();
	const [meals, setMeals] = useState([]);
	useEffect(() => {
		getFilteredCategory(name).then(data => setMeals(data.meals));
	}, [name]);

	return (
		<>
			<button onClick={() => navigate(-1)} className='btn'>
				Go Back
			</button>
			{!meals.length ? <Preloader /> : <MealList meals={meals}></MealList>}
		</>
	);
}

export { Category };
