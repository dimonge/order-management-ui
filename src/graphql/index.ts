import * as DEV from "@/graphql/dev"
import * as PROD from "@/graphql/prod"

const __DEV__ = process.env.NODE_ENV === "development"

function apiEnv() {
  if (__DEV__) {
    return DEV
  }
  return PROD
}

export default apiEnv();