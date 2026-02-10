import rateLimit from 'express-rate-limit'

const createRateLimiter = (max)=>{
    return rateLimit({
        windowMs : 15 * 60 * 1000,
        max : max,
        message : "Too many requests. Please try again later.",
        standardHeaders : true,
        legacyHeaders : false
    })
}

const limiters = {
    admin : createRateLimiter(4),
    client : createRateLimiter(100),
    vendor : createRateLimiter(60),
    driver : createRateLimiter(20),
    unauth : createRateLimiter(20)
}

export const roleRateLimiter = (req, res, next)=>{
    if(req.user && req.user.userType){
        const limiter = limiters[req.user.userType]
        return limiter(req, res, next)
    }
    return limiters.unauth(req, res, next)
}
