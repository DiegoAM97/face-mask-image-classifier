import React from 'react'
import ContactSection from './ContactSection'
import phoneIcon from '../images/phone-icon.png'
import mailIcon from '../images/mail-icon.png'
import worldIcon from '../images/world-icon.png'

const Contact = () => {

    return (
        <div className='p-10 text-gray-700 text-sm font-serif font-semibold'>
            <div className='text-green-400 font-semibold text-lg pb-2'>CONTACT</div>
            <ContactSection image={phoneIcon} text='555555555' />
            <ContactSection image={mailIcon} text='fake@fake.com' />
            <ContactSection image={worldIcon} text='www.fakedomain.com' />
        </div>
    )
}

export default Contact