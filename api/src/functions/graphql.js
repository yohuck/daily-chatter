import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import { stripeSchemas, stripeServices } from 'redwoodjs-stripe/api'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: {} },
  directives,
  sdls: { ...sdls, ...stripeSchemas },
  services: { ...services, ...stripeServices },
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
