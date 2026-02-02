export interface Transfer {
  id: number;
  title: string;
  vehicleImage: string;
  maxPersons: string;
  mediumLuggage: string;
  smallBaggage: string;
  largeLuggage: string;
  price: number;
  /** For sidebar compact cards: estimated time e.g. "80 min." */
  estimatedTime?: string;
  /** For sidebar compact cards: min passengers e.g. "1 pasager" */
  minPassengers?: string;
}
