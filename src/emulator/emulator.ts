import bar from './bar';

export class Emulator {

  public static run(): void {

    bar();
  }
}

declare global {
  interface Window {
    Emulator: Emulator;
  }
}

window.Emulator = Emulator;
