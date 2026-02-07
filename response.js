

export class Response {
  constructor(
    status,
    reason,
    body,
    contentType,
    location
  ) {
    this.status = status;
    this.reason = reason;
    this.body = body;
    this.contentType = contentType || "text/html";
    this.location = location
  }

  toString() {
    const date = new Date();
    const startLine = `HTTP/1.1 ${this.status} ${this.reason}`;
    const headers =
      `Content-Type: ${this.contentType}
Server: Samuel's server
Content-Length: ${this.body.length}
Connection: close
Cache-Control: max-age=1
Location: ${this.location}
Date: ${date.toString()}`;
    return `${startLine}\r\n${headers}\r\n\r\n${this.body}`;
  }
}
