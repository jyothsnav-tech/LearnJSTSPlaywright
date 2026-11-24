// interface. used in API Testing

interface APIReponse{
    statusCode: number;
    body?: string;
    headers?: object;
    responseTime:number;
}

//What does ? mean in TypeScript?
// Consider:
// body?: string;
// The ? means optional. "The object may contain the body property, or it may not contain it.". If the property is provided, its value must be a string.
// Optional properties can be omitted when creating an object.

const responseDataGET: APIReponse = {
    statusCode:200,
    responseTime: 200
}

const responseDataPOST: APIReponse = {
    statusCode:200,
    body : "{'name':'pramod'}",
    responseTime: 200,
    headers : {}
}

// headers: {}
// This means headers contains an empty object. Because the interface defines headers?: object, this is allowed.

// An optional property can have the value undefined when accessed.
// console.log(responseDataGET.body);
// Output:
// undefined