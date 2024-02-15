import { Carousel, Categories, Header, Search, SearchRenderList } from "../../components";

export const Books = () => {
	return (
		<>
			<Header />
			<main className="dark:bg-[#191919] relative">
				<Carousel />
				<Search name="book" />
				<Categories isBooks={true} />
				<SearchRenderList isBooks={true} />
			</main>
		</>
	);
};
