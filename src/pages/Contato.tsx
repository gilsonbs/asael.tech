import ContatoForm from '../components/sections/ContatoForm'
import { CONTACT_EMAIL, EMAIL_URL, WHATSAPP_URL } from '../data/contact'

const directItems = [
  {
    icon: '💬',
    title: 'WhatsApp',
    description: 'Resposta mais rápida — ideal se você já sabe o que precisa',
    href: WHATSAPP_URL,
  },
  {
    icon: '✉️',
    title: CONTACT_EMAIL,
    description: 'Pra propostas mais detalhadas ou envio de documentos',
    href: EMAIL_URL,
  },
]

export default function Contato() {
  return (
    <section className="relative z-10 py-16 md:py-24" id="contato">
      <div className="wrap">
        <div className="font-mono text-[12.5px] uppercase tracking-wide text-blue">Contato</div>
        <h1 className="mb-9 mt-3 text-[clamp(28px,4vw,38px)] font-extrabold tracking-tight">
          Vamos conversar sobre seu projeto.
        </h1>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <ContatoForm />

          <div className="flex flex-col gap-[18px] rounded-2xl border border-border bg-surface p-9">
            {directItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:border-blue hover:bg-blue/5"
              >
                <span className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-lg bg-surface-2 text-base">
                  {item.icon}
                </span>
                <span>
                  <h4 className="text-[14.5px] font-bold">{item.title}</h4>
                  <p className="mt-0.5 text-[13px] text-muted">{item.description}</p>
                </span>
              </a>
            ))}
            <div className="mt-1.5 flex items-center gap-2 font-mono text-[12.5px] text-green">
              <span className="h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_8px_var(--color-green)]" />
              resposta em até 24h úteis
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
