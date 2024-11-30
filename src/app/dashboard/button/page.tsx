"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button disabled>disabled</Button>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click me
      </Button>
      <Button variant="success">success</Button>
      <Button capitalize={false}>capitalize false</Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        loading
      </Button>
      <Button>
        <Mail /> With icon
      </Button>
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>
    </div>
  );
}
