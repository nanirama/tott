import ImgLoader from "../Image";
import Author1 from "../../assets/images/Avatar.png";
import Author2 from "../../assets/images/author2.png";
import Author3 from "../../assets/images/author3.png";
import Author4 from "../../assets/images/author4.png";

export default function Team2({ ourTeam }) {
  const { title, sub_title, team_member } = ourTeam;
  return (
    <div className="lg:py-20 py-10 w-full  border-b border-slate-200">
      <div className="max-w-4xl mx-auto flex flex-col px-4 text-center mb-14">
        <h6 className="text-base text-gray-600 font-semibold mb-4">
          We&lsquo;re hiring!
        </h6>
        <h2 className="md:text-4xl text-3xl font-semibold tracking-tight md:mb-6 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-500 leading-8">{sub_title}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-y-14 gap-y-5 gap-x-5">
          {team_member?.map((member, index) => (
            <div className="w-full flex flex-col items-center" key={index}>
              <div className="w-20">
                <ImgLoader
                  src={member?.profile_image?.data?.attributes?.url}
                  width={80}
                  height={80}
                  alt={member?.profile_image?.data?.attributes?.alternativeText}
                />
              </div>
              <h5 className="text-lg font-medium mt-2">{member?.name}</h5>
              <p className="text-base">{member?.post}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
