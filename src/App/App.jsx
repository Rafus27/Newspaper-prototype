import Header from "../Header/Header.jsx"
import Headings from "../Headings/Headings.jsx"

import style from './App.module.css'


export default function App() {
    return(
        <div className={style.container}>
            <Header />
            <Headings />
        </div>
    )
}