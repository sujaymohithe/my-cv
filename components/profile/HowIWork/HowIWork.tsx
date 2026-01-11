interface HowIWorkProps {
  principles: string[];
}

/**
 * A component that displays a list of principles with how I work.
 * @param props - The props for the component.
 * @param props.principles - An array of strings representing the principles.
 * @returns A JSX element representing the how I work section.
 */
export function HowIWork({ principles }: HowIWorkProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
        How I Work
      </h2>

      <ul className="grid gap-6 sm:grid-cols-2">
        {principles.map((item, index) => (
          <li
            key={index}
            className="rounded-lg border p-5 text-base leading-relaxed text-gray-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
