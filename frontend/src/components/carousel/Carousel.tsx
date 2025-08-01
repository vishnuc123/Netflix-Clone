import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import type { SwiperCarouselProps } from "../../interface/Iswipercarousel";
import type { Movie } from "../../types/Types";
import { useNavigate } from "react-router-dom";



const SwiperCarousel: React.FC<SwiperCarouselProps> = ({ movies } :{movies:Movie[]}) => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const navigate = useNavigate()

  return (
    <div className="w-full px-4 py-6">
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        spaceBetween={20}
        navigation
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="bg-gray-900 text-white p-2 rounded-lg shadow text-center" onClick={() => navigate(`/movies/:${movie.id}`,{state:movie})}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-60 object-cover rounded"
              />
              <p className="mt-2 text-sm font-semibold truncate">{movie.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
