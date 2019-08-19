import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

import { ICommandPalette, MainAreaWidget } from "@jupyterlab/apputils";

import { Widget } from "@phosphor/widgets";

import "../style/index.css";

/**
 * Initialization data for the jupyterlab-pbs extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: "jupyterlab-pbs",
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log("JupyterLab extension jupyterlab-pbs is activated!");

    // create a blank content widget inside of a MainAreaWidget
    const content = new Widget();
    const widget = new MainAreaWidget({ content });
    widget.id = "jupyterlab-pbs";
    widget.title.label = "PBS Pro Workload Manager";
    widget.title.closable = true;

    // Add an application command
    const command: string = "pbs:open";
    app.commands.addCommand(command, {
      label: "PBS Queue",
      execute: () => {
        if (!widget.isAttached) {
          // Attach the widget to the main work area if it is not there
          app.shell.add(widget, "main");
        }

        // Activate the widget
        app.shell.activateById(widget.id);
      }
    });

    // Add the command to the palette.
    palette.addItem({ command, category: "HPC Tools" });
  }
};

export default extension;
