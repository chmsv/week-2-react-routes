import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-2"
      >
        Dashboard
      </div>
      <div>
        <Link to="/dashboard/profile/385666b1-bff5-11e9-95ba-1bf845c18f8d">Go to Profile</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go to Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard