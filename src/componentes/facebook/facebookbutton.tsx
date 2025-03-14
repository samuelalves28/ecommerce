import React, { useEffect } from 'react';

declare global {
    interface Window {
        fbAsyncInit: () => void;
        FB: any;
    }
}

interface FacebookLoginResponse {
    authResponse: {
        accessToken: string;
        userID: string;
        expiresIn: number;
        signedRequest: string;
        reauthorize_required_in: number;
    };
    status: string;
}

const FacebookLogin: React.FC = () => {
    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                // appId: '956513749998252',
                appId: '1152538609324928',
                cookie: true,
                xfbml: true,
                version: 'v22.0'
            });

            window.FB.AppEvents.logPageView();
        };

        (function (d, s, id) {
            let js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s) as HTMLScriptElement; js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            if (fjs && fjs.parentNode) {
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'facebook-jssdk'));

    }, []);

    const handleLogin = () => {
        window.FB.login((response: FacebookLoginResponse) => {
            if (response.authResponse) {
                console.log('Welcome! Fetching your information.... ');
                window.FB.api('/me', { fields: 'name,email,picture' }, function (response: any) {
                    console.log("User", response);
                    console.log('Good to see you, ' + response.name + ' (' + response.email + ').');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, { scope: 'public_profile,email' });
    };

    return (
        <button onClick={handleLogin}>
            Login com Facebook
        </button>
    );
};

export default FacebookLogin;