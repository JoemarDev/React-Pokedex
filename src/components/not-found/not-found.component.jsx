import './no-found.styles.css';

const NotFound = () => {
    return (
        <>
            <div className="no-found-container">
                <h2>Oops! Try Again.</h2>
                <p>Pokemon you're looking for is a unicorn. It doesn't exist in the lists.</p>
                <img src={`${process.env.PUBLIC_URL}/icons/no-found.png`} alt="no found"/>
            </div>
        </>
    )
};

export default NotFound;