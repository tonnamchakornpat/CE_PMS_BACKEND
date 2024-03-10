import { format, createLogger, transports } from 'winston'

const { timestamp, combine, errors, json } = format

export function buildLogger() {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
  })
}
