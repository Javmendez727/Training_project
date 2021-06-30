import React, {Component} from "react";
import './Photos.scss';

class photos extends Component {
    render() {
        return (
            <div className = "list_thumb">
                    <div className ="list_thumb_description"> 
                        <div className ="box_align_thumb">
                            <span className="t5 white">Rosita</span>
                            <span className="t4 white">Adopta</span>
                            <ul className="t3 white">
                               <li>Raza: Beagle</li> 
                               <li>Edad: 2 años</li> 
                               <li>Distrito: Ventanilla, Comas</li> 
                               <li>Estado: Libre de parásitos y con vacunas</li> 
                            </ul>

                        </div>
                    </div>
                    <div className="list_thumb_img1">  </div>

                    <div className ="list_thumb_description"> 
                        <div className ="box_align_thumb">
                            <span className="t5 white">Fred</span>
                            <span className="t4 white">Adopta</span>
                            <ul className="t3 white">
                               <li>Raza: Labrador Retriever</li> 
                               <li>Edad: 1 años</li> 
                               <li>Distrito: Miraflores, San Isidro</li> 
                               <li>Estado: Libre de parásitos y con vacunas</li> 
                            </ul>                       
                        </div>
                    </div>
                    <div className="list_thumb_img2">
                    </div>

                    <div className ="list_thumb_description"> 
                        <div className ="box_align_thumb">
                            <span className="t5 white">Rey</span>
                            <span className="t4 white">Adopta</span>
                            <ul className="t3 white">
                               <li>Raza: Savanaah</li> 
                               <li>Edad: 3 años</li> 
                               <li>Distrito: San Miguel, Magdalena</li> 
                               <li>Estado: Libre de parásitos y con vacunas</li> 
                            </ul>                        
                            </div>
                    </div>
                    <div className="list_thumb_img3">
                    </div>
             </div>

                

            

        );
    }
}

export default photos;