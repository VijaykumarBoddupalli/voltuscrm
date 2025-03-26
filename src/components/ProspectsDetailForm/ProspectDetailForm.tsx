import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form } from "@/components/ui/form";
import { prospectFormSchema } from "./schema";
import { CompanyTab } from "./tabs/CompanyTab";
import { ServicesTab } from "./tabs/ServicesTab";
import { ContactsTab } from "./tabs/ContactsTab";
import { ShippingTab } from "./tabs/ShippingTab";
import { BusinessIntelTab } from "./tabs/BusinessIntelTab";
import { StepIndicator } from "./StepIndicator";

type ProspectFormValues = React.ComponentProps<typeof CompanyTab>["defaultValues"] &
  React.ComponentProps<typeof ServicesTab>["defaultValues"] &
  React.ComponentProps<typeof ContactsTab>["defaultValues"] &
  React.ComponentProps<typeof ShippingTab>["defaultValues"] &
  React.ComponentProps<typeof BusinessIntelTab>["defaultValues"];

interface ProspectDetailFormProps {
  defaultValues?: Partial<ProspectFormValues>;
  onSubmit?: (data: ProspectFormValues) => void;
  companyName?: string;
}

export function ProspectDetailForm({
  defaultValues,
  onSubmit,
  companyName = "Global Shipping Co."
}: ProspectDetailFormProps) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("company");
  
  const form = useForm<ProspectFormValues>({
    resolver: zodResolver(prospectFormSchema),
    defaultValues: {
      companyName: defaultValues?.companyName || "",
      industry: defaultValues?.industry || "",
      companySize: defaultValues?.companySize || "",
      yearFounded: defaultValues?.yearFounded || "",
      areaCode: defaultValues?.areaCode || "",
      referredBy: defaultValues?.referredBy || "",
      streetAddress: defaultValues?.streetAddress || "",
      city: defaultValues?.city || "",
      state: defaultValues?.state || "",
      postalCode: defaultValues?.postalCode || "",
      country: defaultValues?.country || "",
      annualRevenue: defaultValues?.annualRevenue || "",
      annualGrowthRate: defaultValues?.annualGrowthRate || "",
      website: defaultValues?.website || "",
      linkedin: defaultValues?.linkedin || "",
      // Services
      interestedServices: defaultValues?.interestedServices || [],
      specialHandlingRequirements: defaultValues?.specialHandlingRequirements || "",
      customsClearanceNeeds: defaultValues?.customsClearanceNeeds || "",
      // Contacts
      primaryContact: defaultValues?.primaryContact || {
        fullName: "",
        jobTitle: "",
        department: "",
        email: "",
        phone: "",
        mobile: "",
        roleInDecisionMaking: "",
        gender: "",
        ageGroup: "",
        socialMedia: {
          linkedin: "",
          twitter: "",
          facebook: "",
        },
      },
      additionalContacts: defaultValues?.additionalContacts || [],
      // Shipping
      currentProviders: defaultValues?.currentProviders || [],
      shippingRoutes: defaultValues?.shippingRoutes || [],
      // Business Intel
      currentFreightForwardingVendors: defaultValues?.currentFreightForwardingVendors || "",
      typicalLoadTypes: defaultValues?.typicalLoadTypes || "",
      frequentDestinations: defaultValues?.frequentDestinations || "",
      expectedBusinessValue: defaultValues?.expectedBusinessValue || "",
      decisionTimeline: defaultValues?.decisionTimeline || "",
      painPoints: defaultValues?.painPoints || "",
      referralDetails: defaultValues?.referralDetails || "",
      keyDecisionMakers: defaultValues?.keyDecisionMakers || "",
      decisionCriteria: defaultValues?.decisionCriteria || "",
    },
  });

  const handleSubmit = (data: ProspectFormValues) => {
    if (onSubmit) {
      onSubmit(data);
    }
    
    toast({
      title: "Form submitted",
      description: "Prospect details have been saved successfully",
    });
    
    console.log("Form data:", data);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const goToNextTab = () => {
    switch (activeTab) {
      case "company":
        setActiveTab("services");
        break;
      case "services":
        setActiveTab("contacts");
        break;
      case "contacts":
        setActiveTab("shipping");
        break;
      case "shipping":
        setActiveTab("business-intel");
        break;
      default:
        break;
    }
  };

  const getCurrentStep = () => {
    switch (activeTab) {
      case "company":
        return 1;
      case "contacts":
      case "services":
        return 2;
      case "shipping":
      case "business-intel":
        return 3;
      default:
        return 1;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Prospect Details</h1>
            <p className="text-sm text-gray-500">Update information for {companyName}</p>
          </div>
          <div>
            <Button 
              variant="outline" 
              className="text-sm mr-2"
              onClick={() => window.history.back()}
            >
              ← Back to Prospects
            </Button>
          </div>
        </div>
        <StepIndicator currentStep={getCurrentStep()} />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="px-6 border-b">
              <TabsList className="h-14">
                <TabsTrigger value="company" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4">
                  Company
                </TabsTrigger>
                <TabsTrigger value="services" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4">
                  Services
                </TabsTrigger>
                <TabsTrigger value="contacts" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4">
                  Contacts
                </TabsTrigger>
                <TabsTrigger value="shipping" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4">
                  Shipping
                </TabsTrigger>
                <TabsTrigger value="business-intel" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4">
                  Business Intel
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6">
              <div className="mb-2 text-sm text-red-500">
                * Indicates required fields
              </div>
              
              <TabsContent value="company">
                <CompanyTab form={form} />
              </TabsContent>
              
              <TabsContent value="services">
                <ServicesTab form={form} />
              </TabsContent>
              
              <TabsContent value="contacts">
                <ContactsTab form={form} />
              </TabsContent>
              
              <TabsContent value="shipping">
                <ShippingTab form={form} />
              </TabsContent>
              
              <TabsContent value="business-intel">
                <BusinessIntelTab form={form} />
              </TabsContent>
              
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => window.history.back()}
                >
                  Cancel
                </Button>
                
                <div className="flex space-x-2">
                  {activeTab !== "business-intel" && (
                    <Button type="button" onClick={goToNextTab} className="bg-blue-600 hover:bg-blue-700">
                      Next
                    </Button>
                  )}
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </Tabs>
        </form>
      </Form>
    </div>
  );
}
