import React from 'react'
import Link from 'next/link'
import styles from "./nav.module.scss"
import { useRouter } from "next/router";


const Nav = () => {

	const router = useRouter();

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<Link href="/">
						<a href="">MR</a>
					</Link>
				</div>
				<div className={styles.links}>
					<Link href="/"  ><a className={[
						[styles["default"]],
						[router.pathname === "/" ? styles["active"] : ""],
					].join(" ")}>Home</a></Link>
					<Link href="/projects" ><a className={[
						[styles["default"]],
						[router.pathname === "/projects" ? styles["active"] : ""],
					].join(" ")}>Projects</a></Link>
				</div>
			</nav>
		</header>
	)
}

export default Nav
