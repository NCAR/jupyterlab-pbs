![https://circleci.com/gh/NCAR/jupyterlab-pbs/tree/master](https://img.shields.io/circleci/project/github/NCAR/jupyterlab-pbs/master.svg?style=for-the-badge&logo=circleci)

# jupyterlab-pbs

A JupyterLab extension to interface with PBS scheduler

## Prerequisites

- JupyterLab >= 1.0

## TODO: Installation

This extension has a server-side (Python) and a client-side (Typescript) component, and we must install both in order for it to work.

To install the server-side component, run the following in your terminal:

```bash
pip install jupyterlab-pbs
```

To install the client-side component, run:

```bash
jupyter labextension install jupyterlab-pbs
```

## Development

To install the server-side part, run the following in your terminal from the repository directory:

```bash
pip install -e .
```

In order to install the client-side component (requires node version 8 or later), run the following in the repository directory:

```bash
jlpm install
jlpm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
jlpm run build
jupyter lab build
```

## Directory structure

- `package.json` contains information about the extension such as dependencies
- `tsconfig.json` contains information for the typescript compilation
- `src/index.ts` _this contains the actual code of our extension_
- `style/index.css` contains style elements that we can use

## TODO: Publishing
