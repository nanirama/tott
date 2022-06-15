import moment from 'moment';
import Link from 'next/link';
import ImgLoader from '../Image';

import DefaultImg from "../../assets/images/default-img.png"


export default function BlogItem({ data }) {
    const { title, slug, short_description, feature_image, categories, users_permissions_user, publishedAt, reading_time } = data.attributes
    const postImage = feature_image && feature_image.data && feature_image.data.attributes ? feature_image.data.attributes.url : DefaultImg
    const firstCat = categories && categories.data && categories.data[0]
    const AuthorImage = users_permissions_user.data.attributes.image && users_permissions_user.data.attributes.image.data && users_permissions_user.data.attributes.image.data.attributes ? users_permissions_user.data.attributes.image.data.attributes.url : DefaultImg
    return (
        <div className='md:w-1/2 w-full mb-10 md:px-4'>
            <ImgLoader
                src={postImage}
                alt={title}
                width={460}
                height={250}
            />
            <div className='bg-gray-200 rounded-2xl p-1 w-auto inline-block inline-flex gap-1 mb-4 mt-5'>
                {firstCat && firstCat.attributes && (
                    <a href='#' className='bg-white text-gray-700 font-semibold rounded-2xl text-xs py-1 px-2 inline-block'>{firstCat.attributes.name}</a>
                )}
                <span href='#' className='text-gray-700 text-xs font-medium py-1 px-2 inline-block'>{moment.duration(reading_time).asMinutes()} min read</span>

            </div>

            <div className='flex justify-between items-center mb-3'>

                <h3 className='text-2xl font-semibold'><Link href={`/blog/${slug}`}><a>{title}</a></Link></h3>
                <Link href={`/blog/${slug}`}><a><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoinn="round" />
                </svg></a></Link></div>
            <p className='text-base font-normal text-gray-500 mb-5'>{short_description}</p>
            {users_permissions_user && users_permissions_user.data && (
                <div className='flex gap-3'>
                    <ImgLoader src={AuthorImage} alt={users_permissions_user.data.attributes.username} width={40} height={40} />
                    <p className='text-sm font-semibold text-gray-700'>{users_permissions_user.data.attributes.username}<br />
                        <span className='font-normal text-gray-500'>{moment(publishedAt).format('DD MMM YYYY')}</span></p>
                </div>
            )}

        </div>
    )
}