import { 
    integer, numeric, pgTable, serial, varchar
} from 'drizzle-orm/pg-core';


// Budget Schema
export const Budgets = pgTable('budgets', {
    id: serial('id').primaryKey(), 
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    Icon: varchar('icon'),
    createdBy: varchar('createdby').notNull() 
})

// Income Schema
export const Incomes = pgTable('incomes', {
    id: serial('id').primaryKey(), 
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    Icon: varchar('icon'),
    createdBy: varchar('createdby').notNull() 
})

// Expenses Schema
// Income Schema
export const Expenses = pgTable('expenses', {
    id: serial('id').primaryKey(), 
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    
    // Linking it to the budget schema
    budgetId: integer('budgetId').references(() => Budgets.id),
    createdBy: varchar('createdby').notNull() 
})