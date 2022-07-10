import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../../lib/api";
import ImgLoader from "../Image";

const Logo = () => {
  const LOGO_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/company-logo?populate=*`;
  const { data, error } = useSWR(LOGO_ENDPOINT, fetcher);
  if (error) <p>Loading failed...</p>;
  if (!data) <p>Loading ...</p>;
  const logoImg =
    data &&
    data.data &&
    data.data.attributes &&
    data.data.attributes.logo &&
    data.data.attributes.logo.data &&
    data.data.attributes.logo.data.attributes &&
    data.data.attributes.logo.data.attributes.url
      ? data.data.attributes.logo.data.attributes.url
      : "";
  if (logoImg) {
    return (
      <Link href="/">
        <a>
          {" "}
          <ImgLoader src={logoImg} width={178} height={50} />
        </a>
      </Link>
    );
  } else {
    return "";
  }
};

export default Logo;
