import { SectionWrapper } from "../components/SectionWrapper";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { outreach } from "../data/site";

export function OutreachSection() {
  return (
    <SectionWrapper
      id="outreach"
      eyebrow="Beyond the field"
      title="Impact that compounds—STEM outreach and a culture of mentorship."
      subtitle="We treat every demo and every rookie season as part of the same long-term product: a stronger team and a stronger community."
    >
      <Grid cols={3} gap="md">
        {outreach.map((o, i) => (
          <Card key={o.title} delay={i * 0.06}>
            <h3 className="font-display text-xl font-semibold text-white">{o.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{o.body}</p>
          </Card>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
