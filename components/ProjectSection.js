import Image from 'next/image';
import SectionTitle from './SectionTitle';
import SectionSubtitle from './SectionSubtitle';
import ProjectItem from './ProjectItem';

export default function ProjectSection() {
  return (
    <section className='py-32' id='projects'>
      <div className='container mx-auto'>
        <SectionTitle>Projects</SectionTitle>
        <SectionSubtitle>Beberapa proyek garapan saya</SectionSubtitle>
        <div className='flex -mx-4 mt-20 flex-wrap lg:px-4 lg:-mx-0'>
          <div className='md:w-6/12 w-full mb-20 px-14 md:px-0'>
            <ProjectItem
              name='Hasten'
              image='/portfolio-1.png'
              description='Explorasi landing page'
            />
          </div>
          <div className='md:w-6/12 w-full mb-20 px-14 md:px-0'>
            <ProjectItem
              name='Big Alpha'
              image='/portfolio-2.png'
              description='Explorasi landing page'
            />
          </div>
          <div className='md:w-6/12 w-full mb-20 px-14 md:px-0'>
            <ProjectItem
              name='Big Alpha'
              image='/portfolio-2.png'
              description='Explorasi landing page'
            />
          </div>
          <div className='md:w-6/12 w-full mb-20 px-14 md:px-0'>
            <ProjectItem
              name='Hasten'
              image='/portfolio-1.png'
              description='Explorasi landing page'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
