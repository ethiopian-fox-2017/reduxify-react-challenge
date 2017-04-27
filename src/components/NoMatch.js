import React from 'react'

const NoMatch = ({ location }) => {
  return (
  <div>
    <h1>Status 404</h1>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)
}

export default NoMatch;
