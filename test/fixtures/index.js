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
  }
}
