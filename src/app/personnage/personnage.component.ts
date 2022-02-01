import { Component, OnInit } from '@angular/core';
import { Personnage } from '../models/personnage';
import { PersonnageService } from '../service/personnage.service';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss']
})
export class PersonnageComponent implements OnInit {


  personnageList: Personnage[] = [];
  personnage!: Personnage[];

  constructor(private personnageService : PersonnageService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.personnageService.getAll().subscribe({
      next: data => this.personnageList = data,
      error: err => console.error(err),
      complete: () => console.log("récupération de tous les users finie")
    })
  }

  delete(personnage : Personnage) {
    this.personnageService.delete(personnage).subscribe({
      next: () => null,
      error: err => console.error(err),
      complete: () => {
        console.log(`ok suppression utilisateur id ${personnage.id}`);
        this.getAll()
      }
    })
  }

  showActive() {}
  showInactive(){}
  isActive(){}

      }

