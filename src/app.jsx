import "./app.css";

import profileImage from "./assets/Profile-2.jpg";
import ProfileCard from "./profileCard";

function App() {
	const bio = `Chibuike Maduabuchi is a hybrid of designer and developer.`;
	return <ProfileCard image={profileImage} name="Chibuike Maduabuchi" bio={bio} />;
}

export default App;
