import React from 'react'
import { withNavbar } from '../components/hoc/withNavbar'

const HomeScreen = () => {
	return (
		<div>
			<p>Home Screen</p>
		</div>
	)
}

export default withNavbar(HomeScreen)