export interface BuildPaths {
  entry: string
  html: string
  public: string
  output: string
  src: string
  // pages:string;
  // features: string;
  // widgets: string;
  // shared: string;
  // app: string;
  // entities: string;
  // types: string;
}

export type BuildMode = 'production' | 'development'

export interface BuildOptions {
  port: number
  paths: BuildPaths
  mode: BuildMode
  analyzer?: boolean
}
