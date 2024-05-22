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
                <Typography variant="h2" component="h2" style={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
                    <strong>Logalyses</strong>
                </Typography>
                <Typography variant="body1" style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'center' }}>
                    At Logalyses, we provide cutting-edge log management and analysis solutions to enhance the health, security, and efficiency of your applications.
                    <br /><br />
                    <strong>Log Collection</strong><br />
                    We offer custom logger libraries for Node.js, Java Spring, and .NET to ensure seamless log retrieval and transmission to our central server.
                    <br /><br />
                    <strong>Log Management & Visualization</strong><br />
                    Using the ELK Stack (Elasticsearch, Logstash, Kibana) and a Next.js interface, we provide robust log storage, search, and visualization within a scalable Kubernetes environment.
                    <br /><br />
                    <strong>Anomaly Detection</strong><br />
                    Our machine learning algorithms analyze logs to detect anomalies and send timely notifications, ensuring prompt issue resolution.
                    <br /><br />
                    <strong>Seamless Integration</strong><br />
                    Designed for easy integration, our solutions use Docker Compose for efficient development and testing, ensuring smooth deployment and scalability.
                    <br /><br />
                    At Logalyses, we transform log management with powerful, scalable, and efficient solutions, keeping your applications running smoothly and securely.
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
                    style={{marginBottom:'10px', width: '100%', height: '200px' }}
                >
                    <SwiperSlide><img src={data1} alt="Slide 1" style={{ width: '200px', height: '200px' }} /></SwiperSlide>
                    <SwiperSlide><img src={data2} alt="Slide 2" style={{ width: '300px', height: '200px' }} /></SwiperSlide>
                    <SwiperSlide><img src={data3} alt="Slide 3" style={{ width: '200px', height: '200px' }} /></SwiperSlide>
                    <SwiperSlide><img src={data4} alt="Slide 4" style={{ width: '200px', height: '200px' }} /></SwiperSlide>
                    <SwiperSlide><img src={data5} alt="Slide 5" style={{ width: '200px', height: '200px' }} /></SwiperSlide>
                    <SwiperSlide><img src={data6} alt="Slide 6" style={{ width: '200px', height: '200px' }} /></SwiperSlide>
                </Swiper>
            </CardContent>
        </Card>
    </div>
  );
}

export default InfoSection;
