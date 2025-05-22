// import React from 'react'

import PasswordInput from "../components/password_input"
import UsernameInput from "../components/username_input"

function login() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>
        <UsernameInput/>
        <PasswordInput/>
        <button className="btn btn-neutral mt-4">Login</button>
    </fieldset>
  )
}

export default login
