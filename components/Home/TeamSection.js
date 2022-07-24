import Team from "../Elements/Team";
import Button from "../../components/Button/index";
import Cta from "./Cta";

export default function TeamBlock({ data }) {
  const { title, profiles, free_trial_banner } = data;
  return (
    <>
      <div className="lg:py-20 py-10 w-full bg-black">
        <div className="max-w-64xl mx-auto flex flex-col px-4 text-center md:mb-14 mb-8">
          {title && (
            <h2 className="md:text-4xl text-2xl font-semibold text-white md:mb-8 mb-4">
              {title}
            </h2>
          )}
          <div className="flex md:flex-row flex-col text-center justify-center w-full">
            <Button />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <Team profiles={profiles || []} />
        </div>
      </div>
      {free_trial_banner && <Cta data={free_trial_banner || {}} />}
    </>
  );
}
