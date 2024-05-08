import { Button } from "@/components/Shared/Button";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function CallToAction({ className }: { className?: string }) {
  return (
    <div className={clsx("", className)}>
        <Button category="Primary"><EnvelopeIcon className="pr-1 size-5"/>Get In Touch</Button>
        <Button category="Secondary"><ArrowDownTrayIcon className="pr-1 size-5"/>Download CV</Button>
    </div>
  );
}
