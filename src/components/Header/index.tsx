import Logo from "../../../public/images/logo.svg"
import { SignInButton } from "../SignInButton"
import styles from "./styles.module.scss"

export function Header () {
    return(
        <header className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src={Logo} alt="ig.news" />
                <nav>
                    <a className={styles.active} href="#"> Home </a>
                    <a href="#"> Posts </a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}