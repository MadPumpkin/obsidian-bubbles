import { App, EventRef, ItemView, Menu, Vault, Workspace, WorkspaceLeaf } from 'obsidian'
import BubblesSketch from './graph/bubbles-p5-sketch'
import p5 from 'p5/lib/p5.min.js';

const sketchInstance = new p5(BubblesSketch);
export default class BubblesView extends ItemView {
  app: App;
  icon: string;
  navigation: boolean;
  leaf: WorkspaceLeaf;
  containerEl: HTMLElement;



  constructor(leaf: WorkspaceLeaf);

  protected onOpen(): Promise<void>;

  protected onClose(): Promise<void>;

  abstract getViewType(): string;

  getState(): any;

  setState(state: any, result: ViewStateResult): Promise<void>;

  getEphemeralState(): any;

  setEphemeralState(state: any): void;

  getIcon(): string;

  onResize(): void;

  abstract getDisplayText(): string;

  onHeaderMenu(menu: Menu): void;



  constructor(leaf: WorkspaceLeaf);

  onMoreOptionsMenu(menu: Menu): void;

  addAction(icon: string, title: string, callback: (evt: MouseEvent) => any, size?: number): HTMLElement;

  onHeaderMenu(menu: Menu): void;








  getIcon() {
    return 'dot-network';
  }

  onMoreoptionsMenu(menu: Menu) {
    menu
      .addItem((item) =>
        item
          .setIcon('pin')
          .setTitle('Pin')
          .onClick(() => this.pinCurrentLeaf())
      )
      .addSeparator()
      .addItem((item) =>
        item
          .setIcon('image-file')
          .setTitle('Copy screenshot')
          .onClick(() => copyImageToClipboard(this.svg))
      );
    menu.showAtPosition({ x: 0, y: 0 });
  }


}