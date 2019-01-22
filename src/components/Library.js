import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums'; //albumData is an arbitrary name. But this is creating an array that hold two objects. Each object defined properties of a specific album, including a sub-array of song objects

class Library extends Component {
	constructor(props) {
		super(props);
		this.state = { albums: albumData };
	}

	render() {
		return (
			<section className="library">
				{
					this.state.albums.map( (album, index) =>
						<Link to={`/album/${album.slug}`} key={index}>
							<img src={album.albumCover} alt={album.title} />
							<div>{album.title}</div>
               				<div>{album.artist}</div>
               				<div>{album.songs.length} songs</div>
						</Link>
					)
				}
			</section>
);
}
}

export default Library;