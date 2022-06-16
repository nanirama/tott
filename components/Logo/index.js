import Link from 'next/link'
import LogoImg from "../../assets/images/logo.png"
import ImgLoader from '../Image'


const Logo = () => {
    return (
        <Link href="/"><a> <ImgLoader src={LogoImg} width={112} height={40} /></a></Link>
    )
}

export default Logo;