import ContactForm from "../Elements/ContactForm";
export default function Contact() {
  return (
    <div className="lg:py-20 py-10 w-full">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center">
          <h6 className="text-base font-semibold mb-4">Contact us</h6>
          <h2 className="md:text-4xl text-3xl font-semibold tracking-tight md:mb-6 mb-4">
            Get in touch
          </h2>
          <p className="text-xl text-gray-500 leading-8 mb-12">
            We&lsquo;d love to hear from you. Please fill out this form.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
