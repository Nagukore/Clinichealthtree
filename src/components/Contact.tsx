import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircle,
  Navigation,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

/* ================= CLINIC DETAILS ================= */
/* Single source of truth so the number never drifts between sections. */
const CLINIC = {
  phone: "+918073718255",
  phoneDisplay: "+91 80737 18255",
  /** International format, no "+" or spaces - what wa.me expects. */
  whatsapp: "918073718255",
  email: "healthtreeclinique@gmail.com",
  addressLines: ["1358, AECS Layout, A-Block, 60 Feet Road", "Singasandra, Bangalore 560068"],
  mapsQuery: "1358, AECS Layout, Singasandra, Bangalore",
  hours: [
    { days: "Mon – Sat", time: "7:00 AM – 10:00 PM" },
    { days: "Sunday", time: "7:00 AM – 1:00 PM" },
  ],
};

const SUBJECTS = ["Appointment Booking", "General Inquiry", "Diagnostics / Lab", "Feedback"];

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  CLINIC.mapsQuery
)}`;

/* ================= MAP ================= */

/**
 * Click-to-load Google Map.
 *
 * The Maps embed pulls roughly a megabyte of third-party JavaScript and blocks
 * the main thread while it boots. Most visitors only want the address or a
 * directions link, so the iframe is only mounted once someone asks for it.
 */
function MapEmbed() {
  const [showMap, setShowMap] = useState(false);

  if (showMap) {
    return (
      <iframe
        src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapsQuery)}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Clinic location"
      />
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 bg-slate-100 p-6 text-center">
      {/* Faint grid so the panel reads as a map placeholder, not a blank box. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative flex flex-col items-center gap-3">
        <span className="rounded-xl bg-teal-600 p-2.5 text-white shadow-sm">
          <MapPin size={20} />
        </span>
        <p className="max-w-xs text-[13px] font-medium leading-snug text-slate-700">
          {CLINIC.addressLines.join(", ")}
        </p>
        <div className="mt-1 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setShowMap(true)}
            className="rounded-full bg-slate-900 px-4 py-2 text-[11.5px] font-semibold text-white transition hover:bg-slate-700"
          >
            Load map
          </button>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-[11.5px] font-semibold text-teal-700 ring-1 ring-teal-200 transition hover:bg-teal-50"
          >
            Get directions
          </a>
        </div>
      </div>
    </div>
  );
}

/* ================= CONTACT PANEL ================= */

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 p-4 sm:p-5">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 ring-1 ring-inset ring-teal-100">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
        <div className="mt-1 text-[13px] leading-relaxed text-slate-700">{children}</div>
      </div>
    </div>
  );
}

function ContactPanel() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      {/* Primary actions first - most visitors want to call, not type. */}
      <div className="border-b border-slate-100 bg-slate-50/80 p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Speak to us now
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <a
            href={`tel:${CLINIC.phone}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-3 py-3 text-[12.5px] font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            <Phone size={15} /> Call
          </a>
          <a
            href={`https://wa.me/${CLINIC.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-[12.5px] font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:text-teal-700"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
        </div>
      </div>

      {/* One panel of rows, rather than four separate floating cards. On tablet
          the rows sit two-up so the column is not a tall thin ribbon. */}
      <div className="grid divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-1 lg:divide-y">
        <DetailRow icon={<Phone size={15} />} label="Phone">
          <a href={`tel:${CLINIC.phone}`} className="font-semibold text-teal-700 hover:underline">
            {CLINIC.phoneDisplay}
          </a>
        </DetailRow>

        <DetailRow icon={<Mail size={15} />} label="Email">
          <a
            href={`mailto:${CLINIC.email}`}
            className="break-all font-medium text-teal-700 hover:underline"
          >
            {CLINIC.email}
          </a>
        </DetailRow>

        <DetailRow icon={<MapPin size={15} />} label="Clinic address">
          {CLINIC.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-flex items-center gap-1 text-[12px] font-semibold text-teal-700 hover:underline"
          >
            <Navigation size={12} /> Get directions
          </a>
        </DetailRow>

        <DetailRow icon={<Clock size={15} />} label="Opening hours">
          {CLINIC.hours.map((h) => (
            <p key={h.days} className="flex justify-between gap-4">
              <span className="text-slate-500">{h.days}</span>
              <span className="font-medium tabular-nums">{h.time}</span>
            </p>
          ))}
        </DetailRow>
      </div>
    </div>
  );
}

/* ================= ENQUIRY FORM ================= */

type Fields = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  phone: "",
  email: "",
  subject: SUBJECTS[0],
  message: "",
};

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-[13.5px] text-slate-900 placeholder:text-slate-400 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20";

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[12px] font-medium text-slate-700">
        {label}
        {required && <span className="ml-0.5 text-teal-600">*</span>}
      </label>
      {children}
      {error && (
        <p
          role="alert"
          data-error
          className="mt-1.5 flex items-center gap-1 text-[11.5px] font-medium text-red-600"
        >
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sentTo, setSentTo] = useState<string | null>(null);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  function validate(values: Fields) {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name";
    // Indian mobile numbers are 10 digits; allow +91 and separators.
    const digits = values.phone.replace(/\D/g, "");
    if (!digits) next.phone = "Please enter your phone number";
    else if (digits.length < 10) next.phone = "Enter a valid 10-digit number";
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email address";
    if (!values.message.trim()) next.message = "Tell us how we can help";
    return next;
  }

  /**
   * There is no backend on this site, so the enquiry is handed to the clinic's
   * WhatsApp with the details pre-filled. The visitor taps send and it lands in
   * the inbox the clinic already watches. Swap this for a form service or an
   * API call if enquiries should go somewhere else.
   */
  function buildWhatsAppUrl(values: Fields) {
    const body = [
      `*New enquiry - ${values.subject}*`,
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.email.trim() ? `Email: ${values.email.trim()}` : null,
      "",
      values.message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(body)}`;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const url = buildWhatsAppUrl(fields);
    window.open(url, "_blank", "noopener,noreferrer");
    setSentTo(url);
  }

  if (sentTo) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-teal-100">
          <CheckCircle2 size={24} />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">Almost there</h3>
        <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-slate-500">
          We have opened WhatsApp with your details filled in. Press send there and our front desk
          will pick it up.
        </p>
        <a
          href={sentTo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-teal-700"
        >
          <MessageCircle size={16} /> Open WhatsApp again
        </a>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setSentTo(null);
          }}
          className="mt-3 text-[12.5px] font-medium text-slate-500 underline-offset-2 hover:text-teal-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
      <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Send us a message</h3>
      <p className="mt-1 text-[13px] text-slate-500">
        Fill this in and we will reply on WhatsApp during clinic hours.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" htmlFor="contact-name" required error={errors.name}>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={fields.name}
              onChange={set("name")}
              aria-invalid={!!errors.name}
              className={inputClass}
            />
          </Field>

          <Field label="Phone number" htmlFor="contact-phone" required error={errors.phone}>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="10-digit mobile number"
              value={fields.phone}
              onChange={set("phone")}
              aria-invalid={!!errors.phone}
              className={inputClass}
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" htmlFor="contact-email" error={errors.email}>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Optional"
              value={fields.email}
              onChange={set("email")}
              aria-invalid={!!errors.email}
              className={inputClass}
            />
          </Field>

          <Field label="Subject" htmlFor="contact-subject">
            <select
              id="contact-subject"
              name="subject"
              value={fields.subject}
              onChange={set("subject")}
              className={inputClass}
            >
              {SUBJECTS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Message" htmlFor="contact-message" required error={errors.message}>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Which doctor or test do you need, and a preferred day or time?"
            value={fields.message}
            onChange={set("message")}
            aria-invalid={!!errors.message}
            className={`${inputClass} resize-none`}
          />
        </Field>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3.5 text-[13.5px] font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
        >
          Send message
          <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <p className="text-center text-[11.5px] leading-relaxed text-slate-400">
          For medical emergencies please call{" "}
          <a href={`tel:${CLINIC.phone}`} className="font-medium text-teal-700 hover:underline">
            {CLINIC.phoneDisplay}
          </a>{" "}
          instead of using this form.
        </p>
      </form>
    </div>
  );
}

/* ================= SECTION ================= */

function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-100/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-800">
            Contact us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base">
            Book an appointment, ask about a test, or just find your way to the clinic. We are open
            seven days a week in Singasandra.
          </p>
        </div>

        {/* On phones the contact panel comes first, because most visitors want
            to call rather than fill in a form. On desktop the form takes the
            wider left column and the panel sits alongside it. */}
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="space-y-6 lg:sticky lg:top-24">
              <ContactPanel />
              <div className="h-56 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 sm:h-64 lg:h-72">
                <MapEmbed />
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:col-span-3">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
