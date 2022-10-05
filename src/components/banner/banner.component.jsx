import './banner.styles.css';
import SearchBar from '../search-bar/search-bar-component';
const Banner = ({onHandleSearch}) => {
    return (
        <div className="banner">
            <div className="wrapper">
                <h2>Who are you looking for ?</h2>
                <SearchBar placeholder={'Dynamic Place holder'} text={'GO'} onHandleSearch={onHandleSearch}/>
            </div>
        </div>
    )
};

export default Banner;