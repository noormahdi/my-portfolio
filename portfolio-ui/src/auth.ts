
import NextAuth from "next-auth"
import AzureADB2C from "next-auth/providers/azure-ad-b2c"

//#region Azure AD B2C Configuration
const B2C_TENANT = process.env.AUTH_AZURE_AD_B2C_TENANT;
const B2C_TENANT_ID = process.env.AUTH_AZURE_AD_B2C_TENANT_ID;
const B2C_POLICY = process.env.AUTH_AZURE_AD_B2C_POLICY;
const B2C_CLIENT_ID = process.env.AUTH_AZURE_AD_B2C_ID;
const AzureADB2CConfiguration = AzureADB2C(
  {
    issuer: `https://${B2C_TENANT}.b2clogin.com/${B2C_TENANT_ID}/v2.0/`,			
    authorization: {
      url: `https://${B2C_TENANT}.b2clogin.com/${B2C_TENANT}.onmicrosoft.com/${B2C_POLICY}/oauth2/v2.0/authorize`,
      params: { scope: B2C_CLIENT_ID }
    },
    token: `https://${B2C_TENANT}.b2clogin.com/${B2C_TENANT}.onmicrosoft.com/${B2C_POLICY}/oauth2/v2.0/token`,
    allowDangerousEmailAccountLinking: true      
  }
)
//#endregion

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [AzureADB2CConfiguration],
})