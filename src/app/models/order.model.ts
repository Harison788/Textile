export interface Client {
  id?: number;
  nom: string;
  email?: string;
  telephone?: string;
}

export type StatutCommande = 
  | 'CREEE' 
  | 'EN_COUPE' 
  | 'EN_COUTURE' 
  | 'EN_FINITION' 
  | 'CONTROLE_QUALITE' 
  | 'LIVREE';

export type PrioriteCommande = 'NORMALE' | 'URGENTE' | 'TRES_URGENTE';

export interface Order {
  id?: number;
  numero: string;
  client: Client;
  dateCommande: string;
  datePrevueLivraison: string;
  priorite: PrioriteCommande;
  statut: StatutCommande;
  quantite?: number;
  descriptionArticle?: string;
}