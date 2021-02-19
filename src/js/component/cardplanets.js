import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
export const Cardplanets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
			<div className="jumbotron row">
				<img src="https://via.placeholder.com/800x600" width="800px" height="400" padding="5px" alt="..." />
				<div className="lead col-6">
					<h1 className="name text-center">{store.planets[params.id].name}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor congue arcu. Ut in
						tristique magna. Maecenas tincidunt ipsum sed lacus lobortis pretium. Proin ullamcorper justo at
						massa pulvinar rhoncus. Donec fringilla tincidunt tellus. Nam maximus aliquet est id porta.
						Phasellus eget massa vitae risus placerat tristique. In sit amet vehicula felis, a tincidunt
						felis. Phasellus pretium orci malesuada sagittis ornare. Aenean pharetra lorem libero, non
						tempor erat porttitor id. Nullam accumsan velit eu mauris ultrices consequat. Phasellus at
						turpis ac arcu elementum iaculis quis vel tortor. Cras vel felis semper, malesuada augue id,
						pharetra est. Fusce scelerisque tortor vestibulum, fringilla nulla id, ullamcorper ex. Praesent
						scelerisque fermentum nisl quis vehicula. Curabitur tempus sapien nec enim accumsan, a mollis
						massa sagittis. Maecenas nec hendrerit leo, id egestas risus. Mauris elit metus, blandit vel
						aliquam vel, rutrum non neque. Quisque tristique viverra libero, sit amet malesuada ipsum
						fermentum et.
					</p>
				</div>
				<hr className="line" />
				<div className="char">
					<ul className="list row">
						<li className="charaster col-3">Climate: {" " + store.planets[params.id].climate}</li>
						<li className="charaster col-3">Diameter: {" " + store.planets[params.id].diameter}</li>
						<li className="charaster col-3">Gravity: {" " + store.planets[params.id].gravity}</li>
						<li className="charaster col-3">Population: {" " + store.planets[params.id].population}</li>
					</ul>
				</div>
				<div className="p-2 justify-content-between">
					<Link to={"/"}>
						<span href="#" className="btn btn-warning btn-lg btn-block">
							Back
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
