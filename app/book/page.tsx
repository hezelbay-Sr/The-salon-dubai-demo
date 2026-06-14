"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import StepIndicator from "@/components/booking/StepIndicator";
import BranchStep from "@/components/booking/BranchStep";
import ServiceStep from "@/components/booking/ServiceStep";
import StylistStep from "@/components/booking/StylistStep";
import DateTimeStep from "@/components/booking/DateTimeStep";
import ConfirmStep from "@/components/booking/ConfirmStep";
import type { Branch } from "@/data/branches";
import type { Service } from "@/data/services";
import type { Stylist } from "@/data/stylists";

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [branch, setBranch] = useState<Branch | null>(null);
  const [service, setService] = useState<Service | null>(null);
  const [stylist, setStylist] = useState<Stylist | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-10">
        {step < 5 && <StepIndicator currentStep={step} />}

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
          <div key={step} className="step-animate">
            {step === 1 && (
              <BranchStep
                selected={branch}
                onSelect={(b) => { setBranch(b); setStep(2); }}
              />
            )}
            {step === 2 && (
              <ServiceStep
                selected={service}
                onSelect={(s) => { setService(s); setStep(3); }}
              />
            )}
            {step === 3 && (
              <StylistStep
                selected={stylist}
                onSelect={(s) => { setStylist(s); setStep(4); }}
              />
            )}
            {step === 4 && (
              <DateTimeStep
                selectedDate={date}
                selectedTime={time}
                onDateSelect={(d) => { setDate(d); setTime(null); }}
                onTimeSelect={setTime}
              />
            )}
            {step === 5 && branch && service && stylist && date && time && (
              <ConfirmStep
                branch={branch}
                service={service}
                stylist={stylist}
                date={date}
                time={time}
              />
            )}
          </div>
        </div>

        {step >= 2 && step < 5 && (
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setStep((s) => s - 1)}
              className="cursor-pointer px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-sm"
            >
              ← Back
            </button>

            {step === 4 && date && time && (
              <button
                onClick={() => setStep(5)}
                className="cursor-pointer px-8 py-2.5 rounded-full bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors text-sm"
              >
                Confirm Booking
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
