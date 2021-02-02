import {
  App,
  PluginSettingTab,
  Setting,
  SplitDirection
} from 'obsidian';
import Bubbles from './main';

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
