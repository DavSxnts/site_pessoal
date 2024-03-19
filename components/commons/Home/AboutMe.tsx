import Link from "next/link"
import Image from "next/image"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    subsets: ['latin'],
    weight: "400"
})

export const AboutMe = () =>{
    return(
        <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
            <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
                <h1 className="text-3xl sm:text-7xl xl:leading-[80px]">Prazer, sou&nbsp;
                <strong className="font-bold">Davi</strong>
                </h1>
                <div className="mb-12">
                    <h2 className={`${roboto.className} mb-2`} >Sou um estudante na área de programação com foco em Python back-ending</h2>
                    <h4 className={`${roboto.className} mb-12`} >Criei essa página para meu estudo com Next-js e para a apresentação do meu portfolio</h4>
                </div>
                <Link href="/contatos" className="p-3 bg-d-blue-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse comigo!</Link>
            </div>
            <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
                <li style={{backgroundColor: '#4b8bbe', color:'#ffd43b'}} className="w-fit p-2 rounded-md">python</li>
                <li style={{backgroundColor: '#EFD81D', color:'#000000'}} className="w-fit p-2 rounded-md">javascript</li>
                <li style={{backgroundColor: '#000000', color:'#FFFFFF'}} className="w-fit p-2 rounded-md">next.js</li>
                <li style={{backgroundColor: '#EFD81D', color:'#000000'}} className="w-fit p-2 rounded-md">outro</li>

            </ul>
            <div className="relative">
                <Image 
                    src={"https://avatars.githubusercontent.com/u/81556738?v=4"} 
                    alt={"Foto de perfil"}
                    unoptimized
                    width={500}
                    height={500}
                    className="rounded-full" />
            
                <p className="p-4 w-fit text-base leading-tight bg-d-blue-500 rounded-xl absolute -bottom-[0.75rem] sm:bottom-[12px]">
                    <strong className="text-4xl">0</strong>
                    <br /> anos de experiência
                </p>
            </div>
        </main>
    )
}