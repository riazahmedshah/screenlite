const STATUS = {
	UI: "UI",
	DONE: "Done",
	IN_PROGRESS: "In Progress",
	PLANNED: "Planned"
}

export const features = [
	{
		section: "Authentication & Security",
		features: {
			[STATUS.DONE]: [
				"Sign in",
				"Sign out",
				"Verify 2FA",
				"Set 2FA",
				"Disable 2FA",
				"Change password",
				"Change email",
				"Terminate session",
				"Terminate all sessions",
				"List active sessions"
			],
			[STATUS.IN_PROGRESS]: [
				"Email verification",
				"Password reset"
			]
		}
	},
	{
		section: "User Profile",
		features: {
			[STATUS.DONE]: [
				"Set profile picture",
				"Set profile name"
			],
			[STATUS.PLANNED]: [
				"Language preference",
				"Delete profile picture"
			],
			[STATUS.IN_PROGRESS]: [
				"Delete account"
			],
			[STATUS.UI]: [
				"List user workspaces",
				"List user invitations",
			]
		}
	},
	{
		section: "Workspace",
		features: {
			[STATUS.UI]: [
				"Create workspace",
				"View workspace",
				"View entity counts",
				"List invitations",
				"List folders",
				"Update workspace",
			],
			[STATUS.DONE]: [
				"Dashboard"
			]
		}
	},
	{
		section: "Files",
		features: {
			[STATUS.PLANNED]: [
				"Storage setup documentation"
			],
			[STATUS.IN_PROGRESS]: [
				"Video preview",
				"Metadata generation",
				"Optimized thumbnail generation",
				"Auto-update playlists when related files are deleted",
				"Serve static content",
				"Clear trash",
				"Force delete files/folders",
				"S3 storage",
				"Local storage"
			],
			[STATUS.UI]: [
				"Generate thumbnails",
				"Upload files",
				"Create folder",
				"Move to folder",
				"Trash folders",
				"List files",
				"List folders",
				"List trash",
				"Drag and drop files/folders management",
			]
		}
	},
	{
		section: "Screens",
		features: {
			[STATUS.UI]: [
				"List screens",
				"Connect device",
				"Delete screen",
				"Disconnect device"
			],
			[STATUS.DONE]: [
				"Create screen"
			]
		}
	},
	{
		section: "Playlists",
		features: {
			[STATUS.DONE]: [
				"Create playlist"
			],
			[STATUS.UI]: [
				"List playlists",
				"Edit playlist",
				"Copy playlist",
				"Change playlist layout",
				"Add screens to playlist",
				"Remove screens from playlist",
				"Restore playlists",
				"Update playlist items"
			]
		}
	},
	{
		section: "Playlist Layouts",
		features: {
			[STATUS.UI]: [
				"View layout",
				"View layout playlists",
				"Create layout",
				"Update layout",
				"Delete layout"
			]
		}
	},
	{
		section: "Playlist Schedules",
		features: {
			[STATUS.UI]: [
				"Create schedule",
				"Update schedule",
				"Delete schedule"
			]
		}
	}
]
