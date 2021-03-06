# Contributing

## Getting Started

1. Prerequisites: [`node`, `npm`,](https://nodejs.org/en/download/) and [`git`](https://docs.github.com/en/get-started/quickstart/set-up-git), as well as a web browser, somewhere to edit your code, and a way to run commands in the terminal
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository, [clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) down your copy, and navigate to the project directory (`RESTlr-ts` unless you've renamed it)
1. Set the parent repository as the upstream remote for your project with `git remote add upstream https://github.com/devon-wolf/RESTlr-ts.git`
1. Run `npm i` to install project dependencies

## Running the app

1. Run the app with `npm run start` - this should start the app on `localhost:3000`; if this does not work out of the box, make sure you've installed dependencies with `npm i`; if you have and it still does not work, please open an issue describing what you're seeing

## Branching and Committing

1. Create a feature branch with `git checkout -b` for whatever you're working on, such as `feature/contribution-docs` or `bugfix/page-layout-issues`
1. Commit your changes as you go with meaningful commit messages
1. Push your changes up to the feature branch on your fork as you go with `git push origin [name of branch]`, for example, `git push origin feature/contribution-docs`

## Pull Requests

1. When you're ready to make a request for your changes to be merged into the parent repository, [open a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request):
   - first, [make sure your fork is still up-to-date](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-from-the-command-line) with the latest version of the upstream repository with `git fetch upstream` followed by `git merge upstream/main`
   - address any conflicts that may arise with upstream updates (currently outside the scope of this guide, but you can read some docs [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)).
   - push all your latest changes, including any updates merged from upstream, up to your fork's feature branch as described above
   - open a pull request against the parent repository, as described in the link at the start of this section. Choose the parent repository's main branch as the 'base' and your fork's feature branch as the 'head'. Describe the changes you've made and review the changed files to make sure it's what you intended.
