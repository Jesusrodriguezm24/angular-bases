import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  //public onDeleteCharacterById<Number> = new emit

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    },
  ];

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  
  onDeleteCharacter( id?:string ):void{
   
      //this.characterList.splice(index,1);
      if (!id) return;
      this.onDelete.emit(id);
  }


}
