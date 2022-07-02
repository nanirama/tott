import Layout from "../components/layout"

import MailVerify from '../components/SignUp/MailVerified';

export default function Signup() {
  return (
    <Layout>
      <div className="lg:max-w-7xl mx-auto w-full py-16">
        <MailVerify />
      </div>
    </Layout>
  )
}
