import "./app.css";

import profileImage from "./assets/Profile-2.jpg";
import ProfileCard from "./components/ProfileCard";

function App() {
	const bio = (
		<>
			<span>Chibuike Maduabuchi </span>is a hybrid of <span>designer and developer</span>. He blends
			<span> design and code</span> to build beautiful and <span>human-centered</span> software that
			<span> looks good</span> and <span>feels good</span> to use.
		</>
	);
	return (
		<ProfileCard
			image={profileImage}
			name="Chibuike Maduabuchi"
			title="Designer & Developer"
			bio={bio}
		/>
	);
}

export default App;
