// SpeakerCarouselCard.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpeakerCarousel = ({ speakers }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="w-full rounded-md overflow-hidden shadow-lg"
    >
      {speakers.map((speaker, idx) => (
        <SwiperSlide key={idx}>
          <Card className="w-full h-full">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="aspect-video w-full object-cover rounded-t-md"
            />
            <CardHeader className="pt-4">
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-indigo-500" />
                <span>{speaker.name}</span>
              </CardTitle>
              <CardDescription>{speaker.details}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Learn more about {speaker.name}.{' '}
              <Link to={speaker.link} className="text-blue-500 hover:underline font-semibold">
                Meet Them
              </Link>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SpeakerCarousel;
