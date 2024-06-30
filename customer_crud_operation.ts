import pool from './connection';
import { customer_store, customer_detail } from './customer';

async function checkDatabaseAndTable() {
	const client = await pool.connect();
     try {
        // Test database connection and get current user and database
        
        const result = await client.query('SELECT current_user, current_database()');
        console.log('Current user:', result.rows[0].current_user);
        console.log('Current database:', result.rows[0].current_database);

	// Check if table exists
        const tableCheck = await client.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE  table_schema = 'public'
                AND    table_name   = 'customer'
            );
        `);     
	console.log('Customer table exists:', tableCheck.rows[0].exists); 


        // If table exists, check its structure
        if (tableCheck.rows[0].exists) {
            const tableStructure = await client.query(`
                SELECT column_name, data_type 
                FROM information_schema.columns 
                WHERE table_name = 'customer';
            `);
            console.log('Table structure:', tableStructure.rows);
        }

    } catch (error) {
        console.error('Error checking database and table:', error);
    }finally {
        client.release();
     }
}
async function main() {
    
    try {
        await checkDatabaseAndTable();
	const customer_details = new customer_store();
	// Create a new customer
    	const new_customer: customer_detail = {
        customer_id: 116,
        first_name: 'John',
        last_name: 'Doe',
        contact_number: '123-4567890',
        address: '123 Main St, Anytown, ON',
        total_spent_amount: 0,
        registration_date: new Date('2024-01-01')
    };
    const created_customer = await customer_details.create(new_customer);
    console.log('Created a new Customer:', created_customer);

    // Read a customer
    const read_customer = await customer_details.read(created_customer.customer_id);
    console.log('Reading a Customer:', read_customer);

    // Update a customer
    const updated_customer = await customer_details.update(created_customer.customer_id, { total_spent_amount: 100.50 });
    console.log('Updated a Customer:', updated_customer);

    // Delete a customer
    const deleted_customer = await customer_details.delete(created_customer.customer_id);
    console.log('Deleted a Customer:', deleted_customer);
}catch(error){
	console.error('An error occurred:', error);
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);}
}finally {
        await pool.end();
    }
}
main().catch(console.error);
