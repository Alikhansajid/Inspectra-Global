
import React from 'react';
import {
  ShieldCheck,
  Search,
  Globe,
  Settings,
  Users,
  FileText,
  CheckCircle,
  Factory,
  Scale,
  TrendingUp,
  Award,
  ClipboardList,
  BadgeCheck
} from 'lucide-react';
import { NavItem } from './types';

export const COLORS = {
  navy: '#002147',
  teal: '#008080',
  charcoal: '#333333',
  orange: '#FF8C00',
  slate: '#F8FAFC'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Inspections', path: '/inspections' },
  { label: 'Fabric Check', path: '/fabric-inspection' },
  { label: 'AQL Tool', path: '/aql-calculator' },
  { label: 'Sourcing', path: '/sourcing' },
  { label: 'Services', path: '/services' },
  { label: 'CEO Message', path: '/ceo' },
  { label: 'Terms', path: '/terms' },
  { label: 'Contact', path: '/contact' }
];

export const SERVICE_ICONS = {
  shield: <ShieldCheck className="w-8 h-8 text-teal-600" />,
  search: <Search className="w-8 h-8 text-teal-600" />,
  globe: <Globe className="w-8 h-8 text-teal-600" />,
  settings: <Settings className="w-8 h-8 text-teal-600" />,
  users: <Users className="w-8 h-8 text-teal-600" />,
  file: <FileText className="w-8 h-8 text-teal-600" />,
  check: <CheckCircle className="w-8 h-8 text-teal-600" />,
  factory: <Factory className="w-8 h-8 text-teal-600" />,
  scale: <Scale className="w-8 h-8 text-teal-600" />,
  growth: <TrendingUp className="w-8 h-8 text-teal-600" />,
  award: <Award className="w-8 h-8 text-teal-600" />,
  audit: <ClipboardList className="w-8 h-8 text-teal-600" />,
  compliance: <BadgeCheck className="w-8 h-8 text-teal-600" />,
};

export const TEXTILE_IMAGES = {
  hero: "https://images.unsplash.com/photo-1590001158193-42473ae94208?q=80&w=2000&auto=format&fit=crop", // Industrial Knitting Factory Interior
  knitting: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1200&auto=format&fit=crop", // Knitting Machine Closeup
  weaving: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=1200&auto=format&fit=crop", // Weaving looms
  sewing: "https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?q=80&w=1200&auto=format&fit=crop", // Professional sewing line
  inspection: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop", // Laboratory/Quality Control
  packing: "https://images.unsplash.com/photo-1620455805821-742f3fdb36e5?q=80&w=1200&auto=format&fit=crop", // Warehouse packing
  shipping: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop", // Shipping containers
  buyingHouse: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop", // Fabric Rolls/Samples
  team: "https://images.unsplash.com/photo-1605218457335-50284ea50257?q=80&w=1200&auto=format&fit=crop", // Warehouse/Factory Team Environment
  fabricRolls: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop", // Rolls of fabric
  factory_ext: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?q=80&w=1200&auto=format&fit=crop", // Factory Interior Machinery (No buildings)
  yarn: "https://images.unsplash.com/photo-1520005742460-e4b50c19b0aa?q=80&w=1200&auto=format&fit=crop" // Yarn cones
};
