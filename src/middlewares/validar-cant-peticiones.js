import rateLimit from 'express-rate-limit'

const apiLimiter = rateLimit ({
    windowMs: 15 * 60 * 1000,
    max: 500
})

export default apiLimiter