export interface IJournal {

  ID?: number;
  title: string ;
  author?: string;
  image: string;
  content: string;
  date?: string ;
  categories: string[];

}
/* question marks(?) next to variable names represent optional properties. Optional
 * properties do not need to be added. */
