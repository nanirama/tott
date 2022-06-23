import Layout from "../components/layout"

import SignUpForm from '../components/Elements/SignupForm'
import SignUpSteps from '../components/SignUp/SignupSteps';
import ChoosePassword from '../components/SignUp/ChoosePw';
import CheckMail from '../components/SignUp/CheckMail';
import CheckMail2 from '../components/SignUp/CheckMail2';
import MailVerify from '../components/SignUp/MailVerified';

export default function Signup() {
  return (
    <Layout>
      <div className="w-full flex md:flex-row flex-col lg:mt-20 mt-16">
        <div className="xl:w-1/3 md:w-1/2 w-full ">
          <SignUpSteps />
        </div>
        <div className="xl:w-2/3 md:w-1/2 w-full items-center lg:p-10 p-5 flex flex-col justify-between p-5">
          <ChoosePassword />
        </div>
      </div>
      <div className="lg:max-w-7xl mx-auto w-full py-16">
        <SignUpForm />
        <CheckMail />
        <CheckMail2 />
        <MailVerify />
      </div>
    </Layout>
  )
}
