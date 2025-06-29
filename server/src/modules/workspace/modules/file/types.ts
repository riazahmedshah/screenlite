export type CreateFolderData = {
    name: string
    parentId?: string | null
    workspaceId: string
}

export type UpdateFolderData = {
    name: string
}

export type FolderTreeResult = {
    id: string
    parentId: string | null
}

export type ParentFolderTreeResult = {
    id: string
    name: string
    parentId: string | null
}

export type UpdateFileData = {
    name: string
    availabilityStartAt: string | null
    availabilityEndAt: string | null
    defaultDuration: number | null
}