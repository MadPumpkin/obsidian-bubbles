import {
  App,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  Vault,
  Workspace,
  WorkspaceLeaf
} from 'obsidian';
import BubblesView from './bubbles-view';
import { BubblesSettings } from './settings';
import Bubbles


export default class Bubbles extends Plugin {
  vault: Vault;
  workspace: Workspace;
  bubblesView: BubblesView;
  settings: BubblesSettings;

  async onload() {
    console.log("Loading Bubbles graph plugin");
    this.vault = this.app.vault;
    this.workspace = this.app.workspace;
    this.settings = Object.assign({
      // Put all the settings here with : 'default values'
    }, await this.loadData());

    this.registerView('Bubbles View',
      (leaf: WorkspaceLeaf) =>
      (this.bubblesView = new BubblesView(this.settings, leaf, {
        path: this.activeLeafPath(this.workspace),
        basename: this.activeLeafName(this.workspace)
      })));


  }
}


export default class MindMap extends Plugin {
  vault: Vault;
  workspace: Workspace;
  mindmapView: MindmapView;
  settings: MindMapSettings;

  async onload() {
    console.log("Loading Mind Map plugin");
    this.vault = this.app.vault;
    this.workspace = this.app.workspace;
    this.settings = Object.assign({
      splitDirection: 'Horizontal',
      nodeMinHeight: 16,
      lineHeight: '1em',
      spacingVertical: 5,
      spacingHorizontal: 80,
      paddingX: 8
    }, await this.loadData());

    this.registerView(
      MM_VIEW_TYPE,
      (leaf: WorkspaceLeaf) =>
        (this.mindmapView = new MindmapView(this.settings, leaf, { path: this.activeLeafPath(this.workspace), basename: this.activeLeafName(this.workspace) }))
    );

    this.addCommand({
      id: 'app:markmap-preview',
      name: 'Preview the current note as a Mind Map',
      callback: () => this.markMapPreview(),
      hotkeys: []
    });

    this.addSettingTab(new MindMapSettingsTab(this.app, this));

  }

  markMapPreview() {
    const fileInfo = { path: this.activeLeafPath(this.workspace), basename: this.activeLeafName(this.workspace) };
    this.initPreview(fileInfo);
  }

  async initPreview(fileInfo: any) {
    if (this.app.workspace.getLeavesOfType(MM_VIEW_TYPE).length > 0) {
      return;
    }
    const preview = this.app.workspace.splitActiveLeaf(this.settings.splitDirection);
    const mmPreview = new MindmapView(this.settings, preview, fileInfo);
    preview.open(mmPreview);
  }

  onunload() {
    console.log("Unloading Mind Map plugin");
  }

  activeLeafPath(workspace: Workspace) {
    return workspace.activeLeaf?.view.getState().file;
  }

  activeLeafName(workspace: Workspace) {
    return workspace.activeLeaf?.getDisplayText();
  }



}