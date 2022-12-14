import { useRef, useState } from 'react';
import './search-bar.styles.css';
const SearchBar = ({placeholder , text , onHandleSearch}) => {
    const [keyword , setKeyword] = useState('');
    const prevKeyword = useRef("");
    return (
        <>
          <div className="search-box">
                <input type="text" 
                    value={keyword} 
                    placeholder={`${placeholder ?? 'E.g Pickachu'}`} 
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            if(prevKeyword.current === keyword) return;
                            prevKeyword.current = keyword;
                            onHandleSearch(keyword)
                        }
                    }}
                />
                <img src={`${process.env.PUBLIC_URL}/icons/search-icon.svg`} alt='search-icon' className='search-icon'/>
                <button className='search-button' 
                    onClick={() => {
                        if(prevKeyword.current === keyword) return;
                        prevKeyword.current = keyword;
                        onHandleSearch(keyword)
                    }}
                  
                >{text ?? 'GO'}</button>
            </div>
        </>
    )
}

export default SearchBar;