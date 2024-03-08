class HttpAdapter {
  constructor(name) {
    this.name = name;
  } 

  get() {
    throw new Error('Method not implemented!');
  }

  post() {
    throw new Error('Method not implemented!');
  }

  put() {
    throw new Error('Method not implemented!');
  }

  delete() {
    throw new Error('Method not implemented!');
  }
}

class expressAdapter extends HttpAdapter {
  constructor(name) {
    super(name);
  }

  get() {
    console.log('[ GET ]');
  }

  post() {
    console.log('[ POST ]');
  }

  put() {
    console.log('[ PUT ]');
  }

  delete() {
    console.log('[ DELETE ]');
  }
}

class HttpAdapterFactory {
  makeAdapter() {
    throw new Error('Method not implemented!');
  }
}

class expressFactory extends HttpAdapterFactory {
  makeAdapter() {
    return new expressAdapter("express");
  }
}

const factory = new expressFactory;
const express = factory.makeAdapter();
express.get();
express.post();
express.put();
express.delete();