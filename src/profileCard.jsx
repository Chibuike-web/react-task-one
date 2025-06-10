export default function ProfileCard({ image, name, title, bio }) {
	return (
		<main>
			<div className="profile-card">
				<div className="profile">
					<img src={image} alt={name} />
					<div className="profile-content">
						<h1 className="name">{name}</h1>
						<p className="title">{title}</p>
					</div>
				</div>
				<div className="content-container">
					<p className="bio">{bio}</p>
				</div>
			</div>
		</main>
	);
}
