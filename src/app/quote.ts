export class Quote {
  constructor(
    public id: number,
    public quote: string, 
    public author: string, 
    public publisher: string,
    public upvotes: number,
    public downvotes: number,
    public date: Date
    ){}
}
