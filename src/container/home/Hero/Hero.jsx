import { heroText } from "../../../assets";
import "./Hero.css";
import ContentLayout from "../../../layout/ContentLayout";
import { DirectBtn } from "../../../components";

const Hero = ({homeRef}) => {
    return (
        <div ref={homeRef} className="hero">
            <ContentLayout>
                <div className="heroContent">
                    <img src={heroText} alt="" className="heroText" />
                    <DirectBtn text="DAFTAR SEKARANG" url="https://event.detik.com/" customStyle={{ marginTop: "50px" }} />
                </div>
            </ContentLayout>
        </div>
    )
}

export default Hero