# GitHub Avatar Fetcher

## Getting started

1.  Clone this repo using `git clone https://github.com/AlexanderVikenfalk/GitHubAvatarFetcher.git`
2.  Move to the appropriate directory: `cd GitHubAvatarFetcher`.
3.  Run `npm i` in order to install dependencies.
4.  Run `npm run start` to start the application.
5.  The application should start automatically in your browser (otherwise you can access it
    manually by entering the address from your terminal in your web browser).

## Testing
1.  Run `npm run test` to start the tests in your terminal.

## Application structure
The application has 4 pages:
<ol>
<li>Intro page explaining what the app does.</li>
<li>Form for filling out personal data details and GitHub username</li>
<li>Form for filling out email address and consenting to terms and services.</li>
<li>Page displaying GitHub Avatar together with collected user data</li>
</ol> 

## On the subject of tests
I come from a background of writing unit tests with Enzyme and this is what I know the best.
The reality has changed since I started writing tests and nowadays it's seen as preferable
to test user interaction behavior instead of trying every single function of the application.
Since I had about 1 week to finish this task I decided to stick with what I know and write tests
with Enzyme. Unfortunately this turned out to be really difficult, especially since I wanted to use
"react-hook-forms" which doesn't really have documentation nor support for testing with Enzyme.
For this reason I had to change to testing with "react testing library" in some places.

## Other notes
* The application can be navigated with only keyboard if wanted.
