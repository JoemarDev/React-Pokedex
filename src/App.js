import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/banner/banner.component';
import PokemonLists from './components/pokemon-lists/pokemon-lists.component';

const App = () => {


	let [page , setPage] = useState(1);
	
	const URL = 'https://pokeapi.co/api/v2';

	const [pokemons , setPokemons] = useState([]);

	useEffect(() => {

		let Limit = 21; 
		let OffSet = (Limit * (page - 1));

		const GetPokemonLists = () => {
			fetch(URL+`/pokemon?limit=${Limit}&offset=${OffSet}`)
				.then((response) => response.json())
				.then((response) => {
					if(pokemons.length === 0) {
						setPokemons(response.results);
					} else {
						setPokemons([...pokemons , ...response.results])
					}	
				});	
		};

		GetPokemonLists();

		const onScroll = () => {

			let TotalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let Scroll = document.documentElement.scrollTop;
			let SpaceAdjustMentLoad = 100;

			if(Scroll > (TotalHeight - (SpaceAdjustMentLoad))) {
				setPage(page += 1);
			}
		}

		window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);

	},[page]);


	return (
		<>
			<Banner/>
			<div className='container'>
				<PokemonLists pokemons={pokemons}/>
			</div>
		</>
	
	)
}

export default App;
