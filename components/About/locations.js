export default function Locations({ officeLocations }) {
  const { title, sub_title, locations } = officeLocations;
  return (
    <div className="bg-zinc-900 lg:py-20 py-8">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col px-4">
        <div className="md:w-1/3 w-full">
          <h6 className="text-base font-semibold mb-4 text-white">
            Our locations
          </h6>
          <h2 className="md:text-4xl text-3xl font-semibold tracking-tight md:mb-6 mb-3 text-white">
            {title}
          </h2>
          <p className="text-xl font-normal leading-8 text-white">
            {sub_title}
          </p>
        </div>
        <div className="md:w-1/3 w-full">
          {locations?.slice(0, 3).map((location, index) => (
            <div key={index}>
              <h6 className="text-xl text-white mb-3">{location?.country}</h6>
              <p className="text-base font-light text-gray-300 mb-8 text-white">
                {location?.location}
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-1/3 w-full">
          {locations?.slice(3, locations.length).map((location, index) => (
            <div key={index}>
              <h6 className="text-xl text-white mb-3">{location?.country}</h6>
              <p className="text-base font-light text-gray-300 mb-8 text-white">
                {location?.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
