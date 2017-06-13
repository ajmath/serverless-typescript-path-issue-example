import { APIGatewayEvent, Context, ProxyCallback} from "aws-lambda";

export async function hello(event: APIGatewayEvent, context: Context, callback: ProxyCallback) {
  callback(undefined, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  });
}
