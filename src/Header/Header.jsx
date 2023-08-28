import style from './Header.module.css'

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <a className={style.logo} href="#">ЦИФРА</a>
                <p className={style.tagline}>Научно-творческая <br/>лаборатория кафедры СО</p>
            </div>
            <div className={style.line}></div>
        </div>
    )
}