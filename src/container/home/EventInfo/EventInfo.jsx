import { imgBox, map } from "../../../assets"
import { DirectBtn } from "../../../components"
import "./EventInfo.css"
import ContentLayout from "../../../layout/contentLayout"

const EventInfo = ({eventRef}) => {
    return (
        <ContentLayout>
            <div ref={eventRef} style={{ padding: "120px 0px" }} className="text-center">
                <div className="event-wrapper d-flex flex-xl-row flex-column text-start">
                    <div className="col-xl-6 flex-1">
                        <div className="box left-box">
                            <div>
                                <img src={map} alt="map" />
                            </div>
                            <h2>10K FUN RUN</h2>
                            <p>Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!</p>
                        </div>
                    </div>

                    <div className="col-xl-6 flex-1">
                        <div className="row right-box-container">
                            <div className="col-xl-12 flex-1">
                                <div className="box right-box flex-1">
                                    <h2>GRATIS DAN BERHADIAH</h2>
                                    <p>Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total puluhan juta rupiah doorprize menarik!</p>
                                </div>
                            </div>
                            <div className="col-xl-12 flex-1">
                                <div className="box right-box">
                                    <h2>50+ TENANT BAZZAR</h2>
                                    <p>Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run 2023 mulai dari F&B hingga fashion</p>
                                </div>
                            </div>
                            <div className="col-xl-12 flex-1">
                                <div className="box right-box img-box">
                                    <div className="info-img-wrapper"><img src={imgBox} alt="img-info" /></div>
                                    <div className="flex-1">
                                        <h2>SPECIAL PERFORMANCE</h2>
                                        <p>Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DirectBtn text="DAFTAR SEKARANG" url="https://event.detik.com/" customStyle={{ marginTop: "50px" }} />
            </div>
        </ContentLayout>
    )
}

export default EventInfo