import { useState } from "react"
import { article1, article2, article3, article4, article5, article6, gallery1 } from "../../../assets"
import { DirectBtn } from "../../../components"
import ContentLayout from "../../../layout/ContentLayout"
import "./Berita.css"

const cardData = [
    {
        img: article1,
        title: "Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya",
        date: "Sabtu, 25 Nov 2023 20:00 WIB"
    },
    {
        img: article2,
        title: "Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature",
        date: "Selasa, 28 Nov 2023 07:42 WIB"
    },
    {
        img: article3,
        title: "Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023",
        date: "Minggu, 26 Nov 2023 13:04 WIB"
    },
    {
        img: article4,
        title: "Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essentials",
        date: "Sabtu, 18 Nov 2023 17:39 WIB"
    },
    {
        img: article5,
        title: "CT Arsa Charity Fun Run 2023 Bertabur Emas",
        date: "Kamis, 16 Nov 2023 16:34 WIB"
    },
    {
        img: article6,
        title: "BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta",
        date: "Minggu, 12 Nov 2023 11:55 WIB"
    },
]

const CameraSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="detail-svg" viewBox="0 0 15 15" fill="none">
        <path d="M7.49982 5.87679C8.15607 5.87679 8.77482 6.13276 9.23732 6.59475C9.69982 7.06297 9.95607 7.68104 9.95607 8.33032C9.94982 9.01081 9.67482 9.62263 9.23107 10.0659C8.78732 10.5091 8.17482 10.7838 7.49982 10.7838C6.84357 10.7838 6.23107 10.5279 5.76232 10.0659C5.29982 9.59766 5.04357 8.98584 5.04357 8.33032C5.03732 7.68104 5.29357 7.06922 5.75607 6.60099C6.22482 6.13276 6.84357 5.87679 7.49982 5.87679ZM7.49982 6.81325C7.09357 6.81325 6.71232 6.96933 6.41857 7.26275C6.13107 7.54993 5.97482 7.93076 5.98107 8.32407V8.33032C5.98107 8.73612 6.13732 9.11694 6.42482 9.40412C6.71232 9.6913 7.09357 9.84738 7.49982 9.84738C8.33732 9.84738 9.01232 9.16689 9.01857 8.33032C9.01857 7.92452 8.86232 7.54369 8.57482 7.25651C8.28732 6.96933 7.90607 6.81325 7.49982 6.81325ZM11.0061 5.72696C11.3186 5.72696 11.5748 5.98292 11.5748 6.29508C11.5748 6.60723 11.3186 6.85695 11.0061 6.85695C10.6936 6.85695 10.4436 6.60723 10.4436 6.29508C10.4436 5.98292 10.6936 5.72696 11.0061 5.72696Z" fill="white" />
        <path opacity="0.5" d="M10.9 3.89775L10.8375 3.76041C10.6687 3.40455 10.475 2.99251 10.3562 2.75527C10.0687 2.1934 9.575 1.88124 8.96875 1.875H6.025C5.41875 1.88124 4.93125 2.1934 4.64375 2.75527C4.51875 3.00499 4.30625 3.45449 4.13125 3.82284L4.09375 3.89775C4.075 3.9477 4.025 3.97267 3.975 3.97267C2.46875 3.97267 1.25 5.19631 1.25 6.69464V10.403C1.25 11.9014 2.46875 13.125 3.975 13.125H11.025C12.525 13.125 13.75 11.9014 13.75 10.403V6.69464C13.75 5.19631 12.525 3.97267 11.025 3.97267C10.9688 3.97267 10.925 3.94145 10.9 3.89775Z" fill="white" />
    </svg>
)

const VideoSvg = () => (
    <svg className="detail-svg" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M13.75 7.50301C13.75 10.9461 10.9447 13.75 7.5 13.75C4.05526 13.75 1.25 10.9461 1.25 7.50301C1.25 4.05391 4.05526 1.25 7.5 1.25C10.9447 1.25 13.75 4.05391 13.75 7.50301Z" fill="white" />
        <path d="M10 7.50304C10 7.661 9.95028 7.81956 9.85085 7.94654C9.83221 7.97145 9.74521 8.07412 9.67685 8.14095L9.63956 8.1774C9.11754 8.73086 7.81871 9.56318 7.15998 9.82989C7.15998 9.83597 6.76847 9.99453 6.58203 10H6.55717C6.27131 10 6.00408 9.84265 5.86737 9.58748C5.79279 9.44714 5.72443 9.0401 5.71822 9.03463C5.66229 8.6695 5.625 8.11057 5.625 7.49696C5.625 6.85358 5.66229 6.26974 5.73065 5.9113C5.73065 5.90522 5.79901 5.57716 5.84251 5.4678C5.91087 5.31045 6.03516 5.17618 6.19052 5.09113C6.31481 5.03098 6.44531 5 6.58203 5C6.72496 5.00668 6.99219 5.09721 7.09783 5.13973C7.79386 5.40705 9.12376 6.2819 9.63335 6.81652C9.72035 6.90158 9.81357 7.00547 9.83842 7.02916C9.94407 7.16282 10 7.32685 10 7.50304Z" fill="white" />
    </svg>

)

const ArtikelCard = ({ artikelData }) => (
    <>
        {
            artikelData.map(data => (
                <a href="" className="card">
                    <div className="card-img-wrapper">
                        <img src={data.img} alt="" className="w-100" />
                    </div>
                    <div className="card-info">
                        <h3>{data.title}</h3>
                        <p>{data.date}</p>
                    </div>
                </a>
            ))
        }
    </>)

const FotoCard = ({ fotoData }) => (
    <>
        {
            fotoData.map(data => (
                <a href="" className="card">
                    <div className="card-img-wrapper position-relative">
                        <div className="card-detail position-absolute z-3">
                            <CameraSvg />
                            5 Foto
                        </div>
                        <img src={data.img} alt="" className="w-100" />
                    </div>
                    <div className="card-info">
                        <h3>{data.title}</h3>
                        <p>{data.date}</p>
                    </div>
                </a>
            ))
        }
    </>)

const VideoCard = ({ videoData }) => (
    <>
        {
            videoData.map(data => (
                <a href="" className="card">
                    <div className="card-img-wrapper position-relative">
                        <div className="card-detail position-absolute z-3">
                            <VideoSvg />
                            01:45
                        </div>
                        <img src={data.img} alt="" className="w-100" />
                    </div>
                    <div className="card-info">
                        <h3>{data.title}</h3>
                        <p>{data.date}</p>
                    </div>
                </a>
            ))
        }
    </>)

const Berita = ({ beritaRef }) => {
    const [navigation, setNavigation] = useState("Artikel")
    return (
        <div ref={beritaRef} className='berita-bg'>
            <ContentLayout>
                <div className="d-flex flex-column align-items-center">
                    <h2 className="section-title">{navigation.toUpperCase()} TERKAIT</h2>
                    <div className="berita-nav">
                        <button className={`${navigation === "Artikel" ? "active" : ""}`} onClick={() => setNavigation("Artikel")}>Artikel</button>
                        <button className={`${navigation === "Foto" ? "active" : ""}`} onClick={() => setNavigation("Foto")}>Foto</button>
                        <button className={`${navigation === "Video" ? "active" : ""}`} onClick={() => setNavigation("Video")}>Video</button>
                    </div>
                    <div className="gridt" style={{ gap: "35px" }}>
                        {navigation === "Artikel" ? (
                            <ArtikelCard artikelData={cardData} />
                        ) : navigation === "Foto" ? (
                            <FotoCard fotoData={cardData} />
                        ) : (
                            <VideoCard videoData={cardData} />
                        )}
                    </div>
                    <DirectBtn text={"LIHAT LEBIH BANYAK "} url={"https://www.detik.com/search/searchall?query=fun+run&siteid=2"} customStyle={{ marginTop: '50px' }} />
                </div>
            </ContentLayout>
        </div>
    )
}

export default Berita