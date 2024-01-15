import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to get goggle'
};

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <App />
)
