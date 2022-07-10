import Link from 'next/link'
import ImgLoader from '../components/Image';

import Layout from "../components/layout"
import Logo from "../assets/images/logo.png"
import Testimonials from "../components/Elements/Testimonials7"
import SignupForm from '../components/Elements/SignupForm';

export default function Login() {
    return (
        <Layout>
            <div className="w-full flex md:flex-row flex-col lg:mt-16 mt-16">
                <div className="md:w-1/2 w-full bg-gray-50 p-5 relative flex justify-between items-center flex-col">
                    <div className='lg:mb-0 mb-5'> <Link href="/" ><a>
                        <ImgLoader src={Logo} width={158} height={50} alt="Logo" />
                        </a></Link>
                    </div>
                    <Testimonials />
                </div>
                <div className="md:w-1/2 w-full items-center flex md:py-28 p-5">
                    <SignupForm />
                </div>
            </div>
        </Layout>
    )
}
