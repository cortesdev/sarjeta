
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

export const Form = ({ title, content }) => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    // const iconSend = <LoaderIcon />

    const [email, setEmail] = useState("");
    const [state, setState] = useState("idle");
    const [errorMsg, setErrorMsg] = useState(null);

    const subscribe = async (e) => {
        e.preventDefault();
        setState("Loading");

        try {
            const response = await axios.post("/api/subscribe", { email });
            console.log(response);
            if (response.status === 201) {
                setState("Success");
                setEmail("");
            } else {
                setErrorMsg(
                    "There was an error subscribing to the newsletter. Please try again."
                );
                setState("Error");
            }
        } catch (error) {
            console.log(error);
            setErrorMsg(
                "Please type a valid email."
            );
            setState("Error");
        }
    };


    const sendEmail = (e) => {
        e.preventDefault();

        setIsSending(true);



        emailjs
            .sendForm(
                'service_ey8th9k',
                'template_b423s9h',
                form.current, '__ImQ6iEygEgdElci'
            )
            .then((result) => {
                console.log(result.text);
                resetForm();
            })
            .catch((error) => {
                console.log(error.text);
            })
            .finally(() => {
                setIsSending(false);
            });
    };


    const resetForm = () => {
        form.current.reset();
    };


    return (
        <div id="subscribe" className="md:flex items-center justify-center h-full  min-w-full justify-around" >
            {!title ? "" : <div className='flex items-center relative flex-col' >
                {/* <img src="/parallax/maloca.svg" className="mx-auto" alt="maloca brand home" width={400} height={450} /> */}

                <h2 className="z-[1] text-center text-7xl my-10 text-center mx-auto  mb-10 font-bold line-h-[20px]">
                    {title}
                </h2>

                <p className='text-3xl  md:max-w-[500px] text-center'>
                    {content}
                </p>
            </div>}

            <form
                ref={form}
                onSubmit={sendEmail && subscribe}
                className='shadow-md rounded px-8 pt-6 pb-8 md:w-full p-6 text-3xl ]'
            >
                <label className="block text-white my-6 text-lg font-bold mb-5 komica" >
                    Name
                </label>

                <input
                    className='text-white text-lg p-2 w-full bg-[#ff5369] border border-[#ff5379]'
                    name="from_name"
                    type="text"
                />

                <label className="block text-white my-6 text-lg font-bold mb-5 komica" >
                    Email
                </label>

                <input
                    className='text-white p-2 w-full text-lg bg-[#ff5369] border border-[#ff5379]'
                    name="reply_to"
                    type="email"
                />

                <label className="block text-white my-6 text-lg font-bold mb-5 komica">
                    Message
                </label>

                <textarea
                    name="message"
                    className='p-2 w-full text-lg text-white bg-[#ff5369] border border-[#ff5379]'
                />

                <input
                    className="cursor-pointer shadow text-lg text-white appearance-none mb-0 w-full border-[#00000020] bg-[#00000020] rounded w-full pt-1 pb-3 px-3  my-6 leading-tight focus:outline-none focus:shadow-outline komica"
                    value={isSending ? `Sending . . . ` : 'Send'}
                    type="submit"
                />

                {state === "Error" && <div className="error-state">{errorMsg}</div>}
                {state === "Success" && (
                    <div className="text-center md:text-right py-3 opacity-[.50]">Awesome, thanks for subscribing!</div>
                )}
            </form>
        </div>
    );
};