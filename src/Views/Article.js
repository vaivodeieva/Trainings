
import { useState } from 'react';
import mars1 from '../Assets/Images/mars1.jpg';
import mars2 from '../Assets/Images/mars2.jpg';
import mars3 from '../Assets/Images/mars3.jpg';
import mars4 from '../Assets/Images/mars4.jpg';
import mars5 from '../Assets/Images/mars5.jpg';
import mars6 from '../Assets/Images/mars6.jpg';
import Breadcrumbs from '../Components/Breadcrumbs';
import articles from '../Data/Articles.js';
import { SRLWrapper } from 'simple-react-lightbox';


const bredcrumbPaths = [
    {link: '/', title: 'Home' },
    {link: '/articles', title: 'VR travel to the Mars'},
    { title: 'Mars'},
]

function Article() {


    const [img, setImage] = useState(mars1);
    const imgArray1 = [mars1, mars2, mars3];
    const imgArray2 = [mars4, mars5, mars6];
    const loadImage = (event) => {
        setImage(event.target.src)
    };

    const arrayList1 = imgArray1.map((img) => {
        return (
            <div className="col w-100 p-0"><img onClick={loadImage} className="img-fluid" src={img} alt="" /></div>)
    });

    const arrayList2 = imgArray2.map((img) => {
        return (
            <div className="col p-0"><img onClick={loadImage} className="img-fluid" src={img} alt="" /></div>)
    });


    const articleElements = articles.map((article, index) => {
        return (
            <div className="row " key={index}>
                <div className="col-12 col-md-12" >
                    <p>
                    {article.text}
                    </p>
                </div>
            </div>
        )
    })

    return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h1>{articles.title}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col p-0">
                                <img className="img-fluid" src={img} style={{ margin: "1px" }} alt="planet" />
                            </div>
                        </div>
                        <SRLWrapper>
                        <div className="row">
                            {arrayList1}
                        </div>
                        <div className="row">
                            {arrayList2}
                        </div>
                        </SRLWrapper>
                    </div>
                    <div className="col-8">
                    <p> {articleElements}
                    </p>
                    </div>
                </div>

            </div>

    )
}


export default Article;






