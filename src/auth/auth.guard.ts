import { CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from "./jwtConstants";

export class AuthGuard implements CanActivate {

    async canActivate(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context).getContext();
        if (!ctx.req.headers.authorization) {
            return false;
        }
        ctx.user = await this.validateToken(ctx.req.headers.authorization);
        return true;
    }



    async validateToken(auth: string) {
        console.log(auth);
        if (auth.split(' ')[0] !== 'Bearer') {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        const token = auth.split(' ')[1];

        try {
            const decoded = jwt.verify(token, jwtConstants.secret);
            return decoded;
        } catch (err) {
            const message = 'Token error: ' + (err.message || err.name);
            throw new HttpException(message, HttpStatus.UNAUTHORIZED);
        }
    }
}