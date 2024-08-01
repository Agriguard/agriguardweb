import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export interface Farm {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  estimated_yield: string;
  preferred_bid: string;
  price: string;
  crops: string;
  crop_varieties: string;
  is_ready: boolean;
}


export const filterAndAggregateFarms = (farms: Farm[]) => {
  const filteredFarms = farms.filter(farm => farm.is_ready);

  const aggregatedFarms: Record<string, { count: number; crop_varieties: string; total_bid: number }> = {};

  filteredFarms.forEach(farm => {
    const { crops, crop_varieties, preferred_bid } = farm;

    const bidAmount = parseFloat(preferred_bid);

    if (aggregatedFarms[crops]) {
      aggregatedFarms[crops].count += 1;
      aggregatedFarms[crops].total_bid += bidAmount;
    } else {
      aggregatedFarms[crops] = { count: 1, crop_varieties, total_bid: bidAmount };
    }
  });

  return aggregatedFarms;
};

export const getCookie = (name: string): string => {
  let cookieValue = "";
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

