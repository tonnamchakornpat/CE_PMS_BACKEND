import { IUser } from './User'

export interface IProject_Detail extends IUser {
  projectName: string
  abstract?: string
  projectNameEng?: string
  abstractEng?: string
  status?: string
  developers?: string[3]
  advisors: string[2]
  umpires: string[3]
  umpiresPoint?: IUmpiresPoint[]
  project_doc?: IProject_Doc[]
  progress?: IProgress[]
  createdAt: string
  updatedAt: string
}

export interface IUmpiresPoint {
  id: string
  teacherId: string
  pointDoc: IFile
  createdAt: string
}

export interface IProject_Doc {
  project_doc: IFile
  improvements?: string[]
  comments?: string[]
  send_status: string
}

export interface IProgress {
  documents: number[]
  product: number[]
  details?: string

  createAt: string
  updateAt: string
}

export interface IFile {
  fileName: string
  filePath: string
  size: string
}
