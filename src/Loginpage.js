import React from 'react';
import './loginpage.css';
import {Link} from 'react-router-dom';
import { Divider } from '@material-ui/core';

function Loginpage() {
    return (
        <div className="loginpage">
            <Link to="/"><img className="loginpage__image" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt=""></img></Link>
            <div className="loginpage__form">
                <h3 className="loginpage__sigintext">Sign-In</h3>
                <div className="loginpage__emailtext">
                    <label className="loginpage__label">Email (phone for mobile accounts)</label>
                    <input className="loginpage__input" type="text"></input>
                </div>
                <button className="loginpage__button">Continue</button>
                <div id="legalTextRow" class="loginpage__textrow">
  By continuing, you agree to Amazon's <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=508088">Conditions of Use</a> and <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=468496">Privacy Notice</a>.
</div>
    <a href="javascript:void(0)"  class="loginpage__needhelp" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-expand"></i><span class="a-expander-prompt">
      Need help?
    </span></a>
            </div>
            {/* creates the divider inbetween */}
            <div className="container">
                {/* just create a div without anything in it then we use the css to create a thing border line */}
                <div className="border" />   
                    <span className="content">
                        New to Amazon?
                        </span>
                    <div className="border" />
                     </div>
                     <button className="loginpage_buttoncreate">Create your Amazon account</button>
 
        </div>
    )
}

export default Loginpage
