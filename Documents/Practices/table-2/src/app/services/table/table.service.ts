import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  table: any = [
    {vetements: 'Serviette Grand', prix: 1000, nombre: '', total: ''},
    {vetements: 'Chemise', prix: 600, nombre: '', total: ''},
    {vetements: 'Chemissette', prix: 600, nombre: '', total: ''},
    {vetements: 'Pantalon', prix: 700, nombre: '', total: ''},
    {vetements: 'Culotte', prix: 500, nombre: '', total: ''},
    {vetements: 'Veste', prix: 1500, nombre: '', total: ''},
    {vetements: 'Costume', prix: 2000, nombre: '', total: ''},
    {vetements: 'Ensemble saillons (2pcs)', prix: 1500, nombre: '', total: ''},
    {vetements: 'Ensemble Saillons (3pcs)', prix: 2500, nombre: '', total: ''},
    {vetements: 'Ensembles dame', prix: 1500, nombre: '', total: ''},
    {vetements: 'Robe longue', prix: 2000, nombre: '', total: ''},
    {vetements: 'Robe simple', prix: 1500, nombre: '', total: ''},
    {vetements: 'Robe mini', prix: 1000, nombre: '', total: ''},
    {vetements: 'Paire de drap + 2 taies', prix: 2000, nombre: '', total: ''},
    {vetements: '1 drap + 2 taies', prix: 1500, nombre: '', total: ''},
    {vetements: '1 drap simple', prix: 1000, nombre: '', total: ''},
    {vetements: 'Robe gang', prix: 1250, nombre: '', total: ''},
    {vetements: 'Robe soiree', prix: 3000, nombre: '', total: ''},
    {vetements: 'Robe marriage', prix: 10000, nombre: '', total: ''},
    {vetements: 'Couvre lit', prix: 3000, nombre: '', total: ''},
    {vetements: 'Couverture lit', prix: 4000, nombre: '', total: ''},
    {vetements: 'Chaussure', prix: 1500, nombre: '', total: ''},
  ]
}
