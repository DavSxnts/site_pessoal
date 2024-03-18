import { CopyButton } from '@/components/commons/CopyButton';
import Head from 'next/head';

const Contatos = () => {
return (
<>

<Head>
    <title>Contatos | Davi</title>
</Head>

<div className='mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32'>
    <h1 className='text-5xl md:text-7x1 font-bold text-center'>Contatos</h1>
    <ul className='table mx-auto space-y-6 md:space-y-8'>
        <li className='md:text-xl'>
            <span className='font-bold'>E-mail</span>
            <div className='flex gap-1 md:gap-3 items-center'>
                <a className='text-sm md:text-lg text-slate-300 underline truncate' href="mailto:davisilveira2708@gmail.com">davisilveira2708@gmail.com</a>
                <CopyButton textToCopy='davisilveira2708@gmail.com'/>
            </div>
        </li>
        <li className='md:text-xl'>
            <span className='font-bold'>LinkedIn</span>
            <div className='flex gap-1 md:gap-3 items-center'>
                <a className='text-sm md:text-lg text-slate-300 underline truncate' href="https://www.linkedin.com/in/davissilveira/">https://www.linkedin.com/in/davissilveira/</a>
            </div>
        </li>
        <li className='md:text-xl'>
            <span className='font-bold'>GitHub</span>
            <div className='flex gap-1 md:gap-3 items-center'>
                <a className='text-sm md:text-lg text-slate-300 underline truncate' href="https://github.com/DavSxnts">https://github.com/DavSxnts</a>
            </div>
        </li>
    </ul>
</div>


</>
)
}
export default Contatos;