import { useRef, useState } from "react";
import { Carousel, Categories, Header, Search, SearchRenderList } from "../../components";

export const Books = () => {
	const [handleClick, setHandleClick] = useState(true);
	const searchListRef = useRef(null);

	const closeOpenMenu = (evt) => {
		if (handleClick && !searchListRef.current?.contains(evt.target)) {
			setHandleClick(false);
		}
	};

	window.addEventListener("mousedown", closeOpenMenu);

	return (
		<>
			<Header />
			<main className="dark:bg-[#191919] relative">
				<Carousel />
				<Search name="book" setHandleClick={setHandleClick} />
				<Categories isBooks={true} />
				<SearchRenderList
					isBooks={true}
					handleClick={handleClick}
					setHandleClick={setHandleClick}
					searchListRef={searchListRef}
				/>
			</main>
		</>
	);
};
