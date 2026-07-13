import Button from '../components/ui/Button'
import PriceCard from '../components/sections/PriceCard'
import AddOnRow from '../components/sections/AddOnRow'
import { addOns, pricingTiers } from '../data/pricing'
import { EMAIL_URL, WHATSAPP_URL } from '../data/contact'

export default function Precos() {
  return (
    <>
      <section className="relative z-10 py-16 md:py-24">
        <div className="wrap">
          <div className="mb-3 max-w-[600px]">
            <div className="font-mono text-[12.5px] uppercase tracking-wide text-blue">Investimento</div>
            <h1 className="mt-2.5 text-[clamp(26px,4vw,36px)] font-extrabold tracking-tight">
              Preços claros, sem letra miúda.
            </h1>
          </div>
          <p className="mb-11 max-w-[560px] text-sm text-muted">
            Valores de referência para escopo padrão — o valor final é fechado após entendermos seu projeto
            em detalhe.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PriceCard key={tier.name} tier={tier} />
            ))}
          </div>

          <div className="mt-16">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2.5">
              <h3 className="text-lg font-bold">Add-ons — agregue a qualquer pacote</h3>
              <span className="font-mono text-[12.5px] text-muted-2">// modular por design</span>
            </div>
            <div>
              {addOns.map((addOn) => (
                <AddOnRow key={addOn.name} addOn={addOn} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 text-center md:py-[100px]">
        <div className="wrap">
          <h2 className="mx-auto max-w-[640px] text-[clamp(28px,5vw,44px)] font-extrabold tracking-tight">
            Pronto pra tirar seu projeto do papel?
          </h2>
          <p className="mt-4 text-[17px] text-muted">
            Resposta em até 24h com um orçamento detalhado — sem compromisso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="primary">
              Falar no WhatsApp
            </Button>
            <Button href={EMAIL_URL} variant="ghost">
              Enviar e-mail
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
