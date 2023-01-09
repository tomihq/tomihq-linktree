import Image from "next/image";
import { get } from '@vercel/edge-config';
import physicData from '../data.json';

export const dynamic = 'force-dynamic', runtime = 'edge';

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

interface Data {
    name: string;
    avatar: string;
    links: Link[],
    socials: Social[]
}

interface Link {
    href: string;
    title: string;
    image?:string;
}

interface Social {
    href: string;
    title: string;
    image?:string;
}

const Twitter = () =>{
    return(
        <a aria-label="Twitter link" href="https://twitter.com/ttomihq" target="_blank" rel="noopener noreferrer"><svg width="30" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-3xl cursor-pointer hover:scale-125 transition-all"><g clipPath="url(#a)"><path d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z" fill="currentColor"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v19.636H0z"></path></clipPath></defs></svg></a>
    )
}

const GitHub = () =>{
    return(
        <a aria-label="GitHub link" href="https://github.com/tomihq" target="_blank" rel="noopener noreferrer"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  className="text-3xl cursor-pointer hover:scale-125 transition-all"><g clipPath="url(#clip0_9914_10)"><path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_9914_10"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></a>
    )
}
export default async function HomePage() {
    let data:Data | undefined = await get('linktree'); 
    if(!data) data = physicData;
    return (
        <div className="flex flex-col items-center justify-center mx-auto w-full mt-16 px-8 max-w-2xl">
            <Image
                className="rounded-full"
                alt={data.name}
                src={data.avatar}
                width={96}
                height={96}
                priority={true}
            />
            <h1 className="font-bold mt-4 mb-8 text-xl text-gray-900 ">{data.name}</h1>
            {
                data.links.map((link:Link) =>{
                    return <LinkCard key={link.href} {...link}/>
                })
            }
            <section className="flex ">
                <ul className="flex flex-row gap-4 items-center mt-8 text-gray-700">
                {
                    data.socials.map((link:Social)=>{
                        if(link.href.includes('github')){
                            return <GitHub key={link.href} />
                        }
                        if(link.href.includes('twitter')){
                            return <Twitter  key={link.href} />
                        }
                    })
                }
                </ul>
            </section>
        </div>
    )
  }

