import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
<<<<<<< HEAD
  return twMerge(clsx(...inputs))
=======
  return twMerge(clsx(inputs))
>>>>>>> personal-repo/main
}
