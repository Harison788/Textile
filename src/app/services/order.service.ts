import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // URL de base de votre API REST Java (Spring Boot)
  // Assurez-vous que le port correspond à celui de votre backend (souvent 8080)
  private apiUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) { }

  // 1. Récupérer toutes les commandes
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  // 2. Récupérer une commande spécifique par son ID (pour le détail / workflow)
  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  // 3. Créer ou enregistrer une nouvelle commande
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  // 4. Mettre à jour le statut d'une commande (ex: passage à l'étape suivante du workflow)
  updateOrderStatus(id: number, statut: string): Observable<Order> {
    return this.http.patch<Order>(`${this.apiUrl}/${id}/statut`, { statut });
  }
}