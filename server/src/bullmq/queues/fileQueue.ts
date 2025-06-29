import { bullmqConnection } from '@config/bullmq.js'
import { Queue } from 'bullmq'

export const fileQueue = new Queue('fileQueue', {
    connection: bullmqConnection,
    defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: 1000,
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 1000
        }
    }
})