# FOSS Tool

## Installation
Run ```npm install @w11k/foss-transformer``` in your npm project or run via ```./node_modules./bin/foss-transform```

## Usage
Run ```foss-transform --help``` to see available commands and options.
For simple foss report use ```foss-transform create```

## Development
* Run ``npm install``
* Run ``npm start`` -> will create a output file in ``build/reports/foss.csv``

## Changelog

### 0.0.5
* Adds missing " in exported csv file after package version number

### 0.0.4
* Updated bpm repository release via gitlab

### 0.0.3
* Updates Project Setup
* Adds Version Number of Libs to Output CSV
* Adds automatic npm publish per gitlab-ci for each release tag

### 0.0.2 
Fix error when output dir or file does not exist

### 0.0.1
initial release
