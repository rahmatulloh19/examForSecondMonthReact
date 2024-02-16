import { useEffect, useRef, useState } from "react";
import { Carousel, Categories, Header, Search, SearchRenderList } from "../../components";
import { useParams } from "react-router-dom";

export const Home = () => {
	const [handleClick, setHandleClick] = useState(true);
	const searchListRef = useRef(null);

	const param = useParams();

	const closeOpenMenu = (evt) => {
		if (handleClick && !searchListRef.current?.contains(evt.target)) {
			setHandleClick(false);
		}
	};

	window.addEventListener("mousedown", closeOpenMenu);

	useEffect(() => {
		setHandleClick(false);
	}, [param]);

	return (
		<>
			<Header />
			<main className="dark:bg-[#191919] relative">
				<Carousel />
				<Search name="author" setHandleClick={setHandleClick} />
				<Categories />
				<SearchRenderList
					handleClick={handleClick}
					setHandleClick={setHandleClick}
					searchListRef={searchListRef}
				/>
			</main>
		</>
	);
};
