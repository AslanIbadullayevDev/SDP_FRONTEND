import '../passrecovery/ForgotPass.css';
// import axios from 'axios';

export default function ForgotPass()
{
    return (
        <div>
            <p>To reset the password, enter the email address linked to your account. You will get a password reset link.</p>
            <input type='email' />
            <button type='submit'>Send a password reset link</button>
        </div>
    );
}