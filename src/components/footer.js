import React from 'react';


export default function Footer() {
    
    return (

        <footer>
                <ul className='legals'>
                    <li>&copy; 2023 Airbnb, Inc.</li>
                    <li><a href='/'>Privacy</a></li>
                    <li><a href='/'>Terms</a></li>
                    <li><a href='/'>Sitemap</a></li>
            </ul>
            
            <ul className='accessibility'>
                <li><a href="/" className='language'><i className='material-icons'>language</i>English</a></li>
                <li><a href="/" className="currency">Support & resources<i className='material-icons'>expand_less</i></a></li>
                    
            </ul>

    
        </footer>
    )
}