
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

// const breadcrumbPaths = [
//     { link: '/', title: 'Home' },
//     { link: '/articles', title: 'Articles' },
//     { title: article.title },
// ]

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
                    <p>
                    We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.
                    We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.
                    </p>
                    </div>
                </div>


            </div>
        
    // )}
    )
}



export default Article;

















// // import Breadcrumbs from '../Components/Breadcrumbs';
// import { useParams } from 'react-router-dom';
// import articles from '../Data/Articles';
// import { SRLWrapper } from "simple-react-lightbox";
// import { useState} from 'react';

// function Article() {
//     const { articleId } = useParams();
//     const filteredArticles = articles.filter((article) => {return articleId == article.id});
//     const article = filteredArticles[0];

//     // const bredcrumbPaths = [
//     //     { link: '/', title: 'Home' },
//     //     { link: '/articles', title: 'Articles' },
//     //     { title: article.title },
//     // ];

//     const [mainImage, setMainImage] = useState(article.image);


//     const imageThumbnails = article.images.map((image, index) => {
//         return (
//             <div className="col-4 mt-3" key={index}>
//                 <a href={image}>
//                     <img className="img-fluid" src={image} onMouseEnter={() => setMainImage(image)} />
//                 </a>
//             </div>
//         )
//     })


//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                     {/* <Breadcrumbs paths={bredcrumbPaths} /> */}
//                 </div>
//             </div>

//             <div className="row">
//                 <div className="col">
//                     <h1>{article.title}</h1>
//                 </div>
//             </div>
//             <div className="row mb-5 pb-3">
//                 <div className="col-12 col-md-3">
//                 <div className="row">
//                         <div className="col">
//                             <img src={mainImage} className="img-fluid" />
//                         </div>
//                     </div>
//                     <SRLWrapper>
//                         <div className="row">
//                             {imageThumbnails}
//                         </div>
//                     </SRLWrapper>
//                 </div>
//                 <div className="col-12 col-md-9">
//                     <p className="text-muted">
//                         {article.text}
//                     </p>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default Article;







