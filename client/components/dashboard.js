import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
        <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Dashboard
        <div><Link to="/dashboard/profile/4d25d7d4-848d-42a8-a8b9-842a53de9436"> Go to Dashboard</Link></div>
        <div><Link to="/dashboard/main"> Go to Main </Link></div>
        </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
