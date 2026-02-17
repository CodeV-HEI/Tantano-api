export class ApiError extends Error {
  private readonly status: number;

  constructor(message: string, status: number = 500) {
    super(message);
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }
}
