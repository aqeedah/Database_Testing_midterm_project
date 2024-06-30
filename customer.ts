import { Pool, QueryResult } from 'pg';
import pool from './connection';

const TABLE_NAME = 'public.customer';

export interface customer_detail {
  customer_id: number;
  first_name: string;
  last_name: string;
  contact_number: string;
  address: string;
  total_spent_amount: number;
  registration_date: Date;
}

export interface customers {
  create(customer: customer_detail): Promise<customer_detail>;
  read(customer_id: number): Promise<customer_detail | null>;
  update(customer_id: number, customer: Partial<customer_detail>): Promise<customer_detail>;
  delete(customer_id: number): Promise<boolean>;
}

export class customer_store implements customers {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async create(customer: customer_detail): Promise<customer_detail> {
    const query = `
    INSERT INTO ${TABLE_NAME} (customer_id, first_name, last_name, contact_number, address, total_spent_amount, registration_date)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`;
    const values = [customer.customer_id, customer.first_name, customer.last_name, customer.contact_number, customer.address, customer.total_spent_amount, customer.registration_date];

    const result: QueryResult = await this.pool.query(query, values);
    return result.rows[0];
  }

  async read(customer_id: number): Promise<customer_detail | null> {
    const query = 'SELECT * FROM ${TABLE_NAME} WHERE customer_id = $1';
    const result: QueryResult = await this.pool.query(query, [customer_id]);
    return result.rows[0] || null;
  }

  async update(customer_id: number, customer: Partial<customer_detail>): Promise<customer_detail> {
    const fields = Object.keys(customer).map((key, index) => `${key} = $${index + 2}`).join(', ');
    const values = Object.values(customer);
    const query = `
    UPDATE ${TABLE_NAME} SET ${fields} WHERE customer_id = $1 
    RETURNING *`;
    const result: QueryResult = await this.pool.query(query, [customer_id, ...values]);
    return result.rows[0] || null;
  }

  async delete(customer_id: number): Promise<boolean> {
    const query = 'DELETE FROM ${TABLE_NAME}  WHERE customer_id = $1';
    const result: QueryResult = await this.pool.query(query, [customer_id]);
    return result.rowCount !== null && result.rowCount > 0; 
  }
}
