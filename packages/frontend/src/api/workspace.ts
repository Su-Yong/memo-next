import { WorkspaceRequest, WorkspaceResponse } from '@suyong/memo-core';
import axios from './config';

export interface FetchWorkspace {
  (id?: 'my'): Promise<WorkspaceResponse[]>;
  (id: number): Promise<WorkspaceResponse>;
}
export const fetchWorkspace: FetchWorkspace = async (params = 'my') => {
  const response = await axios.get(`/workspaces/${params}`);

  return response.data;
};

export const createWorkspace = async (workspace: WorkspaceRequest): Promise<WorkspaceResponse> => {
  const response = await axios.post(`/workspaces`, workspace);

  return response.data;
};
