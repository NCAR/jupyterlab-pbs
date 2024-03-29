# jupyterlab-pbs

![Github Actions Status](https://github.com/NCAR/jupyterlab-pbs/workflows/Build/badge.svg)

--- 
⚠️ Warning

This project is no longer being actively maintained and there are no plans to update it in the future. As such, we cannot guarantee that the code and resources contained in this repository are up-to-date or secure.

We strongly advise you to exercise caution if you decide to continue using or building upon the work that has been done here. You should carefully review and test any code that you plan to use, and you should be aware that there may be security vulnerabilities or other issues that could impact your project.
---

A JupyterLab extension to interface with PBS scheduler

This extension is composed of a Python package named `jupyterlab_pbs`
for the server extension and a NPM package named `jupyterlab-pbs`
for the frontend extension.

## Requirements

- JupyterLab >= 2.0

## Install

Note: You will need NodeJS to install the extension.

```bash
pip install jupyterlab_pbs
jupyter lab build
```

## Troubleshoot

If you are seeing the frontend extension but it is not working, check
that the server extension is enabled:

```bash
jupyter serverextension list
```

If the server extension is installed and enabled but you are not seeing
the frontend, check the frontend is installed:

```bash
jupyter labextension list
```

If it is installed, try:

```bash
jupyter lab clean
jupyter lab build
```

## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to jupyterlab-pbs directory

# Install server extension
pip install -e .
# Register server extension
jupyter serverextension enable --py jupyterlab_pbs --sys-prefix

# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension install .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

Now every change will be built locally and bundled into JupyterLab. Be sure to refresh your browser page after saving file changes to reload the extension (note: you'll need to wait for webpack to finish, which can take 10s+ at times).

### Uninstall

```bash
pip uninstall jupyterlab_pbs
jupyter labextension uninstall jupyterlab-pbs
```
