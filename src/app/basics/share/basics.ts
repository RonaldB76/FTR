export interface Basics {
  menu: any;
  headline: string;
  menuitems: any;
  name: string;
  href: string;
  titel: any;
  site: string;
  toolbar: string;
  footer: string;
  colors: any;
  value: string;
  viewValue: string;
}
export class Content implements Basics {
  constructor(
   public menu: any,
   public headline: string,
   public menuitems: any,
   public name: string,
   public href: string,
   public titel: any,
   public site: string,
   public toolbar: string,
   public footer: string,
   public colors: any,
   public value: string,
   public viewValue: string
  ) {}
}
