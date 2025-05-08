import "../css/MovieCard.css";
function MovieCard({ movie }) {
    function onFavoriteClick() {
        alert("Clicked");
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ❤
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p className="text-[#7e7e7e]">
                    {movie.release_date?.split("-")[0]}
                </p>
            </div>
        </div>
    );
}

export default MovieCard;
