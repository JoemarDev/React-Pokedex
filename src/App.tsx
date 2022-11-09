import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import './App.css';
import Banner from './components/banner/banner.component';
import PokemonLists from './components/pokemon-lists/pokemon-lists.component';

export type TypePokemons = {
	id: number,
	name : string,
	url : string,
}

const App = () => {
		
	const URL = 'https://pokeapi.co/api/v2';

	const [pokemons , setPokemons] = useState<TypePokemons[]>([]);

	const [publicPokemons , setPublicPokemons] = useState<TypePokemons[]>([]);

	const [mounted , setMounted] = useState(false);
	
	const [isOnSearch , setOnSearch] = useState(false);

	useEffect(() => {
		const GetPokemonLists = () => {
			fetch(URL+`/pokemon?offset=0&limit=1200`)
				.then((response) => response.json())
				.then((response) => {

					setPublicPokemons(PaginateArray(response.results,1,null));
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
				console.log(PaginateArray(pokemons, page++,null))
				setPublicPokemons(poke => [...poke , ...PaginateArray(pokemons, page++,null)])
			}
		}

		window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);

	},[mounted,pokemons , isOnSearch]);



	const PaginateArray = 
		(
			arr: TypePokemons[],
			page: number, 
			limit: number | null
		): TypePokemons[] | [] => {
		
		if(limit === null) limit = 20;

		let offset = (page) * limit;
		let start = Math.abs(offset - limit);

		if(Array.isArray(arr)) {
			return arr.filter((pokemon,index) =>  (index < offset && start <= index) ? true : false);
		} else {
			return [];
		}
	}

	const FilteredSearch = (keyword : string) : void => {

		if(!keyword){
			setOnSearch(false);
			return setPublicPokemons(PaginateArray(pokemons,1,null));
		}

		const publicPokemon = pokemons.filter((pokemon) => {
			return pokemon.name.toLocaleLowerCase().includes(keyword.toString().toLocaleLowerCase());
		})
		
		setOnSearch(true);
		setPublicPokemons(publicPokemon);

	};

	return (
		<Fragment>
			<Banner onHandleSearch={FilteredSearch}/>
			<div className='container'>
				<PokemonLists pokemons={publicPokemons}/>
			</div>
		</Fragment>
	
	)
}

export default App;
