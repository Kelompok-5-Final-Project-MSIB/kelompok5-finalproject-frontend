import Sidenavbar from '@/src/app/admin/components/Sidenavbar';
import NavbarAdmin from '@/src/app/admin/components/NavbarAdmin';

const Layout = ({ children }) => {
  return (
    <div className='relative flex flex-1 '>
      <Sidenavbar />
      <main className='flex-2 overflow-y-auto w-[86%] md:w-9/12 lg:w-[85%] bg-[#EFF4FF] absolute right-0'>
        <NavbarAdmin />
        {children}
      </main>
    </div>
  );
};

export default Layout;
