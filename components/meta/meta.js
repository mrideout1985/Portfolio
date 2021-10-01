import Head from 'next/head'
import React from 'react'

const Meta = ({ title, children }) => {
	return (
		<Head>
			<title>{title} | Matt Rideout</title>
			{children}
		</Head>
	)
}

export default Meta
