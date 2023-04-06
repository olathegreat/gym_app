import { JSXElementConstructor } from "react";

export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contact"
  
  } 

  export interface BenefitType{
    icon: JSX.Element;
    title: string;
    description: string;
  }
  export interface classTypes{
    name: string;
    description?: string;
    image: string;
  }