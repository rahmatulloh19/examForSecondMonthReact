import { useContext } from "react";
import { SearchValue } from "../../Contexts";
import { useNavigate } from "react-router-dom";

export const SearchRenderList = ({ isBooks }) => {
	const navigate = useNavigate();
	const { searchValue } = useContext(SearchValue);

	console.log(searchValue);

	return searchValue[0] ? (
		<div className="absolute top-[402px] left-1/2 -translate-x-1/2 dark:bg-[#2d2d2d] text-white p-3 py-4 rounded-2xl w-2/4 z-10">
			<ul className="max-h-[150px] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#0000005a]">
				{isBooks
					? searchValue.map((item) => {
							return (
								<li
									className="hover:bg-[#0000003b] p-3"
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
					: ""}
			</ul>
		</div>
	) : (
		""
	);
};
