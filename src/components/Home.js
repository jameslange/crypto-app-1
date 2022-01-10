import React from 'react';
import MutantApe4942 from '../assets/pics/MutantApe4942.png';
import boredape9361 from '../assets/pics/boredape9361.png';
import cryptopunk5635 from '../assets/pics/cryptopunk5635.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import boredape3749 from '../assets/pics/boredape3749.png'
import { Carousel } from 'react-responsive-carousel';
const Home = () => {
    return (
        <>
        
        <div className="hero min-h-screen bg-base-200 p-20">
            <div className="flex-col hero-content lg:flex-row-reverse ">
                <div className="container max-w-md shrink-[50]">
                    <Carousel  autoPlay={true} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}>
                        <div>
                            <img src={boredape3749} alt="img"/>
                            <p className="legend">Bored Ape #3749 sold for $2,900,000</p>
                        </div>
                        <div>
                            <img src={MutantApe4942} alt="img"/>
                            
                        </div>
                        <div>
                            <img src={boredape9361} alt="img"/>
                            <p className="legend">Bored Ape #9361 sold for $1,056,000</p>
                        </div>
                        <div>
                            <img src={cryptopunk5635} alt="img" />
                            <p className="legend">Crypto Punk #5635 sold for $308,598 </p>
                        </div>
                    </Carousel>
                </div>
                <div>
                <h1 className="mb-5 text-5xl font-bold">
                        Hello there
                    </h1> 
                <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> 
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        



 
        </>
    )
}
{/* <img src={MutantApe4942} alt="Mutant Ape NFT" className="max-w-sm rounded-lg shadow-2xl" /> 


<div className="w-full carousel  infiniteLoop ">
                <div id="item1" className="w-full  aspect-square pt-20 carousel-item">
                    <img src={boredape9631} className="w-full  " alt="img"/>
                </div> 
                <div id="item2" className="w-full pt-20 carousel-item">
                    <img src={MutantApe4942} className="w-full" alt="img"/>
                </div> 
                <div id="item3" className="w-full pt-20 carousel-item">
                    <img src="https://picsum.photos/id/502/800/300" className="w-full" alt="img"/>
                </div> 
                <div id="item4" className="w-full pt-20 carousel-item">
                    <img src="https://picsum.photos/id/503/800/300" className="w-full" alt="img"/>
                </div>
                </div> 
                <div className="flex justify-center w-full py-4 space-x-2">
                    <a href="/components/carousel#item1" className="btn btn-xs btn-circle">1</a> 
                    <a href="/components/carousel#item2" className="btn btn-xs btn-circle">2</a> 
                    <a href="/components/carousel#item3" className="btn btn-xs btn-circle">3</a> 
                    <a href="/components/carousel#item4" className="btn btn-xs btn-circle">4</a>
                </div>
            </div> */}
export default Home
