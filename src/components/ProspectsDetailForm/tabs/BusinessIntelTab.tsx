
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ProspectFormValues } from "../schema";
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BusinessIntelTabProps {
  form: UseFormReturn<ProspectFormValues>;
  defaultValues?: Partial<ProspectFormValues>;
}

export function BusinessIntelTab({ form }: BusinessIntelTabProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Customer Intelligence</h2>
        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="currentFreightForwardingVendors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Freight Forwarding Vendors</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Emirates Logistics (Primary), Maersk (Secondary for specific routes)" 
                    className="min-h-[80px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="typicalLoadTypes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Typical Load Types</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Electronics, Textiles, Machinery, Automotive Parts" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="frequentDestinations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Frequent Destinations/Routes</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="China to Europe, UAE to Europe, India to Middle East" 
                    className="min-h-[80px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Business Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="expectedBusinessValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Business Value</FormLabel>
                <FormControl>
                  <Input placeholder="$500,000 - $750,000 annually" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="decisionTimeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Decision Timeline</FormLabel>
                <FormControl>
                  <Input placeholder="Within 2 months" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 mt-4 gap-6">
          <FormField
            control={form.control}
            name="painPoints"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pain Points</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Delays in documentation, lack of real-time tracking, inconsistent service quality" 
                    className="min-h-[80px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referralDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Referral Details</FormLabel>
                <FormControl>
                  <Input placeholder="Al Futtaim Group (Existing Customer)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Decision Making Process</h2>
        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="keyDecisionMakers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Key Decision Makers</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="John Smith (CPO) - Final decision maker
Ahmed Al Qasimi (Logistics Manager) - Technical evaluation" 
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="decisionCriteria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Decision Criteria</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="1. Service reliability and on-time delivery
2. Real-time tracking capabilities
3. Pricing structure
4. Documentation accuracy
5. Account management support" 
                    className="min-h-[100px]"
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
