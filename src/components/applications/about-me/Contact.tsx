import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { contactVariants } from "@constants"
import isEmail from 'validator/lib/isEmail'

type ContactMessage = {
    name: string
    email: string
    message: string
}

const Contact = () => {

    const formRef = useRef<HTMLFormElement | null>(null);

    const [formData, setFormData] = useState<ContactMessage>({
        name: '',
        email: '',
        message: ''
    })

    const [submitting, setSubmitting] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setSubmitting(true)

        if (formData.name.trim() === '') {
            alert('Name is empty!')
            setSubmitting(false)
            return
        }
        if (formData.email.trim() === '') {
            alert('Email is empty!')
            setSubmitting(false)
            return
        }
        if (formData.message.trim() === '') {
            alert('Message is empty!')
            setSubmitting(false)
            return
        }
        if (!isEmail(formData.email)) {
            alert('Email is invalid!')
            setSubmitting(false)
            return
        }

        emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                from_name: formData.name,
                to_name: 'Rasesh',
                from_email: formData.email,
                to_email: 'raseshrout@gmail.com',
                message: formData.message
            },
            import.meta.env.VITE_EMAIL_API_KEY
        ).then(() => {
            alert("Thank you! I'll get back to you soon. :)")
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        },
        (error) => {
            alert('Something went wrong!');
            console.log(error)
        }).finally(() => {
            setSubmitting(false)
        })
    }

    return (
        <div className="contact">
            <motion.div className="contact-div" variants={contactVariants} >
                <p style={{font: 'Ubuntu Mono', fontSize: '2.5rem', fontWeight: 'bolder', width: '100%'}}>Contact.</p>

                <form className="contact-form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <label>
                        <span>Name:</span>
                        <input 
                            type="text" name="name" value={formData.name}
                            onChange={handleChange}
                            placeholder="What do I call you?"
                        />
                    </label>
                    <label>
                        <span>Email:</span>
                        <input 
                            type="text" name="email" value={formData.email}
                            onChange={handleChange}
                            placeholder="How do I reach you?"
                        />
                    </label>
                    <label>
                        <span>Message:</span>
                        <textarea 
                            rows={7} name="message" value={formData.message}
                            onChange={handleChange}
                            placeholder="What do you want to tell me?"
                        />
                    </label>
                    <button type="submit">
                        {submitting ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact