import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-cafe text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Sección de enlaces */}
            <div className="flex flex-col md:flex-row gap-6 text-rosita font-semibold">
            <p>“The vulgar crowd always is taken by appearances, and the world consists chiefly of the vulgar.” </p>
            </div>

            {/* Derechos / Info */}
            <div className="text-sm text-rosita/70 mt-4 md:mt-0">
            © 2025 Josesito. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer