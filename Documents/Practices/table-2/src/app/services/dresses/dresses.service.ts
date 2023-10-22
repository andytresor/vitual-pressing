import { StorageserviceService } from './../storage/storageservice.service';
import { DressesInterface, FormInterface, ItermsInterface } from './../../Interfaces/form-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DressesService {

  constructor(
    private storageserviceService: StorageserviceService,
  ) { }

  calcu(val: number, price: number): number{
    let total = 0
if(val != 0){
  total= val * price
return total
}
return total
  }

  dresses: DressesInterface[] = [
    {img: '/assets/SportsCo.png', pressing_name: 'Bling', location: 'Ancien Route Bonaberi', open: 'Open Mondays to Fridays' ,
    iterms:[
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
    ] },
    {img: '/assets/SportsCo.png', pressing_name: 'Nina', location: 'Ancien Route Bonaberi', open: 'Open Mondays to Fridays',
    iterms:[
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
      ] },
    {img: '/assets/SportsCo.png', pressing_name: 'Bless', location: 'Ancien Route Bonaberi', open: 'Open Mondays to Fridays',
    iterms:[
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
      ] },
    {img: '/assets/SportsCo.png', pressing_name: 'Jane', location: 'Ancien Route Bonaberi', open: 'Open Mondays to Fridays',
    iterms:[
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
      ] },
    {img: '/assets/SportsCo.png', pressing_name: 'Laure', location: 'Ancien Route Bonaberi', open: 'Open Mondays to Fridays',
    iterms:[
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
      ] },
    {img: '/assets/SportsCo.png', pressing_name: 'Idriss', location: 'Ancien Route Bonaberi', open: 'Open Mondays to Fridays',
    iterms:[
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
      ] },
      {img: '/assets/SportsCo.png', pressing_name: 'Bling', location: 'Ancien Route Bonaberi', open: 'Open Mondays to Fridays' ,
    iterms:[
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
    ] },
    {img: '/assets/SportsCo.png', pressing_name: 'Bling', location: 'Ancien Route Bonaberi', open: 'Open Mondays to Fridays' ,
    iterms:[
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
    ] },
  ];

  private getCurrentDate(): string {

    const date = new Date();
    const created_at = date.getUTCFullYear() + '-' +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
      ('00' + date.getUTCDate()).slice(-2) + ' ' +
      ('00' + date.getUTCHours()).slice(-2) + ':' +
      ('00' + date.getUTCMinutes()).slice(-2) + ':' +
      ('00' + date.getUTCSeconds()).slice(-2);

    return created_at;
  }

saveClient(client: any) {
  let clients: Array<DressesInterface> = this.storageserviceService.select('clients') ?? [];
  client['id'] = Date.now();
  clients.push(client);

  this.storageserviceService.insert('clients', clients);

  return {
    error: false,
    message: 'Client data saved successfuly !!!',
    data: client
  }
}
}
