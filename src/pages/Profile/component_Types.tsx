export interface Basic_Props_type {
  bgcolor?: string;
  color?: string;
  lineColor?: string;
}
export interface Name_Props_Type extends Basic_Props_type {}
export interface DisplayFlex_Props_Type {
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  color?: string;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  height?: string; // It is in vh (_vewport height_)
  width?: string; // It is in vw (_vewport width_)
  backgroundColor?: string;
  gap?: string;
  padding?: string;
  // Media Query (Medium)
  M_flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  M_alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  M_justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  M_height?: string; // It is in vh (_vewport height_)
  M_width?: string; // It is in vw (_vewport width_)
  M_backgroundColor?: string;
  M_gap?: string;
  M_padding?: string;
}
export interface Box_Props_Type {
  width?: string;
  hovercolor?: string;
  height?: string;
  color?: string;
  bgcolor?: string;
}

export interface Basic_Props_type {
  bgcolor?: string;
  color?: string;
  lineColor?: string;
}
export interface Name_Props_Type extends Basic_Props_type {}
export interface Input_Props_Type {
  color?: string;
}
export interface Focus_Props_Type {
  text?: string;
  color?: string;
  bgcolor?: string;
  height?: string;
  lineColor?: string;
}
export interface Title_Props_Type {
  color?: string;
}
export interface Skills_Props_Type extends Title_Props_Type {}

export interface Selection_Props_Type extends Basic_Props_type {}
