import React from 'react';
import Sidenavbar from '@/src/app/admin/components/Sidenavbar';

import CardStats from '@/src/app/admin/components/CardStats';
import CardLineChart from '@/src/app/admin/components/CardLineChart';
import CardBarChart from '@/src/app/admin/components/CardBarChart';
import CardPageVisits from '@/src/app/admin/components/CardPageVisits';
import CardSocialTraffic from '@/src/app/admin/components/CardSocialTraffic';
import { PiExcludeSquare } from 'react-icons/pi';

const Dashboard = () => {
  return (
    <>
      <section className='px-10 mt-12'>
        <div className='w-full px-4 mx-auto mb-8 md:px-10'>
          <div>
            {/* Card stats */}
            <div className='flex flex-wrap'>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='TRAFFIC'
                  statTitle='350,897'
                  statArrow='up'
                  statPercent='3.48'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Total User'
                  statIconName='far fa-chart-bar'
                  statIconColor='bg-red-500'
                />
              </div>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='NEW USERS'
                  statTitle='2,356'
                  statArrow='down'
                  statPercent='3.48'
                  statPercentColor='text-red-500'
                  statDescripiron='Total Penjualan'
                  statIconName='fas fa-chart-pie'
                  statIconColor='bg-orange-500'
                />
              </div>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='SALES'
                  statTitle='924'
                  statArrow='down'
                  statPercent='1.10'
                  statPercentColor='text-orange-500'
                  statDescripiron='Total Sepatu Tersedia'
                  statIconName='fas fa-users'
                  statIconColor='bg-pink-500'
                />
              </div>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='PERFORMANCE'
                  statTitle='49,65%'
                  statArrow='up'
                  statPercent='12'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Since last month'
                  statIconName='fas fa-percent'
                  statIconColor='bg-lightBlue-500'
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
