

export default function MailVerify() {
    return (

        <div className='md:w-96 w-full mx-auto h-full justify-center items-center text-center flex flex-col my-10 p-4'>

            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 33C5 17.536 17.536 5 33 5C48.464 5 61 17.536 61 33C61 48.464 48.464 61 33 61C17.536 61 5 48.464 5 33Z" fill="#D1FADF" />
                <path d="M33.0007 28.3335V33.0002M33.0007 37.6668H33.0123M44.6673 33.0002C44.6673 39.4435 39.444 44.6668 33.0007 44.6668C26.5573 44.6668 21.334 39.4435 21.334 33.0002C21.334 26.5568 26.5573 21.3335 33.0007 21.3335C39.444 21.3335 44.6673 26.5568 44.6673 33.0002Z" stroke="#039855" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33 56C20.2975 56 10 45.7025 10 33H0C0 51.2254 14.7746 66 33 66V56ZM56 33C56 45.7025 45.7025 56 33 56V66C51.2254 66 66 51.2254 66 33H56ZM33 10C45.7025 10 56 20.2975 56 33H66C66 14.7746 51.2254 0 33 0V10ZM33 0C14.7746 0 0 14.7746 0 33H10C10 20.2975 20.2975 10 33 10V0Z" fill="#ECFDF3" />
            </svg>
            <h2 className="font-semibold text-gray-900 md:text-3xl text-2xl my-3">Email verified</h2>
            <p className="text-gray-500 font-medium text-base mb-5">Your password has been successfully reset. Click below to log in magically.</p>
            <button type="submit" className="w-full my-4 flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Continue
            </button>
            <p className="text-gray-500 text-sm mb-5 mt-2">Didn't receive the email? <a href="#" className="text-gray-700 font-medium">Click to resend</a></p>
            <a href="#" className="flex items-center gap-2 my-2 text-gray-500 text-sm"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337Z" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
                Back to log in</a>
        </div>


    )
}