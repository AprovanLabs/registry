/**
 * Groups facade over the identity store: group CRUD, user-group membership,
 * and tool grants. Auth-cache invalidation on membership mutations happens
 * inside the store (identity/store.ts).
 */

import { getIdentityStore } from "./identity/store.js";
import type { GroupRecord, ToolGrantRecord } from "./identity/types.js";

export type {
  GroupRecord,
  ToolGrantRecord,
  UserGroupRecord,
} from "./identity/types.js";

// ---------------------------------------------------------------------------
// Groups CRUD
// ---------------------------------------------------------------------------

export async function createGroup(
  workspaceId: string,
  name: string,
  description?: string,
): Promise<GroupRecord> {
  return getIdentityStore().groups.create(workspaceId, name, description);
}

export async function listGroups(workspaceId: string): Promise<GroupRecord[]> {
  return getIdentityStore().groups.list(workspaceId);
}

export async function getGroup(
  workspaceId: string,
  groupId: string,
): Promise<GroupRecord | undefined> {
  return getIdentityStore().groups.get(workspaceId, groupId);
}

export async function updateGroup(
  workspaceId: string,
  groupId: string,
  patch: { name?: string; description?: string },
): Promise<GroupRecord | undefined> {
  return getIdentityStore().groups.update(workspaceId, groupId, patch);
}

/** Delete a group; its grants (and, relationally, its memberships) go too. */
export async function deleteGroup(
  workspaceId: string,
  groupId: string,
): Promise<boolean> {
  return getIdentityStore().groups.remove(workspaceId, groupId);
}

// ---------------------------------------------------------------------------
// UserGroups (user <-> group bindings)
// ---------------------------------------------------------------------------

export async function addUserToGroup(
  workspaceId: string,
  groupId: string,
  userId: string,
): Promise<void> {
  await getIdentityStore().groups.members.add(workspaceId, groupId, userId);
}

export async function removeUserFromGroup(
  workspaceId: string,
  groupId: string,
  userId: string,
): Promise<boolean> {
  return getIdentityStore().groups.members.remove(workspaceId, groupId, userId);
}

/** User ids in a group (admin listing). */
export async function listGroupUserIds(
  workspaceId: string,
  groupId: string,
): Promise<string[]> {
  return getIdentityStore().groups.members.listUserIdsForGroup(workspaceId, groupId);
}

// ---------------------------------------------------------------------------
// GroupToolGrants
// ---------------------------------------------------------------------------

export async function addToolGrant(
  workspaceId: string,
  groupId: string,
  provider: string,
  operation: string,
): Promise<ToolGrantRecord> {
  return getIdentityStore().groups.toolGrants.add(workspaceId, groupId, provider, operation);
}

export async function removeToolGrant(
  workspaceId: string,
  groupId: string,
  provider: string,
  operation: string,
): Promise<boolean> {
  return getIdentityStore().groups.toolGrants.remove(workspaceId, groupId, provider, operation);
}

export async function listToolGrants(
  workspaceId: string,
  groupId: string,
): Promise<ToolGrantRecord[]> {
  return getIdentityStore().groups.toolGrants.list(workspaceId, groupId);
}

/**
 * Check whether any of the given groupIds has a tool grant covering
 * (provider, operation). A grant with operation="*" is a wildcard.
 */
export async function checkToolGrant(
  workspaceId: string,
  groupIds: string[],
  provider: string,
  operation: string,
): Promise<boolean> {
  return getIdentityStore().groups.toolGrants.check(workspaceId, groupIds, provider, operation);
}
