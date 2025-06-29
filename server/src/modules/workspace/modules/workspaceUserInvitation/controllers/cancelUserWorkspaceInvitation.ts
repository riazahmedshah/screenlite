import { Request, Response } from 'express'
import { ResponseHandler } from '@utils/ResponseHandler.js'
import { cancelUserWorkspaceInvitationSchema } from '../schemas/workspaceUserInvitationSchemas.js'
import { WorkspaceUserInvitationRepository } from '../repositories/WorkspaceUserInvitationRepository.js'

export const cancelUserWorkspaceInvitation = async (req: Request, res: Response) => {
    const validation = cancelUserWorkspaceInvitationSchema.safeParse(req.query)

    if (!validation.success) {
        return ResponseHandler.zodError(req, res, validation.error.errors)
    }

    const { workspaceUserInvitationId } = validation.data

    const workspaceUserInvitation = await WorkspaceUserInvitationRepository.find(workspaceUserInvitationId)

    if (!workspaceUserInvitation) {
        return ResponseHandler.notFound(res)
    }

    const isPending = workspaceUserInvitation.status === WorkspaceUserInvitationRepository.STATUS.PENDING

    if(!isPending) {
        return ResponseHandler.validationError(req, res, {
            workspaceUserInvitationId: 'INVITATION_NOT_PENDING',
        })
    }

    const updatedInvitation = await WorkspaceUserInvitationRepository.cancelInvitation(workspaceUserInvitationId)
   
    ResponseHandler.json(res, {
        invitation: updatedInvitation
    })
}
