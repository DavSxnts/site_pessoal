import { AboutMe } from '@/components/commons/Home/AboutMe';
import { Projects } from '@/components/commons/Home/Projects';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import Head from 'next/head';

const Home = () => {
  const projects =[
    {
      slug: 'projeto 1',
      name: 'Natura',
      image:{
        url: 'www;asdfklasd.com',
        alt: "Pagina inicial de tal coisa",
      },
    },
  ]
  return (
     <>
     <Head>
      <title>Sobre mim | Davi</title>
      <meta 
        name='description'
        content='Desenvolvedor Python'
        />
     </Head>
     <div className='py-12 px-6 md:pdx-32 space-y-10 md:space-y-28'>
      <AboutMe/>
      <Projects projects={projects}/>
     </div>
   
     </>
  );
}
export default Home; 
