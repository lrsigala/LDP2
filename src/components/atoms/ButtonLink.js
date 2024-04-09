import Link from "next/link";
const ButtonLink = ({title,href,func,type}) =>{
    return(
      <Link href={href} className={`text-black text-base hover:text-white ${type?"hover:bg-black":" hover:bg-cyan-500"} no-underline border-2 border-cyan-500 p-5 rounded-full`}>
              {title}
      </Link>
    )
  }
export default ButtonLink;