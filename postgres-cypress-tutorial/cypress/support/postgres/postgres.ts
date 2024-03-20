import sql from './postgres-setup'

export class Postgres {
    async insertUser(id: number, user_name: string, email: string) {
      await sql`INSERT INTO users (id, user_name, email)
      VALUES (${id}, ${user_name}, ${email});`;
      return 0;
    }
}