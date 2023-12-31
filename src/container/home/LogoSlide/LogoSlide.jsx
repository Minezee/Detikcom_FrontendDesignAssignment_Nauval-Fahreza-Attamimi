import { brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8 } from "../../../assets"
import "./LogoSlide.css"

const LogoSlide = () => {
    return (
        <div className="slider-container">
            <div className="row align-items-center">
                <div className="container rounded">
                    <h2 className="text-center slide-title">DIDUKUNG OLEH</h2>
                    <div className="slider">
                        <div className="logo-wrapper">
                            <div>
                                <img src={brand1} alt="brand1" />
                            </div>
                            <div>
                                <img src={brand2} alt="brand2" />
                            </div>
                            <div>
                                <img src={brand3} alt="brand3" />
                            </div>
                            <div>
                                <img src={brand4} alt="brand4" />
                            </div>
                            <div>
                                <img src={brand5} alt="brand5" />
                            </div>
                            <div>
                                <img src={brand6} alt="brand6" />
                            </div>
                            <div>
                                <img src={brand7} alt="brand7" />
                            </div>
                            <div>
                                <img src={brand8} alt="brand8" />
                            </div>
                        </div>
                        <div className="logo-wrapper">
                            <div>
                                <img src={brand1} alt="brand1" />
                            </div>
                            <div>
                                <img src={brand2} alt="brand2" />
                            </div>
                            <div>
                                <img src={brand3} alt="brand3" />
                            </div>
                            <div>
                                <img src={brand4} alt="brand4" />
                            </div>
                            <div>
                                <img src={brand5} alt="brand5" />
                            </div>
                            <div>
                                <img src={brand6} alt="brand6" />
                            </div>
                            <div>
                                <img src={brand7} alt="brand7" />
                            </div>
                            <div>
                                <img src={brand8} alt="brand8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LogoSlide