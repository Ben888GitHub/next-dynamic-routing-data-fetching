import Image from 'next/image';

function Affiliations({ characters, affiliationId }) {
	return (
		<>
			<h1>Affiliation matching "{affiliationId}"</h1>
			<ul>
				{/* <li>Aang</li> */}
				{characters?.map((character, idx) => (
					<li key={idx}>
						{character.photoUrl && (
							<Image
								src={character.photoUrl}
								alt="photo-url"
								width={300}
								height={300}
								priority
							/>
						)}
						<h2>{character.name}</h2>
						<p>Affiliation {character.affiliation}</p>
					</li>
				))}
			</ul>
		</>
	);
}

export default Affiliations;

export const getServerSideProps = async ({ params }) => {
	const affiliationId = params.affiliationId.replace(/\-/g, '+');
	const characters = await fetch(
		`https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${affiliationId}`
	).then((r) => r.json());

	return {
		props: {
			characters,
			affiliationId
		}
	};
};
