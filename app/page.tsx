import { GitHub } from "@mui/icons-material";
import Image from "next/image";
import data from '../data.json';


function LinkCard({href, title, image}: {href: string, title: string; image?:string}){
    return(
        <a 
            href={href} 
            className="flex items-center p-1 w-full rounded-md
            hover:scale-105 transition-all bg-white mb-3"
        >
            <div className="flex text-center w-full items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                    {
                        image && ( 
                            <Image
                                className="rounded-sm"
                                alt={title}
                                src={image}
                                width={40}
                                height={40}
                            />
                        )
                    }
                </div>
                <h2 className="font-semibold w-full  text-gray-700 -ml-10">{title}</h2>
            </div>
        </a>
    )
}

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto w-full mt-16 px-8 max-w-3xl">
            <Image
                className="rounded-full"
                alt={data.name}
                src={data.avatar}
                width={96}
                height={96}
            />
            <h1 className="font-bold mt-4 mb-8 text-xl ">{data.name}</h1>
            {
                data.links.map((link) =>{
                    return <LinkCard key={link.href} {...link}/>
                })
            }
            {
                data.socials.map((link)=>{
                    if(link.href.includes('github')){
                        return <GitHub/>
                    }
                })
            }
        </div>
    )
  }

