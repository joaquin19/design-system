export interface IGridFields {
  id: string
  name: string
  phone: string | null
  email: string
  firstName: string
  lastName?: string | null
  createdAt: string
  paymentSource: any
  // paymentSources?: []
  // identifier: string
  // subscriptions?: []
  // createdAtFormat?: string | null
  // lastFourDigits?: string | null
  // cardBrand?: string | null
  paymentSources?: PaymentSource[]
  identifier: string
  subscriptions?: Subscription[]
}

export interface PaymentSource {
  cardDefault?: boolean
  card?: Card
  source?: string
  type?: string
}

export interface Card {
  token?: string
  expYear?: string
  expMonth?: string
  lastFourDigits?: string
  cardHolderName?: string
  brand?: string
  deviceFingerPrint?: string
  ipAddress?: string
  bank?: string
  type?: string
  country?: string
  scheme?: string
  cardPrefix?: string
  preAuth?: boolean
  vault?: boolean
  simpleUse?: boolean
}

export interface Subscription {
  expiryCount?: number
  amount?: number
  plan?: Plan
  id?: string
}

export interface Plan {
  id?: string
  name?: string
  amount?: number
  currency?: string
  interval?: string
  frecuency?: number
  trialDays?: number
  expiryCount?: number
  active?: boolean
  variableAmount?: boolean
  selfRetries?: boolean
  selfRenewal?: boolean
  terminalView?: boolean
  deprecated?: boolean
  dayStartPayment?: number
  identifier?: string
  nextBillingStart?: string
  createdAt?: string
  subscriptions?: Subscription2[]
}

export interface Subscription2 {
  id?: string
  name?: string
  phone?: string
  email?: string
  firstName?: string
  lastName?: string
  createdAt?: string
  paymentSource?: any
  paymentSources?: any
  identifier?: string
  subscriptions?: any
}
