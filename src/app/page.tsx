"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";

export default function DemoPage() {
  const [name, setName] = useState("");

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Component Demo</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">Input</h2>
        <div className="space-y-2">
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Error input"
            variantIntent="error"
            variantTone="outline"
            variantSize="md"
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variantSize="sm">Default Button</Button>
          <Button
            variantIntent="secondary"
            variantTone="solid"
            variantSize="sm"
          >
            Secondary
          </Button>
          <Button
            variantIntent="secondary"
            variantTone="solid"
            variantSize="md"
          >
            Secondary
          </Button>
          <Button
            variantIntent="secondary"
            variantTone="solid"
            variantSize="lg"
          >
            Secondary
          </Button>
          <Button variantIntent="destructive" variantTone="solid">
            Destructive
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
    </div>
  );
}
