import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import { Pagination } from "swiper/modules";
import image from "../../assets/images/carouselimg.png";

export const Carousel = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + "</span>";
		},
	};

	return (
		<section className="site-carousel h-[346px]">
			<div className="container h-full">
				<Swiper
					rewind={true}
					pagination={pagination}
					modules={[Pagination]}
					className="mySwiper !h-full">
					<SwiperSlide className="rounded-[21px]">
						<img src={image} alt="Carousel img" />
					</SwiperSlide>
					<SwiperSlide className="rounded-[21px]">
						<img src={image} alt="Carousel img" />
					</SwiperSlide>
					<SwiperSlide className="rounded-[21px]">
						<img src={image} alt="Carousel img" />
					</SwiperSlide>
					<SwiperSlide className="rounded-[21px]">
						<img src={image} alt="Carousel img" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};
