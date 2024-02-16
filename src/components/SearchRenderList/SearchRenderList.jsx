import { useContext } from "react";
import { SearchValue } from "../../Contexts";
import { useNavigate } from "react-router-dom";

export const SearchRenderList = ({ isBooks, handleClick, searchListRef }) => {
	const navigate = useNavigate();
	const { searchValue } = useContext(SearchValue);

	return searchValue[0] && handleClick ? (
		<div
			className="absolute top-[402px] left-1/2 -translate-x-1/2 dark:bg-[#2d2d2d] dark:text-white p-3 py-4 rounded-2xl w-2/4 z-10 bg-white text-[#191919] "
			ref={searchListRef}>
			<ul className="max-h-[150px] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#0000005a]">
				{isBooks
					? searchValue.map((item) => {
							return (
								<li
									className="hover:bg-[#0000003b] p-3 cursor-pointer rounded-xl"
									key={item.id}
									onClick={() => navigate(`/book/${item.id}`)}>
									<div className="flex justify-between items-center">
										<div>
											<h2 className="font-bold">{item.title}</h2>
											<span className="text-xs">{item.year}</span>
										</div>
										<strong>$ {item.price}</strong>
									</div>
								</li>
							);
					  })
					: searchValue.map((item) => {
							return (
								<li
									className="hover:bg-[#0000003b] p-3 cursor-pointer rounded-xl"
									key={item.id}
									onClick={() => navigate(`/author/${item.id}`)}>
									<div className="flex justify-between items-center">
										<div>
											<h2 className="font-bold">{`${item.first_name} ${item.last_name}`}</h2>
											<span className="text-xs">{`${item.date_of_birth} ${item.date_of_death}`}</span>
										</div>
										<strong>{item.country}</strong>
									</div>
								</li>
							);
					  })}
			</ul>
		</div>
	) : !searchValue[0]?.id && handleClick ? (
		<h2 className="absolute top-[402px] left-1/2 -translate-x-1/2 dark:bg-[#2d2d2d] text-white p-3 py-4 rounded-2xl w-2/4 z-10">
			No dates
		</h2>
	) : (
		""
	);
};
