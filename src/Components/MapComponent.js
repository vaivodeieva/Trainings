import React from 'react';

function MapComponent() {

return (
    <div>

<div class="row map-and-address">
          <div class="col map">
            <div class="mapouter">
              <div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=The Courtyard, Edenhall, Penrith CA11 8ST, United Kingdom&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a
                  href="https://www.fridaynightfunkin.net/"></a></div>
              
            </div>
          </div>
          <div class="col address">
            <h4>Address:</h4>
            
            <p>
              Planet Earth, Edenhall Country, Oxford OX33 1EA, United Kingdom
            </p>
            <h4>EMail:</h4>
            <p>
              info@example.com
            </p>
            <h4>Phone:</h4>
            <p>
              +44 XXXXXXXXXXX
            </p>
          </div>
        </div>

    </div>
 
    )
 }

 export default MapComponent;