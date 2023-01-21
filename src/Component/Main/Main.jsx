import React from 'react'
import MainHeader from './MainHeader'
import MainTable from './MainTable'

export default function Main() {
  return (
    <div className="p-3 w-100" style={{ background: "#f6f6f6" }}>
        <MainHeader />
        <MainTable />
  </div>
  )
}
