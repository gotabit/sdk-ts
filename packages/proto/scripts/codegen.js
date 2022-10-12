import { join } from 'path'
import telescope from '@osmonauts/telescope'
import { sync as rimraf } from 'rimraf'

const protoDirs = [join(__dirname, '/../proto')]
const outPath = join(__dirname, '/../src/codegen')

rimraf(outPath)

telescope({
  protoDirs,
  outPath,
  options: {
    removeUnusedImports: true,
    prototypes: {
      excluded: {
        packages: ['cosmos.group.v1'],
      },
      methods: {
        fromJSON: false,
        toJSON: false,
      },
      parser: {
        keepCase: false,
      },
      typingsFormat: {
        duration: 'duration',
        timestamp: 'date',
        useExact: false,
      },
    },
    aminoEncoding: {
      enabled: true,
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: false,
      camelCase: false,
    },
  },
})
  .then(() => {
    console.log('✨ all done!')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
