import './search-bar.styles.css';
const SearchBar = ({placeholder , text}) => {
    return (
        <>
          <div className="search-box">
                <input type="text" placeholder={`${placeholder ?? 'E.g Pickachu'}`}/>
                <img src="icons/search-icon.svg" alt='search-icon' className='search-icon'/>
                <button className='search-button'>{text ?? 'GO'}</button>
            </div>
        </>
    )
}

export default SearchBar;