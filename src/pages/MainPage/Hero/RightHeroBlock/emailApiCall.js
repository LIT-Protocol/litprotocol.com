const SibApiV3Sdk = require('sib-api-v3-typescript')
require('dotenv').config()

const emailApi = process.env.REACT_APP_SEND_IN_BLUE_API

export const postUser = (body) => {
  console.log('CHECK PROCESS', process.env)
  let apiInstance = new SibApiV3Sdk.ContactsApi()

  let apiKey = apiInstance.authentications['apiKey']

  apiKey.apiKey = emailApi

  let createContact = new SibApiV3Sdk.CreateContact()

  createContact.email = body.email
  createContact.listIds = [2]

  return apiInstance.createContact(createContact)
}
