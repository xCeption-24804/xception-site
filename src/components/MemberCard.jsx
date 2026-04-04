import { motion } from "framer-motion";

export function MemberCard({ member, index = 0 }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-[opacity,box-shadow] duration-300 group-hover:opacity-100"
        style={{
          boxShadow: "0 0 0 1px rgb(94 231 255 / 0.45), 0 0 36px -6px rgb(94 231 255 / 0.35)",
        }}
      />
      <div className="relative aspect-square overflow-hidden rounded-xl bg-black/40">
        <img
          src={member.photo}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="relative mt-4">
        <p className="font-display text-lg font-semibold text-white">{member.name}</p>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-accent/90">{member.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{member.bio}</p>
      </div>
    </motion.article>
  );
}
