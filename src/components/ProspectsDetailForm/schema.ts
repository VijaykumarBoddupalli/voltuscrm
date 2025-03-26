
import { z } from "zod";

// Define sub-schemas
const socialMediaSchema = z.object({
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
  facebook: z.string().optional(),
});

const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  jobTitle: z.string().optional(),
  department: z.string().optional(),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  roleInDecisionMaking: z.string().optional(),
  gender: z.string().optional(),
  ageGroup: z.string().optional(),
  socialMedia: socialMediaSchema,
});

const providerSchema = z.object({
  providerName: z.string().optional(),
  servicesUsed: z.string().optional(),
  annualVolume: z.string().optional(),
  satisfactionLevel: z.string().optional(),
  keyIssues: z.string().optional(),
});

const routeSchema = z.object({
  origin: z.string().optional(),
  destination: z.string().optional(),
  frequency: z.string().optional(),
  annualVolume: z.string().optional(),
  cargoType: z.string().optional(),
  transportMode: z.string().optional(),
});

// Main form schema
export const prospectFormSchema = z.object({
  // Company Tab
  companyName: z.string().min(1, "Company name is required"),
  industry: z.string().optional(),
  companySize: z.string().optional(),
  yearFounded: z.string().optional(),
  areaCode: z.string().optional(),
  referredBy: z.string().optional(),
  streetAddress: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
  annualRevenue: z.string().optional(),
  annualGrowthRate: z.string().optional(),
  website: z.string().optional(),
  linkedin: z.string().optional(),
  
  // Services Tab
  interestedServices: z.array(z.string()).optional(),
  specialHandlingRequirements: z.string().optional(),
  customsClearanceNeeds: z.string().optional(),
  
  // Contacts Tab
  primaryContact: contactSchema,
  additionalContacts: z.array(contactSchema).optional(),
  
  // Shipping Tab
  currentProviders: z.array(providerSchema).optional(),
  shippingRoutes: z.array(routeSchema).optional(),
  
  // Business Intel Tab
  currentFreightForwardingVendors: z.string().optional(),
  typicalLoadTypes: z.string().optional(),
  frequentDestinations: z.string().optional(),
  expectedBusinessValue: z.string().optional(),
  decisionTimeline: z.string().optional(),
  painPoints: z.string().optional(),
  referralDetails: z.string().optional(),
  keyDecisionMakers: z.string().optional(),
  decisionCriteria: z.string().optional(),
});

export type ProspectFormValues = z.infer<typeof prospectFormSchema>;
