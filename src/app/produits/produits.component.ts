import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {


  constructor(private http: HttpClient) {


  }

  ngOnInit(): void {
    console.log("Initialisation du composant: Récupérer la liste des produits");
    this.http.get<Array<Produit>>("http://localhost:9999/produits")
      .subscribe(
        {
          next: data => {
            console.log("Succès GET");
            this.produits = data;
          },
          error: err => {
            console.log("Erreur GET");
          }
        }
      )
  }

  produitCourant = new Produit();

  produits: Array<Produit> = [
    { id: 1, code: 'x12', designation: "Panier plastique", prix: 20 },
    { id: 2, code: 'y4', designation: "table en bois", prix: 100 },
    { id: 3, code: 'y10', designation: "salon en cuir", prix: 3000 }
  ];

  supprimerProduit(p: Produit) {
    let reponse: boolean = confirm("Voulez vous supprimer le produit :" + p.designation + " ?");
    if (reponse == true) {
      console.log("Suppression confirmée...");
      let index: number = this.produits.indexOf(p);
      console.log("indice du produit à supprimer: " + index);
      if (index !== -1) {
        this.produits.splice(index, 1);
      }
    }
    else {
      console.log("Suppression annulée...");
    }
  }

  validerFormulaire(form: NgForm) {
    console.log(form.value);
    this.produits.push(form.value);
  }


}
