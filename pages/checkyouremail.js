import Layout from "../components/layout"

import CheckMail from '../components/SignUp/CheckMail';
import CheckMail2 from '../components/SignUp/CheckMail2';
import MailVerify from '../components/SignUp/MailVerified';

export default function Signup() {
  return (
    <Layout>
      <div className="lg:max-w-7xl mx-auto w-full py-16">
        <CheckMail />
        <CheckMail2 />
      </div>
    </Layout>
  )
}
