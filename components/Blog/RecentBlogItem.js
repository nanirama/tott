import moment from 'moment';
import Link from 'next/link';
import ImgLoader from '../Image';

import DefaultImg from "../../assets/images/default-img.png"

export default function RecentBlogItem({ data }) {
    const { title, slug, short_description, feature_image, categories, users_permissions_user, publishedAt, reading_time } = data.attributes
    const postImage = feature_image && feature_image.data && feature_image.data.attributes ? feature_image.data.attributes.url : DefaultImg
    const firstCat = categories && categories.data && categories.data[0]
    const AuthorImage = users_permissions_user.data.attributes.image && users_permissions_user.data.attributes.image.data && users_permissions_user.data.attributes.image.data.attributes ? users_permissions_user.data.attributes.image.data.attributes.url : DefaultImg
    return (
        <div className='lg:w-1/3 w-full mb-8'>
            <ImgLoader
                src={postImage}
                alt={title}
                width={460}
                height={250}
            />
            {users_permissions_user && users_permissions_user.data && (
                <h6 className='text-sm font-semibold mt-5 mb-3'>{users_permissions_user.data.attributes.username} • {moment(publishedAt).format('DD MMM YYYY')}</h6>
            )}

            <div className='flex justify-between items-center mb-3'>
                <h3 className='text-2xl font-semibold'><Link href={`/blog/${slug}`}><a>{title}</a></Link></h3>
                <Link href={`/blog/${slug}`}><a><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg></a></Link></div>
            <p className='text-gray-500 font-normal text-base mb-5'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            <div className='flex gap-2'>
                {categories && categories.data && categories.data.map((cat, index) => (
                    <Link key={index} href={`/blog/${cat.attributes.slug}`}><a className="bg-slate-100 text-gray-700 font-medium rounded-2xl text-sm py-1 px-2 inline-block">{cat.attributes.name}</a></Link>
                ))}
            </div>
        </div>
    )
}