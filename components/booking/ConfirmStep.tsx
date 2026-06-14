"use client";

import Link from "next/link";
import type { Branch } from "@/data/branches";
import type { Service } from "@/data/services";
import type { Stylist } from "@/data/stylists";

const CONFETTI = [
  { color: "#f9a8d4", left: "10%", delay: "0s",    duration: "1.8s", size: 10, shape: "rect" },
  { color: "#fbbf24", left: "20%", delay: "0.15s",  duration: "2.1s", size: 8,  shape: "circle" },
  { color: "#34d399", left: "30%", delay: "0.05s",  duration: "1.6s", size: 12, shape: "rect" },
  { color: "#60a5fa", left: "40%", delay: "0.3s",   duration: "2.0s", size: 7,  shape: "circle" },
  { color: "#f472b6", left: "50%", delay: "0.1s",   duration: "1.9s", size: 9,  shape: "rect" },
  { color: "#a78bfa", left: "60%", delay: "0.25s",  duration: "1.7s", size: 11, shape: "circle" },
  { color: "#fb923c", left: "70%", delay: "0.4s",   duration: "2.2s", size: 8,  shape: "rect" },
  { color: "#4ade80", left: "80%", delay: "0.08s",  duration: "1.5s", size: 10, shape: "circle" },
  { color: "#f9a8d4", left: "88%", delay: "0.35s",  duration: "2.0s", size: 7,  shape: "rect" },
  { color: "#fbbf24", left: "15%", delay: "0.5s",   duration: "1.8s", size: 9,  shape: "circle" },
  { color: "#60a5fa", left: "55%", delay: "0.45s",  duration: "1.6s", size: 12, shape: "rect" },
  { color: "#f472b6", left: "75%", delay: "0.2s",   duration: "2.3s", size: 8,  shape: "circle" },
];

export default function ConfirmStep({
  branch,
  service,
  stylist,
  date,
  time,
}: {
  branch: Branch;
  service: Service;
  stylist: Stylist;
  date: string;
  time: string;
}) {
  return (
    <div className="text-center py-4 relative overflow-hidden">
      {CONFETTI.map((p, i) => (
        <div
          key={i}
          className="confetti"
          style={{
            left: p.left,
            width: p.size,
            height: p.shape === "rect" ? p.size * 1.6 : p.size,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
        🎉
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
      <p className="text-gray-500 mb-8">Your appointment has been reserved. See you soon!</p>

      <div className="bg-pink-50 rounded-2xl p-6 text-left max-w-sm mx-auto space-y-3 mb-8">
        {[
          { label: "Branch",  value: branch.name },
          { label: "Service", value: service.name },
          { label: "Stylist", value: stylist.name },
          { label: "Date",    value: date },
          { label: "Time",    value: time },
        ].map((row) => (
          <div key={row.label} className="flex justify-between">
            <span className="text-gray-500 text-sm">{row.label}</span>
            <span className="text-gray-900 font-medium text-sm">{row.value}</span>
          </div>
        ))}
        <div className="border-t border-pink-200 pt-3 flex justify-between">
          <span className="text-gray-500 text-sm">Total</span>
          <span className="text-pink-500 font-bold">AED {service.price}</span>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-6">
        A confirmation will be sent to you via WhatsApp.
      </p>

      <Link
        href="/"
        className="bg-pink-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
}
