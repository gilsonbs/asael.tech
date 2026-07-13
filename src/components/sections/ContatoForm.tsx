import { useState, type FormEvent } from 'react'
import Button from '../ui/Button'

type ProjectType = 'Site' | 'Aplicativo' | 'SaaS / Sistema' | 'Ainda não sei'

interface FormState {
  nome: string
  email: string
  tipo: ProjectType
  mensagem: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  nome: '',
  email: '',
  tipo: 'Site',
  mensagem: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.nome.trim()) errors.nome = 'Informe seu nome.'
  if (!form.email.trim()) {
    errors.email = 'Informe seu e-mail.'
  } else if (!EMAIL_PATTERN.test(form.email)) {
    errors.email = 'Informe um e-mail válido.'
  }
  if (!form.mensagem.trim()) errors.mensagem = 'Conte um pouco sobre o projeto.'
  return errors
}

const fieldClasses =
  'w-full rounded-lg border border-border bg-surface-2 px-3.5 py-3 text-sm text-text outline-none transition-colors focus:border-blue'

export default function ContatoForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (!endpoint) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-border bg-surface p-9 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green/10 text-2xl text-green">
          ✓
        </div>
        <h3 className="mt-5 text-lg font-bold">Mensagem enviada com sucesso.</h3>
        <p className="mt-2 text-sm text-muted">
          Recebemos seu pedido de orçamento — respondemos em até 24h úteis.
        </p>
      </div>
    )
  }

  return (
    <form className="rounded-2xl border border-border bg-surface p-9" onSubmit={handleSubmit} noValidate>
      <div className="mb-5">
        <label htmlFor="nome" className="mb-2 block text-[13px] font-semibold text-muted">
          Nome
        </label>
        <input
          id="nome"
          type="text"
          placeholder="Seu nome"
          value={form.nome}
          onChange={(e) => updateField('nome', e.target.value)}
          aria-invalid={Boolean(errors.nome)}
          aria-describedby={errors.nome ? 'nome-error' : undefined}
          className={fieldClasses}
        />
        {errors.nome && (
          <p id="nome-error" className="mt-1.5 text-xs text-orange">
            {errors.nome}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="mb-2 block text-[13px] font-semibold text-muted">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="voce@empresa.com"
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={fieldClasses}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-orange">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="tipo" className="mb-2 block text-[13px] font-semibold text-muted">
          Tipo de projeto
        </label>
        <select
          id="tipo"
          value={form.tipo}
          onChange={(e) => updateField('tipo', e.target.value as ProjectType)}
          className={fieldClasses}
        >
          <option>Site</option>
          <option>Aplicativo</option>
          <option>SaaS / Sistema</option>
          <option>Ainda não sei</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="mensagem" className="mb-2 block text-[13px] font-semibold text-muted">
          Conte um pouco sobre o projeto
        </label>
        <textarea
          id="mensagem"
          placeholder="O que você precisa, prazo estimado, referências..."
          value={form.mensagem}
          onChange={(e) => updateField('mensagem', e.target.value)}
          aria-invalid={Boolean(errors.mensagem)}
          aria-describedby={errors.mensagem ? 'mensagem-error' : undefined}
          className={`min-h-[100px] resize-y ${fieldClasses}`}
        />
        {errors.mensagem && (
          <p id="mensagem-error" className="mt-1.5 text-xs text-orange">
            {errors.mensagem}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className="mb-4 text-xs text-orange">
          Não foi possível enviar sua mensagem agora. Tente novamente ou fale pelo WhatsApp.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === 'submitting'} className="mt-1.5 w-full">
        {status === 'submitting' ? 'Enviando...' : 'Enviar orçamento'}
      </Button>
    </form>
  )
}
