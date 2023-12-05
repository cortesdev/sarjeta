import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export const Form = ({ title, content }) => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [email, setEmail] = useState("");
    const [state, setState] = useState("idle");
    const [errorMsg, setErrorMsg] = useState(null);
    const [messageSent, setMessageSent] = useState(false);
    const { t } = useTranslation();

    const subscribe = async () => {
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
            console.error(error);
            setState("Error");
        }
    };

    const sendEmail = () => {
        setIsSending(true);

        emailjs
            .sendForm(
                'service_fqo0c11',
                'template_f7lgzoq',
                form.current,
                '__ImQ6iEygEgdElci'
            )
            .then((result) => {
                console.log(result.text);
                setMessageSent(true); // Set messageSent to true on success
                resetForm();
            })
            .catch((error) => {
                console.error(error.text);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const resetForm = () => {
        form.current.reset();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        subscribe();
        sendEmail();
    };

    return (
        <div id="subscribe" className="md:flex items-center justify-center h-full min-w-full justify-around">
            {!title ? "" : (
                <div className='flex items-center relative flex-col'>
                    <h2 className="z-[1] text-center text-7xl my-10 text-center mx-auto mb-10 font-bold line-h-[20px]">
                        {title}
                    </h2>
                    <p className='text-3xl md:max-w-[500px] text-center'>
                        {content}
                    </p>
                </div>
            )}

            <form
                ref={form}
                onSubmit={handleSubmit}
                className='shadow-md rounded px-8 pt-6 pb-8 md:w-full p-6 text-3xl'
            >
                <label className="block text-white my-6 text-lg font-bold mb-5 komica">
                    {t('form.name')}
                </label>
                <input
                    className='text-white text-lg p-2 w-full bg-[#ff5369] border border-[#ff5379]'
                    name="from_name"
                    type="text"
                    required 
                />

                <label className="block text-white my-6 text-lg font-bold mb-5 komica">
                    {t('form.mail')}
                </label>
                <input
                    className='text-white p-2 w-full text-lg bg-[#ff5369] border border-[#ff5379]'
                    name="reply_to"
                    type="email"
                    value={email}
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="block text-white my-6 text-lg font-bold mb-5 komica">
                    {t('form.message')}
                </label>
                <textarea
                    name="message"
                    className='p-2 w-full text-lg text-white bg-[#ff5369] border border-[#ff5379]'
                />

                <input
                    className="cursor-pointer shadow text-lg text-white appearance-none mb-0 w-full border-[#00000020] bg-[#00000020] rounded w-full pt-1 pb-3 px-3 my-6 leading-tight focus:outline-none focus:shadow-outline komica"
                    value={isSending ? `Sending . . . ` : 'Send'}
                    type="submit"
                />

                {messageSent && (
                    <div className="text-center md:text-right py-3 opacity-[.80]">{t('form.thanks')}</div>
                )}
            </form>
        </div>
    );
};
