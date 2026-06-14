import { Container } from "@/components/ui/container";
import { topBarItems } from "@/lib/site-config";

export function TopInfoBar() {
  return (
    <div className="hidden h-9 items-center border-b border-charcoal/5 bg-cream md:flex">
      <Container>
        <ul className="flex items-center justify-center gap-x-10 text-[11px] font-medium tracking-[0.18em] text-charcoal/55 uppercase">
          {topBarItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
