import {
  App,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting
} from 'obsidian';



export default class Bubbles extends Plugin {
  settings: BubblesSettings;

  async onload() {
    console.log('loading plugin');

    await this.loadSettings();

    this.addRibbonIcon('dot-network', 'Bubbles Graph', () => {
      new Notice('ASDLFKHSJD FKLGJDHFG KJHAGKJH DGKJHFK LJHGLKSJGH DKLFJH LFHL !');
    });

    this.addStatusBarItem().setText('Status Bar Text');

    this.addCommand({
      id: 'open-sample-modal',
      name: 'Open Sample Modal',
      // callback: () => {
      // 	console.log('Simple Callback');
      // },
      checkCallback: (checking: boolean) => {
        let leaf = this.app.workspace.activeLeaf;
        if (leaf) {
          if (!checking) {
            new SampleModal(this.app).open();
          }
          return true;
        }
        return false;
      }
    });

    this.addSettingTab(new BubblesSettingTab(this.app, this));

    this.registerCodeMirror((cm: CodeMirror.Editor) => {
      console.log('codemirror', cm);
    });

    this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
      console.log('click', evt);
    });

    this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
  }

  onunload() {
    console.log('unloading plugin');
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class SampleModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  onOpen() {
    let { contentEl } = this;
    contentEl.setText('Woah!');
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}

class BubblesSettingTab extends PluginSettingTab {
  plugin: Bubbles;

  constructor(app: App, plugin: Bubbles) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;
    containerEl.empty();
    containerEl.createEl('h2', { text: 'Settings for Bubbles domain boundary plugin' });
    new Setting(containerEl)
      .setName('Enable Bubbles')
      .setDesc('Toggle showing domain boundaries in graph view')
      .addToggle(input => input
        .setValue(true)
        .onChange(async (value) => {
          this.plugin.settings.bubbles.bubbles = value;
          await this.plugin.saveSettings();
        }));
  }
}
