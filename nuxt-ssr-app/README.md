# ssr-app

> My amazing Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

# Following https://www.youtube.com/watch?v=3OP-q55hOUI for tutorial
After creating the Dockerfile, run `sudo docker build ./` from the project root dir to build the container

`sudo docker run -d --name ssr-app -p 8080:8080 b75c49795a86` to test
`docker stop ssr-app && docker rm ssr-app`

Create a project in google cloud and enable cloud run

Next tag the image for deploy!
`sudo docker tag b75c49795a86 gcr.io/gcp-demo-proj-237513/nuxt-ssr-app`
`sudo docker push gcr.io/gcp-demo-proj-237513/nuxt-ssr-app`

Follow https://cloud.google.com/sdk/docs/ to set up the gcloud sdk

Next we will automate with cloud build.... https://www.youtube.com/watch?v=Zd014DjonqE

Container image is now in your gcp registry
https://console.cloud.google.com/gcr/images/gcp-demo-proj-237513?project=gcp-demo-proj-237513

In Cloud Run, create new service, this will give a url to get to
We can then map to a domain, or connect to firebase!!

Run `firebase init hosting`, n for SPA question
remove the index.html file created
in firebase.json, add rewrites option to tell fb hosting to rewrite traffic to the microservice we created
`source: **` specifies all traffic in
`serviceId` is the id of the service we created in cloud run

then run `firebase deploy --only hosting to deploy

