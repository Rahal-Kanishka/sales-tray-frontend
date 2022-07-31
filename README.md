# SalesFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## CICD Pipeline

CICD Pipeline configured to ease the deployment of the change. I  used [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html) and [AWS CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html) with GitHub Webhooks. Therefor when ever I push changes to the master branch the CodeBuild is triggered and automatic build process starts.

## Deployment

Using a AWS S3 bucket to host as a static website which is configured to deploy the build files through CICD pipeline.
