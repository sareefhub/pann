import axios from "axios"
import appConfig from "config"
import jwt from 'jsonwebtoken'
import Koa from 'koa'

let public_key: string | null = null

export interface AuthData {
    username: string
    isStaff: boolean
}

export async function  initSsoCert() {
    const result = await axios.get(appConfig.ssoIssuer)
    public_key = `-----BEGIN PUBLIC KEY-----\n${result.data.public_key}\n-----END PUBLIC KEY-----\n`
}

export async function verifyJwt(token: string){
    return new Promise<any>((resolve, reject) => {
        jwt.verify(token, public_key as jwt.Secret, { issuer: appConfig.ssoIssuer, algorithms: ['RS256'] },(err,decoded) => {
            if(err){
                reject(err)
            }else{
                resolve(decoded)
            }
        })
    })
}

const BEARER_PREFIX = 'Bearer '
export async function authMiddleware(ctx: Koa.Context, next: () => Promise<any>) {
    const bearer = ctx.request.headers['authorization']
    if(bearer?.startsWith(BEARER_PREFIX)){
        const token = bearer.substring(BEARER_PREFIX.length)
        const decoded = await verifyJwt(token)
        const authData: AuthData = {
            username: decoded.prefered_username as string,
            isStaff: (decoded.groups as string[])?.indexOf('staff') >= 0
        }
        ctx.state.authData = authData
        await next()
        return
    }
    ctx.response.status = 401    
}

export default {}