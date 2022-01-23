import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Item } from '../../data-access/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent  {
  @Input() itemObject: Item;
  @Input() selectedOnCreate: boolean;
  @Output() clickDeleteEvent = new EventEmitter<number>();
  @Input() remList_1: string = 'My 1.Reminder List';
  //@Input() listlength: number = undefined;
 @ViewChild('myInput') myInput: ElementRef;
/*ngAfterViewInit(): void {
    if (this.selectedOnCreate) {
      this.myInput.nativeElement.focus();
    }
  }*/
  isVisible:boolean=false
  setVisible(){
    this.isVisible=true;
    return this.isVisible;

  }/*
clicked:boolean=false;
not_clicked:boolean=true;
makeItemEditable(){
  this.clicked=true;
  this.not_clicked=false;
}*/


  items=['Handyvertrag kündigen']
  listlength=this.items.length;
  addItem(newItem: string){
    console.log(this.items)
    if (newItem){
      this.items.push(newItem);
      this.listlength+=1;
      this.isVisible=false;
    }
    console.log(this.items)

  }
  value = '';
  onEnter(value: string) { this.value = value;}
  /*
  changeContent(item: string){
    console.log(this.items)
    if (item){
      this.items.push(item);
      this.listlength+=1;
      this.isVisible=false;
    }
    console.log(this.items)}

  readContent(item: string){
    for(let i=0;i<this.items.length;i++){
      if (this.items[i]==item){
        this.items.pop9
        console.log(this.items[i]," index: ",i)
    return i;*/
      }

    /*
    a=(this.readContent);
    con
  contentChanged(item:string){
    for(let i=0;i<this.items.length;i++){
      this.items[this.a]*/












  /*
changeItem(item: string){

    this.items.pop()
    this.addItem(item)
  }
*/
  //hide input till click at a button



//I've deleted hover event, mouesOut, showTrash



/*
  clickEvent(): void {
    this.clickDeleteEvent.emit(this.itemObject.getID());
  }

  editValue(event: any): void {
    this.itemObject.setValue(event.target.value);
  }
}
  */
