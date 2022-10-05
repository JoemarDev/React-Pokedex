import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/banner/banner.component';
import PokemonLists from './components/pokemon-lists/pokemon-lists.component';

const App = () => {

	const URL = 'https://pokeapi.co/api/v2';

	const [pokemons , setPokemons] = useState([]);

	const [publicPokemons , setPublicPokemons] = useState([]);

	const [mounted , setMounted] = useState(false);
	
	const [isOnSearch , setOnSearch] = useState(false);

	useEffect(() => {
		const GetPokemonLists = () => {
			fetch(URL+`/pokemon?offset=0&limit=1200`)
				.then((response) => response.json())
				.then((response) => {
					setPublicPokemons(PaginateArray(response.results,1));
					setPokemons(response.results);
					setMounted(true);
				});	
		};

		GetPokemonLists();
	},[]);

	useEffect(() => {

		if(!mounted) return;
		
		let page = 1;
	
		const onScroll = () => {
			if(isOnSearch) return;
			let TotalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let Scroll = document.documentElement.scrollTop;
			let SpaceAdjustMentLoad = 200;
			 
			if(Scroll > (TotalHeight - (SpaceAdjustMentLoad))) {
				page++;
				setPublicPokemons(poke => [...poke , ...PaginateArray(pokemons, page++)])
			}
		}

		window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);

	},[mounted,pokemons , isOnSearch]);


	const PaginateArray = (arr,page,limit=20) => {
		
		let offset = (page) * limit;
		let start = Math.abs(offset - limit);

		return arr.filter((pokemon,index) =>  (index < offset && start <= index) ? true : false);
	}

	const FilteredSearch = (keyword) => {

		if(!keyword){
			setOnSearch(false);
			return setPublicPokemons(PaginateArray(pokemons,1));
		}
		
		const publicPokemon = pokemons.filter((pokemon) => {
			return pokemon.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
		})
		setOnSearch(true);
		setPublicPokemons(publicPokemon);
	};



	return (
		<>
			<Banner onHandleSearch={FilteredSearch}/>
			<div className='container'>
				<PokemonLists pokemons={publicPokemons}/>
			</div>
		</>
	
	)
}

export default App;
