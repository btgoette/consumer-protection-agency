// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '8uysgmue', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-10-21', // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
})