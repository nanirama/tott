import moment from "moment";
import Link from "next/link";
import ImgLoader from "../Image";
import DefaultImg from "../../assets/images/default-img.png";

export default function BlogFirstItem({ data }) {
  const {
    title,
    slug,
    short_description,
    feature_image,
    categories,
    users_permissions_user,
    publishedAt,
    reading_time,
  } = data.attributes;
  const postImage =
    feature_image && feature_image?.data && feature_image?.data?.attributes
      ? feature_image?.data?.attributes?.url
      : DefaultImg;
  const firstCat = categories && categories.data && categories.data[0];
  const AuthorImage =
    users_permissions_user?.data?.attributes?.image &&
    users_permissions_user?.data?.attributes?.image?.data &&
    users_permissions_user?.data?.attributes?.image?.data?.attributes
      ? users_permissions_user?.data?.attributes?.image?.data?.attributes?.url
      : DefaultImg;
  return (
    <div className="lg:flex gap-8 mb-10 md:px-4">
      <div className="lg:w-2/3 w-full lg:mb-0 mb-4">
        <Link href={`/blog/${slug}`}>
          <a>
            <ImgLoader src={postImage} alt={title} width={640} height={360} />
          </a>
        </Link>
      </div>
      <div className="lg:w-1/3 w-full">
        <div className="bg-gray-200 rounded-2xl p-1 w-auto inline-block inline-flex gap-1 mb-4">
          {firstCat && firstCat.attributes && (
            <a
              href="#"
              className="bg-white text-gray-700 font-semibold rounded-2xl text-xs py-1 px-2 inline-block"
            >
              {firstCat.attributes.name}
            </a>
          )}
          <span
            href="#"
            className="text-gray-700 text-xs font-medium py-1 px-2 inline-block"
          >
            {moment.duration(reading_time).asMinutes()} min read
          </span>
        </div>
        <h2 className="md:text-3xl text-2xl font-semibold mb-4">
          <Link href={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        </h2>
        <p className="text-base font-normal text-gray-500 mb-5">
          {short_description}
        </p>
        {users_permissions_user && users_permissions_user.data && (
          <div className="flex gap-3">
            <ImgLoader
              src={AuthorImage}
              alt={users_permissions_user.data.attributes.username}
              width={40}
              height={40}
            />
            <p className="text-sm font-semibold text-gray-700">
              {users_permissions_user.data.attributes.username}
              <br />
              <span className="font-normal text-gray-500">
                {moment(publishedAt).format("DD MMM YYYY")}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
