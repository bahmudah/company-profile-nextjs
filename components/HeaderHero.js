import Navbar from './Navbar';
import Button from './Button';

export default function HeaderHero() {
  return (
    <div
      className='bg-hero xl:h-[712px] lg:h-[615px] md:h-[480px] h-[550px]'
      id='home'
    >
      <div className='container mx-auto'>
        <Navbar />
        <div className='text-center md:mt-20 mt-8'>
          <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-white font-semibold font-mono w-10/12 md:w-8/12 lg:w-10/12 mx-auto leading-relaxed'>
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className='text-white text-opacity-60 xl:text-lg lg:text-lg md:text-sm text-xs w-8/12 md:w-4/12 mx-auto mt-6 leading-relaxed'>
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button href='#profile' variant='fullfilled-yellow' className='mt-16'>
            Kepoin Me
          </Button>
        </div>
      </div>
    </div>
  );
}
