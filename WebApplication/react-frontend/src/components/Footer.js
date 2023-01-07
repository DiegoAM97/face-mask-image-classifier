import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className=' bg-footer flex flex-col items-end p-10 text-gray-700 text-[0.7rem] font-serif font-semibold'>
            <div>© Rights reserved {year}</div>
            <div>Powered by React</div>
        </div>
    )
}

export default Footer