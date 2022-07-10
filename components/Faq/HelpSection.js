import Link from "next/link";
import Button from "../../components/Button/index"

export default function Example() {
    return (
        <div className="bg-gray-50 mt-16">
            <div className="max-w-7xl mx-auto py-12 md:py-14 lg:py-24 px-4">
                <h6 className="sm:text-base text-sm font-semibold mb-3">FAQs</h6>
                <div className="flex justify-between md:flex-row flex-col md:mb-12 mb-8">
                    <h2 className="xl:text-5xl md:text-4xl text-3xl md:mb-0 mb-4 font-semibold tracking-tight text-gray-900">
                        How can we help you?
                    </h2>
                    <p className="lg:text-xl text-base text-gray-500 mb-0">Have questions? We’re here to help.</p>
                </div>
                <div className="mt-8 flex md:flex-row flex-col-reverse">
                    <Link href="/"><a className="md:w-auto w-full inline-block bg-white md:mr-3 md:mt-0 mt-4 items-center justify-center px-5 py-3 border border-slate-300 text-gray-700 text-base font-medium rounded-lg">
                        Chat to sales
                    </a></Link>
                    <Button />
                </div>
            </div>
        </div>
    )
}
