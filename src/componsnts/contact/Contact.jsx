import React, { useState } from 'react'

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({ ...prev, [name]: value }));
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch(
                "https://3-d-portfolio-backend-blue.vercel.app/api/auth/mail/send-mail",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formdata.name,
                        email: formdata.email,
                        message: formdata.message,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Mail failed");
            }
            setFormdata({ name: "", email: "", message: "" });

        } catch (error) {
            console.error(error);

            showAlert({
                show: true,
                text: "Message can't be sent!",
                type: "danger",
            });

            setTimeout(() => {
                hideAlert();
            }, 3000);

        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='relative flex items-center c-space section-spacing' id='contact'>
            <div className='flex flex-col items-center justify-center max-w-lg p-5 mx-auto border border-white/10 rounded-xl bg-primary'>
                <div className='flex flex-col items-start w-full gap-5 mb-10'>
                    <h2 className='text-heading'> Let's Talk </h2>
                    <p className='font-normal text-neutral-400'> Whether you're looking to bild a new website, improve your existing platform, or bring a unique project to life, I'm here to help </p>
                </div>

                <form className='w-full' onSubmit={handlesubmit}>
                    <div className='mb-5'>
                        <lable htmlFor="name" className="feild-lable"> Full Name </lable>

                        <input id='name' name='name' value={formdata.name} type='text'
                            onChange={handlechange}
                            className='field-input field-input-focus'
                            placeholder='Enter your name ....' autoComplete='name'
                            required />
                    </div>

                    <div className='mb-5'>
                        <lable htmlFor="email" className="feild-lable"> Email </lable>

                        <input id='email' name='email'
                            value={formdata.email}
                            onChange={handlechange} type='email'
                            className='field-input field-input-focus'
                            placeholder='Enter your email ....' autoComplete='email'
                            required />
                    </div>

                    <div className='mb-5'>
                        <lable htmlFor="message" className="feild-lable"> Message </lable>

                        <textarea rows={4} id='message'
                            value={formdata.message}
                            onChange={handlechange} name='message' type='text'
                            className='field-input resize-none field-input-focus'
                            placeholder='Share your thoughts....' autoComplete='name'
                            required />
                    </div>

                    <button className='w-full px1 py-3 text-lg text-center rounded-ms cursor-pointer bg-radial from-lavender to-royal hover-animation'> Send </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
