import Simplified from './Simplified';
import SimplifiedUser from './SimplifiedUser';

export default interface Project {
  id: number;
  name: string;
  description: string;
  hugeTasks: Array<Simplified>;
  usersAssigned: Array<SimplifiedUser>;
}
