import { Hero, EventInfo, LogoSlide, Gallery, Berita } from '../container/home';

const Home = ({homeRef, eventRef, galeriRef, beritaRef}) => {
    return (
        <div>
            <Hero homeRef={homeRef}/>
            <EventInfo eventRef={eventRef}/>
            <LogoSlide />
            <Gallery galeriRef={galeriRef}/>
            <Berita beritaRef={beritaRef}/>
        </div>
    )
}

export default Home