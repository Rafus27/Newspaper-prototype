import style from './Headings.module.css'

function Title() {
    return (
        <div className={style.title}>
            <h1 className={style.titleText}>Только интересные темы и горячие новости ПГУТИ!</h1>
            <p className={style.titleSubtitle}>Официальная страница студенческой газеты <br /> Медиацентра Поволжского государственного <br /> университета телекоммуникаций и информатики</p>
            <img src="src/assets/img/funny-people.jpg" alt="peoples" className={style.titleImg} />
        </div>
    )
}

function Rubric(props) {
    return (
        <a href={props.link} className={style.rubric}>
            <div className={style.rubricContainer}>
                <h2 className={style.rubricTitle}>{props.title}</h2>
                <div className={style.rubricLine}></div>
                <p className={style.rubricSubtitle}>{props.subtitle}</p>
                <img src={props.img} alt={props.title} className={style.rubricImg} />
            </div>
        </a>
    )
}

export default function Headings() {
    return (
        <div className={style.headings}>
            <Title />
            <div className={style.headingsRubricContainer}>
                <div className={style.rubricGrid}>
                    <Rubric link="#" title="Мнение" subtitle="Интересно жить и строить карьеру в сфере связи, и не только!" img="src/assets/img/work-people.jpg" />
                    <Rubric link="#" title="Видеограф" subtitle="Интересно жить и строить карьеру в сфере связи, и не только!" img="src/assets/img/people-hand.jpg" />
                </div>
                <div className={style.rubricGrid} style={{marginBottom: "100px", marginLeft: "30px"}}>
                    <Rubric link="#" title="Репортажи" subtitle="Интересно жить и строить карьеру в сфере связи, и не только!" img="src/assets/img/library.jpg" />
                    <Rubric link="#" title="Статьи" subtitle="Интересно жить и строить карьеру в сфере связи, и не только!" img="src/assets/img/open-book.jpg" />
                </div>
            </div>
        </div>
    )
}