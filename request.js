export class Request {
  constructor(requestString) {
    const [firstHalf, body] = requestString.split("\r\n\r\n");
    const [firstLine, ...listHeaders] = firstHalf.split("\r\n");
    const [method, uri, version] = firstLine.split(' ');
    this.method = method;
    this.uri = uri;
    this.version = version;


    let headers = {}
    for (const head of listHeaders){
      let nameNValue = head.split(': ')
      headers[nameNValue[0]] = nameNValue[1]
    }

  }
}
