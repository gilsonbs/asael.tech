import { CONTACT_EMAIL } from './contact'

export interface ControllerDocument {
  label: string
  value: string
}

export interface Controller {
  name: string
  document: ControllerDocument | null
  contactEmail: string
}

export interface CollectedDataItem {
  field: string
  collectedWhen: string
}

export const lastUpdated = '12 de julho de 2026'

export const controller: Controller = {
  name: 'Gilson Barreto',
  document: null,
  contactEmail: CONTACT_EMAIL,
}

export const intro =
  'Esta política explica quais dados a Asael.tech coleta através deste site, para que servem e quais direitos você tem sobre eles, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).'

export const responsibleSection = {
  contactParagraph: `Para qualquer assunto relacionado a esta política ou aos seus dados, o contato é: ${CONTACT_EMAIL}.`,
}

export const collectedDataSection = {
  intro: 'Coletamos apenas os dados que você mesmo(a) fornece ao preencher o formulário de contato do site:',
  items: [
    { field: 'Nome', collectedWhen: 'Preenchimento do formulário de contato' },
    { field: 'E-mail', collectedWhen: 'Preenchimento do formulário de contato' },
    { field: 'Tipo de projeto de interesse', collectedWhen: 'Preenchimento do formulário de contato' },
    { field: 'Mensagem enviada', collectedWhen: 'Preenchimento do formulário de contato' },
  ] satisfies CollectedDataItem[],
  note: 'Este site não utiliza cookies de rastreamento nem ferramentas de analytics de terceiros no momento. Caso isso mude no futuro, esta política será atualizada antes da ativação de qualquer nova coleta.',
}

export const purposeSection = {
  items: [
    'Responder à sua solicitação de orçamento ou contato',
    'Entender o escopo do seu projeto antes de uma conversa comercial',
    'Manter um histórico de comunicação para fins de organização interna',
  ],
  note: 'Não utilizamos seus dados para envio de newsletter, marketing por e-mail em massa, ou qualquer finalidade além da comunicação direta relacionada à sua solicitação.',
}

export const legalBasisSection = {
  paragraph:
    'O tratamento desses dados se baseia no legítimo interesse em responder a solicitações de contato voluntariamente enviadas, e no consentimento dado ao preencher e enviar o formulário.',
}

export const sharingSection = {
  paragraph:
    'O formulário de contato deste site é processado pela Formspree, plataforma de terceiros responsável por encaminhar as mensagens enviadas para o e-mail da Asael.tech. Os dados podem ser processados em servidores localizados fora do Brasil, conforme a infraestrutura própria do Formspree.',
  infoBox:
    'Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing. O único compartilhamento existente é o necessário para o funcionamento técnico do formulário de contato.',
}

export const retentionSection = {
  paragraph:
    'Mensagens de contato são mantidas pelo tempo necessário para conduzir a comunicação comercial e, caso o projeto avance, pelo período de vigência do relacionamento contratual, observados os prazos legais aplicáveis. Você pode solicitar a exclusão a qualquer momento, conforme os direitos descritos abaixo.',
}

export const rightsSection = {
  intro: 'Conforme o artigo 18 da LGPD, você tem direito a:',
  items: [
    'Confirmar a existência de tratamento dos seus dados',
    'Acessar os dados que temos sobre você',
    'Corrigir dados incompletos ou desatualizados',
    'Solicitar a eliminação dos seus dados',
    'Solicitar a portabilidade dos dados',
    'Revogar o consentimento a qualquer momento',
  ],
  contactParagraph: `Para exercer qualquer um desses direitos, envie um e-mail para ${CONTACT_EMAIL} com sua solicitação — respondemos em até 15 dias úteis.`,
}

export const securitySection = {
  paragraph:
    'Adotamos medidas razoáveis para proteger os dados coletados contra acesso não autorizado, perda ou alteração, incluindo o uso de conexão segura (HTTPS) neste site. Nenhum sistema é 100% livre de risco, e nos comprometemos a agir rapidamente em caso de qualquer incidente de segurança que possa afetar seus dados.',
}

export const changesSection = {
  paragraph:
    'Esta política pode ser atualizada periodicamente para refletir mudanças nas práticas do site ou na legislação aplicável. A data da última atualização está sempre indicada no topo desta página.',
}
