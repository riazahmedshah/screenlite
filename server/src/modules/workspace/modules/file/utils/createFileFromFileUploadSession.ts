import { FileUploadSession } from '@generated/prisma/client.js'
import { prisma } from '@config/prisma.js'
import { FileService } from '../services/FileService.js'

export const createFileFromFileUploadSession = async (session: FileUploadSession) => {
    const mimeType = session.mimeType
    const fileName = FileService.sanitizeFileName(session.name)

    let fileType: 'video' | 'image' | 'audio' | undefined

    if (mimeType.startsWith('video/')) {
        fileType = 'video'
    } else if (mimeType.startsWith('image/')) {
        fileType = 'image'
    } else if (mimeType.startsWith('audio/')) {
        fileType = 'audio'
    }

    const uniqueName = session.path.split('/').pop() || fileName

    const file = await prisma.file.create({
        data: {
            name: fileName,
            extension: uniqueName.split('.').pop() || '',
            size: session.size,
            mimeType: mimeType,
            workspaceId: session.workspaceId,
            folderId: session.folderId,
            uploaderId: session.userId,
            path: session.path,
            createdAt: new Date(),
            type: fileType || 'unknown',
            processingStatus: 'pending',
        }
    })

    return file
}