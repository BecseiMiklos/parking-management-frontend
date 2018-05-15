export class CarVO {

  id: number;
  licensePlateNumber: string;
  brand: string;
  color: string;
  hasParkingPass: boolean;

  constructor() {
    this.hasParkingPass = false;
  }

}
