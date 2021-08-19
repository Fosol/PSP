import { AccessRequestStatus } from 'constants/accessStatus';

export interface IAccessRequestModel {
  id: number;
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  status: AccessRequestStatus;
  organization: string;
  role: string;
  note: string;
}
