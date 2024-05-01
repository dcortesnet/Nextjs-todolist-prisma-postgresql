# Nextjs Todolist Prisma PostgreSQL &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Prisma init

The command npx prisma init is used to initialize a Prisma project. Prisma is an open-source database toolkit that provides an Object-Relational Mapping (ORM) layer for working with databases in your Node.js applications. (Default PostgreSQL)

```bash
npx prisma init
```

## Prisma migrate

The command npx prisma migrate dev --name init is used to create a new migration for your database.

```bash
npm run prisma:migrate
```

## Prisma generate

The command npx prisma generate is used to generate the Prisma client code for your project. Prisma is an Object-Relational Mapping (ORM) tool that allows you to interact with your database using a type-safe API.

When you run npx prisma generate, it triggers the Prisma CLI (Command Line Interface) to generate the necessary code based on your Prisma schema file. The Prisma schema file defines the structure of your database tables, relationships, and other configurations.

```bash
npm run prisma:generate
```