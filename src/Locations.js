import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination"

const apiUrl = 'https://dummyjson.com/users'
const apiUrl_Comment = 'https://dummyjson.com/comments'

const Locations = () => {
    const [people, setPeople] = useState([])
    const [comments, setComments] = useState({})


    const randomPpl = async () => {
        const response = await axios.get(`${apiUrl}`)
        console.log(response.data.users)
        setPeople(response.data.users)
    }

    const randomComments = async () => {
        const response = await axios.get(`${apiUrl_Comment}`)
        
        console.log(response)
        console.log(response.data.comments)
        setComments(response.data.comments)
    }



    const valueComment = (index) => {
        
        let num = index-1;
        console.log("index: " + index)
        console.log("num: " + num)
        console.log('hello')
        console.log(comments);
        console.log(comments[1].body);
        return comments[num].body;
    }

    const valuePeople = (index) => {
        return people[index];
    }

 

    useEffect(() => {
        randomPpl()
        randomComments()
    }, []);

    


   

    return (
        <div>

            <main id="main" data-aos="fade" data-aos-delay="1500">


                <div className="page-header d-flex align-items-center">
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2>About</h2>
                                <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>

                                <a className="cta-btn" href="contact.html">Available for hire</a>

                            </div>
                        </div>
                    </div>
                </div>


                <section id="about" className="about">
                    <div className="container">

                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4">
                                <img src="assets/img/gallery/shop-1.png" className="img-fluid" alt=""></img>
                            </div>
                            <div className="col-lg-5 content">
                                <h2>Victor Famous Fried Chicken Wing Rice and Hainanese Chicken Rice</h2>
                                <p className="fst-italic py-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6" width="100%">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Address:</strong> <span>638 Veerasamy Rd, #01-101 Yi He Eating House, Singapore 200638</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>Under Construction</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>63366083</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Opening Hours:</strong> <span>From 8.30am</span></li>
                                        </ul>
                                    </div>

                                </div>
                                <p className="py-3">
                                    <i>Peterson Tan</i><br />
                                    I missed the crispy specialty taste of Carona Fried Chicken, which was a well-known brand in the 1980s. The owner, Victor, sold the Carona franchise to a friend but continued to use the same recipe for his fried chicken.
                                    The stall has been around for over 40 years and is known for its crispy and juicy fried chicken. The chicken is cooked to order and can be customized with various seasoning options.
                                    The price is affordable, with options for both individual pieces or larger portions for sharing.
                                    Highly recommended to try the chicken and pairing it with their special chili sauce.
                                </p>
                                <p className="m-0">
                                    <i>Prudence B</i><br />
                                    Tried the fried chicken wing rice here. Long queue in the late morning. It’s much less oily than the usual fried chicken and it’s really tasty and juicy. Rice is fragrant but overall the dish is somewhat slightly salty. Would be perfect if it’s less salty and had more veggies.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <p /><p /><p /><p />

                <section id="about" className="about">
                    <div className="container">

                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4">
                                <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""></img>
                            </div>
                            <div className="col-lg-5 content">
                                <h2>Professional Photographer from New York</h2>
                                <p className="fst-italic py-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="py-3">
                                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                                </p>
                                <p className="m-0">
                                    Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis.
                                    Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>



                <section id="testimonials" className="testimonials">
                    <div className="container">

                        <div className="section-header">
                            <h2>Testimonials</h2>
                            <p>What they are saying</p>
                        </div>




                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={3}

                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >

                            {people.map((ppl) => {
                                return (
                                    <div>
                                        <SwiperSlide>
                                            <div className="swiper-slide"  >
                                                <div className="testimonial-item">
                                                    <div className="stars">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                                    </div>
                                                    <p>

                                                        {valueComment(ppl.id)}
                                                    </p>
                                                    <div className="profile mt-auto">
                                                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                                        <h3>{ppl.firstName}</h3>
                                                        <h4>{ppl.lastName}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                )
                            })}

                            {/* <SwiperSlide>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                            <h3>Matt Brandon</h3>
                                            <h4>Freelancer</h4>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide> */}

                            {/* <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide> */}


                            <div className="slides-3 swiper">
                                <div className="swiper-wrapper">

                                </div>

                                <div className="swiper-pagination"></div>

                            </div>
                        </Swiper>

                    </div>
                </section>

            </main>



        </div>
    )
}

export default Locations
