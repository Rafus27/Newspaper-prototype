import Header from "/src/Header/Header.jsx"
import Headings from "/src/Headings/Headings.jsx"
import MediaSlider from "/src/MediaSlider/MediaSlider.jsx"
import InfoSlider from "/src/InfoSlider/InfoSlider.jsx"
import Columnists from "/src/Columnists/Columnists.jsx"
import Footer from "/src/Footer/Footer"

import slide0 from '/src/assets/data/slide-data-0.json'
import slide1 from '/src/assets/data/slide-data-1.json'
import slide2 from '/src/assets/data/slide-data-2.json'
import slide3 from '/src/assets/data/slide-data-3.json'

import style from './App.module.css'


export default function App() {
    return(
        <div className={style.container}>
            <Header />
            <Headings />
            <MediaSlider data={slide0} title="ПГУТИ Фильм" />
            <MediaSlider data={slide0} title="ПГУТИ Подкасты" />
            <InfoSlider dataFirst={slide1} dataSecond={slide2} />
            <Columnists data={slide3} />
            <Footer />
        </div>
    )
}