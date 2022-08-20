import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useGithub } from "../../context/contextHooks";

import PreLoader from "../Layout/PreLoader";

const User = () => {
	const { username } = useParams();

	const { loading, getUser, user } = useGithub();

	useEffect(() => {
		getUser(username);
		//eslint-disable-next-line
	}, []);

	if (loading) return <PreLoader />;
	return (
		<section className="search-user-profile">
			<div className="col s12 m7">
				<div className="card horizontal">
					<div className="card-stacked">
						<div className="card-content center-align">
							<span className="card-title">
								<Link
									to="/"
									className="material-icons left black-text">
									keyboard_arrow_left
								</Link>
								{user.login}
							</span>
							<p className="row">
								<div className="user-img col l4 m12 s12">
									<img
										src={user.avatar_url}
										alt="user-avatar"
										className="user-profile-avatar "
									/>
								</div>
								<div className="user-details left-align col l8 m12 s12">
									<span className="user-detail-lable">
										Bio:
									</span>
									{user.bio}
									<span className="user-detail-lable">
										Company:
									</span>
									{user.company}
									<span className="user-detail-lable">
										Blog:
									</span>
									{user.blog}

									<div className="user-numbers">
										<div>
											<span className="user-detail-lable">
												Followers:
											</span>
											{user.followers || "N/A"}
										</div>
										<div>
											<span className="user-detail-lable">
												Following:
											</span>
											{user.following || "N/A"}
										</div>
										<div>
											<span className="user-detail-lable">
												Public Repos:
											</span>
											{" " + user.public_repos}
										</div>
										<div>
											<span className="user-detail-lable">
												Public Gists:
											</span>
											{user.public_gists}
										</div>
									</div>
								</div>
							</p>
						</div>
						<div className="card-action">
							<a
								href={user.html_url}
								className="btn hoverable waves-effect clear-btn full-width white-text">
								Visit Github{" "}
								<i className="material-icons right">
									keyboard_arrow_right
								</i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default User;
