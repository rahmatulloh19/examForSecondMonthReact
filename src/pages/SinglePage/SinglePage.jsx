import { AlwaysSwipe, Header, Info } from "../../components";

export const SinglePage = ({ isBook }) => {
	return (
		<>
			<Header />
			<main>
				<Info isBook={isBook} />

				<AlwaysSwipe isBook={isBook} />
			</main>
		</>
	);
};
