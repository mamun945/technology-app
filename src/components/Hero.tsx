import hero from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <div className='container mx-auto items-center justify-between my-7 px-4 md:flex'>
           <div className='space-y-7 text-center md:text-left'>
               <div>
                <h1 className='font-bold text-5xl'>Build Your Ideal</h1>
                <h1 className="development-title text-6xl font-bold">Development Stack</h1>
               </div>
              <p className='text-gray-500'>Explore frontend, backend, database, and tooling options,<br />
                 compare them side by side, and put together the stack that fits your <br />
                 next project.</p>
             
             <div className='flex gap-2 justify-center items-center md:justify-start'>
                <button className="btn bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white border-none shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform">
                Explore Technologies
               </button>
                <button className='btn'>Learn More</button>
             </div>
           </div>
            <div className='text-center'>
                <img src={hero} alt="banner" />
            </div>
        </div>
    );
};

export default Hero;