function Item({ Img, title, year, genres, rating, summary }) {
	return (
		<div>
			<img src={Img} alt={title} />
			<hr />
			<h1>{title}</h1>
			<h4>year : {year}</h4>
			<h4>rating : {rating}</h4>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
			<p>{summary}</p>
		</div>
	);
}

export default Item;
