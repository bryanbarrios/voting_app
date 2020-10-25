import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRoute = ({
	isAuthenticated,
	restricted,
	component: Component,
	...rest
}) => {
	return (
		<Route
			{...rest}
			component = { props => (
				isAuthenticated && restricted
				? <Redirect to="/elections" />
				: <Component { ...props } />
			)}
		/>
	)
}

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	restricted: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired
};
