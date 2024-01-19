import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to get goggle'
};

const AnotherApp = (
    <a href="http://www.google.com" target="_blank">Visit Google</a>
)

const realReactElement = React.createElement(
    'a',
    { href: 'http://google.com', target:"_blank" },
    "Click to visit Google"
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <App />
)
