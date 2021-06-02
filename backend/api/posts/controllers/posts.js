'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
  
    let entity
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);

      if (!data || !data.description || !data.title) {
           ctx.throw(400, 'Please add some content')
      }

      if(!files || !files.image) {
          ctx.throw(400, 'Please add image')
      }
      entity = await strapi.services.posts.create({...data, likes: 0}, { files });
    } else {

        ctx.throw(400, 'Please use multipart/form-data')
    //   entity = await strapi.services.posts.create({...ctx.request.body, likes: 0});
    }
    return sanitizeEntity(entity, { model: strapi.models.posts });
  },
};