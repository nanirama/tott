import Team from '../Elements/Team';
import Button from "../../components/Button/index"

export default function TeamBlock() {

    return (
        <div className="lg:py-20 py-10 w-full bg-black">
            <div className="max-w-64xl mx-auto flex flex-col px-4 text-center md:mb-14 mb-8">
                <h2 className="md:text-4xl text-2xl font-semibold text-white md:mb-8 mb-4">Join all the other service companies thriving with Trady</h2>
                <div className="flex md:flex-row flex-col text-center justify-center w-full">
                    <Button />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <Team />
            </div>
        </div>
    )
}