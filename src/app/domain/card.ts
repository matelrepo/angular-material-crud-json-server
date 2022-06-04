export class Card{
  id?: number
  owner: string;
  frontPayload: string;
  backPayload: string;
  score: number;
  createdOn: Date;
  updatedOn: Date;
  dueOne: Date;


  constructor(owner: string, frontPayload: string, backPayload: string, score: number, createdOn: Date, updatedOn: Date, dueOne: Date) {
    this.owner = owner;
    this.frontPayload = frontPayload;
    this.backPayload = backPayload;
    this.score = score;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
    this.dueOne = dueOne;
  }
}
