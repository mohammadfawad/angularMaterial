import { ClipboardModule } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-clip-board',
  templateUrl: './clip-board.component.html',
  styleUrls: ['./clip-board.component.css'],

})
export class ClipBoardComponent implements OnInit {
  value = `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. `+
  `It's not a story the Jedi would tell you. `+
  `It's a Sith legend. Darth Plagueis was a Dark Lord midichlorians to create life… `+
  `He had such a knowledge of the dark side that he could thing he was afraid of was losing his power,`+
  `which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice` ;

  constructor() {}

  ngOnInit(): void {}
}
