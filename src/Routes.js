import { Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Home from './routes/Home';

const InsightsRoute = ({ component: Component, rootClass, ...rest }) => {
    const root = document.getElementById('root');
    root.removeAttribute('class');
    root.classList.add(`page__${rootClass}`, 'pf-l-page__main');

    return (<Component { ...rest } />);
};

InsightsRoute.propTypes = {
    component: PropTypes.func,
    rootClass: PropTypes.string
};

export const Routes = () => {
    return (
        <Switch>
            <InsightsRoute exact path='/' component={ Home } rootClass='remediations' />

            <Redirect to='/' />
        </Switch>
    );
};
