import '../css/Footer.css'


function Footer() {

    let date = new Date();

    return (

        <div className="footer-container ">
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted text-center"> {date.getFullYear()} © All rights reserved <h1> 🚀 </h1></small></div>            
                </div>
            </footer>
        </div>
    )
}

export default Footer;