import {CarVO} from './car-vo';

export class ParkingVO {

  id: number;
  enterTime: string;
  exitTime: string;
  car: CarVO;
  paidCost: number;

}
