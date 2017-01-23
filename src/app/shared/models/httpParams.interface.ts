export interface HttpParams {
	auth?: boolean, // on true, then the token will be on the header. Optional (not needed for all post and get requests)
	errorActionType: string, // the failure action, should look something like `ACTION_TYPES.ACTION_TYPE.FAILURE`
	payload?: {}, // what you're sending on the http request, should be data from a form. Optional: not needed for get and delete requests
	responseObject: string, // this should be a property on the success resposonse body object
	successActionType: string, // If the http responce is a success, send this action type to the reducer, should be something like `ACTION_TYPES.ACTION_TYPE.SUCCESS`
	uri: string, // the api endpoint
}