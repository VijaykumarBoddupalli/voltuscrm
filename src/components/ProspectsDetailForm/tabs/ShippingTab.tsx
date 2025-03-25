
import React from "react";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { ProspectFormValues } from "../schema";
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ShippingTabProps {
  form: UseFormReturn<ProspectFormValues>;
  defaultValues?: Partial<ProspectFormValues>;
}

export function ShippingTab({ form }: ShippingTabProps) {
  const { 
    fields: providerFields, 
    append: appendProvider, 
    remove: removeProvider 
  } = useFieldArray({
    control: form.control,
    name: "currentProviders",
  });

  const { 
    fields: routeFields, 
    append: appendRoute, 
    remove: removeRoute 
  } = useFieldArray({
    control: form.control,
    name: "shippingRoutes",
  });

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Current Shipping Providers</h2>
        </div>

        {providerFields.map((field, index) => (
          <Card key={field.id} className="mb-6">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Provider #{index + 1}</CardTitle>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeProvider(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name={`currentProviders.${index}.providerName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Provider Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Emirates Logistics" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`currentProviders.${index}.servicesUsed`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Services Used</FormLabel>
                      <FormControl>
                        <Input placeholder="FCL, Air Freight" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`currentProviders.${index}.annualVolume`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Annual Volume</FormLabel>
                      <FormControl>
                        <Input placeholder="2,400 TEUs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`currentProviders.${index}.satisfactionLevel`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Satisfaction Level</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select satisfaction level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="very-satisfied">Very Satisfied</SelectItem>
                          <SelectItem value="satisfied">Satisfied</SelectItem>
                          <SelectItem value="neutral">Neutral</SelectItem>
                          <SelectItem value="dissatisfied">Dissatisfied</SelectItem>
                          <SelectItem value="very-dissatisfied">Very Dissatisfied</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`currentProviders.${index}.keyIssues`}
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Key Issues</FormLabel>
                      <FormControl>
                        <Input placeholder="Delays, Poor tracking, Documentation errors" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        <Button
          type="button"
          variant="outline"
          className="mt-2"
          onClick={() => 
            appendProvider({
              providerName: "",
              servicesUsed: "",
              annualVolume: "",
              satisfactionLevel: "",
              keyIssues: "",
            })
          }
        >
          + Add Another Provider
        </Button>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Shipping Routes & Volumes</h2>
        </div>

        {routeFields.map((field, index) => (
          <Card key={field.id} className="mb-6">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Route #{index + 1}</CardTitle>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeRoute(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name={`shippingRoutes.${index}.origin`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Origin</FormLabel>
                      <FormControl>
                        <Input placeholder="Shanghai, China" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`shippingRoutes.${index}.destination`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destination</FormLabel>
                      <FormControl>
                        <Input placeholder="Rotterdam, Netherlands" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`shippingRoutes.${index}.frequency`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Frequency</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`shippingRoutes.${index}.annualVolume`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Annual Volume</FormLabel>
                      <FormControl>
                        <Input placeholder="1,200 TEUs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`shippingRoutes.${index}.cargoType`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo Type</FormLabel>
                      <FormControl>
                        <Input placeholder="Electronics, Textiles" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`shippingRoutes.${index}.transportMode`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transport Mode</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select transport mode" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="fcl">FCL (Full Container Load)</SelectItem>
                          <SelectItem value="lcl">LCL (Less than Container Load)</SelectItem>
                          <SelectItem value="air">Air Freight</SelectItem>
                          <SelectItem value="road">Road Freight</SelectItem>
                          <SelectItem value="rail">Rail Freight</SelectItem>
                          <SelectItem value="multimodal">Multimodal</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        <Button
          type="button"
          variant="outline"
          className="mt-2"
          onClick={() => 
            appendRoute({
              origin: "",
              destination: "",
              frequency: "",
              annualVolume: "",
              cargoType: "",
              transportMode: "",
            })
          }
        >
          + Add Another Route
        </Button>
      </div>
    </div>
  );
}
