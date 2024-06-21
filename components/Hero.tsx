import Image from 'next/image'
import Button from './Button'


const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
    
    <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
      
      <h1 className='bold-52 lg:bold-72'>Curug Bogor</h1>
      <p className='regular-16 mt-6 text-gray-30 xl:max-w[520px]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in hac. Tellus pellentesque eu tincidunt tortor. Ac auctor augue mauris augue neque gravida in fermentum et.
      </p>
    
      <div className='my-11 flex flex-wrap gap-5'>
        
        <div className='flex items-center gap-2'>
          {Array(5).fill(1).map((_, index) => (
            <Image
            src="/star.svg"
            key={index}
            alt="star"
            width={24}
            height={24}
         />
        ))}
        </div>
        
        <p className='bold-16 lg:bold-20 text-blue-70'>198k
          <span className='regular-16 lg:regular-20 ml-1'>
            Excellent Reviews
          </span>
        </p>
      
      </div>
      <div className='flex w-full gap-3 sm:flex-row'>
        <Button 
          type="button" 
          title="Our Services" 
          variant="btn_dark_green" 
        />
      </div>
    </div>
    </section>
  )
}

export default Hero