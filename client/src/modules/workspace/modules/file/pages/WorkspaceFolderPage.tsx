import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { useDeferredLoading } from '@shared/hooks/useDeferredLoading'
import { workspaceFolderQuery, WorkspaceFolderRequestResponse } from '../api/workspaceFolder'
import { CreateFolderButton } from '../components/buttons/CreateFolderButton'
import { Button } from '@shared/ui/buttons/Button'
import { Folders } from '../components/Folders'
import { DeleteFoldersButton } from '../components/buttons/DeleteFoldersButton'
import { useWorkspace } from '@modules/workspace/hooks/useWorkspace'

const WorkspaceFolder = ({ data }: { data: WorkspaceFolderRequestResponse }) => {
    return (
        <div>
            <DeleteFoldersButton folderIds={ data.folder.id }>
                <Button>
                    Delete folder
                </Button>
            </DeleteFoldersButton>
            <CreateFolderButton parentId={ data.folder.id }>
                <Button>
                    Create folder
                </Button>
            </CreateFolderButton>
            <div>
                { data.folder.name }
            </div>
            <Folders parentId={ data.folder.id }/>
        </div>
    )
}

export const WorkspaceFolderPage = () => {
    const params = useParams<{ folderId: string }>()
    const workspace = useWorkspace()
    
    const { data, isLoading, isSuccess } = useQuery(workspaceFolderQuery({
        folderId: params.folderId!,
        workspaceId: workspace.id
    }))

    const deferredIsLoading = useDeferredLoading(isLoading, { delay: 0, minDuration: 500 })

    if(!isSuccess) {
        return (
            <div>
                { deferredIsLoading ? 'Loading...' : 'Error' }
            </div>
        )
    }

    return (
        <div>
            <WorkspaceFolder data={ data }/>
        </div>
    )
}
