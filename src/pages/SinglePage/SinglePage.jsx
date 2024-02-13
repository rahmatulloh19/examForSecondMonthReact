import { AlwaysSwipe, Header, Info } from "../../components";

export const SinglePage = ({ isBook }) => {
	return (
		<>
			<Header />
			<main className="dark:bg-[#191919] pb-[120px]">
				<Info isBook={isBook} />

				<AlwaysSwipe isBook={isBook} />
			</main>
		</>
	);
};
