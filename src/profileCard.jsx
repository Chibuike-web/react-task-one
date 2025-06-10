export default function ProfileCard({ image, name, bio }) {
	return (
		<main>
			<div className="profile-card">
				<figure>
					<img src={image} alt={name} />
				</figure>
				<div className="content-container">
					<h1 className="name">{name}</h1>
					<p className="bio">{bio}</p>
				</div>
			</div>
		</main>
	);
}
