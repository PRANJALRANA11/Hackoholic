import React from 'react'
import ChartsCompo from '../Components/Charts_Compo'




export default function Dashboard() {
  return (
    <div>
      <Navbar/>
      <ChartsCompo/>
    </div>
  )
}

function Navbar() {
  return (
    <>
      <nav className="sticky top-0 bg-gray-950 border-b border-slate-800 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div>
              <a href="/" className="text-2xl font-bold text-white">
                Healix
              </a>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
}
