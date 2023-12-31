import React, { useState } from 'react'
import { gallery1, gallery2, gallery3, gallery4 } from '../../../assets'
import "./Gallery.css"
import ContentLayout from '../../../layout/contentLayout'

const ArrowLeft = () => (
    <svg className=''  viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.5 5.75L35.3043 5.76105C50.8029 6.18747 63.25 18.899 63.25 34.5C63.25 50.3412 50.37 63.25 34.5 63.25C18.6587 63.25 5.75 50.3412 5.75 34.5C5.75 18.63 18.6587 5.75 34.5 5.75ZM40.1925 23C39.33 22.1375 37.9787 22.1375 37.145 23L27.1112 32.9762C26.7087 33.3787 26.4787 33.925 26.4787 34.5C26.4787 35.075 26.7087 35.6212 27.1112 36.0237L37.145 46C37.5475 46.4312 38.0937 46.6325 38.64 46.6325C39.215 46.6325 39.7612 46.4312 40.1925 46C41.0262 45.1375 41.0262 43.7862 40.1637 42.9525L31.6825 34.5L40.1637 26.0475C41.0262 25.2137 41.0262 23.8337 40.1925 23Z" 
        fill="white"/>
    </svg>
)

const ArrowRight = () => (
    <svg className=''  viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.5 63.25L33.6957 63.239C18.1971 62.8125 5.75 50.101 5.75 34.5C5.75 18.6588 18.63 5.75001 34.5 5.75001C50.3412 5.75 63.25 18.6588 63.25 34.5C63.25 50.37 50.3413 63.25 34.5 63.25ZM28.8075 46C29.67 46.8625 31.0213 46.8625 31.855 46L41.8887 36.0238C42.2912 35.6213 42.5212 35.075 42.5212 34.5C42.5212 33.925 42.2912 33.3788 41.8887 32.9763L31.855 23C31.4525 22.5688 30.9063 22.3675 30.36 22.3675C29.785 22.3675 29.2388 22.5688 28.8075 23C27.9738 23.8625 27.9737 25.2138 28.8362 26.0475L37.3175 34.5L28.8362 42.9525C27.9737 43.7863 27.9738 45.1663 28.8075 46Z" 
        fill="white"/>
    </svg>
)

const Gallery = ({galeriRef}) => {
    const [isActive, setIsActive] = useState(0);
    const galleryArr = [gallery1, gallery2, gallery3, gallery4]

    function handleSlideLeft(){
        if(isActive === 0){
            setIsActive(galleryArr.length - 1)
        }else{
            setIsActive(isActive - 1)
        }
    }

    function handleSlideRight(){
        if(isActive === galleryArr.length - 1){
            setIsActive(0)
        }else{
            setIsActive(isActive + 1)
        }
    }

    return (
        <ContentLayout>
            <div ref={galeriRef} className="wrapper">
                <h2 className='section-title'>GALERI SUDIRMAN RUN 2022</h2>
                <div className="col-12 img-wrapper position-relative d-flex align-items-center">
                    <button onClick={handleSlideLeft} className='arrow position-absolute z-3 mx-lg-4'>
                        <ArrowLeft />
                    </button>
                    <img
                        src={galleryArr[isActive]}
                        alt="display produk"
                        className="img-fluid mix-blend-multiply contrast-100 z-1"
                    />
                    <button onClick={handleSlideRight} className='arrow position-absolute z-3 end-0 mx-lg-4'>
                        <ArrowRight />
                    </button>
                </div>
                <div className="small-img-container">
                    {galleryArr.map((data, index) => (
                        <div className='small-img-wrapper' key={"foto produk-" + index} onClick={() => setIsActive(index)}>
                            <img src={data} alt="foto produk" className={`${isActive !== index ? 'not-active' : ''} w-100`} />
                        </div>
                    ))}
                </div>
            </div>
        </ContentLayout>
    )
}

export default Gallery