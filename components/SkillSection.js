import SectionTitle from './SectionTitle';
import SectionSubtitle from './SectionSubtitle';
import SkillCard from './SkillCard';

export default function SkillSection() {
  return (
    <section className='py-32 bg-primarygray' id='skills'>
      <div className='container mx-auto'>
        <SectionTitle>Skills</SectionTitle>
        <SectionSubtitle>Beberapa kemampuan saya</SectionSubtitle>
        <div className='flex -m-px-6 mt-20 flex-wrap lg:px-6'>
          <div className='md:w-4/12 w-full px-6 pb-10'>
            <SkillCard
              skill='JavaScript'
              level='Lanjutan'
              image='/javascript.svg'
            />
          </div>
          <div className='md:w-4/12 w-full px-6 pb-10'>
            <SkillCard skill='React Js' level='Menengah' image='/react.svg' />
          </div>
          <div className='md:w-4/12 w-full px-6 pb-10'>
            <SkillCard skill='Node Js' level='Lanjutan' image='/nodejs.svg' />
          </div>
          <div className='md:w-4/12 w-full px-6 pb-10'>
            <SkillCard
              skill='JavaScript'
              level='Lanjutan'
              image='/javascript.svg'
            />
          </div>
          <div className='md:w-4/12 w-full px-6 pb-10'>
            <SkillCard skill='React Js' level='Menengah' image='/react.svg' />
          </div>
          <div className='md:w-4/12 w-full px-6 pb-10'>
            <SkillCard skill='Node Js' level='Lanjutan' image='/nodejs.svg' />
          </div>
          <div className='md:w-4/12 w-full px-6 pb-10'>
            <SkillCard
              skill='JavaScript'
              level='Lanjutan'
              image='/javascript.svg'
            />
          </div>
          <div className='md:w-4/12 w-full px-6 pb-10'>
            <SkillCard skill='React Js' level='Menengah' image='/react.svg' />
          </div>
          <div className='md:w-4/12 w-full px-6 pb-10'>
            <SkillCard skill='Node Js' level='Lanjutan' image='/nodejs.svg' />
          </div>
        </div>
      </div>
    </section>
  );
}
