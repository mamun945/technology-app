import logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <nav className='container mx-auto flex items-center justify-between my-5 shadow-xl border-1 py-5 px-2 sticky top-0 left-0'>
            <img src={logo} alt={logo} />
            <ul className='flex gap-2 space-x-2 items-center'>
                <li className='hover:text-[#D91B7E] cursor-pointer font-bold'>Home</li>
                <li className='hover:text-[#D91B7E] cursor-pointer font-bold'>Technologies</li>
                <li className='hover:text-[#D91B7E] cursor-pointer font-bold'>Projects</li>
                <li className='hover:text-[#D91B7E] cursor-pointer font-bold'>About</li>
                <li className='hover:text-[#D91B7E] cursor-pointer font-bold'>Contact</li>
            </ul>
            <div className='flex gap-2'>
                <button className='btn rounded-[50px]'>Sign in</button>
                <button className='btn btn-secondary rounded-[50px]'>SignUp</button>
            </div>
        </nav>
    );
};

export default Nav;