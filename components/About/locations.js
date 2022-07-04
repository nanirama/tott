export default function Locations() {
    return (
        <div className="bg-zinc-900 lg:py-20 py-8">
            <div className="max-w-7xl mx-auto flex md:flex-row flex-col px-4">
                <div className='md:w-1/3 w-full'>
                    <h6 className="text-base font-semibold mb-4 text-white">Our locations</h6>
                    <h2 className="md:text-4xl text-3xl font-semibold tracking-tight md:mb-6 mb-3 text-white">Visit our offices</h2>
                    <p className="text-xl font-normal leading-8 text-white">Find us at these locations.</p>
                </div>
                <div className='md:w-1/3 w-full'>
                    <h6 className="text-xl text-white mb-3 w-full">Melbourne</h6>
                    <p className="text-base font-light text-gray-300 mb-8 text-white w-40">100 Flinders Street Melbourne VIC 3000 AU</p>
                    <h6 className="text-xl text-white mb-3 w-full">Sydney</h6>
                    <p className="text-base font-light text-gray-300 mb-8 text-white w-40">100 George Street Sydney NSW 2000</p>
                    <h6 className="text-xl text-white mb-3w-full">Byron Bay</h6>
                    <p className="text-base font-light text-gray-300 mb-8 lg:mb-0  text-white w-40">100 Jonson Street<br /> Byron Bay NSW 2481 AU</p>
                </div>
                <div className='md:w-1/3 w-full'>
                    <h6 className="text-xl text-white mb-3 w-full">London</h6>
                    <p className="text-base font-light text-gray-300 mb-8 text-white w-40">100 Oxford Street London W1D 1LL UK</p>
                    <h6 className="text-xl text-white mb-3 w-full">San Francisco</h6>
                    <p className="text-base font-light text-gray-300 mb-8 text-white w-40">100 Market  Street San Francisco, CA 94105 USA</p>
                    <h6 className="text-xl text-white mb-3 w-full">Sweden</h6>
                    <p className="text-base font-light text-gray-300 mb-8 lg:mb-0 text-white w-40">Drottninggatan 100 111 60 Stockholm SE</p>
                </div>
            </div>
        </div>
    )
}