import React from 'react'
import Link from "next/link"
import { Github, Linkedin, Gmail } from "../components/icons/index"
import styles from "./footer.module.scss"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.name}>
				Matthew Rideout
			</div>
			<div className={styles.contact}>

				<a href="https://github.com/mrideout1985">
					<Github size={48} />
				</a>

				<a href="https://www.linkedin.com/in/matthew-rideout-6b184a19b/">
					<Linkedin size={48} />
				</a>

				<a href="mailto:mrideout.dev@gmail.com, mrideout1985@gmail.com">
					<Gmail size={48} />
				</a>



			</div>
		</footer>
	)
}

export default Footer
