import Link from "next/link"

interface INavbarItemProps{
    title: string,
    route: string
}

export default function Navbaritems({title, route}: INavbarItemProps) {
    return <Link href={`/${route}`}><div className="text-white-500 font-bold hover:text-blue-400 hover:underline-offset-1">{title}</div></Link>
}