# Edge Config

This directory contains files used for Vercel's Edge Config store.

## Usage

### Adding New Configs

1. update JSON schema
   see https://json-schema.org/learn/getting-started-step-by-step

2. run the gen command, which will generate the TypeScript types for the schema
    
    ```bash 
    bun run ec:gen
    ```

3. commit the changes
