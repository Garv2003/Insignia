import { Hono } from 'hono'
import mongoose from 'mongoose'
import { graphqlServer } from '@hono/graphql-server'
import { buildSchema } from 'graphql'
import { logger } from 'hono/logger'
import { secureHeaders } from 'hono/secure-headers'

const app = new Hono()

app.use(logger())
app.use(secureHeaders())

app.get('/', (c) => {
  return c.text('Testing Hono Server')
})

const schema = buildSchema(`
type Logo {
  id: ID
  name: String
  image: String
  user_id: ID
}

type Query {
  hello: String
  SaveLogo(input: SaveLogoInput):Logo
}

input SaveLogoInput {
  name: String
  image: String
}
`)

app.use(
  async (ctx, next) => {
    const token = ctx.req.header('authorization')
    console.log(token)
    await next()
  })

const rootResolver = (ctx) => {
  return {
    hello: () => {
      return 'Hello World'
    },
    SaveLogo: async (args) => {
      console.log(args)
      const { name, image } = args.input
      console.log(args)
      return {
        id: '1',
        name,
        image,
      }
    }
  }
}

app.use(
  '/graphql',
  graphqlServer({
    schema,
    rootResolver,
  })
)

mongoose.connect('mongodb://localhost:27017/insignia').then(() => {
  console.log('Connected to MongoDB')
})
  .catch((err) => {
    console.error(err)
  })

export default app

