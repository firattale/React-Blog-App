import React from "react";
import PropTypes from "prop-types";
import Article from "../Article/Article";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";

const Welcome = props => {
	return (
		<React.Fragment>
			<Banner
				backgroundImage="url(assets/img/bg-gift.jpg)"
				title="Latest Blog Posts"
				paragraph="Read and get updated on how we progress."
			/>
			<main className="main-content bg-gray">
				<div className="row">
					<div className="col-12 col-lg-6 offset-lg-3">
						<Article />
						<nav className="flexbox mb-50 mt-50">
							<Link className="btn btn-white disabled" to="#">
								<i className="ti-arrow-left fs-9 mr-4" />
								Newer
							</Link>
							<Link className="btn btn-white" to="#">
								Older
								<i className="ti-arrow-right fs-9 ml-4" />
							</Link>
						</nav>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};

Welcome.displayName = "Welcome";

Welcome.propTypes = {
	className: PropTypes.string
};

export default Welcome;
