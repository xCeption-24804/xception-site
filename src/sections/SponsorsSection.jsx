import { SectionWrapper } from "../components/SectionWrapper";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { contact, sponsorTiers } from "../data/site";

export function SponsorsSection() {
  return (
    <SectionWrapper
      id="sponsors"
      eyebrow="Partners"
      title="Sponsor visibility that matches a premium program."
      subtitle="We deliver clear recognition, professional storytelling, and direct alignment with STEM education outcomes."
    >
      <Grid cols={3} gap="md">
        {sponsorTiers.map((tier, i) => (
          <Card key={tier.name} delay={i * 0.06} className="flex flex-col">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="font-display text-xl font-bold text-white">{tier.name}</h3>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                Tier
              </span>
            </div>
            <ul className="flex-1 space-y-2 text-sm text-white/65">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
                  {perk}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Grid>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <Button to="/#contact">Request a sponsor deck</Button>
        <Button href={`mailto:${contact.email}`} variant="secondary">
          Email the team
        </Button>
      </div>
    </SectionWrapper>
  );
}
