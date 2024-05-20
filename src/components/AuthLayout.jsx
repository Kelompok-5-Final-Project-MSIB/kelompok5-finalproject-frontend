import { SidebarAuth } from './SidebarAuth';

const AuthLayout = ({ children, title, desc }) => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <SidebarAuth />
      <div className='flex flex-col items-center justify-center w-full my-6 lg:px-16 lg:my-0 lg:w-1/2'>
        {/* bagian atas */}
        <div className='inline-flex items-center justify-between w-full pt-4 pb-6'>
          <div className='flex-col justify-center items-center gap-3.5 text-center w-full'>
            <h1 className='text-xl font-bold leading-normal text-primaryBrown lg:text-3xl'>ReTreads</h1>
          </div>
        </div>
        <div className='w-3/4 mt-2'>
          <h2 className='mb-1 text-lg font-semibold leading-normal lg:text-xl text-primary'>{title}</h2>
          <h3 className='text-base font-normal leading-normal mb-7 lg:text-base text-primary'>{desc}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
