# Koku microfrontend (MFE) with Module Federation - On Prem

[![Apache 2.0][license-badge]](https://github.com/project-koku/koku-ui-mfe/blob/main/LICENSE)
[![CI Status][build-badge]](https://github.com/project-koku/koku-ui-mfe/actions/workflows/ci.yml?query=branch%3Amain)
[![codecov][codecov-badge]](https://codecov.io/gh/project-koku/koku-ui-mfe)

React.js app for Resource Optimization which is part of cost management app ([koku-ui-readme]).

User interface is based on [Patternfly].

Submit issues in [Jira].

## Requirements

* [NodeJS v20.15+][nodejs]
* [npm v10.8+][npm]

## Getting Started

1. Install requirements listed above.
2. Clone the repository, and open a terminal in the base of this project.
3. Run the command `npm install` to install all the dependencies.

## Building
```
npm build
```

## Testing
```
npm test
```

## Running Koku MFE locally

Koku UI MFE communicates to `http://localhost:8000` as a default backend ur.

You can define `ROS_BACKEND_URL` env var to point to another backend

1. Start development server
```
npm start
```
2. Open the following URL
```
https://localhost:1337/staging/cost-management
```



[build-badge]: https://github.com/project-koku/koku-ui-mfe/actions/workflows/ci.yml/badge.svg?branch=main
[codecov-badge]: https://codecov.io/gh/project-koku/koku-ui-mfe/graph/badge.svg?token=1hjFIy1cRe
[Jira]: https://issues.redhat.com/projects/COST/
[koku-ui-readme]: https://github.com/project-koku/koku-ui#readme
[license-badge]: https://img.shields.io/github/license/project-koku/koku-ui-mfe.svg?longCache=true
[nodejs]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[patch-etc-hosts]: https://github.com/RedHatInsights/insights-proxy/blob/master/scripts/patch-etc-hosts.sh
[Patternfly]: https://www.patternfly.org/
[release-doc]: https://github.com/project-koku/koku-ui-mfe/blob/main/RELEASE.md

