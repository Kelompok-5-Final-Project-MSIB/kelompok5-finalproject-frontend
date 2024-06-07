import NavbarAdmin from './components/NavbarAdmin';
import Sidenavbar from './components/Sidenavbar';

export default function Layout({ children }) {
  return (
    <div className='relative flex flex-1 '>
      <Sidenavbar />
      <main className='flex-2 overflow-y-auto w-[86%] md:w-9/12 lg:w-[85%] bg-[#EFF4FF]  absolute right-0'>
        <NavbarAdmin />
        {children}
      </main>
    </div>
  );
}
