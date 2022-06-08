import { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	const [loading, setLoading] = useState(true);

	const getMovie = useCallback(async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
		setLoading(false);
	}, [id]);
	console.log(movie);
	useEffect(() => {
		getMovie();
	}, [getMovie]);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<Item
						title={movie.title}
						Img={movie.large_cover_image}
						year={movie.year}
						genres={movie.genres}
						rating={movie.rating}
						summary={movie.description_full}
					/>
				</div>
			)}
		</div>
	);
}
export default Detail;
