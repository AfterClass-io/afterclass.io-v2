# Edge Config

This directory contains files used for Vercel's Edge Config store.

why use EdgeConfig?

- no need for new prod deployment when making changes to configs
  - to change a config, we would need to push to the `main` branch, which would still trigger a rebuild & prod:staged deployment due to automation, but live prod wont need to be changed
- easier rollback of features
- faster load times - latencies can very quickly add up, edgeconfig takes single digit ms to load
- simple json, can be moved anywhere, no need to rely on ecfg if not needed

## Usage

### Adding New Configs

1. update zod schema in `src/server/ecfg/config.ts`
2. update the config json in `src/server/ecfg/config.json` to match the desired values on EdgeConfig
3. import the zod schema and use it as required
4. commit & push the changes
