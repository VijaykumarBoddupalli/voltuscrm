
import React from "react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  className?: string;
}

export function StepIndicator({ currentStep, className }: StepIndicatorProps) {
  return (
    <div className={cn("flex items-center justify-between mt-8 max-w-xl mx-auto", className)}>
      <div className="flex flex-col items-center">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
          currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
        )}>
          1
        </div>
        <span className="text-xs mt-1">Company</span>
      </div>
      
      <div className={cn(
        "h-1 flex-1 mx-2",
        currentStep >= 2 ? "bg-blue-600" : "bg-gray-200"
      )} />
      
      <div className="flex flex-col items-center">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
          currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
        )}>
          2
        </div>
        <span className="text-xs mt-1">Prospect</span>
      </div>
      
      <div className={cn(
        "h-1 flex-1 mx-2",
        currentStep >= 3 ? "bg-blue-600" : "bg-gray-200"
      )} />
      
      <div className="flex flex-col items-center">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
          currentStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
        )}>
          3
        </div>
        <span className="text-xs mt-1">Opportunity</span>
      </div>
      
      <div className={cn(
        "h-1 flex-1 mx-2",
        currentStep >= 4 ? "bg-blue-600" : "bg-gray-200"
      )} />
      
      <div className="flex flex-col items-center">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
          currentStep >= 4 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
        )}>
          4
        </div>
        <span className="text-xs mt-1">Contract</span>
      </div>
    </div>
  );
}
