import React from 'react'

const PageLink = ({ href, link, itemClass }) => {
    return (


        <li key={link.id}>
            <a href={href} className={itemClass}>
                {link.text}
            </a>
        </li>


    )
}

export default PageLink