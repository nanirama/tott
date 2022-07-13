import ImgLoader from "../Image";

export default function Team2({ ourTeam }) {
  return (
    <div className="lg:py-20 py-10 w-full  border-b border-slate-200">
      <div className="max-w-4xl mx-auto flex flex-col px-4 text-center mb-14">
        <h6 className="text-base text-gray-600 font-semibold mb-4">
          We&lsquo;re hiring!
        </h6>
        <h2 className="md:text-4xl text-3xl font-semibold tracking-tight md:mb-6 mb-4">
          {ourTeam?.title}
        </h2>
        <p className="text-xl text-gray-500 leading-8">{ourTeam?.sub_title}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-y-14 gap-y-5 gap-x-5">
          {ourTeam?.team_member?.map((member, index) => (
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
