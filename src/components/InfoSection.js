import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // Main Swiper styles
import 'swiper/css/autoplay'; // Import Autoplay styles
import { Card, CardContent, Typography } from '@mui/material';
import data1 from '../Images/data1.png';
import data2 from '../Images/data2.png';
import data3 from '../Images/data3.png';
import data4 from '../Images/data4.png';
import data5 from '../Images/data5.png';
import data6 from '../Images/data6.png';



function InfoSection() {
  return (
    <div id="what-we-do" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#034d58', minHeight: '100vh' }}>
        <Card style={{ maxWidth: 1800, margin: '0 auto', backgroundColor: '#022c43', color: 'white' }}>
            <CardContent style={{ marginBottom: '100px' }}>  {/* Added marginBottom here for spacing */}
                <Typography variant="h2" component="h2" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                    Logalyses
                </Typography>
                <Typography variant="body1" style={{ fontSize: '25px', lineHeight: '1.6' }}>
                    Logalyses is a cutting-edge system designed to handle the complexities of modern IT environments. <br></br> With robust multilingual support, it captures and aggregates logs elastically across diverse platforms. Leveraging advanced machine learning algorithms, Logalyses meticulously analyzes vast amounts of data to detect anomalies. It then proactively notifies system administrators, providing them with critical insights to preemptively address potential issues. Experience the power of streamlined data analysis and enhanced operational efficiency with Logalyses, your reliable partner in system management and security.
                </Typography>
            </CardContent>
            <CardContent>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    style={{marginBottom:'120px', width: '100%', height: '250px' }}
                >
                    <SwiperSlide><img src={data1} alt="Slide 1" style={{ width: '250px', height: '250px' }} /></SwiperSlide>
                    <SwiperSlide><img src={data2} alt="Slide 2" style={{ width: '350px', height: '250px' }} /></SwiperSlide>
                    <SwiperSlide><img src={data3} alt="Slide 3" style={{ width: '250px', height: '250px' }} /></SwiperSlide>
                    <SwiperSlide><img src={data4} alt="Slide 4" style={{ width: '250px', height: '250px' }} /></SwiperSlide>
                    <SwiperSlide><img src={data5} alt="Slide 5" style={{ width: '250px', height: '250px' }} /></SwiperSlide>
                    <SwiperSlide><img src={data6} alt="Slide 6" style={{ width: '250px', height: '250px' }} /></SwiperSlide>
                </Swiper>
            </CardContent>
        </Card>
    </div>
);
}

export default InfoSection;

