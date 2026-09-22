import { useRef, useState } from "react";
import { profile } from "@/lib/content";
import { cn } from "@/utils/cn";
import { Reveal, SectionHeader, SourceNote } from "./Primitives";
import { ArrowRight, Check, External, LinkedIn, Mail, MapPin, Phone, Scholar } from "./Icons";

type FieldName = "name" | "email" | "institution" | "subject" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Values = { name: "", email: "", institution: "", subject: "", message: "" };

const FIELD_LABELS: Record<FieldName, string> = {
  name: "Name",
  email: "Email",
  institution: "Institution",
  subject: "Subject",
  message: "Message",
};

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please enter a message of at least 10 characters.";
  }
  return errors;
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  multiline,
  autoComplete,
}: {
  id: FieldName;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  autoComplete?: string;
}) {
  const base =
    "w-full border bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-ink-400 focus:outline-none transition-colors duration-200";
  const border = error ? "border-red-600 focus:border-red-600" : "border-line focus:border-electric";

  return (
    <div>
      <label htmlFor={id} className="label mb-2 block text-ink-400">
        {label}
        {required ? <span className="ml-1 text-electric">*</span> : null}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={6}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(base, border, "resize-y")}
          placeholder="Please describe your enquiry…"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={id === "email" ? "email" : "text"}
          value={value}
          required={required}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(base, border)}
          placeholder={id === "email" ? "name@institution.edu" : "…"}
        />
      )}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[0.8125rem] text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Contact() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const set = (field: FieldName) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    const firstError = Object.keys(next)[0] as FieldName | undefined;
    if (firstError) {
      formRef.current?.querySelector<HTMLElement>(`#${firstError}`)?.focus();
      return;
    }
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    values.subject || `Website enquiry from ${values.name}`,
  )}&body=${encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\nInstitution: ${values.institution || "—"}\n\n${values.message}`,
  )}`;

  return (
    <section id="contact" className="relative scroll-mt-20 bg-paper py-24 lg:py-32">
      <div className="shell">
        <SectionHeader
          index="08"
          eyebrow="Contact"
          title="Get in Touch"
          lead="For research enquiries, collaborations, student applications and instrumentation questions."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-14 lg:mt-20 lg:grid-cols-12">
          {/* ---- Details ---- */}
          <Reveal className="lg:col-span-5">
            <div className="border border-line bg-white">
              <div className="border-b border-line p-7 lg:p-8">
                <p className="font-display text-[1.375rem] font-medium leading-snug text-ink">
                  {profile.fullName}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">
                  {profile.role}
                  <br />
                  {profile.centre}
                  <br />
                  {profile.institution}
                </p>
                <p className="mt-5 flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-ink-500">
                  <MapPin size={15} className="mt-1 shrink-0 text-electric" />
                  <span>
                    {profile.city}
                    <br />
                    {profile.state}, {profile.country}
                  </span>
                </p>
              </div>

              <dl className="divide-y divide-line-soft">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-7 py-5 lg:px-8">
                  <dt className="label flex items-center gap-2 text-ink-400">
                    <Phone size={14} />
                    Phone
                  </dt>
                  <dd className="lg:ml-auto">
                    <a
                      href={`tel:${profile.phoneHref}`}
                      className="font-mono text-[0.875rem] text-ink link-underline"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-7 py-5 lg:px-8">
                  <dt className="label flex items-center gap-2 text-ink-400">
                    <Mail size={14} />
                    Email
                  </dt>
                  <dd className="lg:ml-auto">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-[0.9375rem] text-ink link-underline"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-7 py-5 lg:px-8">
                  <dt className="label text-ink-400">Alt. email</dt>
                  <dd className="lg:ml-auto">
                    <a
                      href={`mailto:${profile.emailAlt}`}
                      className="text-[0.9375rem] text-ink-500 link-underline"
                    >
                      {profile.emailAlt}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-7 py-5 lg:px-8">
                  <dt className="label text-ink-400">Address</dt>
                  <dd className="lg:ml-auto text-right text-[0.875rem] leading-relaxed text-ink-500">
                    110/Central Research Facility Building<br />
                    KIIT University Campus 3<br />
                    Patia, Bhubaneswar-751024<br />
                    Odisha, India
                  </dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-3 border-t border-line p-7 lg:p-8">
                <a href={`mailto:${profile.email}`} className="btn btn-outline h-11 min-h-11 px-5">
                  <Mail size={15} />
                  Email
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline h-11 min-h-11 px-5"
                >
                  <LinkedIn size={15} />
                  LinkedIn
                  <External size={13} />
                </a>
                <a
                  href={profile.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline h-11 min-h-11 px-5"
                >
                  <Scholar size={15} />
                  Google Scholar
                  <External size={13} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* ---- Form ---- */}
          <Reveal className="lg:col-span-7" delay={120}>
            <div className="border border-line bg-white p-7 lg:p-10">
              {submitted ? (
                <div style={{ animation: "glyph-in 0.5s cubic-bezier(0.16,1,0.3,1) both" }}>
                  <span className="grid h-12 w-12 place-items-center border border-electric/30 bg-electric-soft text-electric">
                    <Check size={22} />
                  </span>
                  <h3 className="mt-6 text-[1.5rem] leading-snug">Message ready to send</h3>
                  <p className="mt-4 max-w-[52ch] text-[1rem] leading-[1.75] text-ink-500">
                    Thank you, {values.name.trim().split(" ")[0]}. Your message has been prepared and will open
                    in your email application addressed to {profile.email}.
                  </p>

                  <dl className="mt-8 divide-y divide-line-soft border-y border-line">
                    <div className="grid grid-cols-3 gap-4 py-3">
                      <dt className="label text-ink-400">Name</dt>
                      <dd className="col-span-2 text-[0.9375rem] text-ink">{values.name}</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-3">
                      <dt className="label text-ink-400">Email</dt>
                      <dd className="col-span-2 text-[0.9375rem] text-ink">{values.email}</dd>
                    </div>
                    {values.institution ? (
                      <div className="grid grid-cols-3 gap-4 py-3">
                        <dt className="label text-ink-400">Institution</dt>
                        <dd className="col-span-2 text-[0.9375rem] text-ink">{values.institution}</dd>
                      </div>
                    ) : null}
                    <div className="grid grid-cols-3 gap-4 py-3">
                      <dt className="label text-ink-400">Subject</dt>
                      <dd className="col-span-2 text-[0.9375rem] text-ink">
                        {values.subject || "Website enquiry"}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={mailtoHref} className="btn btn-primary h-12 min-h-12 px-6">
                      Open in email client
                      <ArrowRight size={16} />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline h-12 min-h-12 px-6"
                    >
                      Edit message
                    </button>
                  </div>

                  <SourceNote className="mt-6">
                    Nothing entered on this website is transmitted or stored by the site itself.
                  </SourceNote>
                </div>
              ) : (
                <form ref={formRef} noValidate onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <Field id="name" label={FIELD_LABELS.name} value={values.name} onChange={set("name")} error={errors.name} required autoComplete="name" />
                    <Field id="email" label={FIELD_LABELS.email} value={values.email} onChange={set("email")} error={errors.email} required autoComplete="email" />
                    <Field id="institution" label={FIELD_LABELS.institution} value={values.institution} onChange={set("institution")} error={errors.institution} autoComplete="organization" />
                    <Field id="subject" label={FIELD_LABELS.subject} value={values.subject} onChange={set("subject")} error={errors.subject} />
                  </div>

                  <div className="mt-6">
                    <Field id="message" label={FIELD_LABELS.message} value={values.message} onChange={set("message")} error={errors.message} required multiline />
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <button type="submit" className="btn btn-primary h-12 min-h-12 px-7">
                      Send Message
                      <ArrowRight size={16} />
                    </button>
                    <SourceNote>Fields marked * are required.</SourceNote>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
