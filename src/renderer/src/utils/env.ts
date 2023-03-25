import _ from 'lodash'

const env: ImportMetaEnv = _.cloneDeep(import.meta.env)

Object.entries(env).forEach(([key, value]) => {
  if (value === 'true' || value === 'false') {
    env[key] = value === 'true'
  }
  if (/^\d+$/.test(value)) env[key] = Number(value)
  if (value == 'null') env[key] = null
  if (value == 'undefined') env[key] = undefined
})

export default env
