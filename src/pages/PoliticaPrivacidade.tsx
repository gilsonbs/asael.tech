import {
  changesSection,
  collectedDataSection,
  controller,
  intro,
  lastUpdated,
  legalBasisSection,
  purposeSection,
  responsibleSection,
  retentionSection,
  rightsSection,
  securitySection,
  sharingSection,
} from '../data/privacyPolicy'

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="mb-3.5 mt-10 text-[19px] font-bold">
      <span className="mr-2 font-mono text-blue">{number}</span>
      {title}
    </h2>
  )
}

export default function PoliticaPrivacidade() {
  return (
    <div className="mx-auto max-w-[820px]">
      <section className="relative z-10 pb-6 pt-16 md:pt-[64px]">
        <div className="wrap">
          <div className="font-mono text-[12.5px] uppercase tracking-wide text-blue">Legal</div>
          <h1 className="mt-3 text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight">
            Política de Privacidade
          </h1>
          <div className="mt-3.5 font-mono text-[12.5px] text-muted-2">
            Última atualização: {lastUpdated}
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-24 pt-5">
        <div className="wrap">
          <p className="mb-3.5 text-[15px] text-muted">{intro}</p>

          <SectionHeading number="01" title="Quem é o responsável pelos dados" />
          <p className="mb-3.5 text-[15px] text-muted">
            A Asael.tech, operada por <strong className="text-text">{controller.name}</strong>
            {controller.document && (
              <span className="font-mono text-[13px]">
                {' '}
                ({controller.document.label} {controller.document.value})
              </span>
            )}
            , é a controladora dos dados pessoais coletados através deste site, nos termos da LGPD.
          </p>
          <p className="mb-3.5 text-[15px] text-muted">{responsibleSection.contactParagraph}</p>

          <SectionHeading number="02" title="Quais dados coletamos" />
          <p className="mb-3.5 text-[15px] text-muted">{collectedDataSection.intro}</p>
          <div className="mb-6 mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b border-border px-3 py-2.5 text-left font-mono text-xs uppercase tracking-wide text-muted-2">
                    Dado
                  </th>
                  <th className="border-b border-border px-3 py-2.5 text-left font-mono text-xs uppercase tracking-wide text-muted-2">
                    Coletado quando
                  </th>
                </tr>
              </thead>
              <tbody>
                {collectedDataSection.items.map((item) => (
                  <tr key={item.field}>
                    <td className="border-b border-border px-3 py-3 align-top text-muted">
                      <strong className="text-text">{item.field}</strong>
                    </td>
                    <td className="border-b border-border px-3 py-3 align-top text-muted">
                      {item.collectedWhen}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-3.5 text-[15px] text-muted">{collectedDataSection.note}</p>

          <SectionHeading number="03" title="Para que usamos esses dados" />
          <ul className="mb-3.5 ml-[22px] list-disc text-[15px] text-muted">
            {purposeSection.items.map((item) => (
              <li key={item} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <p className="mb-3.5 text-[15px] text-muted">{purposeSection.note}</p>

          <SectionHeading number="04" title="Base legal para o tratamento" />
          <p className="mb-3.5 text-[15px] text-muted">{legalBasisSection.paragraph}</p>

          <SectionHeading number="05" title="Com quem compartilhamos seus dados" />
          <p className="mb-3.5 text-[15px] text-muted">{sharingSection.paragraph}</p>
          <div className="my-[18px] rounded-xl border border-border bg-surface px-6 py-5">
            <p className="text-sm text-muted">{sharingSection.infoBox}</p>
          </div>

          <SectionHeading number="06" title="Por quanto tempo guardamos seus dados" />
          <p className="mb-3.5 text-[15px] text-muted">{retentionSection.paragraph}</p>

          <SectionHeading number="07" title="Seus direitos como titular dos dados" />
          <p className="mb-3.5 text-[15px] text-muted">{rightsSection.intro}</p>
          <div className="my-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {rightsSection.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 rounded-[10px] border border-border bg-surface px-4 py-3.5 text-[13.5px] text-muted"
              >
                <span className="flex-shrink-0 font-mono text-green">›</span>
                {item}
              </div>
            ))}
          </div>
          <p className="mb-3.5 text-[15px] text-muted">{rightsSection.contactParagraph}</p>

          <SectionHeading number="08" title="Segurança dos dados" />
          <p className="mb-3.5 text-[15px] text-muted">{securitySection.paragraph}</p>

          <SectionHeading number="09" title="Alterações nesta política" />
          <p className="mb-3.5 text-[15px] text-muted">{changesSection.paragraph}</p>
        </div>
      </section>
    </div>
  )
}
