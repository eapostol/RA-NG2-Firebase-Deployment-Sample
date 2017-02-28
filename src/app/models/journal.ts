import { IJournal } from './i-journal';

const DC:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus tristique libero sollicitudin commodo. Vestibulum in quam aliquam, gravida lacus euismod, egestas felis. Nullam posuere suscipit turpis, a laoreet metus cursus non. Cras mi mi, egestas ut dignissim sed, porta id ex. Donec eleifend pellentesque euismod. Suspendisse id enim tortor. Sed ante odio, blandit sit amet ligula eget, bibendum laoreet sapien. Integer rhoncus neque ut dictum dignissim. Mauris aliquet et velit vel convallis. Morbi tincidunt eget velit sit amet dignissim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros sem, porttitor at efficitur vel, malesuada id purus. Integer lobortis nec nibh et sagittis. Donec viverra massa nec urna pretium vulputate. Phasellus non vestibulum odio, a mollis libero. Vivamus porta nisl tempus lacus vehicula, vel vulputate risus consequat. Mauris rutrum mauris tellus, a maximus lectus egestas eu. Morbi id laoreet dui. Sed pulvinar porta lacinia. Phasellus sit amet interdum lorem, nec faucibus est. Maecenas vel metus nisi. Nullam eu venenatis elit. Nam rutrum dictum maximus. Pellentesque ipsum nisl, dapibus in neque et, placerat ullamcorper massa. Donec at viverra felis. Donec efficitur in nisi sed posuere.`;

export class Journal implements IJournal {

  /* commented out properties are optional as defined by the interface  */
  ID: number = 0;
  title: string = "";
  author: string = "";
  image: string = "";
  content: string = "";
  date: string = "";
  categories: string[] = [];

  constructor(jTitle:string = "default title", jCategories:Array<string> = ['this','that','something else'], jImage:string = 'http://bit.ly/webdevicon-png',jContent:string = DC){
    this.title = jTitle;
    this.categories = jCategories;
    this.image = jImage;
    this.content = jContent;
  }


}
