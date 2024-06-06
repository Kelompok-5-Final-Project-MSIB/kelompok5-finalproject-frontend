import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "brown",
    icon: BanknotesIcon,
    title: "Total User",
    value: "2.711",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "brown",
    icon: UsersIcon,
    title: "Total Penjualan",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "brown",
    icon: UserPlusIcon,
    title: "Total Sepatu Tersedia",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  // {
  //   color: "brown",
  //   icon: ChartBarIcon,
  //   title: "Sales",
  //   value: "$103,430",
  //   footer: {
  //     color: "text-green-500",
  //     value: "+5%",
  //     label: "than yesterday",
  //   },
  // },
];

export default statisticsCardsData;
