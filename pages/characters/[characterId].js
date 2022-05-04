import Image from 'next/image';

function Character({ character }) {
	return (
		<div>
			<Image
				src={character.photoUrl}
				alt="photo-url"
				width={300}
				height={300}
				priority
			/>
			<h1>{character.name}</h1>
			<p>Affiliation {character.affiliation}</p>
		</div>
	);
}

export default Character;

export const getStaticProps = async ({ params }) => {
	// console.log(params);

	const results = await fetch(
		`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${params.characterId}`
	).then((r) => r.json());
	return {
		props: {
			character: results[0]
		}
	};
};

export const getStaticPaths = async () => {
	const characters = await fetch(
		`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500`
	).then((r) => r.json());

	return {
		paths: characters.map((character) => {
			const characterId = character.name.toLowerCase();
			return {
				params: {
					characterId: characterId
				}
			};
		}),
		fallback: false
	};
};
