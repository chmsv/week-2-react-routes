import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Main
      <div><Link to="/dashboard/"> Go to Root</Link></div>
      <div><Link to="/dashboard/profile/4d25d7d4-848d-42a8-a8b9-842a53de9436"> Go to Profile</Link></div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
