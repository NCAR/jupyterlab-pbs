import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import { requestAPI } from './jupyterlab-pbs';

/**
 * Initialization data for the jupyterlab-pbs extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-pbs',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-pbs is activated!');

    requestAPI<any>('get_example')
      .then((data) => {
        console.log(data);
      })
      .catch((reason) => {
        console.error(
          `The jupyterlab_pbs server extension appears to be missing.\n${reason}`
        );
      });
  },
};

export default extension;
