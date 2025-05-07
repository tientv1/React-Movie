import "../css/MovieCard.css";
function MovieCard({ movie }) {
    function onFavoriteClick() {
        alert("Clicked");
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ❤
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p className="text-[#7e7e7e]">{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;
