import style from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.logoContainer} >
                    <div className={style.container}>
                        <a className={style.logo} href="#">ЦИФРА</a>
                        <p className={style.tagline}>Научно-творческая <br />лаборатория кафедры СО</p>
                    </div>
                    <a href='#' className={style.psuti_logo}>
                        <img className={style.psuti_logoImg} src="/src/assets/img/logo.png" alt="" />
                    </a>
                </div>
                <div className={style.line}></div>
                <div  className={style.infoContainer}>
                    <div>
                        <p className={style.info}>+7 (846) 339-11-77</p>
                        <p className={style.info}>Московское шоссе, 77, Самара</p>
                    </div>
                    <div className={style.linkContainer} >
                        <a className={style.link} href="#">
                            <img src="/src/assets/img/telegram.png" alt="telegram" />
                        </a>
                        <a className={style.link}  href="#">
                            <img src="/src/assets/img/web.png" alt="web" />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}