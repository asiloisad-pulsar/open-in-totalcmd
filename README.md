# open-in-totalcmd

Open files and folders in Total Commander via `open-external` service.

## Features

- **Open directories**: Opens directories in Total Commander instead of system default.
- **Show in folder**: Shows any file in Total Commander with file selected.
- **Configurable path**: Set custom path to Total Commander executable.

## Installation

To install `open-in-totalcmd` search for [open-in-totalcmd](https://web.pulsar-edit.dev/packages/open-in-totalcmd) in the Install pane of the Pulsar settings or run `ppm install open-in-totalcmd`. Alternatively, you can run `ppm install asiloisad/pulsar-open-in-totalcmd` to install a package directly from the GitHub repository.

## Usage

Install both `open-external` and `open-in-totalcmd` packages. The package automatically registers as a handler for the `open-external` service:

- When opening a directory, it opens in Total Commander
- When showing a file in folder, it opens Total Commander with the file selected

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback's welcome!
