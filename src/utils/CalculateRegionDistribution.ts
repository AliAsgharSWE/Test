import { RegionData, User } from "../containers/home/types";

export const calculateRegionDistribution = (users: User[]): RegionData[] => {
  const regionCounts = { north: 0, south: 0, east: 0, west: 0 };

  users.forEach((user) => {
    regionCounts[user.region]++;
  });

  const totalUsers = users.length;

  return [
    {
      region: "North",
      customers: regionCounts.north,
      percentage: Math.round((regionCounts.north / totalUsers) * 100),
    },
    {
      region: "South",
      customers: regionCounts.south,
      percentage: Math.round((regionCounts.south / totalUsers) * 100),
    },
    {
      region: "East",
      customers: regionCounts.east,
      percentage: Math.round((regionCounts.east / totalUsers) * 100),
    },
    {
      region: "West",
      customers: regionCounts.west,
      percentage: Math.round((regionCounts.west / totalUsers) * 100),
    },
  ];
};
