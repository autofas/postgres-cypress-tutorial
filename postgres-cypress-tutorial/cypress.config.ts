import { defineConfig } from 'cypress';
import { Postgres } from './cypress/support/postgres/postgres.ts';

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('task', {
        pgAddUser: async ({ id, user_name, email }) => {
          const postgres = new Postgres();
          return await postgres.insertUser(id, user_name, email); // tasks should return null or a value
        }
      });
    },
  },
});