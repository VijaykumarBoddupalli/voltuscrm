
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ProspectFormValues } from "../schema";
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

interface ServicesTabProps {
  form: UseFormReturn<ProspectFormValues>;
  defaultValues?: Partial<ProspectFormValues>;
}

const availableServices = [
  { id: "sea-freight", label: "Sea Freight" },
  { id: "air-freight", label: "Air Freight" },
  { id: "land-transport", label: "Land Transport" },
  { id: "warehousing", label: "Warehousing" },
  { id: "customs-brokerage", label: "Customs Brokerage" },
  { id: "project-cargo", label: "Project Cargo" },
  { id: "supply-chain", label: "Supply Chain" },
  { id: "value-added-services", label: "Value-Added Services" },
];

export function ServicesTab({ form }: ServicesTabProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-6">Interested Services</h2>
        <FormDescription className="mb-4">
          Select all services that the prospect is interested in:
        </FormDescription>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {availableServices.map((service) => (
            <FormField
              key={service.id}
              control={form.control}
              name="interestedServices"
              render={({ field }) => {
                return (
                  <FormItem 
                    key={service.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(service.id)}
                        onCheckedChange={(checked) => {
                          const currentValue = field.value || [];
                          return checked
                            ? field.onChange([...currentValue, service.id])
                            : field.onChange(
                                currentValue.filter((value) => value !== service.id)
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      {service.label}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold mb-2">Special Requirements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="specialHandlingRequirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Special Handling Requirements</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Temperature-controlled containers for certain shipments" 
                    className="h-32 resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customsClearanceNeeds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customs Clearance Needs</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe any specific customs clearance requirements" 
                    className="h-32 resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
