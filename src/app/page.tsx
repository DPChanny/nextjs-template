"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

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
          <Button>Default Button</Button>
          <Button variantIntent="secondary" variantTone="outline">
            Secondary
          </Button>
          <Button variantIntent="destructive" variantTone="ghost">
            Destructive
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
    </div>
  );
}
