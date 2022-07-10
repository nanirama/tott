import Link from "next/link";

export default function CheckMail() {
    return (

        <div className='sm:w-96 w-full mx-auto h-full justify-center items-center text-center flex flex-col my-10 p-4'>

            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 33C5 17.536 17.536 5 33 5C48.464 5 61 17.536 61 33C61 48.464 48.464 61 33 61C17.536 61 5 48.464 5 33Z" fill="#D9D8D8" />
                <path d="M33.0007 28.333V32.9997M33.0007 37.6663H33.0123M44.6673 32.9997C44.6673 39.443 39.444 44.6663 33.0007 44.6663C26.5573 44.6663 21.334 39.443 21.334 32.9997C21.334 26.5564 26.5573 21.333 33.0007 21.333C39.444 21.333 44.6673 26.5564 44.6673 32.9997Z" stroke="#504F4F" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33 56C20.2975 56 10 45.7025 10 33H0C0 51.2254 14.7746 66 33 66V56ZM56 33C56 45.7025 45.7025 56 33 56V66C51.2254 66 66 51.2254 66 33H56ZM33 10C45.7025 10 56 20.2975 56 33H66C66 14.7746 51.2254 0 33 0V10ZM33 0C14.7746 0 0 14.7746 0 33H10C10 20.2975 20.2975 10 33 10V0Z" fill="#F1F0F0" />
            </svg>
            <h2 className="font-semibold text-gray-900 md:text-3xl text-2xl my-3">Check your email</h2>
            <p className="text-gray-500 font-medium text-base mb-5">We sent a verification link to <br />olivia@untitledui.com</p>
            <button type="submit" className="w-auto my-4 flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Enter code manually
            </button>
            <Link href="/"><a className="flex items-center gap-2 my-2 text-gray-500 text-sm"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337Z" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
                Back to log in</a></Link>
        </div>


    )
}