import { Stack } from "react-bootstrap"
import { logo } from "../../assets"
import "./Header.css"
import { useState } from "react"

const NavMenuSvg = () => (
    <svg className="" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Category" filter="url(#filter0_d_4267_689)">
            <rect x="4" y="3" width="42" height="42" rx="21" fill="white" fill-opacity="0.8" shape-rendering="crispEdges" />
            <g id="Iconly/Bold/Category">
                <g id="Category_2">
                    <path id="Vector" d="M20.5119 25.6166C22.063 25.6166 23.306 26.8718 23.306 28.4338V32.1839C23.306 33.7349 22.063 35 20.5119 35H16.7938C15.2537 35 13.9997 33.7349 13.9997 32.1839V28.4338C13.9997 26.8718 15.2537 25.6166 16.7938 25.6166H20.5119ZM33.2065 25.6166C34.7465 25.6166 36.0006 26.8718 36.0006 28.4338V32.1839C36.0006 33.7349 34.7465 35 33.2065 35H29.4883C27.9373 35 26.6942 33.7349 26.6942 32.1839V28.4338C26.6942 26.8718 27.9373 25.6166 29.4883 25.6166H33.2065ZM20.5119 12.9995C22.063 12.9995 23.306 14.2646 23.306 15.8167V19.5667C23.306 21.1288 22.063 22.3828 20.5119 22.3828H16.7938C15.2537 22.3828 13.9997 21.1288 13.9997 19.5667V15.8167C13.9997 14.2646 15.2537 12.9995 16.7938 12.9995H20.5119ZM33.2065 12.9995C34.7465 12.9995 36.0006 14.2646 36.0006 15.8167V19.5667C36.0006 21.1288 34.7465 22.3828 33.2065 22.3828H29.4883C27.9373 22.3828 26.6942 21.1288 26.6942 19.5667V15.8167C26.6942 14.2646 27.9373 12.9995 29.4883 12.9995H33.2065Z" fill="#20409A" />
                </g>
            </g>
        </g>
        <defs>
            <filter id="filter0_d_4267_689" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4267_689" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4267_689" result="shape" />
            </filter>
        </defs>
    </svg>
)

const CloseSvg = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_780_1449)">
            <rect x="4" y="3" width="42" height="42" rx="21" fill="white" fill-opacity="0.8" shape-rendering="crispEdges" />
            <path d="M33.0086 16.0066L17.0078 32.0074" stroke="#20409A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M33.0139 32.0176L16.9998 16.0001" stroke="#20409A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <filter id="filter0_d_780_1449" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_780_1449" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_780_1449" result="shape" />
            </filter>
        </defs>
    </svg>
)

const Header = ({ homeRef, eventRef, galeriRef, beritaRef }) => {
    const [isOpen, setIsOpen] = useState(false)
    const navData = [
        {
            section: homeRef,
            name: "Home",
        },
        {
            section: eventRef,
            name: "Tentang Acara",
        },
        {
            section: galeriRef,
            name: "Galeri",
        },
        {
            section: beritaRef,
            name: "Berita",
        },
    ]
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <div className="navbar">
            <div className="navbarContent desktop">
                <a href="/"><img src={logo} alt="logo" className="logo" /></a>
                <div className="navDataContainer">
                    {navData.map((data) => (
                        <a onClick={() => scrollToSection(data.section)} className="nav-item">
                            {data.name}
                        </a>
                    ))}
                    <a target="_blank" href="https://event.detik.com/" className="regisBtn">
                        Registrasi
                    </a>
                </div>
            </div>
            <div className="w-100">
                <div className="navbarContent-mobile mobile">
                    <div className="mobile-nav">
                        <a href="/"><img src={logo} alt="logo" className="logo" /></a>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? 
                            <CloseSvg />
                            :
                            <NavMenuSvg />
                            }
                        </button>
                    </div>
                    {isOpen ?
                        <div className="nav-menu-mobile w-100">
                            {navData.map((data) => (
                                <a onClick={() => {
                                    scrollToSection(data.section)
                                    setIsOpen(false)
                                }
                                } className="py-2 w-100">
                                    {data.name}
                                </a>
                            ))}
                            <a target="_blank" href="https://event.detik.com/" className="regisBtn">
                                Registrasi
                            </a>
                        </div>
                        :
                        ""}
                </div>
            </div>
        </div>
    )
}

export default Header