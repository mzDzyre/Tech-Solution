import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <main>
                <h1>Contact US</h1>
                <form action="mailto:ritik.toppo2020@gmail.com" method='get' encType='text/plain'>
                    <div>
                        <label>Name</label>
                        <input type="text" required placeholder='ABC' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" required placeholder='ABC@gmail.com' />
                    </div>
                    <div className='message'>
                        <label>Message</label>
                        <textarea type="text" cols="30" rows="10" required placeholder='Tell us About Your Query!!' />
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact