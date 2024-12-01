"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function SliderPage() {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 20]);
  return (
    <div className="space-y-10">
      <div>
        <span>Slider value: {sliderValue}</span>
        <Slider
          defaultValue={[sliderValue]}
          onValueChange={(value) => setSliderValue(value[0])}
          max={100}
          step={1}
        />
      </div>

      <div>
        <span>Range value: {rangeValue.join(", ")}</span>
        <Slider
          defaultValue={rangeValue}
          onValueChange={setRangeValue}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
}
