import { useRouter } from 'next/router';

function Avatars({ avatars }) {
	const router = useRouter();
	return (
		<>
			<h1>Avatars</h1>
			<ul>
				{/* <li>Aang</li> */}
				{avatars?.map((avatar, idx) => (
					<li key={idx}>{avatar.name}</li>
				))}
			</ul>
			<h3>
				https://last-airbender-api.herokuapp.com/api/v1/characters?name=CHARACTER_NAME
			</h3>
			<h3>
				https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=AFFILIATION_NAME
			</h3>
		</>
	);
}

export default Avatars;

export const getStaticProps = async () => {
	const avatars = await fetch(
		`https://last-airbender-api.herokuapp.com/api/v1/characters/avatar`
	).then((r) => r.json());

	return {
		props: {
			avatars
		}
	};
};
