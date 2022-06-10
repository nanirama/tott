import Image from 'next/image'

// replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
const cloudflareImageLoader = ({ src, width, height, quality }) => {
  if (!quality) {
    quality = 75
  }
  return `http://images.trady.workers.dev/?width=${width}&height=${height}&quality=${quality}&image=http://trady.dev${src}`
}

export default function ImgLoader(props) {
  if (process.env.NODE_ENV === 'development') {
    return <Image unoptimized={true} {...props} width={props.width} height={props.height} itemProp="image" alt={props.alt ? props.alt : 'Tott'} />
  } else {
    return <Image {...props} loader={cloudflareImageLoader} width={props.width} height={props.height} itemProp="image" alt={props.alt ? props.alt : 'Tott'} />
  }
}