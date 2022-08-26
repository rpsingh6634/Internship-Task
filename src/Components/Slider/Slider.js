import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import youtube from './logo/youtube.svg';
import img1 from './logo/img1.webp';
import img2 from './logo/img2.webp';
import img3 from './logo/img3.webp';
import img4 from './logo/img4.webp';
import img5 from './logo/img5.webp';
import img6 from './logo/img6.webp';
import img7 from './logo/img7.webp';
import img8 from './logo/img8.webp';
import img9 from './logo/img9.webp';
import img10 from './logo/img10.webp';
import img11 from './logo/img11.webp';




export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)
    
    

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
        <div class="row2">
  <div class="column3">
      
      <img className="img1" src={img1} alt="logo"/>
        <img className="img2" src={img2} alt="logo" />
        
        <br/>
        <img className="img3" src={img3} alt="logo" />
        <img className="img4" src={img4} alt="logo" />
        <img className="img5" src={img5} alt="logo" />
        <img className="img6" src={img6} alt="logo" />
  </div>
  <div class="column4">
      
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-slider">
            
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <div className="row">
                      <div className="column1" >
                      <img alt="" 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.webp`} 
                        />
                        <h4 className="name">{obj.title}</h4>
                        <h4 className="name2">{obj.subTitle}</h4>
                               </div>
                          <div className="column2" >
                            <img className="youtube" src={youtube} alt="logo" />
                            
                          <a  href={`./dataSlider/${obj.link}`} className="visit">Watch Testimonial</a>
                          {/* //eslint-disable-next-line */}
                          
                          
                          <p className="description">{obj.desc}</p>
                          <br/>
                          
                          <a className="readmore"href={`./dataSlider/${obj.target}`}>Read More</a> 
                          {/* //eslint-disable-next-line */}
                          
                          
                         </div>
                         <img className="img2" src={img2} alt="logo" />
                          </div>
                        </div>
                        
                    )
                })}
                 <div className="container-dots">
                {Array.from({length: 11}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
            
            </div>
            
            <button className="more">Read More Testimonials</button>
            </div>
            
  <div class="column5">
      <div className="first">
        <img className="img7" src={img7} alt="logo" />
        <img className="img8" src={img8} alt="logo" />
        </div>
        <div className="second">
        <img className="img9" src={img9} alt="logo" />
        </div>
        <div className="third">
        <img className="img10" src={img10} alt="logo" />
        <img className="img11" src={img11} alt="logo" />
        </div>
  </div>
</div>
</>
    )
}