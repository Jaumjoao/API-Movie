import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import { MovieCard } from "../../components/MovieCard/MovieCard";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        MovieService.getMovies()

        const { data: { results } } = await MovieService.getMovies();

        setMovies(results);
    }

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        console.log(movies)
    });

    return (
        <section className="Home">
            {movies.map((item) => (
                <div key={item.id}>
                    <MovieCard movieProp={item}/>
                </div>
            ))}
        </section>
    );
}