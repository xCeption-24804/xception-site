import { SectionWrapper } from "../components/SectionWrapper";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { outreach } from "../data/site";

export function OutreachSection() {
  return (
    <SectionWrapper
      id="outreach"
      eyebrow="PLANS"
      title="LONG-TERM PLANS"
      subtitle=""
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
