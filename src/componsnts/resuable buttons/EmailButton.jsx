import React, { useState } from 'react'
import copyicon from '../../../public/assets/copy.svg'
import copydone from '../../../public/assets/copy-done.svg'
import { AnimatePresence, motion } from 'motion/react'

const EmailButton = () => {
    const [copy, setCopy] = useState(false)
    const email = 'prahsanth554554@gmail.com'

    const copyemail = () => {
        navigator.clipboard.writeText(email)
        setCopy(true)
        setTimeout(() => setCopy(false), 2000)
    }

    return (
        <motion.button
            className="px-1 py-3 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
            whileHover={{ y: -5 }}
            onClick={copyemail}
            whileTap={{ scale: 1.05 }} >
            <AnimatePresence mode="wait">
                {copy ? (
                    <motion.p
                        key="copied"   // ✅ unique key
                        className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                    >
                        <img src={copydone} alt="copied" className="w-5" />
                        Email Copied
                    </motion.p>
                ) : (
                    <motion.p
                        key="copy"     // ✅ different key
                        className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                    >
                        <img src={copyicon} alt="copy" className="w-5" />
                        Copy Email Address
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.button>
    )
}

export default EmailButton
