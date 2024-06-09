# Deployment Guide

This project is deployed using [Vercel](https://vercel.com/). Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with Next.js.

The project uses [Supabase](https://supabase.com) as the PostgreSQL database hosting provider.

## Environment Variables

All project environment variables are stored in the `.env.example` file.

On top of the environment variables listed in the `.env.example` file, you will need to add the following environment variables for GitHub Actions to work:

- `VERCEL_ORG_ID`: required for Vercel CLI to work
- `VERCEL_PROJECT_ID`: required for Vercel CLI to work
- `VERCEL_TOKEN`: required for Vercel CLI authentication
- `VERCEL_TEAM_NAME`: required for Vercel `Promote` CLI to work
- `CHROMATIC_PROJECT_TOKEN`: deploying storybooks to chromatic

## Vercel

### Deploying the project

On each push to any branch, Vercel will automatically deploy the project to the preview environment.

This preview environment is a unique URL that allows you to test the changes before merging them into the main branch. Once the changes are merged into the main branch, Vercel will automatically deploy the project to the staging environment.

After a new release is ready, creating a new release on GitHub with Tags will trigger the [`promote-prod.yaml`](.github/workflows/promote-prod.yml) GitHub action and Vercel will automatically deploy the project to the production environment and promote it as the latest production version.

For more information, refer to the following resources:

- [Deploy based on tags/releases on Vercel](https://vercel.com/guides/can-you-deploy-based-on-tags-releases-on-vercel)
- [How can I use GitHub actions with Vercel](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)

## Supabase

This project uses Supabase as the database.

### Database Migrations

To run the database migrations, you will need the supabase database url as the value of the `DATABASE_URL` environment variable.

Our project uses [PrismaORM](https://prisma.io) to manage database migrations. To run the migrations, you can use the following command:

```sh
yarn prisma migrate dev
```

Refer to prisma's [migration documentation](https://www.prisma.io/docs/orm/prisma-migrate/getting-started) for more information on how to use prisma migrate.
