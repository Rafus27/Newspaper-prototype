import { useState } from "react";

import style from "./InfoSlider.module.css"

function Slider(props) {

    const [slide, setSlide] = useState(0)
    let shift = { transform: `translateX(${slide * 340}px)` }

    const set = (direction) => {
        if (direction === "next") {
            setSlide(slide - 1)

        } else {
            setSlide(slide + 1)

        }
    }



    let slidesOnScreen = 4

    if (window.matchMedia("(max-width: 860px)").matches) {
        slidesOnScreen = 2
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
        slidesOnScreen = 3
    }

    function nextSlide() {
        if (slide >= (-(props.data).length + slidesOnScreen)) { set("next") }
    }

    function prevSlide() {
        if (slide < 0) { set("prev"); }
    }

    let mouseShift = 0

    function getMouseShift(event) {
        if (event.touches[0]) {
            mouseShift = event.touches[0].clientX
        } else {
            mouseShift = event.clientX
        }
        return mouseShift
    }


    function startTouch(event) {
        document.addEventListener("touchstart", getMouseShift)
        document.addEventListener("touchmove", getMouseShift)
        document.addEventListener("touchend", getMouseShift)


        function mouseMove() {
            shift = { transform: `translateX(${slide * 340 + event.clientY}px)` }
        }
        if (event.touches[0]) {
            mouseShift = event.touches[0].clientX
            setTimeout(() => {
                if (event.touches[0].clientX < mouseShift) {
                    prevSlide()
                } else if (event.touches[0].clientX > mouseShift) {
                    nextSlide()
                } else {
                    setSlide(slide)

                }
            }, 100)


        } else {
            mouseShift = event.clientX
        }

    }

    function stopTouchMouse(event) {
        if (event.clientX > mouseShift) {
            prevSlide()
        } else if (event.clientX < mouseShift) {
            nextSlide()
        } else {
            setSlide(slide)
        }
    }

    function stopTouch(event) {
        console.log(event);
        if (event.touches[0].clientX > mouseShift) {
            prevSlide()
        } else if (event.touches[0].clientX < mouseShift) {
            nextSlide()
        } else {
            setSlide(slide)
        }
    }

    function click(event) {
        //event.preventDefault()
    }

    return (
        <section className={style.slider}>
            <button className={style.btn} onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <div className={style.sliderWindow}>
                <div style={shift} className={style.wrapper}>
                    {(props.data).map((slide, index) =>
                        <a className={style.slide} href={slide.link} key={index} draggable={false} onMouseDown={startTouch} onTouchStart={startTouch} onClick={click}>
                            <div className={style.slideContainer}>
                                <p className={style.slideDate}>{slide.date}</p>
                                <h1 className={style.slideTitle}>{slide.title}</h1>
                                <p className={style.slideSubtitle}>{slide.subtitle}</p>
                                <div className={style.slideImgContainer}>
                                    <img className={style.slideImg} src={slide.img} alt="" draggable={false} />
                                </div>
                            </div>
                        </a>
                    )}
                </div>
            </div>

            <button className={style.btn} onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        </section>
    )
}

export default function InfoSlider(props) {
    return (
        <div className={style.infoSlider}>
            <h1 className={style.headTitle}>Последние новости</h1>
            <Slider data={props.dataFirst} />
            <div className={style.separator}></div>
            <Slider data={props.dataSecond} />
        </div>
    )
}