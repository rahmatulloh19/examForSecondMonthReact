import { Carousel, Categories, Header, Search } from "../../components";

export const Home = () => {
	return (
		<>
			<Header />
			<main className="dark:bg-[#191919] relative">
				<Carousel />
				<Search name="author" />
				<Categories />
			</main>
		</>
	);
};
