
import img1 from '../Assets/Images/cat1.jpg';
import img2 from '../Assets/Images/cat2.jpg';
import img3 from '../Assets/Images/cat3.jpg';
import img4 from '../Assets/Images/cat4.jpg';
import MapComponent from '../Components/MapComponent';
import '../css/AboutUs.css';

//This is created not according to React rules for now:

function AboutUs() {

    return (
       
      <div className="aboutus-container">
        <div className="col">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                role="tab" aria-controls="home" aria-selected="true">Projects </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                role="tab" aria-controls="profile" aria-selected="false">Future</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                role="tab" aria-controls="contact" aria-selected="false">Goals</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button"
                role="tab" aria-controls="info" aria-selected="false">Next step</button>
            </li>
          </ul>
          <div className="tab-content border-border-secondary" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row container-pic-text border border-secondary">
                <div className="col-3">
                  <img className="img-fluid about-pic" src={img1} alt="cat with a laptop"/>
                </div>
                <div className="col-9 text-field">
                  <p>
                    <p></p>
                    Adventure always. Paw your face to wake you up in the morning just going to dip my paw in your
                    coffee and do a taste test - oh never mind i forgot i don't like coffee - you can have that back now
                    meow and walk away love fish i cry and cry and cry unless you pet me, and then maybe i cry just for
                    fun. I just saw other cats inside the house and nobody ask me before using my litter box love you,
                    then bite you but throw down all the stuff in the kitchen for kitty run to human with blood on mouth
                    from frenzied attack on poor innocent mouse, don't i look cute? so sleep everywhere, but not in my
                    bed. Ask for petting blow up sofa in 3 seconds or pushed the mug off the table. Go crazy with
                    excitement when plates are clanked together signalling the arrival of cat food catch small lizards,
                    bring them into house, then unable to find them on carpet.
                  </p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="row container-pic-text border border-secondary">
                <div className="col-3">
                  <img className="img-fluid about-pic" src={img2}
                    alt="cat with a laptop in the darkness"/>
                </div>
                <div className="col-9 text-field">
                  <p>
                    <p></p>
                    Accumsan lacus vel facilisis volutpat. Aliquet lectus proin nibh nisl condimentum id venenatis a.
                    Vel turpis nunc eget lorem dolor sed viverra ipsum. Adipiscing vitae proin sagittis nisl rhoncus
                    mattis rhoncus urna. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Sed
                    augue lacus viverra vitae. Senectus et netus et malesuada fames ac turpis. Tempor nec feugiat nisl
                    pretium fusce id velit ut tortor. Nibh mauris cursus mattis molestie a iaculis at erat. Eu augue ut
                    lectus arcu. </p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <div className="row container-pic-text border border-secondary">
                <div className="col-3">
                  <img className="img-fluid about-pic" src={img3} alt="cat looking at the laptop"/>
                </div>
                <div className="col-9 text-field">
                  <p>
                    <p></p>
                    Adipiscing elit pellentesque habitant morbi tristique senectus et. Dictum sit amet justo donec enim.
                    Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Euismod in pellentesque
                    massa placerat duis ultricies lacus sed. Varius sit amet mattis vulputate enim nulla aliquet
                    porttitor lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Dictumst quisque sagittis
                    purus sit amet volutpat consequat mauris nunc. Pulvinar pellentesque habitant morbi tristique
                    senectus. Nulla facilisi etiam dignissim diam quis enim. Sagittis id consectetur purus ut. Ornare
                    suspendisse sed nisi lacus sed viverra tellus in. Gravida arcu ac tortor dignissim convallis aenean
                    et tortor at. Sem integer vitae justo eget magna fermentum iaculis eu non. Consequat interdum varius
                    sit amet mattis vulputate. Semper quis lectus nulla at volutpat diam ut. Elementum nibh tellus
                    molestie nunc non blandit massa. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi.
                  </p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
              <div className="row container-pic-text border border-secondary">
                <div className="col-3">
                  <img className="img-fluid about-pic" src={img4} alt="cat is relaxing"/>
                </div>
                <div className="col-9 text-field">
                  <p>
                    <p></p>
                    Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Dolor sit amet consectetur adipiscing elit
                    ut aliquam purus. Sodales ut eu sem integer vitae justo. Quam vulputate dignissim suspendisse in.
                    Dui sapien eget mi proin sed libero. Ultricies mi eget mauris pharetra et ultrices neque. Fames ac
                    turpis egestas integer eget aliquet. Ornare arcu dui vivamus arcu felis. Sit amet nisl purus in
                    mollis nunc sed id. Enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur
                    ridiculus mus mauris vitae ultricies. At consectetur lorem donec massa sapien. Sagittis orci a
                    scelerisque purus semper eget duis at tellus. Scelerisque varius morbi enim nunc faucibus a
                    pellentesque. </p>
                </div>
              </div>
            </div>
         
        </div>

        </div>



        <MapComponent />    





        </div>
    )
}

export default AboutUs;