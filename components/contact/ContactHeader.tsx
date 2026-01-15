/**
 * A component that displays a contact header with a title and a short description.
 * @returns A JSX element representing the contact header.
 */
export function ContactHeader() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">Contact</h1>

      <div className="space-y-16">
        <p className="text-base leading-relaxed text-dark-gray">
          Interested in collaborating, discussing a project, or just saying hi?
          I’m always open to conversations.
        </p>
        <p className="text-base leading-relaxed text-dark-gray">
          I build scalable frontend applications, real-time systems, and
          industrial platforms with a strong focus on performance, usability,
          and maintainability.
        </p>
        <p className="text-base leading-relaxed text-dark-gray">
          Interested in collaborating or discussing an opportunity?
        </p>
        <p className="text-base font-medium leading-relaxed text-dark-gray">
          Availability: Open to opportunities
        </p>
      </div>
    </section>
  );
}
