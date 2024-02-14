import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate, useParams } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import instance from "../../axios";

export const AlwaysSwipe = ({ isBook }) => {
	const param = useParams();
	const navigate = useNavigate();
	const [carousel, setCarousel] = useState([]);
	const [authorName, setAuthorName] = useState("");
	const [genre, setGenre] = useState(1);

	useEffect(() => {
		!isBook
			? instance(`/author/books/${param.id}`).then((res) => {
					res.status === 201 && setCarousel(res.data);
			  }) &&
			  instance(`/author/authorId/${param.id}`).then((res) => {
					res.status === 201 && setAuthorName(`${res.data.first_name} ${res.data.last_name}`);
			  })
			: instance(`/book/bookId/${param.id}`).then((res) => {
					res.status === 201 && setGenre(res.data.genre_id);
			  }) &&
			  instance(`/book/genreId/${genre}`).then((res) => {
					res.status === 201 && setCarousel(res.data);
			  });
	}, []);

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
			{carousel &&
				carousel.map((item) => (
					<SwiperSlide
						key={item.id}
						className="flex flex-col !items-start cursor-pointer bg-white dark:!bg-[#191919]"
						onClick={() =>
							isBook ? navigate("/author/" + item.id) : navigate(`/book/${item.id}`)
						}>
						<img
							className="mb-3 rounded-[15px] w-[190px] h-[283px] object-fill"
							src={`http://localhost:5000/${item.image}`}
							width={190}
							height={283}
						/>
						<h3 className="font-bold text-lg dark:text-[#C9AC8C] !text-left text-black">
							{item.title}
						</h3>
						<p className="text-[#0D0D0D99] dark:text-[#FFFFFF99]">{authorName}</p>
					</SwiperSlide>
				))}
		</Swiper>
	);
};
