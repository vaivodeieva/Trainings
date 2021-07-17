
import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import categories from '../Data/Categories.js';

function Categories() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Categories' },
    ]

    const categoryElements = categories.map((category, index) => {
        return (
            <div className="row mb-5 pb-3 border-bottom" key={index}>
                <div className="col-12 col-md-3">
                    <NavLink to={'/categories/' + category.id}>
                        <img className="img-fluid" src={category.image} />
                    </NavLink>

                </div>
                <div className="col-12 col-md-9">
                    <h3>
                        <NavLink to={'/categories/' + category.id}>{category.title}</NavLink>
                    </h3>
                    <p className="text-muted">
                        {category.text}
                    </p>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>Categories</h1>
                </div>
            </div>
            {categoryElements}
        </div>
    )
}

export default Categories;
















// import img1 from '../Assets/Images/img1.jpg';
// import img2 from '../Assets/Images/img2.jpg';
// import img3 from '../Assets/Images/img3.jpg';
// import {NavLink} from 'react-router-dom';


// function Articles() {

//     return (
  
// <div>

//   <div className="container-articles">

//     <span className="border-bottom">

//       <div class="row border-white w-auto cont-alig">
//         <div className="col-md-2 small-pic">
//           <img className="img-fluid" src={img1} alt="story books"/> 
          

//         </div>
//         <div className="col-md-10">
//           <div className="card-body">
//             <h5 className="card-title">
//             <NavLink 
//             className="header-color-2" 
//             style={{textDecoration: 'none', color: 'darkRed', fontFamily: 'impact',  display: 'flex', justifyContent: 'left'}} 
//             to="./article">Tiny story books</NavLink>
//             </h5>
//             <p className="card-text text-align text-wrap lh-1">
//               This is some text about our tiny story books. And this is some more text. Here goes some additional
//               sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
//               experiences with tiny books.
//               This is some text about our tiny story books. And this is some more text. Here goes some additional
//               sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
//               experiences with tiny books.
//               This is some text about our tiny story books. And this is some more text. Here goes some additional
//               sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
//               experiences with tiny books.
//               This is some text about our tiny story books. And this is some more text. Here goes some additional
//               sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
//               experiences with tiny books.
//               This is some text about our tiny story books. And this is some more text. Here goes some additional
//               sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
//               experiences with tiny books.
//               This is some text about our tiny story books. And this is some more text. Here goes some additional
//               sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
//               experiences with tiny books.

//             </p>
//           </div>
//         </div>
//       </div>
//     </span>
//   </div>
//   <div className="container-articles">
//     <span className="border-bottom">
//       <div className="row border-white w-auto cont-alig">
//         <div className="col-md-2 small-pic">
//           <img className="img-fluid" src={img2} alt="photo books"/>
//         </div>
//         <div className="col-md-10">
//           <div className="card-body">
//             <h5 className="card-title">

//             <NavLink 
//             className="header-color-2" 
//             style={{textDecoration: 'none', color: 'darkBlue', fontFamily: 'impact',  display: 'flex', justifyContent: 'left'}} 
//             to="./article">Tiny notice books</NavLink>

//             </h5>
//             <p class="card-text text-align text-wrap lh-1">
//               This is some text about our tiny photo books.
//               And this is some more text.
//               Here goes some additional sentence which is describing our tiny photo books' sortiment.
//               The next sentences are about our customers' experiences with tiny photo books.
//               This is some text about our tiny photo books.
//               And this is some more text.
//               Here goes some additional sentence which is describing our tiny photo books' sortiment.
//               The next sentences are about our customers' experiences with tiny photo books.
//               This is some text about our tiny photo books.
//               And this is some more text.
//               Here goes some additional sentence which is describing our tiny photo books' sortiment.
//               The next sentences are about our customers' experiences with tiny photo books.
//               This is some text about our tiny photo books.
//               And this is some more text.
//               Here goes some additional sentence which is describing our tiny photo books' sortiment.
//               The next sentences are about our customers' experiences with tiny photo books.
//               This is some text about our tiny photo books.
//               And this is some more text.
//               Here goes some additional sentence which is describing our tiny photo books' sortiment.
//               The next sentences are about our customers' experiences with tiny photo books.
//             </p>
//           </div>
//         </div>
//       </div>
//     </span>
//   </div>
//   <div className="container-articles">
//     <span className="border-bottom">
//       <div className="row border-white w-auto cont-alig">
//         <div className="col-md-2 small-pic">
//           <img className="img-fluid" src={img3} alt="notice books"/>
//         </div>
//         <div className="col-md-10">
//           <div className="card-body">
//             <h5 className="card-title">
//             <NavLink 
//             className="header-color-3" 
//             style={{textDecoration: 'none', color: 'green', fontFamily: 'impact',  display: 'flex', justifyContent: 'left'}} 
//             to="./article">Tiny notice books</NavLink>

//             </h5>
//             <p className="card-text text-align text-wrap lh-1">
//               This is some text about our tiny notice books.
//               And this is some more text.
//               Here goes some additional sentence which is describing our tiny notice books' sortiment.
//               The next sentences are about our customers' experiences with tiny notice books.
//               This is some text about our tiny notice books.
//               And this is some more text.
//               Here goes some additional sentence which is describing our tiny notice books' sortiment.
//               The next sentences are about our customers' experiences with tiny notice books.
//               This is some text about our tiny notice books.
//               And this is some more text.
//               Here goes some additional sentence which is describing our tiny notice books' sortiment.
//               The next sentences are about our customers' experiences with tiny notice books.
//               This is some text about our tiny notice books.
//               And this is some more text.
//               Here goes some additional sentence which is describing our tiny notice books' sortiment.
//               The next sentences are about our customers' experiences with tiny notice books.
//               This is some text about our tiny notice books.
//               Here goes some additional sentence which is describing our tiny notice books' sortiment.
//               The next sentences are about our customers' experiences with tiny books.

//             </p>
//           </div>
//         </div>
//       </div>
//       </span>
    
//   </div>
//         </div>


       
//     )
// }


// export default Articles;