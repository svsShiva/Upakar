import * as React from 'react';

import AuthNavigation from './auth-navigation'
import AppNavigation from './app-navigation'

function SwitchNavigation() {
    var isLoggedIn = true;
    return (
        <>
            {isLoggedIn ? (
                <AppNavigation />
            ) : (
                    <AuthNavigation />
                )}
        </>
    );
}

export default SwitchNavigation;