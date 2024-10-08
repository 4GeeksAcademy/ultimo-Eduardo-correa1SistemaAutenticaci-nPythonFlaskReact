import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const goToSignup = () => {
		navigate("/signup");
	  };
	  
	  const goToLogin = () => {
		navigate("/login");
	  };

	return (
		<div className="text-center mt-5">
			<div>
			<i className="fa-solid fa-circle-user user-icon"></i>
			</div>
			<button type="button" className="btn btn-primary btn-lg m-3" onClick={goToSignup}>Registro</button>
			<button type="button" className="btn btn-primary btn-lg m-3" onClick={goToLogin}>Login</button>
			
			
		</div>
	);
};
