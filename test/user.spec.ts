import { afterAll, beforeAll, describe, it } from "vitest"
import { app } from "../src/app"
import { beforeEach } from "node:test"
import { execSync } from "child_process"
import request from "supertest"

describe('user routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(async () => {
    execSync('npm run knex migrate:rollback --all') 
    execSync('npm run knex migrate:latest') 
  })

  it('should be able create a new user', async () => {
    await request(app.server)
    .post('/user')
    .send({
      email: "gabriel@gmail.com",
      name: 'gabriel',
      session_id: "13123"
    })
    .expect(201)
  })
})