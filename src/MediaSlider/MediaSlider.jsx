import Slider from "/src/Slider/Slider.jsx"

import style from "./MediaSlider.module.css"

export default function MediaSlider(props) {
    return (
        <div className={style.mediaSlider}>
            <h1 className={style.title}>{props.title}</h1>
            <Slider data={props.data} />
        </div>
    )
}