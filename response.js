export class Response {
  constructor(
    status,
    reason,
    body,
    contentType
  ) {
    this.status = status;
    this.reason = reason;
    this.body = body;
    this.contentType = contentType || "text/html";
  }

  toString() {
    const startLine = `HTTP/1.1 ${this.status} ${this.reason}`;
    const headers =
      `Content-Type: ${this.contentType}
Server: Joseph's server
Content-Length: ${this.body.length}
Connection: keep-alive`;
    return `${startLine}\r\n${headers}\r\n\r\n${this.body}`;
  }
}
