"use client";

import {
  Code2,
  BrainCircuit,
  Database,
  Smartphone,
} from "lucide-react";

const expertise = [
  {
    title: "Frontend Development",
    icon: Code2,
  },
  {
    title: "AI Integration",
    icon: BrainCircuit,
  },
  {
    title: "Backend Systems",
    icon: Database,
  },
  {
    title: "Responsive Design",
    icon: Smartphone,
  },
];

export default function Expertise() {
  return (
    <section className="px-6 py-20">

      <h2 className="mb-12 text-center text-4xl font-bold">
        MY EXPERTISE
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {expertise.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >

              <Icon className="mb-4 h-10 w-10 text-cyan-400" />

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

            </div>
          );
        })}

      </div>

    </section>
  );
}