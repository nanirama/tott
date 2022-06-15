import Image from 'next/image'
import ReactMarkdown from "react-markdown"
import moment from 'moment';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link';
import ImgLoader from '../Image';
import Share from './Share';
import RecentPosts from './RecentPosts';

import DefaultImg from "../../assets/images/default-img.png"


export default function Index({ data }) {
    const {
        title,
        slug,
        description,
        short_description,
        contributors,
        feature_image,
        categories,
        users_permissions_user,
        publishedAt,
        tags,
        reading_time } = data
    const postImage = feature_image && feature_image.data && feature_image.data.attributes ? feature_image.data.attributes.url : DefaultImg
    const firstCat = categories && categories.data && categories.data[0]
    const AuthorImage = users_permissions_user.data.attributes.image && users_permissions_user.data.attributes.image.data && users_permissions_user.data.attributes.image.data.attributes ? users_permissions_user.data.attributes.image.data.attributes.url : DefaultImg
    console.log('blog Content', tags)
    const stwitterHandle = "_MsLinda";
    const stitle = `Read ${title} `;
    const surl = "/";
    const MarkdownComponents2 = {
        h2: heading => {
            const { node } = heading
            if (node.children[0].type === "text") {
                return (
                    <li className="text-base font-medium text-gray-500 mb-2"><AnchorLink href={`#${node.children[0].value.replace(" ", "_").toLowerCase()}`}>{node.children[0].value}</AnchorLink></li>
                )
            }
        },
        p: paragraph => {
            return null
        },
        h1: paragraph => {
            return null
        },
        h3: paragraph => {
            return null
        },
        h4: paragraph => {
            return null
        },
        h5: paragraph => {
            return null
        },
        h6: paragraph => {
            return null
        }
    }
    const MarkdownComponents = {
        h2: heading => {
            const { node } = heading
            console.log('node data', node.children[0])
            if (node.children[0].type === "text") {
                return (
                    <h2 id={`${node.children[0].value.replace(" ", "_").toLowerCase()}`}>{node.children[0].value}</h2>
                )
            }
        },
        p: paragraph => {
            const { node } = paragraph
            if (node.children[0].tagName === "img") {
                const image = node.children[0]
                const metastring = image.properties.alt
                const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
                const metaWidth = metastring.match(/{([^}]+)x/)
                const metaHeight = metastring.match(/x([^}]+)}/)
                const width = metaWidth ? metaWidth[1] : "768"
                const height = metaHeight ? metaHeight[1] : "432"

                console.log('caption caption', image.properties)

                return (
                    <div className="postImgWrapper">
                        <ImgLoader
                            src={image.properties.src}
                            alt={alt}
                            width={width}
                            height={height}
                        />
                        {alt ? <p className="small" aria-label={alt}>{alt}</p> : null}
                    </div>
                )
            }
            return <p>{paragraph.children}</p>


        },
    }
    return (
        <div className="md:mt-16 md:mb-20 mb-12 mt-0 mb-5">
            <div className="top_content mb-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex md:flex-row flex-col-reverse items-center">
                        <div className="w-full md:w-5/12 px-4">
                            <div className="bg-gray-200 rounded-2xl p-1 w-auto inline-block inline-flex gap-1 mb-4">
                                {firstCat && firstCat.attributes && (
                                    <a href='#' className='bg-white text-gray-700 font-semibold rounded-2xl text-xs py-1 px-2 inline-block'>{firstCat.attributes.name}</a>
                                )}
                                <a href="#" className="text-gray-700 text-xs font-medium py-1 px-2 inline-block">{moment.duration(reading_time).asMinutes()} min read</a>
                            </div>
                            <h1 className="text-5xl text-gray-900 font-semibold mb-6">{title}</h1>
                            <p className="text-xl text-gray-400">{short_description}</p>
                        </div>
                        <div className="w-full md:w-7/12 px-4">
                            <div className="w-full">
                            <ImgLoader
                                src={postImage}
                                width={950} height={726}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="max-w-6xl mx-auto">
                    <div className="flex md:flex-row flex-col-reverse gap-8 relative">
                        <div className="md:w-4/12 px-4">
                            <div className="blog-sidebar w-full sticky top-0">
                                <hr className="mb-8" />
                                <h6 className="mb-3">Table of contents</h6>

                                <ul>
                                    <ReactMarkdown components={MarkdownComponents2}>{description}</ReactMarkdown>
                                </ul>
                                {contributors && contributors.length > 0 && (
                                    <>
                                        <hr className="my-4" />
                                        <h6 className="mb-5">Contributors</h6>
                                        {contributors.map((item, index) => {
                                            const { name, title, image } = item
                                            console.log('c item', image.data[0].attributes.url)
                                            return (
                                                <div className="flex flex-row items-center gap-3 mb-6" key={index}>
                                                    <ImgLoader
                                                         src={image.data[0].attributes.url} width={48} height={48}
                                                    />
                                                    <h6 className="flex flex-col text-gray-900">{name}
                                                        <span className="font-normal">{title}</span>
                                                    </h6>
                                                </div>
                                            )
                                        })}
                                    </>
                                )}

                                <hr className="my-8" />
                                <h6 className="mb-5">Try out Tott free for 14 days:</h6>
                                <a href="#" className="w-full text-center hover:bg-zinc-500 bg-zinc-600 rounded-lg shadow border hover:border-zinc-500 border-zinc-600 py-3 px-5 text-white inline-block">Sign up now</a>
                                <hr className="my-8" />
                                <Share
                                    socialConfig={{
                                        twitter: stwitterHandle,
                                        config: {
                                            url: surl,
                                            title: stitle,
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <div className="blog_content w-full md:w-8/12 px-4">
                            <ReactMarkdown components={MarkdownComponents}>{description}</ReactMarkdown>
                            <div className='flex gap-2'>
                                {tags && tags.data && tags.data.map((tag, index) => {
                                    return (
                                        <div key={index} className="bg-slate-100 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium rounded-2xl text-sm py-1 px-2 inline-block">{tag.attributes.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
            {/* <RecentPosts /> */}
            {/* <RecentPosts />
            <StartUpBlk /> */}

            <div className="bg-gray-50 lg:py-10 mt-20">
               <div className="max-w-3xl mx-auto justify-center items-center text-center px-4">
                  <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 md:tracking-tight mb-5">Sign up for our newsletter</h2>
                  <p className="md:text-xl text-lg font-normal text-gray-500 md:mb-10 mb-8">Be the first to know about releases and industry news and insights.</p>
                  <div className="flex md:flex-row flex-col items-stretch max-w-md mx-auto">
                     <div className="flex flex-col mb-2 w-full">
                        <input className="bg-white rounded-lg text-base leading-none text-gray-500 dark:text-white p-4 md:w-11/12 w-full border border-gray-300 focus:outline-none focus:border-gray-500 shadow mr-4 mb-2 h-12" type="email" placeholder="Enter your email" />
                        <p className="text-sm text-gray-500 text-left md:mb-0 mb-2">We care about your data in our <a href="#" className="underline">privacy policy</a>.</p>
                     </div>
                     <button className="md:w-32 w-full hover:bg-zinc-500 bg-zinc-600 rounded-lg text-base font-medium leading-none text-white p-4 shadow h-12">subscribe</button>
                  </div>
               </div>
            </div>
         </div>
        </div>
    )
}