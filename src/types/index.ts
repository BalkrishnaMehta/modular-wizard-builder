
export type ServiceType = "Reparasjon" | "Tilpasning";

export type GarmentType = 
  | "Bukse" 
  | "Genser" 
  | "Jakke" 
  | "Kjole" 
  | "Skjorte" 
  | "Blazer" 
  | "Skjørt" 
  | "Jeans" 
  | "Kåpe/Frakk";

export type RepairMethod = 
  | "Bytte glidelås" 
  | "Stort hull" 
  | "Lite hull" 
  | "Sy på ny knapp" 
  | "Fest på beltehemper";

export type FormValues = {
  service: ServiceType;
  garment?: GarmentType;
  repairMethod?: RepairMethod;
  description?: string;
};

export type FormStep = {
  id: string;
  title: string;
  description: string;
};

export const repairSteps: FormStep[] = [
  {
    id: "garment",
    title: "Hvilket plagg ønsker du å reparere?",
    description: "Velg ett plagg. Du kan legge til et annet plagg senere."
  },
  {
    id: "repairMethod",
    title: "Hvordan vil du at plagget skal repareres?",
    description: "Velg en tjeneste. Du kan legge til en annen tjeneste senere."
  },
  {
    id: "description",
    title: "Beskrivelse",
    description: "Her kan du skrive mer om skaden og sin plassering."
  }
];

export const tailoringSteps: FormStep[] = [
  {
    id: "garment",
    title: "Hvilket plagg ønsker du å tilpasse?",
    description: "Velg ett plagg. Du kan legge til et annet plagg senere."
  },
  {
    id: "tailoringMethod",
    title: "Hvordan vil du at plagget skal tilpasses?",
    description: "Velg en tjeneste. Du kan legge til en annen tjeneste senere."
  },
  {
    id: "description",
    title: "Beskrivelse",
    description: "Her kan du skrive mer om tilpasningen du ønsker."
  }
];
