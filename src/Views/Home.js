import { NavLink } from 'react-router-dom';
import slider1 from '../Assets/Images/slider-1.jpg';
import slider2 from '../Assets/Images/slider-2.jpg';
import slider3 from '../Assets/Images/slider-3.jpg';


import cardpic from '../Assets/Images/card-pic.jpg';
import mars from '../Assets/Images/mars.jpg'
import '../css/Home.css'

import $ from 'jquery';


$(document).on('click', '.flip', function () {
    let card = $(this).closest('.card');
    if (card.hasClass('flip-it')) card.removeClass('flip-it'); else
        card.addClass('flip-it');
});


$('.card').each(function () {
    let href = $(this).data('href');
    $(this).find('.image').css({
        backgroundImage: ['url(', href, ')'].join('')
    });

});

function Home() {
    const articles = [
        {
            title: 'VR travel to the Mars',
            image: slider1,
            text: 'Some text which describes the virtual space travel to Mars and explains how it all works.',
            id: '1',
        },
        {
            title: 'VR travel to the Venus',
            image: slider2,
            text: 'Some text which describes the virtual space travel to Venus and explains how it all works.',
            id: '2',
        },
        {
            title: 'VR travel to the Saturn',
            image: slider3,
            text: 'Some text which describes the virtual space travel to Saturn and explains how it all works.',
            id: '3',
        },
    ];



    const articleElements = articles.map((article, index) => {
        return (
            <div className="col cards" key={index}>
                {/* <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={cardpic} className="img-fluid rounded-start" alt="landscape" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <NavLink to={'/articles/' + article.id}>
                                        {article.title}
                                    </NavLink>
                                </h5>
                                <p className="card-text">{article.text}</p>
                            </div>
                        </div>
                    </div>
                </div> */}





                {/* <div className="row g-0"> */}

                {/* <div className="fx-wrap">

                    <div className="card">
                        <div className="front">
                            <div className="col-md-4">
                                <img src={cardpic} className="img-fluid rounded-start card-picture" alt="landscape" />

                            </div>
                            <div className="text">
                                <header className="clearfix">
                                    <button className="flip"><span className="zmdi zmdi-replay"></span></button>
                                </header>
                                <p>Hello, Click the turn button to watch me shine!</p><a href="#">Action</a>

                            </div>
                        </div>
                        <div className="back">
                            <div className="text">
                                <header className="clearfix">
                                    <button className="flip"><span className="zmdi zmdi-replay"></span></button>
                                </header>

                                <h5 className="card-title">
                                    <NavLink to={'/articles/' + article.id} className="c-title">
                                        {article.title}
                                    </NavLink>
                                </h5>
                                <p className="card-text">{article.text}</p>
                                {/* <p>I have flexbox with fallbacks, I'm not browser prefixed (so watch out, this is a prototype) but my animations are pure css if your into that sort of thing.</p> */}
                            {/* </div>
                        </div>
                    </div>
                </div> */} 
                {/* </div> */}



                <div className="fx-wrap">
                    <div className="card" data-href="#">
                        <div class="front">
                            <div class="image">
                                <img src={mars} className="img-fluid rounded-start card-picture" alt="landscape" />
                            </div>
                            <div class="text">
                                <header class="clearfix">
                                    <button class="flip"><span class="zmdi zmdi-replay"></span></button>
                                </header>
                                <h5 className="card-title">
                                    <NavLink to={'/articles/' + article.id} className="c-title">
                                        {article.title}
                                    </NavLink>
                                </h5>
                                <a to="#">🚀</a>
                            </div>
                        </div>
                        <div class="back">
                            <div class="text">
                                <header class="clearfix">
                                    <button class="flip"><span class="zmdi zmdi-replay"></span></button>
                                </header>
                                {/* <b>"Welcome to our virtual reality travels!"</b> */}
                                <strong className="card-title">
                                    <NavLink to={'/articles/' + article.id} className="c-title text-start">
                                        {article.title}
                                    </NavLink>
                                </strong>
                                

                                {/* <p>I am considering making this into a Javascript component so you can all show off your business cards.<br/><i>Thank you for your support! ❤</i></p> */}
                                <p className="card-text">{article.text}</p>
                                <button className="read-more-btn">
                                <NavLink to={'/articles/' + article.id} className="c-title text-center explore" >Explore...
                                </NavLink>
                                   </button>

                            </div>
                        </div>
                    </div>
                </div>







            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={slider1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={slider2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={slider3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mt-3">
                    <h4>Our virtual reality space travels:</h4>
                </div>
            </div>
            <div className="row">
                {articleElements}
            </div>
        </div>
    )
}

export default Home;

