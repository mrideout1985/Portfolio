import React from 'react'
import Link from 'next/link'
import styles from "./nav.module.scss"

const Nav = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<Link href="/">
						<a href="">MR</a>
					</Link>
				</div>
				<div className={styles.links}>
					<Link href="/" ><a>Home</a></Link>
					<Link href="/projects"><a>Projects</a></Link>
				</div>
			</nav>
		</header>
	)
}

export default Nav
