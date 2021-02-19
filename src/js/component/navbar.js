import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorites);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="col-lg-10 col-md-10 col-sm-11 mx-auto p-0 d-flex">
				<Link to="/">
					<img
						src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
						style={{ width: "80px" }}
					/>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
							Favorites
						</button>
						<div className="dropdown-menu">
							{!!store.favorites &&
								store.favorites.map((element, index) => {
									return (
										<div key={index}>
											<p>{element}</p>;
											<button onClick={() => actions.deleteName(index)}>
												<i className="fas fa-trash" />
											</button>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
