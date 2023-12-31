import { facebook, footerText, instagram, twitter, youtube } from "../../assets"
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <img src={footerText} alt="" />
            <div className="d-flex flex-column flex-lg-row text-center text-lg-start align-items-center justify-content-between">
                <p className="footer-text">Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh Detikhealth secara gratis untuk masyarakat Indonesia. Ajak keluarga dan kerabat anda untuk ikut keseruan Sudirman Run 2023 lalu menangkan hadiah utama serta doorprize dengan total puluhan juta rupiah</p>
                <div className="social-media-container">
                    <p>Connect With Us</p>
                    <div className="d-flex flex-row gap-2">
                        <a target="_blank" href="https://www.facebook.com/detikcom/?locale=id_ID"><img src={facebook} alt="facebook" /></a>
                        <a target="_blank" href="https://twitter.com/detikcom"><img src={twitter} alt="twitter" /></a>
                        <a target="_blank" href="https://www.instagram.com/detikcom/"><img src={instagram} alt="instagram" /></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCuMAjEaSMj7q7YLf0xW1MjQ"><img src={youtube} alt="youtube" /></a>
                    </div>
                </div>
            </div>
            <div className="line" />
            <p>Copyright @ 2023 detikcom. All right reserved</p>
        </footer>
    )
}

export default Footer