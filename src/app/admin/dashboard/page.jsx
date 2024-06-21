'use client';
import React, { useEffect } from 'react';

import CardStats from '@/src/app/admin/components/CardStats';
import CardLineChart from '@/src/app/admin/components/CardLineChart';
import CardBarChart from '@/src/app/admin/components/CardBarChart';
import CardPageVisits from '@/src/app/admin/components/CardPageVisits';
import { useDispatch, useSelector } from 'react-redux';
import { clearState, getAllUser, profileSelector } from '@/src/utils/slices/profileSlice';
import { useSession } from 'next-auth/react';
import { getAllProduct, productSelector } from '@/src/utils/slices/productSlice';

const Dashboard = () => {
  const { userData } = useSelector(profileSelector);
  const { product } = useSelector(productSelector);
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const dispatch = useDispatch();
  // console.log(product, token);

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(clearState());
  }, []);

  useEffect(() => {
    dispatch(getAllProduct({ token }));
    dispatch(clearState());
  }, [token]);
  return (
    <>
      <section className='px-10 mt-12'>
        <div className='w-full px-4 mx-auto mb-8 md:px-10'>
          <div>
            {/* Card stats */}
            <div className='grid grid-cols-3'>
              <div className='w-full px-4 '>
                <CardStats
                  statSubtitle='Total user'
                  statTitle={userData.length}
                  statArrow='up'
                  statPercent=''
                  statPercentColor='text-emerald-500'
                  statDescripiron=''
                  statIconName='far fa-chart-bar'
                  statIconColor='bg-red-500'
                />
              </div>
              <div className='w-full px-4 '>
                <CardStats
                  statSubtitle='Total Penjualan'
                  statTitle='2'
                  statArrow='down'
                  statPercent='3.48'
                  statPercentColor='text-red-500'
                  statDescripiron='Total Penjualan'
                  statIconName='fas fa-chart-pie'
                  statIconColor='bg-orange-500'
                />
              </div>
              <div className='w-full px-4 '>
                <CardStats
                  statSubtitle='Total Sepatu Tersedia'
                  statTitle={product?.total}
                  statArrow='down'
                  statPercent='1.10'
                  statPercentColor='text-orange-500'
                  statDescripiron=''
                  statIconName='fas fa-users'
                  statIconColor='bg-pink-500'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-12 xl:w-8/12 xl:mb-0'>
            <CardLineChart />
          </div>
          <div className='w-full px-4 xl:w-4/12'>
            <CardBarChart />
          </div>
        </div>
        <div className='flex flex-wrap mt-4'>
          <div className='w-full '>
            <CardPageVisits />
          </div>
          {/* <div className="w-full px-4 xl:w-4/12">
          <CardSocialTraffic />
        </div> */}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
