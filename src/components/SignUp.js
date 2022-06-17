import React from "react"

function SignUp() {
    return (
        <div>
            <h1>Create your new account here!</h1>
            <form>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <input type="submit" value="Create Account" />
            </form>
        </div>
    );
}

export default SignUp