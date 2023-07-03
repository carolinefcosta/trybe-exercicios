class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn() {
    console.log(
      `TV ${this._brand}, ${this._size} polegadas, resolução: ${this._resolution} \n\
      conexões disponíveis: ${this._connections}`,
    );
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tvSamsung = new Tv('Samsung', 58, '4K', ['HDMI', 'Wi-Fi']);
tvSamsung.turnOn();

tvSamsung.connectedTo = 'Wi-Fi';
console.log('Connected to: ', tvSamsung.connectedTo);