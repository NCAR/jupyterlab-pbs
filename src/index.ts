import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-pbs extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-pbs',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab-pbs is activated!');
  }
};

export default extension;
