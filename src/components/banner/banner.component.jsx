import './banner.styles.css';
import SearchBar from '../search-bar/search-bar-component';
const Banner = ({onHandleSearch}) => {
    return (
        <div className="banner" >
            <img  className='banner-background' src={`${process.env.PUBLIC_URL}/icons/bg.png`} alt="banner overlay background"/>
            <div className="wrapper">
                <h1>Pokedex-R</h1>
                <h2>Who are you looking for ?</h2>
                <SearchBar placeholder={'Dynamic Place holder'} text={'GO'} onHandleSearch={onHandleSearch}/>
            </div>
        </div>
    )
};

export default Banner;