"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarPage() {
  const [firstCalendarDate, setFirstCalendarDate] = useState<Date | undefined>(
    new Date()
  );
  const [secondCalendarDate, setSecondCalendarDate] = useState<
    Date | undefined
  >(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const firstSmallDate = firstCalendarDate?.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const secondSmallDate = secondCalendarDate?.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
        <Calendar
          mode="single"
          selected={firstCalendarDate}
          onSelect={setFirstCalendarDate}
          className="rounded-md border"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        />
        <Calendar
          mode="single"
          selected={secondCalendarDate}
          onSelect={setSecondCalendarDate}
          className="rounded-md border"
          disabled={(date) => date < new Date()}
        />

        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDates}
          className="rounded-md border"
        />
      </div>

      <div className="mt-4">
        <h1>Information calendar 1:</h1>
        <p>{firstSmallDate}</p>
        <div className="border-b mb-3" />
        <h2>Information calendar 2:</h2>
        <p>{secondSmallDate}</p>
        <div className="border-b mb-3" />
        <h2>Information calendar 3:</h2>
        <p>
          {multipleDates
            ?.map((date) => date.toLocaleDateString("en-US"))
            .join(", ")}
        </p>
      </div>
    </>
  );
}
