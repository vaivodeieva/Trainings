import {NavLink} from 'react-router-dom';
import slider1 from '../Assets/Images/slider-1.jpg';
import slider2 from '../Assets/Images/slider-2.jpg';
import slider3 from '../Assets/Images/slider-3.jpg';

import cardpic from '../Assets/Images/card-pic.jpg';
import '../css/Home.css'

function Home() {
    const articles = [
        {
            title: 'Tiny story books',
            image: slider1,
            text: 'Some text which describes the category',
            id: '1',
        },
        {
            title: 'Tiny photo books',
            image: slider2,
            text: 'Some text which describes the category',
            id: '2',
        },
        {
            title: 'Tiny notice books',
            image: slider3,
            text: 'Some text which describes the category',
            id: '3',
        },
    ];

    const articleElements = articles.map((article, index) => {
        return (
            <div className="col" key={index}>
                <div className="card mb-3">
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
                    <h4>Categories</h4>
                </div>
            </div>
            <div className="row">
                {articleElements}
            </div>
        </div>
    )
}

export default Home;

