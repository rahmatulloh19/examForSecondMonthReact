import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";

export const AlwaysSwipe = ({ isBook }) => {
	const navigate = useNavigate();

	const arr = new Array(10).fill(1);

	return (
		<Swiper
			spaceBetween={20}
			loop={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			slidesPerView={7}
			modules={[Autoplay]}
			className="mySwiper max-w-[1700px] mx-auto">
			{arr.map((item, index) => (
				<SwiperSlide
					key={index}
					className="flex flex-col !items-start cursor-pointer bg-white dark:!bg-[#191919]"
					onClick={() =>
						isBook ? navigate("/author/" + (index + 1)) : navigate(`/book/${index + 1}`)
					}>
					<img
						className="mb-3 rounded-[15px]"
						src="https://placehold.co/190x283"
						width={190}
						height={283}
					/>
					<h3 className="font-bold text-lg dark:text-[#C9AC8C] !text-left text-black">
						Dunyoning ishlari
					</h3>
					<p className="text-[#0D0D0D99] dark:text-[#FFFFFF99]">O’tkir Hoshimov</p>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
