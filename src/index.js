import React from 'react';
import ReactDom from 'react-dom';
import List from './Containers/list';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <React.Fragment>
            <div className='container-fluid'>
                <nav className='navbar sticky-top navbar-light bg-dark'>
                    <h1 className="navbar-brand text-light">moveList</h1>
                </nav>
                <List />
            </div>
        </React.Fragment>
    )
}

ReactDom.render(<App />, document.getElementById('root'));