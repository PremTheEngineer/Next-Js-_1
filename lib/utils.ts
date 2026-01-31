import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSpacedName = (obj: {restaurantId: string}) => {
  return  obj.restaurantId.split("%20").join(" ");
}
