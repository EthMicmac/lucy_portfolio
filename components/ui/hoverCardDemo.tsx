import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hovercard";
import "@/styles.css";
import Image from "next/image";

export function HoverCardDemo({ name }) {
  const cali = "/public/cali.jpg";
  return (
    <HoverCard openDelay={300}>
      <HoverCardTrigger asChild>
        <Button variant="link">{name}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 HoverCardContent">
        <div className="flex justify-between space-x-4">
          <Image src="/cali.jpg" width={100} height={100} alt="California" />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
