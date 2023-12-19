import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {getProfileDetails, loginApi} from '../service/service';
import {Loader} from '../Common/Loader';
import ToastMsg from '../Common/ToastMsg';
import Head from 'next/head'

const Login = () => {
    const router = useRouter()
    const {page} = router.query;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const [signupbtnclicked, toggleSignUpBtn] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (signupbtnclicked === false) {
            if (!email) {
                ToastMsg("Email is Required", "error")
                return;
            }
            if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/)) {
                ToastMsg("Enter a valid email", "error")
                return;
            }
            if (!password) {
                ToastMsg("Password is Required", "error")
                return;
            }
            let data = {email: email, password: password}
            setLoader(true)
            loginApi(data).then((res) => {

                console.log("res", res.data.access)
                handleProfileDetails(res.data.access)
                localStorage.setItem("access_token", res.data.access)
                localStorage.setItem("refresh_token", res.data.refresh)


            }).catch((err) => {
                setLoader(false)
                console.log(err)
            })
        }
    }

    const handleProfileDetails = (token) => {
        getProfileDetails(token).then((res) => {
            setLoader(false)
            console.log("resprofile", res.data)
            localStorage.setItem("user_profile", JSON.stringify(res?.data))
            if (page === "upload") {
                window.location.href = "/upload";
            } else {
                window.location.href = "/";
            }

        }).catch((err) => {
            setLoader(false)
            console.log(err)
        })


    }

    return (
        <div className='flex h-[90vh] justify-center items-center'>
            <Head>
                <title>Login | FMF</title>
            </Head>
            {loader ? <Loader/> : null}
            <div className='flex-colomn w-[90%] text-center'>
                <h1 className='text-[48px] justify-center'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div
                        className='w-4/4 md:w-4/12 mx-auto flex my-3 items-center border-b-[1px] dark:placeholder:text-app-pure-white placeholder:text-app-dark-blue border-primary px-1'>
                        <input value={email} type='text'
                               className='bg-transparent w-full py-4 font-light text-lg outline-none  text-app-dark-blue dark:text-app-pure-white dark:placeholder:text-app-pure-white placeholder:text-app-dark-blue  placeholder:font-montserrat font-montserrat  '
                               onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email '/>
                    </div>
                    <div className='w-4/4  md:w-4/12 mx-auto flex my-3 items-center border-b-[1px] border-primary px-1'>
                        <input value={password} type='password'
                               className=' bg-transparent w-full py-4 font-light text-lg outline-none  placeholder:font-montserrat dark:placeholder:text-app-pure-white placeholder:text-app-dark-blue font-montserrat'
                               onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password '/>
                    </div>
                    <input
                        className='px-[50px] mr-[20px] py-[0.35rem] bg-primary/10 rounded text-primary border-primary my-4 text-md hover:bg-primary/30'
                        style={{border: "solid 0.5px", fontWeight: "400"}} type="submit" value={"Login"}/>
                    <button
                        className='px-[50px]  py-[0.35rem] bg-primary/10 text-primary rounded border-primary my-4 text-md hover:bg-primary/30'
                        style={{border: "solid 0.5px", fontWeight: "400"}} onClick={() => {
                        router.push("/register")
                        toggleSignUpBtn(true)
                    }}>Sign Up
                    </button>
                </form>

            </div>

        </div>
    )
}
export default Login
