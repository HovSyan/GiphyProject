export class GifObject {
  constructor(public type: string,
              public id: string,
              public slug: string,
              public url: string,
              public bitlyUrl: string,
              public embedUrl: string,
              public username: string,
              public source: string,
              public rating: string,
              public sourceTLD: string,
              public sourcePostURL: string,
              public updateDatetime: string,
              public createDatetime: string,
              public importDatetime: string,
              public title: string) { }

  get bitly_url(): string {
    return this.bitlyUrl;
  }

  get embed_url(): string {
    return this.embedUrl;
  }

  get source_tld(): string {
    return this.sourceTLD;
  }

  get source_post_url(): string {
    return this.sourcePostURL;
  }

  get update_datetime(): string {
    return this.updateDatetime;
  }

  get create_datetime(): string {
    return this.createDatetime;
  }

  get import_datetime(): string {
    return this.importDatetime;
  }
}
