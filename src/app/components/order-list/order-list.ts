import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Indispensable pour *ngFor, *ngIf et les pipes (date)
import { FormsModule } from '@angular/forms';     // <-- Indispensable pour [(ngModel)] (les filtres)

export interface Order {
  id: number;
  numero: string;
  clientNom: string;
  dateCommande: string;
  datePrevueLivraison: string;
  priorite: 'NORMALE' | 'URGENTE' | 'TRES_URGENTE';
  statut: 'CREEE' | 'EN_COUPE' | 'EN_COUTURE' | 'EN_FINITION' | 'CONTROLE_QUALITE' | 'LIVREE';
}

@Component({
  selector: 'app-order-list',
  standalone: true,                         
  imports: [CommonModule, FormsModule],     
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [
    {
      id: 1,
      numero: 'CMD-2026-001',
      clientNom: 'Textile Pro',
      dateCommande: '2026-10-25',
      datePrevueLivraison: '2026-11-05',
      priorite: 'URGENTE',
      statut: 'EN_COUPE'
    },
    {
      id: 2,
      numero: 'CMD-2026-002',
      clientNom: 'Mode & Elegance',
      dateCommande: '2026-10-28',
      datePrevueLivraison: '2026-11-12',
      priorite: 'NORMALE',
      statut: 'CREEE'
    }
  ];

  filterPriorite: string = '';

  constructor() { }

  ngOnInit(): void {}

  get filteredOrders(): Order[] {
    if (!this.filterPriorite) {
      return this.orders;
    }
    return this.orders.filter(o => o.priorite === this.filterPriorite);
  }
}