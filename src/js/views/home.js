import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cardpeople } from "../component/cardpeople";
import { Cardp } from "../component/cardpeople";
import "../../styles/home.scss";

export function Home() {
	const { store, actions } = useContext(Context);
	return (
		<div className="">
			<div className="container-fluid">
				<h1>Characters</h1>
				<div className="row p-2 w-6">
					<div className="cards-container d-flex justify-content-between">
						{!!store.people &&
							store.people.map((element, index) => {
								return (
									<div key={index} className="card col-4 card-img-top" style={{ width: 18 + "rem" }}>
										<img
											src="https://via.placeholder.com/400x200"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">{element.name}</h5>
											<ul className="characters">
												<li>Gender: {element.gender}</li>
												<li>Eye color: {element.eye_color}</li>
												<li>Hair color: {element.hair_color}</li>
											</ul>
											<Link to={"/character/" + index}>
												<span href="#" className="btn btn-warning boton">
													Learn more!
												</span>
											</Link>
											<button
												onClick={() => actions.addName(element.name)}
												type="button"
												className="btn btn-outline-warning float-right">
												<i className="far fa-heart" />
											</button>
										</div>
									</div>
								);
							})}
					</div>
				</div>
				<h1>Planets</h1>
				<div className="row p-2 w-6">
					<div className="cards-container d-flex justify-content-between">
						{!!store.planets &&
							store.planets.map((element, index) => {
								return (
									<div key={index} className="card col-4 card-img-top" style={{ width: 18 + "rem" }}>
										<img
											src="https://via.placeholder.com/400x200"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">{element.name}</h5>
											<ul className="planets">
												<li>Diameter: {element.diameter}</li>
												<li>Gratity: {element.gravity}</li>
												<li>Terrain: {element.terrain}</li>
											</ul>
											<Link to={"/planets/" + index}>
												<span href="#" className="btn btn-warning boton">
													Learn more!
												</span>
											</Link>
											<button
												onClick={() => actions.addName(element.name)}
												type="button"
												className="btn btn-outline-warning float-right">
												<i className="far fa-heart" />
											</button>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
}
