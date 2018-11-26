'use strict'

export default {
  getImage () {
    return {
      id: 'a2322728-25ba-4ec8-b7a5-78dd7fd5e164',
      publicId: '78dd7fd5e164',
      userId: 'clonInstagram',
      liked: false,
      likes: 0,
      src: 'http://cloninstagram.test/78dd7fd5e164.jpg',
      description: '#awesome',
      tags: [ 'awesome' ],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: 'a2322728-25ba-4ec8-b7a5-78dd7fd5e164',
      name: 'Steven Monterrrozo',
      username: 'Mortem45',
      email: 'f@mortem.test',
      password: 'mortem',
      createdAt: new Date().toString()
    }
  }
}
