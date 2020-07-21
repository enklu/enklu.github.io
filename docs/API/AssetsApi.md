---
id: AssetsApi
title: Assets Web API
---

*[Note: Access to this API requires a Studio Subscription. [Contact us](/contact) for details.]*

While the standard workflow for importing assets into Enklu Cloud is to do so through using the [Web Editor](https://cloud.enklu.com), it is also possible to use the Asset API.


## Importing and Updating Assets

To import or update an asset, first ensure you have a valide JWT token by authenticating against the authoring API:


```curl
curl -X POST 'https://cloud.enklu.com:10001/v1/email/signin' \
     -H 'Content-Type: application/json' \
     -d '{ "email": "roland@druida.com", "password": "12345"}'
```

If succesful, the response will contain your token:

```json
{
  "success": true,
  "error": "None",
  "body": {
      "user": {
            "email": "roland@druidia.com",
            "displayName": "roland",
            "id": "00000000-0000-0000-0000-000000000000"
          },
      "token": "..."
    }
}
```

Then, you can upload new assets or update new assets:

```curl
curl -X POST 'https://assets.enklu.com:9091/v1/asset'
     --header 'Authorization: Bearer '${jwt}''
     --header 'app: '${appId}''
     --header 'Accept: application/json'
     --form 'qqfilename="'${fileName}'"'
     --form 'qquuid="'${guid}'"'
     --form 'qqfile=@'${pathToFile}''
```

### Request Parameters
- `jwt` The authentication token received in the login response.
- `appId` A valid experience id. This can be copied from the "My Experiences" screen in the [Enklu Cloud Web Editor](http://cloud.enklu.com)
- `fileName` The display name of the file to be imported or updated.
- `guid` A unique id for the asset. If the provided id represents an existing asset associated with your account, the asset will up be updated with a new version.
- `pathToFile` The path to the file on the local file sytem.

A successful response will contain the asset id. This Id can be used in future requests to update the same asset.

```json
{
  "success": true,
  "error": "None",
  "body": {
    "id": "11111111-1111-1111-1111-111111111111"
  }
}
```

## Resources

For more on importing assets, including supported formats, see our guide [Importing Your Own Assets](/docs/Assets/ImportYourOwnAssets). For information on preparing Unity prefabs for import, see our guide to [Exporting Unity Prefabs](/docs/Assets/ExportingUnityPrefabs)
