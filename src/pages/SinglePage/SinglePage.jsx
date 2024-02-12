import { Header, Info } from "../../components";

export const SinglePage = ({ isBook }) => {
	return (
		<>
			<Header />
			<main className="dark:bg-[#191919]">
				<Info isBook={isBook} />
			</main>
		</>
	);
};
