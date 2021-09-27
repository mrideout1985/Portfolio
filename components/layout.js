import React from 'react'
import Nav from './nav'
import styles from "./layout.module.scss"
import Footer from './footer'

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<main className={styles.module}>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
