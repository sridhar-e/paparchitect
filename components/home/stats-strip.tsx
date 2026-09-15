"use client";

import { Building2, Landmark, MapPin, Layers } from "lucide-react";
import { StatCounters } from "@/components/stat-counter";
import { statistics } from "@/lib/data/services";

const icons = [Landmark, Building2, MapPin, Layers];

export function StatsStrip() {
  return (
    <div className="border-y border-white/10 bg-brand-navy-dark">
      <div className="container px-4 py-14 sm:px-6 lg:px-8">
        <StatCounters stats={statistics} icons={icons} light />
      </div>
    </div>
  );
}
